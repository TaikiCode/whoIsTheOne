import React from 'react'
import { allBoxers } from '../../data/players'
import PlayerCard from '../atom/playerCard/PlayerCard'

const PlayerCardList = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center items-center py-5">
            {allBoxers.map((boxer, index) => <PlayerCard key={index} {...boxer} />)} 
        </div>
    )
}

export default PlayerCardList
