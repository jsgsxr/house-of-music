import Layout from '../components/layouts'
import styles from '../styles/userHome.module.css'
import { useSession } from 'next-auth/client'
import SignUp from '../pages/signup/SignUp'
import Loading from './signup/Loading'
import ShortcutWindow from '../components/shortcutwindow/ShortcutWindow'
import ContactsWindow from '../components/contactswindow/ContactsWindow'

export default function UserHome() {
  const [session, loading] = useSession();

  if (session) {
    return (
    <Layout>
      <div className={styles.userHomeBody}>
        <div className={styles.shortcutWindow}>
          <ShortcutWindow />
        </div>
        <div className={styles.mainContentWindow}>

        </div>
        <div className={styles.contactsWindow}>
          <ContactsWindow />
        </div>
      </div>
    </Layout>
  )
    } if (loading) {
      return <Loading />
    } else {
      return <SignUp />
    }
}