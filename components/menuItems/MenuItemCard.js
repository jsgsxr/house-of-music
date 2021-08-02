import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faUsers } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import styles from '../../styles/userMenu.module.css'

const MenuItemCard = props => (
  <Link href={props.path} passHref={true}>
    <div className={styles.menuCardDiv}>
      <FontAwesomeIcon className={styles.menuIcon} icon={props.icon} />
      <div className={styles.itemDividerDiv}>
        <p className={styles.menuItemText}>{props.label}</p>  
      </div>
    </div>
  </Link>
)

export default MenuItemCard