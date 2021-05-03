import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import { GlobalContextProvider } from './meta/context'
import PrivateRoute from './meta/PrivateRoute'
import routes from './meta/routes'

import './style/global.css'
import './style/shared.scss'

export default () => (
  <GlobalContextProvider>
    <Router>
      <Switch>
        {routes.map(({ auth, ...rest }, i) => {
          if (auth) return <PrivateRoute key={i} {...rest} />
          else return <Route key={i} {...rest} />
        })}
      </Switch>
    </Router>
  </GlobalContextProvider>
)
