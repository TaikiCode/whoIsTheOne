import { VFC } from 'react'
import styles from './homePage.module.scss'
import homeImage from '../../assets/home.png'
import CustomHomeButton from '../../components/buttons/customHomeButton/CustomHomeButton'

const HomePage: VFC = () => {
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
            <CustomHomeButton text="WATCH PLAYERS" />
            <CustomHomeButton text="LET'S BATTLE!" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
