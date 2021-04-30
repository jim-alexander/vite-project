import loadable from '@loadable/component'

const page = (name) => loadable(() => import(`../pages/${name}.jsx`))

const routes = [
  {
    component: page('Dashboard'),
    exact: true,
    path: '/',

    label: 'Dashboard',
    auth: true,
    nav: true
  },
  {
    component: page('Calendar'),
    path: '/calendar',

    label: 'Calendar',
    auth: true,
    nav: true
  },
  {
    component: page('Clients'),
    path: '/clients',

    label: 'Clients',
    auth: true,
    nav: true
  },
  {
    component: page('Login'),
    path: '/login',

    label: 'Login'
  }
]

export default routes
