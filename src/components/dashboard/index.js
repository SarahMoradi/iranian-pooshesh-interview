import Header from './header/Hedaer'
import Options from './options/options'
import Statistics from './statistics'
import styles from './index.module.css'

const Dashboard = () => {
  return (
    <div className={styles.dashboard_page__container}>
      <Header />
      <div className={styles.option_list__container}>
        <Options />
      </div>
      <div className={styles.statistics__container}>
        <Statistics />
      </div>
    </div>
  )
}
export default Dashboard
