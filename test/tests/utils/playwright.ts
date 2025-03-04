import { devices, PlaywrightTestConfig } from '@playwright/test'
import { config } from 'process'

export const allBrowsers = [
  'google_chrome',
  'google_chrome_mobile',
  'chrome',
  'chrome_mobile',
  'firefox',
  'firefox_mobile',
  'safari',
  'safari_mobile',
  'edge',
  'edge_mobile',
] as const

export type BrowserTypes = (typeof allBrowsers)[number]

const defaultMobile = {
  chromeMobile: 'Pixel 5',
} as const

// If MacOS, enable Safari
// If Windows, enable Edge
// Others always true
export const BrowserSupported = (browser: BrowserTypes) => {
  if (browser.startsWith('safari') && process.platform !== 'darwin')
    return false
  if (browser.startsWith('edge') && process.platform !== 'win32')
    return false
  return true
}
let activeId = 0
export const BrowserConfigs: Record<BrowserTypes, PlaywrightTestConfig> = {
  google_chrome: {
    name: 'Google Chrome',
    metadata: { id: activeId++ },
    use: {
      ...devices['Desktop Chrome'],
      channel: 'chrome',

      launchOptions: {
        args: ['--disable-gpu'],
      },
    },
  },

  google_chrome_mobile: {
    name: 'Google Chrome Mobile',
    metadata: { id: activeId++ },
    use: {
      ...devices[defaultMobile.chromeMobile],
      channel: 'chrome',
      launchOptions: {
        args: ['--disable-gpu'],
      },
    },
  },

  chrome: {
    name: 'chromium',
    metadata: { id: activeId++ },
    use: {
      ...devices['Desktop Chrome'],
      launchOptions: {
        args: ['--disable-gpu'],
      },
    },
  },

  safari: {
    name: 'webkit',
    metadata: { id: activeId++ },
    use: { ...devices['Desktop Safari'] },
  },
  safari_mobile: {
    name: 'Mobile Safari',
    metadata: { id: activeId++ },
    use: { ...devices['iPhone 12'] },
  },

  firefox: {
    name: 'firefox',
    metadata: { id: activeId++ },
    use: {
      ...devices['Desktop Firefox'],
      launchOptions: {
        env: {
          MOZ_DISABLE_GPU: '1',
        },
      },
    },
  },

  firefox_mobile: {
    name: 'Mobile Firefox',
    metadata: { id: activeId++ },
    use: {
      ...devices['iPhone 12'],
      launchOptions: {
        env: {
          MOZ_DISABLE_GPU: '1',
        },
      },
    },
  },

  chrome_mobile: {
    name: 'Mobile Chrome',
    metadata: { id: activeId++ },
    use: {
      ...devices[defaultMobile.chromeMobile],
      launchOptions: {
        args: ['--disable-gpu'],
      },
    },
  },

  edge: {
    name: 'Microsoft Edge',
    metadata: { id: activeId++ },
    use: { ...devices['Desktop Edge'], channel: 'msedge' },
  },

  edge_mobile: {
    name: 'Mobile Edge',
    metadata: { id: activeId++ },
    use: { ...devices[defaultMobile.chromeMobile], channel: 'msedge' },
  },
} as const
