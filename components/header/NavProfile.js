import { useSession, signOut } from 'next-auth/client'
import styles from '../../styles/userHome.module.css'

export default function NavProfile() {
  const [session, loading] = useSession();
  console.log(session.user.image);

  return (
    <div className={styles.profileDiv}>
      <img className={styles.profileImg} src={session.user.image} width="40px" height="40px" />
      <p className={styles.userName}>{session.user.name.split(" ")[0]}</p>
    </div>
  )
}
