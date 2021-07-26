import { useSession } from 'next-auth/client'
import styles from '../../styles/shortcuts.module.css'
import Image from 'next/image'

export default function NavProfile() {
  const [session, loading] = useSession();
  console.log(session.user.name);

  return (
    <div className={styles.shortcutProfile}>
      <Image className={styles.scProfileImg} src={session.user.image} width="40px" height="40px" alt="profile image" />
      <p className={styles.scUserName}>{session.user.name}</p>
    </div>
  )
}
