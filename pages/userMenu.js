import Layout from '../components/layouts'
import styles from '../styles/userMenu.module.css'
import { useSession } from 'next-auth/client'
import MenuItems from '../components/menuItems/MenuItems'
import menuData from '../config/menuData'
import MenuSignOut from '../components/menuItems/MenuSignOut'
import MenuProfileCard from '../components/menuItems/MenuProfileCard'

export default function UserMenu() {
  const [session, loading] = useSession()

  return (
    <Layout>
      <div className={styles.menuMainDiv}>
        <MenuProfileCard session={session} />
        <MenuItems menuData={menuData} />
        <MenuSignOut />
      </div>
    </Layout>
  )
}