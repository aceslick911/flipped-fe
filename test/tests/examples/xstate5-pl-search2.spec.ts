import { test, expect, Page } from "@playwright/test";
import { assign, createMachine, EventObject, setup, Snapshot } from "xstate";
import { createTestModel, TestModel, TestParam, TestPath } from "@xstate/graph";

let page: Page;

async function testModel<
  TSnapshot extends Snapshot<unknown>,
  TEvent extends EventObject,
  TInput
>(
  model: TestModel<TSnapshot, TEvent, TInput>,
  params: TestParam<TSnapshot, TEvent>
) {
  for (const path of model.getShortestPaths()) {
    await path.test(params);
  }
}

async function testPaths<
  TSnapshot extends Snapshot<unknown>,
  TEvent extends EventObject
>(paths: TestPath<TSnapshot, TEvent>[], params: TestParam<TSnapshot, TEvent>) {
  for (const path of paths) {
    await path.test(params);
  }
}

export const testUtils = {
  testPaths,
  testModel,
};

test.describe("Playwright document search", () => {
  test("should allow for representing many cases", async () => {
    type Events =
      | { type: "CLICK_BAD" }
      | { type: "CLICK_GOOD" }
      | { type: "CLOSE" }
      | { type: "ESC" }
      | { type: "SUBMIT"; value: string };
    const feedbackMachine = createMachine({
      id: "feedback",
      types: {
        events: {} as Events,
      },
      initial: "question",
      states: {
        question: {
          on: {
            CLICK_GOOD: "thanks",
            CLICK_BAD: "form",
            CLOSE: "closed",
            ESC: "closed",
          },
        },
        form: {
          on: {
            SUBMIT: [
              {
                target: "thanks",
                guard: ({ event }) => !!event.value.length,
              },
              {
                target: ".invalid",
              },
            ],
            CLOSE: "closed",
            ESC: "closed",
          },
          initial: "valid",
          states: {
            valid: {},
            invalid: {},
          },
        },
        thanks: {
          on: {
            CLOSE: "closed",
            ESC: "closed",
          },
        },
        closed: {
          type: "final",
        },
      },
    });

    const testModel = createTestModel(feedbackMachine, {
      events: [
        { type: "SUBMIT", value: "something" },
        { type: "SUBMIT", value: "" },
      ],
    });

    await testUtils.testModel(testModel, {});
  });

  test("should not throw an error for unimplemented events", () => {
    const testMachine = createMachine({
      initial: "idle",
      states: {
        idle: {
          on: { ACTIVATE: "active" },
        },
        active: {},
      },
    });

    const testModel = createTestModel(testMachine);

    expect(async () => {
      await testUtils.testModel(testModel, {});
    }).not.toThrow();
  });

  test("should allow for dynamic generation of cases based on state", async () => {
    const values = [1, 2, 3];
    const testMachine = createMachine({
      types: {} as {
        context: { values: number[] };
        events: { type: "EVENT"; value: number };
      },
      initial: "a",
      context: {
        values, // to be read by generator
      },
      states: {
        a: {
          on: {
            EVENT: [
              { guard: ({ event }) => event.value === 1, target: "b" },
              { guard: ({ event }) => event.value === 2, target: "c" },
              { guard: ({ event }) => event.value === 3, target: "d" },
            ],
          },
        },
        b: {},
        c: {},
        d: {},
      },
    });

    const testedEvents: any[] = [];

    const testModel = createTestModel(testMachine, {
      events: (state) =>
        state.context.values.map(
          (value) => ({ type: "EVENT", value } as const)
        ),
    });

    const paths = testModel.getShortestPaths();

    expect(paths.length).toBe(3);

    await testUtils.testPaths(paths, {
      events: {
        EVENT: ({ event }) => {
          testedEvents.push(event);
        },
      },
    });

    expect(testedEvents).toMatchSnapshot(`
      [
        {
          "type": "EVENT",
          "value": 1,
        },
        {
          "type": "EVENT",
          "value": 2,
        },
        {
          "type": "EVENT",
          "value": 3,
        },
      ]
    `);
  });
});

test.describe("state limiting", () => {
  test("should limit states with filter option", () => {
    const machine = createMachine({
      types: {} as { context: { count: number } },
      initial: "counting",
      context: { count: 0 },
      states: {
        counting: {
          on: {
            INC: {
              actions: assign({
                count: ({ context }) => context.count + 1,
              }),
            },
          },
        },
      },
    });

    const testModel = createTestModel(machine);

    const testPaths = testModel.getShortestPaths({
      stopWhen: (state) => {
        return state.context.count >= 5;
      },
    });

    expect(testPaths).toHaveLength(1);
  });
});

// https://github.com/statelyai/xstate/issues/1935
test("prevents infinite recursion based on a provided limit", () => {
  const machine = createMachine({
    types: {} as { context: { count: number } },
    id: "machine",
    context: {
      count: 0,
    },
    on: {
      TOGGLE: {
        actions: assign({ count: ({ context }) => context.count + 1 }),
      },
    },
  });

  const model = createTestModel(machine);

  expect(() => {
    model.getShortestPaths({ limit: 100 });
  }).toThrowError("Traversal limit exceeded");
});

