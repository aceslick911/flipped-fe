const { chromium, devices } = require('@playwright/test')

;(async () => {
  console.log('launching browser')
  const browser = await chromium.launch({
    ...devices['Desktop Chrome'],
    channel: 'chrome',
    headless: false,
    launchOptions: {
      args: [
        '--disable-accelerated-2d-canvas',
        '--disable-gpu',
        '--disable-software-rasterizer',
        '--force-software-compositing',
      ],
    },
    args: [
      '--disable-accelerated-2d-canvas',
      '--disable-gpu',
      '--disable-software-rasterizer',
      '--force-software-compositing',
    ],
  })
  console.log('set context')
  const context = await browser.newContext()
  console.log('set page')
  const page = await context.newPage()
  console.log('goto page')

  const PLAYWRIGHT_ENV = process.env.PLAYWRIGHT_ENV || 'staging'

  const urls = {
    dev: 'https://home-dev.flipped.energy/',
    uat: 'https://home-uat.flipped.energy/',
    staging: 'https://home-staging.flipped.energy/',
    prod: 'https://flipped.energy/',
    local: 'http://localhost:5274/',
  }

  await page.goto(urls[PLAYWRIGHT_ENV])
  console.log('pause')
  await page.pause() // This will open the Playwright inspector for code generation
})()
