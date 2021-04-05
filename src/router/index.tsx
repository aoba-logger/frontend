import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LogViewer from '../page/log-viewer'
import Login from '../page/login'

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/log-viewer">
          <LogViewer></LogViewer>
        </Route>
      </Switch>
    </Router>
  )
}

export default AppRouter