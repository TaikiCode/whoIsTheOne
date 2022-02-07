import { VFC } from 'react'
import PlayerCard from '../../components/atom/playerCard/PlayerCard'
import Navbar from '../../components/navbar/Navbar'
import PlayerCardList from '../../components/playerCardList/PlayerCardList'
import Tabs from '../../components/tabs/Tabs'
import { weightClassesForTabs } from '../../data/weightClasses'
import './playersPage.scss'



const PlayersPage: VFC = () => {
  return (
    <>
      <Navbar />
      <div className="lg:mx-24 bg-base-200">
        <div className="text-center pt-32 pb-12">
          <h1 className="text-5xl uppercase">All Players</h1>
        </div>
        <Tabs weightClasses={weightClassesForTabs} />
        <hr />
        <PlayerCardList />
      </div>
    </>
  )
}

export default PlayersPage
