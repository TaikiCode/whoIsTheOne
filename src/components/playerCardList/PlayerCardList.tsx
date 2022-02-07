import { VFC } from 'react'
import PlayerCard from '../atom/playerCard/PlayerCard'

interface Props {
  players: any[]
}

const PlayerCardList: VFC<Props> = ({ players }) => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center py-5">
      {players.map((boxer, index) => (
        <PlayerCard key={index} {...boxer} />
      ))}
    </div>
  )
}

export default PlayerCardList
