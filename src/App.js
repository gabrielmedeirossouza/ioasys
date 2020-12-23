import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute'

import GlobalStyles from './shared/globalStyles'

import Login from './pages/Login'
import Home from './pages/Home'
import Detail from './pages/Detail'

function App() {
  return (
    <>
    <GlobalStyles />
    <Routes>
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/detail/:id" component={Detail}/>
      </Switch>
    </Routes>
    </>
  )
}

export default App;
