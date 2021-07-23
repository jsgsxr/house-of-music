import Layout from '../components/layouts'
import styles from '../styles/userHome.module.css'
import { useSession } from 'next-auth/client'
import SignUp from '../pages/signup/SignUp'
import Loading from './signup/Loading'

export default function UserHome() {
  const [session, loading] = useSession();

  if (session) {
    return (
    <Layout>
      <div className={styles.userHomeBody}>
        
      </div>
    </Layout>
  )
    } if (loading) {
      return <Loading />
    } else {
      return <SignUp />
    }
}