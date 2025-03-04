import { en_AU, Faker } from '@faker-js/faker'
import { expect, Page, test } from '@playwright/test'

import { saveData } from '../test-data/persist'
import { Environment, PLAYWRIGHT_ENV } from './utils/globals'

export const flippedSite = {
  urls: {
    dev: 'https://home-dev.flipped.energy/',
    uat: 'https://home-uat.flipped.energy/',
    staging: 'https://home-staging.flipped.energy/',
    prod: 'https://www.flipped.energy/',
    local: 'http://localhost:5274/',
  } as Record<Environment, string>,

  sel: {
    address: '.address-entry input',
    firstName: 'input[name="firstName"]',
    lastName: 'input[name="lastName"]',
    email: 'input[name="email"]',
    phoneNumber: 'input[name="phoneNumber"]',
    password: 'input[name="password"]',
    confirmPassword: 'input[name="confirmPassword"]',
    lifeSupport: {
      select: 'label',
      selectTextValue:
        'No, there is no life support equipment at the property.',
    },
  },

  inp: {
    firstName: "input[name='firstName']",
    lastName: "input[name='lastName']",
    email: "input[name='email']",
    phoneNumber: "input[name='phoneNumber']",
    password: "input[name='password']",
    confirmPassword: "input[name='confirmPassword']",
  },

  btn: {
    viewDetails: 'view details',
    choose: 'Choose',
    next: 'Next >',
    agree: 'I Agree',
  },

  markers: {
    submitSecurely: {
      select: 'h2',
      selectTextValue: 'Securely submitting your request...',
    },
    thankyou: {
      select: 'h1',
      selectTextValue: 'Your account is almost ready',
    },
  },
}

const env = (PLAYWRIGHT_ENV as Environment) || 'prod'

