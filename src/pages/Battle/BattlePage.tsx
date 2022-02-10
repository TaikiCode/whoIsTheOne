import { VFC, useState } from 'react'
import { useParams } from 'react-router-dom'
import BattleField from '../../components/battleField/BattleField'
import { allBoxers } from '../../data/allPlayers'



const BattlePage: VFC = () => {
  const { slug } = useParams<{ slug: string }>()
  // 階級
  const weightClass = slug
  const boxersList = allBoxers.filter(
    (item) => item.weightClass === weightClass
  )

  const [playersData, setPlayersData] = useState<any[]>(boxersList)

  console.log(playersData)

  return (
    <div className="h-screen">
      <BattleField playersData={playersData} setPlayersData={setPlayersData} weightClass={weightClass} />
    </div>
  )
}

export default BattlePage
