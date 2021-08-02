import styles from '../../styles/layout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTv, faBell, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className={styles.footerMainDiv}>
      <div className={styles.footerHomeDiv}>
        <FontAwesomeIcon icon={faHome} />
        <p className={styles.footerMenuText}>User Home</p>
      </div>
      <div className={styles.footerWatchDiv}>
        <FontAwesomeIcon icon={faTv} />
        <p className={styles.footerMenuText}>Watch</p>
      </div>
      <div className={styles.notificationsDiv}>
        <FontAwesomeIcon icon={faBell} />
        <p className={styles.footerMenuText}>Notifications</p>
      </div>
      <div className={styles.footerMenuDiv}>
        <FontAwesomeIcon icon={faBars} />
        <p className={styles.footerMenuText}>Menu</p>
      </div>
    </footer>
  )
}