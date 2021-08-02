import styles from '../../styles/layout.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTv, faBell, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    const router = useRouter()

  return (
    <footer className={styles.footerMainDiv}> 
      <Link href="/userHome" passHref={true}>
        <div className={router.pathname == '/userHome' ? styles.activeActionDiv : styles.footerActionDiv}>
          <FontAwesomeIcon className={styles.footerIcon} icon={faHome} size='2x' />
          <p className={styles.footerMenuText}>User Home</p>
        </div>
      </Link>
      <Link href='/userHome' passHref={true}>
        <div className={router.pathname == '/watch' ? styles.activeActionDiv : styles.footerActionDiv}>
          <FontAwesomeIcon className={styles.footerIcon} icon={faTv} size='2x' />
          <p className={styles.footerMenuText}>Watch</p>
        </div> 
      </Link>
      <Link href='/userHome' passHref={true}>
        <div className={router.pathname == '/notifications' ? styles.activeActionDiv : styles.footerActionDiv}>
          <FontAwesomeIcon className={styles.footerIcon} icon={faBell} size='2x' />
          <p className={styles.footerMenuText}>Notifications</p>
        </div> 
      </Link>
      <Link href='/userMenu' passHref={true}>
        <div className={router.pathname == '/userMenu' ? styles.activeActionDiv : styles.footerActionDiv}>
          <FontAwesomeIcon className={styles.footerIcon} icon={faBars} size='2x' />
          <p className={styles.footerMenuText}>Menu</p>
        </div>
      </Link>
    </footer>
  )
}