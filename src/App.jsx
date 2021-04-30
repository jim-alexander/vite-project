import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import { ContextProvider } from './layout/context'

import PrivateRoute from './layout/PrivateRoute'
import routes from './layout/routes'

import './style/theme.scss'
import './style/shared.scss'

export default () => (
  <ContextProvider>
    <Router>
      <Switch>
        {routes.map(({ auth, ...rest }, i) => {
          if (auth) return <PrivateRoute key={i} {...rest} />
          else return <Route key={i} {...rest} />
        })}
      </Switch>
    </Router>
  </ContextProvider>
)
