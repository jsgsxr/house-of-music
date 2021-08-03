import styles from '../../styles/userMenu.module.css'
import { useSession } from 'next-auth/client'
import Image from 'next/image'
import Link from 'next/link'

export default function MenuSignOut() {
  const [session, loading] = useSession()

  return (
    <Link href="/comingSoon" passHref={true}>
      <div className={styles.menuItemDiv}>
        <Image className={styles.menuProfileImg} src={!loading ? session.user.image : null} width="60px" height="60px" alt="profile" />
        <div className={styles.itemDividerDiv}>
          <p className={styles.menuProfileName}>{!loading ? session.user.name : null}</p>
          <p className={styles.menuItemSubText}>Edit Your Profile</p>  
        </div>
      </div>
    </Link>
  )
}