import loadable from '@loadable/component'

const page = (name) => loadable(() => import(`../pages/${name}.jsx`))

const routes = [
  {
    label: 'Dashboard',
    component: page('Dashboard'),
    exact: true,
    path: '/',

    auth: true,
    nav: true
  },
  {
    label: 'Calendar',
    component: page('Calendar'),
    path: '/calendar',

    auth: true,
    nav: true
  },
  {
    label: 'Clients',
    component: page('Clients'),
    path: '/clients',

    auth: true,
    nav: true
  },
  {
    label: 'Login',
    component: page('Login'),
    path: '/login'
  }
]

export default routes
