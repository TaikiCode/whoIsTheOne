import { VFC, useState } from 'react'
import BattleCardArea from '../../components/battle/BattleCardArea'
import Navbar from '../../components/navbar/Navbar'
import { allBoxers } from '../../data/allPlayers'
import Functions from '../../lib/swipeAnimation'

const BattlePage: VFC = () => {
  const [playersData, setPlayersData] = useState([])
  const [opponentIndex, setOpponentIndex] = useState(0)
  const [isDone, setIsDone] = useState(false)

//   const allPlayers = allBoxers

  const allPlayers = allBoxers.filter(
    (item) => item.weightClass === 'バンタム級'
  )
  console.log(allPlayers)

  const functions = Functions({ isDone, setIsDone })

  return (
    <div className="h-screen">
      <div className="h-1/4 flex flex-col justify-evenly items-center pt-10">
        <h1 className="text-5xl uppercase italic">
          Which is the stronger?
        </h1>
        <div className="text-lg">- バンタム級 -</div>
      </div>
      <BattleCardArea
        playersData={playersData}
        setPlayersData={setPlayersData}
        {...functions}
        isDone={isDone}
        setIsDone={setIsDone}
        boxersList={allPlayers}
        opponentIndex={opponentIndex}
        setOpponentIndex={setOpponentIndex}
      />
    </div>
  )
}

export default BattlePage
