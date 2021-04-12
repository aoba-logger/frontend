import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import LogViewer from '../page/log-viewer'
import Login from '../page/login'
import { useAuth } from '../utils/hooks/auth'

function AppRouter() {
  const { loggedIn } = useAuth()

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {!loggedIn ? <Redirect to="/login" /> : <Redirect to="/log-viewer" />}
        </Route>
        <Route path="/login">
          {loggedIn ? <Redirect to="/log-viewer" /> : <Login />}
        </Route>
        <Route path="/log-viewer">
          {!loggedIn ? <Redirect to="/login" /> : <LogViewer />}
        </Route>
      </Switch>
    </Router>
  )
}

export default AppRouter