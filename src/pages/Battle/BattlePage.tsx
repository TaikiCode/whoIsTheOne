import { VFC } from 'react'
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

  return (
    <div className="h-screen">
      <div className="h-1/4 flex flex-col justify-evenly items-center pt-10">
        <h1 className="text-5xl uppercase italic">Which is the stronger?</h1>
        <div className="text-lg">- {weightClass} -</div>
      </div>
      <BattleField boxersList={boxersList} />
    </div>
  )
}

export default BattlePage
