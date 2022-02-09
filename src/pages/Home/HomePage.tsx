import { VFC } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './homePage.module.scss'
import homeImage from '../../assets/home.png'
import CustomButton from '../../components/atom/customButton/CustomButton'

const HomePage: VFC = () => {
  const history = useHistory()
  return (
    <div style={{ backgroundColor: '#333' }}>
      <div className={styles.homeContainer}>
        <div
          className={styles.imageArea}
          style={{ backgroundImage: `url(${homeImage})` }}
        />
        <div className={styles.contentArea}>
          <h1>Who is The One ?</h1>
          <p>
            I hated every minute of training, but I said, <br />
            "Don't quit. Suffer now and live the rest of your life as a
            champion."
          </p>
          <div>
            <CustomButton className="homeBtn" onClick={() => history.push('/players')}><span />{"WATCH PLAYERS"}</CustomButton>
            <CustomButton className="homeBtn" onClick={() => history.push('/battle')}><span />{"LET'S BATTLE!"}</CustomButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