for (const url of [flippedSite.urls[PLAYWRIGHT_ENV]]) {
  test.describe(`${env}.Origination`, async () => {
    let test_data: ReturnType<typeof generateData>
    let td: ReturnType<typeof generateData>['data']
    let testName: string
    let browserName: string

    let page: Page

    test.beforeEach(async ({ }, testInfo) => {
      test.setTimeout(120000);

      const advance = testInfo.project.metadata.id
      browserName = testInfo.project.name

      testName = `${env}.Origination[${browserName}]`
      test_data = generateData(testName, advance)
      td = test_data.data
    })

    test.beforeAll(async ({ browser }) => {
      page = await browser.newPage()
    })

    test.afterAll(async () => {
      await page.close()
    })

    test.afterEach(async ({ }, testInfo) => {
      test_data.onFinish(testInfo.status === 'passed' ? 'pass' : 'fail')
    })

    test('signup', async ({ page }) => {
      const pagelocator = (selector: string) => ({
        fill: async (text: string) => {
          await page.locator(selector).click()
          await page.keyboard.type(text)
        },
      })

      await test.step(`${browserName} to ${url}`, async () => {
        await page.goto(url)
        await page.waitForSelector(flippedSite.sel.address)
      })

      await test.step(`Enter and select address: ${td.address}`, async () => {
        await page.locator(flippedSite.sel.address).click()
        await pagelocator(flippedSite.sel.address).fill(td.address)
        await page
          .getByRole('option', { name: td.dropdownAddress })
          .click()
      })

      await test.step(`Select first plan`, async () => {
        await test.step(`Clicking on view plan details`, async () => {
          await page.waitForSelector(
            `div:has-text('${flippedSite.btn.viewDetails}')`,
          )
          await page.screenshot()
          await page.getByText(flippedSite.btn.viewDetails).nth(0).click()
          await page.getByText('hide details').nth(0).click()
        })

        await test.step(`Clicking on choose plan`, async () => {
          await page.waitForSelector("button:has-text('Choose')")
          await page.screenshot()
          await page
            .getByRole('button', { name: flippedSite.btn.choose })
            .nth(0)
            .click()
        })
      })

      await test.step(`Enter User Details for: ${td.email}`, async () => {
        await test.step(`Enter first name: ${td.firstName}`, async () => {
          await page.locator(flippedSite.inp.firstName).click()
          await page.locator(flippedSite.inp.firstName).click()

          await pagelocator(flippedSite.inp.firstName).fill(td.firstName)
        })

        await test.step(`Enter last name: ${td.lastName}`, async () => {
          await page.locator(flippedSite.inp.lastName).click()
          await page.locator(flippedSite.inp.lastName).click()
          await pagelocator(flippedSite.inp.lastName).fill(td.lastName)
        })

        await test.step(`Enter email: ${td.email}`, async () => {
          await page.locator(flippedSite.inp.email).click()
          await pagelocator(flippedSite.inp.email).fill(td.email)
        })

        await test.step(`Enter phone number: ${td.phoneNumber}`, async () => {
          await page.locator(flippedSite.inp.phoneNumber).click()
          await page.locator(flippedSite.inp.phoneNumber).click()
          await pagelocator(flippedSite.inp.phoneNumber).fill(
            td.phoneNumber,
          )
        })

        await test.step(`Enter password: ${td.password}`, async () => {
          await page.locator(flippedSite.inp.password).click()
          await pagelocator(flippedSite.inp.password).fill(td.password)

          await page.locator(flippedSite.inp.confirmPassword).click()
          await pagelocator(flippedSite.inp.confirmPassword).fill(
            td.confirmPassword,
          )
        })

        await test.step(`Click ${flippedSite.btn.next}`, async () => {
          await page.locator(flippedSite.inp.firstName).click()

          await page.screenshot()

          await page
            .getByRole('button', { name: flippedSite.btn.next })
            .click()

          await page
            .getByRole('button', { name: flippedSite.btn.next })
            .click()
        })
      })

      await test.step(`Life support - Select ${flippedSite.sel.lifeSupport.selectTextValue}`, async () => {
        await page
          .locator(
            `${flippedSite.sel.lifeSupport.select}:has-text("${flippedSite.sel.lifeSupport.selectTextValue}")`,
          )
          .click()
      })

      await test.step(`Choose payment: BPay`, async () => {
        await page
          .getByRole('button', { name: flippedSite.btn.next })
          .click()

        await page
          .getByRole('button', { name: flippedSite.btn.next })
          .click()
        await page
          .getByRole('button', { name: flippedSite.btn.next })
          .click()
        await page
          .getByRole('button', { name: flippedSite.btn.agree })
          .click()

        await page.screenshot()
      })

      await test.step(`Submit application`, async () => {
        await page
          .getByRole('button', { name: flippedSite.btn.next })
          .click()

        await page.waitForSelector(
          `${flippedSite.markers.submitSecurely.select}:has-text("${flippedSite.markers.submitSecurely.selectTextValue}")`,
        )
        await page.screenshot()

        await page.waitForSelector(
          `${flippedSite.markers.thankyou.select}:has-text("${flippedSite.markers.thankyou.selectTextValue}")`,
        )

        await page.screenshot()

        await expect(
          page.locator(
            `${flippedSite.markers.thankyou.select}:has-text("${flippedSite.markers.thankyou.selectTextValue}")`,
          ),
        ).toHaveText(flippedSite.markers.thankyou.selectTextValue)

        await page.waitForTimeout(1000)
        await page.screenshot()
      })
      // done!
    })
  })
}

function generateData(testName: string, advance: number = 1) {
  const seed = process.env.SEED
    ? parseInt(process.env.SEED, 10)
    : Math.floor(Math.random() * 1000000)

  // The seed here allows us to reproduce the same data for the same test
  // We include the advance parameter to allow for multiple tests to be run with different data
  // and avoid duplicate email addresses etc
  const faker = new Faker({
    seed: seed + advance,
    locale: [en_AU],
  })

  const password = faker.internet.password({ length: 12, memorable: true })
  const uniqueNumber = faker.number.int({ min: 100000, max: 999999 })
  const time = new Date().toISOString()

  // 10-digit phone number starting with 04
  const australianMobile = `04${faker.number.int({
    min: 10000000,
    max: 99999999,
  })}`

  const test_data = {
    seed,
    testName,
    time,
    outcome: 'init' as 'init' | 'pass' | 'fail',
    duration: undefined as number | undefined,
    data: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: `flipped.tests+${uniqueNumber}@gmail.com`,
      phoneNumber: australianMobile,
      password,
      confirmPassword: password,
      dropdownAddress: '234 Palmer Street,',
      address: '234 Palmer Street, Darlinghurst, NSW',
    },

    onFinish: (outcome: 'pass' | 'fail') => {
      test_data.outcome = outcome
      test_data.duration = new Date().getTime() - new Date(time).getTime()
      saveData('accounts', test_data)
    },
  }

  return test_data
}
