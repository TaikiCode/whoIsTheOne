import { VFC, useState } from 'react'
import { useParams } from 'react-router-dom'
import BattleField from '../../components/battleField/BattleField'
import BattleResult from '../../components/battleResult/BattleResult'
import { allBoxers } from '../../data/allPlayers'

const BattlePage: VFC = () => {
  const { slug } = useParams<{ slug: string }>()
  // 階級
  const weightClass = slug
  const boxersList = allBoxers
    .filter((item) => item.weightClass === weightClass)
    .map((data) => data && { ...data, score: 0 })

  const [playersData, setPlayersData] = useState<any[]>(boxersList)
  const [isGameOver, setIsGameOver] = useState<boolean>(false)

  const renderComponent = () => {
    if (isGameOver)
      return (
        <BattleResult playersData={playersData} weightClass={weightClass} />
      )
    return (
      <BattleField
        playersData={playersData}
        setPlayersData={setPlayersData}
        setIsGameOver={setIsGameOver}
        weightClass={weightClass}
      />
    )
  }

  return <div className="h-screen">{renderComponent()}</div>
}

export default BattlePage
