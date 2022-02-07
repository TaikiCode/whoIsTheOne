import {VFC} from 'react'
import "./playerCard.scss"

const PlayerCard: VFC = () => {
  return (
    <div className="cardContainer">
      <div className="card">
        <img
          src="https://www.ringtv.com/wp-content/uploads/2016/07/Canelo-Alvarez_Ring-Belts_ratings-crop_Hoganphotos6-270x270.jpg"
        />
        <div className="textArea">
          <div>Canelo Alvarez</div>
          <span>バンタム級</span>
          <p>55-1-2 35 KOs</p>
        </div>
      </div>
    </div>
  )
}

export default PlayerCard

