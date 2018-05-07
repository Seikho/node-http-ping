import http = require('http')
import https = require('https')
import Promise = require('bluebird')

export = ping as Export

type Export = typeof ping & { default: typeof ping }

/**
 * Sends a 'GET /' request to a server and returns a promise that returns the round trip time in milliseconds.
 * @param url The destination url. E.g. www.google.com
 * @param port Optional: The port number of the destination. Defaults to 80
 * @returns Promise<{responseTime: number }> A promise that returns the round trip time in milliseconds. Returns -1 if an error occurred.
 * */
function ping(url: string, port?: number) {
  const promise = new Promise<number>((resolve, reject) => {
    const useHttps = url.indexOf('https') === 0
    const mod = useHttps ? https.request : http.request
    const outPort = port || (useHttps ? 443 : 80)
    const baseUrl = url.replace('http://', '').replace('https://', '')

    const options = { host: baseUrl, port: outPort, path: '/' }
    const start = Date.now()

    const pingRequest = mod(options, () => {
      resolve(Date.now() - start)
      pingRequest.abort()
    })

    pingRequest.on('error', () => {
      reject(-1)
      pingRequest.abort()
    })

    pingRequest.write('')
    pingRequest.end()
  })
  return promise
}

;(ping as any).default = ping
