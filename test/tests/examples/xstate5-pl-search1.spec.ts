import { test, expect, Page } from "@playwright/test";
import { createMachine, setup } from "xstate";
import { createTestModel } from "@xstate/graph";

let page: Page;
test.describe("Playwright document search", () => {
  const documentationSearchMachine = setup({
    types: {
      context: {} as {},
      events: {} as  // Inner actions
        | { type: "PERFORM_SEARCH" }
        | { type: "PERFORM_INVALID_SEARCH" }
        | { type: "NEXT" }
        | { type: "RESET_SEARCH" },
    },
    actions: {
      performSearch: async () => {
        console.log("Performing search...");
        const validSearchTerm = "Text selector";
        await page.locator('[aria-label="Search"]').click();
        await page.locator("#docsearch-input").type(validSearchTerm);
        await expect(
          page.locator(
            "#docsearch-list .DocSearch-Hit-title >> text=Selecting elements by label text"
          ),
          "correct search result found"
        ).toBeVisible();
        await page.screenshot({ path: "screenshot.png" });
      },
      performInvalidSearch: async () => {
        console.log("Performing invalid search...");
        const invalidSearchTerm = "pztr";
        await page.locator('[aria-label="Search"]').click();
        await page
          .locator("#docsearch-input")
          .type(invalidSearchTerm, { delay: 300 });
        await page.screenshot({ path: "screenshot.png" });
      },
      resetSearch: async () => {
        console.log("Resetting search...");
        await expect(page.locator(".navbar__title")).toHaveText("Playwright");
        await page.screenshot({ path: "screenshot.png" });
      },
      goToHomePage: async () => {
        console.log("Going to home page...");
        await page.goto("https://playwright.dev/");
        await page.screenshot({ path: "screenshot.png" });
      },
      checkNoResults: async () => {
        console.log("Checking no results...");
        await expect(
          page.locator(".DocSearch-NoResults"),
          "no results panel should be displayed"
        ).toBeVisible();
        await page.screenshot({ path: "screenshot.png" });
      },
    },
  }).createMachine({
    id: "documentSearch",
    initial: "idle",
    context: {},

    states: {
      idle: {
        initial: "ready",
        on: {
          PERFORM_SEARCH: {
            target: "performingSearch",
            actions: "performSearch",
          },
          PERFORM_INVALID_SEARCH: {
            target: "noResults",
            actions: "performInvalidSearch",
          },
        },
        states: {
          ready: {},
        },
      },
      performingSearch: {
        on: {
          NEXT: {
            target: "finished",
            actions: "goToHomePage",
          },
        },
      },
      noResults: {
        on: {
          NEXT: {
            target: "finished",
            actions: "checkNoResults",
          },
        },
      },
      finished: {
        entry: "goToHomePage",
        on: {
          NEXT: "readyForNextSearch",
        },
      },
      readyForNextSearch: {
        type: "final",
      },
    },
  });

  const testModel = createTestModel(documentationSearchMachine, {
    events: [
      { type: "PERFORM_SEARCH" },
      { type: "PERFORM_INVALID_SEARCH" },
      { type: "NEXT" },
      { type: "RESET_SEARCH" },
    ],
  });

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test.beforeEach(async () => {
    await page.goto("https://playwright.dev/");
  });

  test.afterAll(async ({ browser }) => {
    for (let context of browser.contexts()) await context.close();
  });

  const testPaths = testModel.getSimplePaths({
    allowDuplicatePaths: false,
  });

  testPaths.forEach(async (path, i) => {
    console.group(path.description);

    test(path.description, async () => {
      await path.test({
        events: {
          NEXT: (step) => {
            console.log("NEXT", step);
          },
        },
      });

      console.groupEnd();
    });
  });
});
