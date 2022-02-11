import { VFC, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
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
        <div className="text-center pt-40 pb-12">
          <h1 className="text-3xl uppercase">ALL Players</h1>
        </div>
        <Tabs
          currentWeight={currentWeight}
          weightClasses={weightClassesForTabs}
          onClick={onClick}
        />
        <hr />
        <PlayerCardList players={filteredPlayers(allBoxers) || []} />
      </div>
    </>
  )
}

export default PlayersPage
