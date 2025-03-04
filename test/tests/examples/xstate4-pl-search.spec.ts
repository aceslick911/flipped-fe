// Requires xstate 4.16.0

// import { test, expect, Page } from "@playwright/test";
// import { createMachine } from "xstate";
// import { createModel } from "@xstate/test";

// let page: Page;
// test.describe("Playwright document search", () => {
//   const documentationSearchMachine = createMachine({
//     id: "documentSearch",
//     initial: "idle",
//     states: {
//       idle: {
//         on: {
//           PERFORM_SEARCH: "resultsFound",
//           PERFORM_INVALID_SEARCH: "noResults",
//         },
//         meta: {
//           test: async () => {
//             await expect(page.locator(".navbar__title")).toHaveText(
//               "Playwright"
//             );
//           },
//         },
//       },
//       resultsFound: {
//         on: {
//           RESET_SEARCH: "readyForNextSearch",
//         },
//         meta: {
//           test: async () => {
//             await expect(
//               page.locator(
//                 "#docsearch-list .DocSearch-Hit-title >> text=Selecting elements by label text"
//               ),
//               "correct search result found"
//             ).toBeVisible();
//           },
//         },
//       },
//       noResults: {
//         on: { RESET_SEARCH: "readyForNextSearch" },
//         meta: {
//           test: async () => {
//             await expect(
//               page.locator(".DocSearch-NoResults"),
//               "no results panel should be displayed"
//             ).toBeVisible();
//           },
//         },
//       },
//       readyForNextSearch: {
//         type: "final",
//         meta: {
//           test: async () => {
//             await expect(page.locator(".navbar__title")).toHaveText(
//               "Playwright"
//             );
//           },
//         },
//       },
//     },
//   });

//   const testModel = createModel(documentationSearchMachine, {
//     events: {
//       PERFORM_SEARCH: async () => {
//         const validSearchTerm = "Text selector";
//         await page.locator('[aria-label="Search"]').click();
//         await page.locator("#docsearch-input").type(validSearchTerm);
//       },
//       PERFORM_INVALID_SEARCH: async () => {
//         const invalidSearchTerm = "pztr";
//         await page.locator('[aria-label="Search"]').click();
//         await page
//           .locator("#docsearch-input")
//           .type(invalidSearchTerm, { delay: 300 });
//       },
//       RESET_SEARCH: async () => {
//         await page.goto("https://playwright.dev/");
//       },
//     },
//   });

//   test.beforeAll(async ({ browser }) => {
//     page = await browser.newPage();
//   });

//   test.beforeEach(async () => {
//     await page.goto("https://playwright.dev/");
//   });

//   test.afterAll(async ({ browser }) => {
//     for (let context of browser.contexts()) await context.close();
//   });

//   // const testPlans = testModel.getShortestPathPlans();  // for quicker execution
//   const testPlans = testModel.getSimplePathPlans(); // exhaustive paths
//   testPlans.forEach((plan, i) => {
//     plan.paths.forEach((path, i) => {
//       test(path.description, async ({}) => {
//         // test.skip(path.description!=='via PERFORM_SEARCH → RESET_SEARCH')
//         await path.test(page);
//       });
//     });
//   });
// });
