# How to run tests

## Setup

```bash
# Install
yarn

# Install playwright browsers etc
yarn playwright install


```

### Run tests

```bash

# Runs test on http://localhost:8000 and http://localhost:9320/
yarn test:local

# Runs test on http://home-dev.flipped.energy & http://public-dev.flipped.energy
yarn test:dev

# Runs test on http://home-uat.flipped.energy & http://public-uat.flipped.energy
yarn test:uat

# Runs test on http://home-staging.flipped.energy & http://public-staging.flipped.energy
yarn test:staging

# Runs test on http://www.flipped.energy & http://public-prod.flipped.energy
yarn test:prod

# If you don't want the test to run with random data and instead re-use the same data,
# you can set a seed value
SEED=123 yarn test:staging

```

## Important Files

- E2ETests/playwright.config.ts - This file contains the configuration for the tests such as which browsers to run the tests on, the base URL for the tests, etc.

# You can use the codegen to generate new test files

```bash
yarn codegen


```
