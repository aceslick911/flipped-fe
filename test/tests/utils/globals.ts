import { base, de, de_CH, en, en_AU, Faker, LocaleDefinition } from '@faker-js/faker'
import { cwd } from 'process'

export type Environment = (typeof ENV)[number]
export type Environments = Environment | 'all'

export const ENV = ['local', 'dev', 'uat', 'staging', 'prod'] as const

export const PLAYWRIGHT_ENV = (process.env.PLAYWRIGHT_ENV ||
  'staging') as Environments

export interface TestConfigWebServer {
  /**
   * Shell command to start. For example `npm run start`..
   */
  command: string

  /**
   * Current working directory of the spawned process, defaults to the directory of the configuration file.
   */
  cwd?: string

  /**
   * Environment variables to set for the command, `process.env` by default.
   */
  env?: { [key: string]: string }

  /**
   * Whether to ignore HTTPS errors when fetching the `url`. Defaults to `false`.
   */
  ignoreHTTPSErrors?: boolean

  /**
   * The port that your http server is expected to appear on. It does wait until it accepts connections. Either `port`
   * or `url` should be specified.
   */
  port?: number

  /**
   * If true, it will re-use an existing server on the `port` or `url` when available. If no server is running on that
   * `port` or `url`, it will run the command to start a new server. If `false`, it will throw if an existing process is
   * listening on the `port` or `url`. This should be commonly set to `!process.env.CI` to allow the local dev server
   * when running tests locally.
   */
  reuseExistingServer?: boolean

  /**
   * If `"pipe"`, it will pipe the stdout of the command to the process stdout. If `"ignore"`, it will ignore the stdout
   * of the command. Default to `"ignore"`.
   */
  stdout?: 'pipe' | 'ignore'

  /**
   * Whether to pipe the stderr of the command to the process stderr or ignore it. Defaults to `"pipe"`.
   */
  stderr?: 'pipe' | 'ignore'

  /**
   * How long to wait for the process to start up and be available in milliseconds. Defaults to 60000.
   */
  timeout?: number

  /**
   * How to shut down the process. If unspecified, the process group is forcefully `SIGKILL`ed. If set to `{ signal:
   * 'SIGTERM', timeout: 500 }`, the process group is sent a `SIGTERM` signal, followed by `SIGKILL` if it doesn't exit
   * within 500ms. You can also use `SIGINT` as the signal instead. A `0` timeout means no `SIGKILL` will be sent.
   * Windows doesn't support `SIGTERM` and `SIGINT` signals, so this option is ignored on Windows. Note that shutting
   * down a Docker container requires `SIGTERM`.
   */
  gracefulShutdown?: {
    signal: 'SIGINT' | 'SIGTERM'

    timeout: number
  }

  /**
   * The url on your http server that is expected to return a 2xx, 3xx, 400, 401, 402, or 403 status code when the
   * server is ready to accept connections. Redirects (3xx status codes) are being followed and the new location is
   * checked. Either `port` or `url` should be specified.
   */
  url?: string
}
