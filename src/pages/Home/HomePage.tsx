import { VFC } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './homePage.module.scss'
import homeImage from '../../assets/home.png'
import CustomHomeButton from '../../components/buttons/customHomeButton/CustomHomeButton'

const HomePage: VFC = () => {
    const history = useHistory()
    console.log(history)
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
            <CustomHomeButton text="WATCH PLAYERS" onClick={() => history.push('/players')} />
            <CustomHomeButton text="LET'S BATTLE!" onClick={() => history.push('/players')}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
