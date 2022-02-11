import { VFC } from 'react'
import './playerCard.scss'

interface Props {
  name: string
  image: string
  weightClass: string
  record: string
}

const PlayerCard: VFC<Props> = ({ name, image, weightClass, record }) => {
  return (
    <div className="px-1 transform transition duration-500 hover:rotate-6 cursor-pointer m-6">
      <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-2xl">
        <img className="w-full" src={image} alt={name} />
        <div className="py-3 text-center">
          <div className="font-serif font-extrabold text-lg">{name}</div>
          <span className="text-gray-700 text-sm font-mono">{weightClass}</span>
          <p className="text-gray-700 text-xs">
            {record}
            {/* {boxer.win}-{boxer.lose}-{boxer.draw} {boxer.KO}KOs */}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PlayerCard
