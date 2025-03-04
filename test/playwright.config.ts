import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test'

import { PLAYWRIGHT_ENV, TestConfigWebServer } from './tests/utils/globals'
import { BrowserConfigs, BrowserSupported, BrowserTypes } from './tests/utils/playwright'

const IS_CI = process.env.CI !== undefined && process.env.CI !== 'false'

const config = {
  headless: false || IS_CI, // CI is always headless
  showReports: true && !IS_CI, // Will not show reports in CI
  recordVideos: true,

  inSeries: false,

  runTests: {
    frontEndOrigination: true,
    backEndOrigination: false,
  },

  // Comment out to restrict
  browsers: [
    // 'google_chrome', //As opposed to "chromium"
    // 'google_chrome_mobile',
    'chrome',
    'chrome_mobile',
    'firefox', // Working after SSL Issues Resolved but prod needs www.
    'firefox_mobile',
    'safari', // Does not load
    'safari_mobile', //
    // 'edge',
    // 'edge_mobile',
  ] as BrowserTypes[],

  video: {
    portrait: { width: 1080, height: 1920 },
    landscape: { width: 1920, height: 1080 },
  },
} as const

console.log({ IS_CI, PLAYWRIGHT_ENV, config })

const webservers: TestConfigWebServer[] = [
  {
    command: `echo "$(pwd)" && \
yarn && \
yarn home
`,
    url: 'http://localhost:8000',
    reuseExistingServer: !IS_CI,
    gracefulShutdown: { signal: 'SIGTERM', timeout: 5000 },
    cwd: '../Main/Flipped.Home/gatsby',
    stdout: 'pipe',
    stderr: 'pipe',
    timeout: 90000,
  },
  {
    command:
      'echo "$(pwd)" && ./dotnet.sh --runMode="run" --targetProject="Flipped.Home" --CONFIG_MODE="Debug" --ENV_MODE="Dev-Remote"',
    url: 'http://localhost:5274',
    reuseExistingServer: !IS_CI,
    gracefulShutdown: { signal: 'SIGTERM', timeout: 5000 },
    cwd: '../',
    stdout: 'pipe',
    stderr: 'pipe',
    timeout: 90000,
  },
  ...((config.runTests.backEndOrigination && [
    {
      command:
        'echo "$(pwd)" && ./dotnet.sh --runMode="run" --targetProject="Flipped.Public" --testFilter="\'\'" --CONFIG_MODE="Debug" --ENV_MODE="Dev-Remote"',
      url: 'http://localhost:9320',
      reuseExistingServer: !IS_CI,
      gracefulShutdown: { signal: 'SIGTERM', timeout: 5000 },
      cwd: '../',
      stdout: 'pipe',
      stderr: 'pipe',
      timeout: 90000,
    },
  ]) ||
    []),
]

export default defineConfig({
  testDir: './tests',
  fullyParallel: !config.inSeries,
  retries: 0,
  forbidOnly: !!process.env.CI,
  workers: config.inSeries ? 1 : undefined,

  reporter: [
    [
      'html',
      {
        open: config.showReports ? 'always' : 'never',
        outputFolder: 'playwright-report',
        printTreeView: true,
      },
    ],
  ],

  use: {
    trace: 'on',

    ...(config.recordVideos && {
      video: {
        mode: 'on',
        // size: { width: 1280, height: 720 },
      },
    }),

    screenshot: 'on',
    headless: config.headless,
    acceptDownloads: true,
    actionTimeout: 120000,
  },

  projects: config.browsers
    .filter(BrowserSupported)
    .map((browser) => BrowserConfigs[browser]),

  webServer:
    PLAYWRIGHT_ENV === 'local' && webservers.length > 0
      ? webservers
      : undefined,
})
