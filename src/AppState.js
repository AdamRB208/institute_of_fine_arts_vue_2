import { reactive } from 'vue'
import { Art } from './models/Art.js'
import { Admirer } from './models/Admirer.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  /**@type {import('./models/Art.js').Art[]} user info from CodeWorks sandbox API */
  artworks: [],

  /** @type {import('./models/Admirer.js').Admirer[]} user info from CodeWorks sandbox API */
  admirer: [],

  currentPage: 1,

  totalPages: 35,
})

