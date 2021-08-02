import styles from '../../styles/userMenu.module.css'
import Image from 'next/image'

export default function MenuSignOut(props) {

  return (
    <div className={styles.menuItemDiv}>
      <Image className={styles.menuProfileImg} src={props.session.user.image} width="60px" height="60px" alt="profile" />
      <div className={styles.itemDividerDiv}>
        <p className={styles.menuProfileName}>{props.session.user.name}</p>
        <p className={styles.menuItemSubText}>Edit Your Profile</p>  
      </div>
    </div>
  )
}