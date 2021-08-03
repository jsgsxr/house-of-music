import styles from '../../styles/userMenu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { signOut } from 'next-auth/client'

export default function MenuSignOut() {

  const handleLogout = async() => {
    signOut({ callbackUrl: '/' })
  }

  return (
    <div className={styles.menuItemDiv} onClick={handleLogout}>
      <FontAwesomeIcon className={styles.signOutIcon} icon={faSignOutAlt} />
      <div className={styles.itemDividerDiv}>
        <p className={styles.menuItemText}>Sign Out</p>  
      </div>
    </div>
  )
}