test.describe("test model options", () => {
  test("options.testState(...) should test state", async () => {
    const testedStates: any[] = [];

    const model = createTestModel(
      createMachine({
        initial: "inactive",
        states: {
          inactive: {
            on: {
              NEXT: "active",
            },
          },
          active: {},
        },
      })
    );

    await testUtils.testModel(model, {
      states: {
        "*": (state) => {
          testedStates.push(state.value);
        },
      },
    });

    expect(testedStates).toEqual(["inactive", "active"]);
  });
});

// https://github.com/statelyai/xstate/issues/1538
test("tests transitions", async () => {
  let assertionCount = 0;
  // expect.assertions(2);
  const machine = createMachine({
    initial: "first",
    states: {
      first: {
        on: { NEXT: "second" },
      },
      second: {},
    },
  });

  const model = createTestModel(machine);

  const paths = model.getShortestPaths({
    toState: (state) => state.matches("second"),
  });

  await paths[0].test({
    events: {
      NEXT: (step) => {
        expect(step).toHaveProperty("event");
        expect(step).toHaveProperty("state");
      },
    },
  });
  expect(assertionCount).toBe(2);
});

// https://github.com/statelyai/xstate/issues/982
test("Event in event executor should contain payload from case", async () => {
  const machine = createMachine({
    initial: "first",
    states: {
      first: {
        on: { NEXT: "second" },
      },
      second: {},
    },
  });

  const obj = {};

  const nonSerializableData = () => 42;

  const model = createTestModel(machine, {
    events: [{ type: "NEXT", payload: 10, fn: nonSerializableData }],
  });

  const paths = model.getShortestPaths({
    toState: (state) => state.matches("second"),
  });

  await model.testPath(
    paths[0],
    {
      events: {
        NEXT: (step) => {
          expect(step.event).toEqual({
            type: "NEXT",
            payload: 10,
            fn: nonSerializableData,
          });
        },
      },
    },
    obj
  );
});

test.describe("state tests", () => {
  test("should test states", async () => {
    let assertionCount = 0;

    // a (1)
    // a -> b (2)
    // expect.assertions(2);

    const machine = createMachine({
      initial: "a",
      states: {
        a: {
          on: { NEXT: "b" },
        },
        b: {},
      },
    });

    const model = createTestModel(machine);

    await testUtils.testModel(model, {
      states: {
        a: (state) => {
          expect(state.value).toEqual("a");
        },
        b: (state) => {
          expect(state.value).toEqual("b");
        },
      },
    });

    expect(assertionCount).toBe(2);
  });

  test("should test wildcard state for non-matching states", async () => {
    let assertionCount = 0;
    // a (1)
    // a -> b (2)
    // a -> c (2)
    // expect.assertions(4);

    const machine = createMachine({
      initial: "a",
      states: {
        a: {
          on: { NEXT: "b", OTHER: "c" },
        },
        b: {},
        c: {},
      },
    });

    const model = createTestModel(machine);

    await testUtils.testModel(model, {
      states: {
        a: (state) => {
          expect(state.value).toEqual("a");
        },
        b: (state) => {
          expect(state.value).toEqual("b");
        },
        "*": (state) => {
          expect(state.value).toEqual("c");
        },
      },
    });

    expect(assertionCount).toBe(4);
  });

  test("should test nested states", async () => {
    const testedStateValues: any[] = [];

    const machine = createMachine({
      initial: "a",
      states: {
        a: {
          on: { NEXT: "b" },
        },
        b: {
          initial: "b1",
          states: {
            b1: {},
          },
        },
      },
    });

    const model = createTestModel(machine);

    await testUtils.testModel(model, {
      states: {
        a: (state) => {
          testedStateValues.push("a");
          expect(state.value).toEqual("a");
        },
        b: (state) => {
          testedStateValues.push("b");
          expect(state.matches("b")).toBe(true);
        },
        "b.b1": (state) => {
          testedStateValues.push("b.b1");
          expect(state.value).toEqual({ b: "b1" });
        },
      },
    });
    expect(testedStateValues).toMatchSnapshot(`
      [
        "a",
        "b",
        "b.b1",
      ]
    `);
  });

  test("should test with input", () => {
    const machine = setup({
      types: {
        input: {} as {
          name: string;
        },
        context: {} as {
          name: string;
        },
      },
    }).createMachine({
      context: (x) => ({
        name: x.input.name,
      }),
      initial: "checking",
      states: {
        checking: {
          always: [
            { guard: (x) => x.context.name.length > 3, target: "longName" },
            { target: "shortName" },
          ],
        },
        longName: {},
        shortName: {},
      },
    });

    const model = createTestModel(machine);

    const path1 = model.getShortestPaths({
      input: { name: "ed" },
    });

    expect(path1[0].steps.map((s) => s.state.value)).toEqual(["shortName"]);

    const path2 = model.getShortestPaths({
      input: { name: "edward" },
    });

    expect(path2[0].steps.map((s) => s.state.value)).toEqual(["longName"]);
  });
});
