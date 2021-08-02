import Layout from '../components/layouts'
import styles from '../styles/userMenu.module.css'
import MenuItems from '../components/menuItems/MenuItems'
import menuData from '../config/menuData'
import MenuSignOut from '../components/menuItems/MenuSignOut'

export default function UserMenu() {

  return (
    <Layout>
      <div className={styles.menuMainDiv}>
        <MenuItems menuData={menuData} />
        <MenuSignOut />
      </div>
    </Layout>
  )
}