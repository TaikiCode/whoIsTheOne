import { VFC, useState } from 'react'
import Header from '../../components/common/header/Header'
import Navbar from '../../components/common/navbar/Navbar'
import PlayerCardList from '../../components/playerCardList/PlayerCardList'
import Tabs from '../../components/tabs/Tabs'
import { allBoxers } from '../../data/allPlayers'
import { weightClassesForTabs } from '../../data/weightClasses'
import './playersPage.scss'

const PlayersPage: VFC = () => {
  const [currentWeight, setCurrentWeight] = useState<string>('全て')
  const onClick = (weightClass: string) => setCurrentWeight(weightClass)

  const filteredPlayers = (allPlayers: any[]) => {
    if (currentWeight === '全て') return allPlayers
    return allPlayers.filter((player: any) => {
      return player.category && player.category.includes(currentWeight)
    })
  }
  return (
    <>
      <Navbar />
      <div className="lg:mx-24 bg-base-200">
        <Header displayText="all players" headerStyle="playersPageStyle" />
        <div className="mx-12">
          <Tabs
            currentWeight={currentWeight}
            weightClasses={weightClassesForTabs}
            onClick={onClick}
          />
          <hr />
        </div>
        <PlayerCardList players={filteredPlayers(allBoxers) || []} />
      </div>
    </>
  )
}

export default PlayersPage
