import { useSession } from 'next-auth/client'
import styles from '../../styles/userHome.module.css'

export default function NavProfile() {
  const [session, loading] = useSession();
  console.log(session.user.name);

  return (
    <div className={styles.profileDiv}>
      <img className={styles.profileImg} src={session.user.image} width="40px" height="40px" alt="profile image" />
      <p className={styles.userName}>{session.user.name.split(" ")[0]}</p>
    </div>
  )
}
