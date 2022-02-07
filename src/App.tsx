import { VFC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss'
import HomePage from './pages/Home/HomePage'
import PlayersPage from './pages/Players/PlayersPage'

const App: VFC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/players" component={PlayersPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
