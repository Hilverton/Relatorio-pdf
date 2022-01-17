import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Report from '../pages/Report'
import Members from '../pages/Members'

export default function AppRoutes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/members" component={Members} />
        <Route path="/report" component={Report} />
      </Switch>
    </HashRouter>
  )
}
