import { VFC, useState } from 'react'
import Header from '../../components/common/header/Header'
import Layout from '../../components/layout/Layout'
import PlayerCardList from '../../components/playerCardList/PlayerCardList'
import Tabs from '../../components/tabs/Tabs'
import { allBoxers } from '../../data/allPlayers'
import { weightClassesForTabs } from '../../data/weightClasses'

const PlayersPage: VFC = () => {
  const [currentWeight, setCurrentWeight] = useState<string>('全て')
  const onClick = (weightClass: string) => setCurrentWeight(weightClass)

  const filteredPlayers =
    currentWeight === '全て'
      ? allBoxers
      : allBoxers.filter(
          (boxer) => boxer.category && boxer.category.includes(currentWeight)
        )

  return (
    <Layout>
      <Header displayText="all players" headerStyle="playersPageStyle" />
      <div style={{ height: '90%' }} className="flex flex-col">
        <div className="px-20 mt-10">
          <Tabs
            currentWeight={currentWeight}
            weightClasses={weightClassesForTabs}
            onClick={onClick}
          />
          <hr />
        </div>
        <PlayerCardList players={filteredPlayers || []} />
      </div>
    </Layout>
  )
}

export default PlayersPage
