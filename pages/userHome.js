import Layout from '../components/layouts'
import styles from '../styles/userHome.module.css'
import { useState } from 'react'
import { useSession } from 'next-auth/client'
import Loading from './signup/Loading'
import ShortcutWindow from '../components/shortcutwindow/ShortcutWindow'
import ContactsWindow from '../components/contactswindow/ContactsWindow'
import MainContentWindow from '../components/mainContentWindow/MainContentWindow'
import CreatePostPopup from "../components/createPost/createPostPopup"
import Home from './index'

export default function UserHome() {
  const [session, loading] = useSession();
  const [openPost, setOpenPost] = useState(false)

  const handleOpen = () => {
    {openPost ? (setOpenPost(false)) : (setOpenPost(true))}
    console.log(openPost)
  }

  if (session) {
    return (
    <Layout>
      <div className={styles.userHomeBody}>
        <div className={styles.shortcutWindow}>
          <ShortcutWindow />
        </div>
        <div className={styles.mainContentWindow}>
          <MainContentWindow handleOpen={handleOpen} />
        </div>
        <div className={styles.contactsWindow}>
          <ContactsWindow />
        </div>
        {openPost ? (<CreatePostPopup session={session} handleOpen={handleOpen} />) : (null)}
      </div>
    </Layout>
  )
    } if (loading) {
      return <Loading />
    } else {
      return <Home />
    }
}