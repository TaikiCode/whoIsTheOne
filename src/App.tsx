import { VFC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss'
import BattlePage from './pages/Battle/BattlePage'
import SelectWeightClassPage from './pages/Battle/SelectWeightClassPage'
import HomePage from './pages/Home/HomePage'
import PlayersPage from './pages/Players/PlayersPage'
import RatingsPage from './pages/Ratings/RatingsPage'

const App: VFC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/players" component={PlayersPage} />
        <Route exact path="/battle" component={SelectWeightClassPage} />
        <Route path="/battle/:slug" component={BattlePage} />
        <Route path="/ratings" component={RatingsPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
