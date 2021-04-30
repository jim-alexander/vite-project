import ReactDOM from 'react-dom'

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import { ContextProvider } from './meta/context'
import PrivateRoute from './meta/PrivateRoute'
import routes from './meta/routes'

import './style/global.css'
import './style/theme.scss'
import './style/shared.scss'

ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById('root')
)
