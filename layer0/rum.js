import Router from '@layer0/rum/Router.js'
import Metrics from '@layer0/rum/Metrics.js'

// Implementing Real Time User Monitoring (Core Web Vitals)
// https://docs.layer0.co/guides/core_web_vitals#npm-or-yarn
export default function Layer0RUM(token) {
  new Metrics({
    // Set this TOKEN as an environment variable at Layer0 Console
    // More on creating env variables: https://docs.layer0.co/guides/environments#creating-environment-variables
    token,
    router: new Router()
      .match('/', ({ setPageLabel }) => setPageLabel('home'))
      .match('/commerce', ({ setPageLabel }) => setPageLabel('commerce'))
      .match('/product/:id', ({ setPageLabel }) => setPageLabel('product/:id'))
  }).collect()
}
