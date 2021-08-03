import Layout from '../components/layouts'
import styles from '../styles/userMenu.module.css'
import MenuItems from '../components/menuItems/MenuItems'
import menuData from '../config/menuData'
import MenuSignOut from '../components/menuItems/MenuSignOut'
import MenuProfileCard from '../components/menuItems/MenuProfileCard'

export default function UserMenu(props) {

  return (
    <Layout>
      <div className={styles.menuMainDiv}>
        <MenuProfileCard />
        <MenuItems menuData={menuData} />
        <MenuSignOut />
      </div>
    </Layout>
  )
}