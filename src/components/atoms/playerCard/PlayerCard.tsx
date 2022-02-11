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
    <div className="px-2 pb-3 transform transition duration-500 hover:rotate-6 cursor-pointer">
      <div className="bg-white rounded-lg overflow-hidden shadow-2xl mx-2 mb-5">
        <img className="w-full" src={image} alt={name} />
        <div className="py-2 text-center">
          <div className="font-serif font-extrabold text-lg">{name}</div>
          <p className="text-gray-700 text-xs font-mono py-1">{weightClass}</p>
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
