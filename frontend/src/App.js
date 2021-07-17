import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Upload from './components/Upload'
import Posts from './components/Posts'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Upload} />
      <ProtectedRoute exact path="/posts" component={Posts} />
      <Route component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
)

export default App