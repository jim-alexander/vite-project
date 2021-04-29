import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Nav from './layout/Nav'

import routes from './routes'

import './style/theme.scss'
import './style/shared.scss'

const App = () => (
  <Router>
    <Nav />
    <Switch>
      {routes.map(({ component, url, exact }) => (
        <Route key={url} component={component} path={url} exact={exact} />
      ))}
    </Switch>
  </Router>
)

export default App
