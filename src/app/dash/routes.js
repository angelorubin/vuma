/**
* Components are lazy-loaded - See "Grouping Components in the Same Chunk"
* http://router.vuejs.org/en/advanced/lazy-loading.html
*/
/* eslint-disable global-require */
const Dash = r => require.ensure([], () => r(require('./main')), 'dash-bundle')

export default [
  {
    name: 'dash.index',
    path: '/dash',
    component: Dash,
    meta: { requiresAuth: true }
  }
]
