import loadable from '@loadable/component'

const routes = [
  {
    component: loadable(() => import('./pages/Dashboard')),
    private: false,
    exact: true,
    url: '/'
  },
  {
    component: loadable(() => import('./pages/Calendar')),
    url: '/calendar'
  },
  {
    component: loadable(() => import('./pages/Clients')),
    url: '/clients'
  }
]

export default routes
