import { add } from './index.js'

add(1, 2)
  .then((sum) => console.info(`1 + 2 = ${sum}`))
  .catch(console.error)
