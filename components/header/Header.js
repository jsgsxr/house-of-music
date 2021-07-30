import HeaderIcon from "./HeaderIcon"
import NavLinks from "./NavLinks"
import { useState } from 'react'
import { useSession, signOut } from 'next-auth/client'
import NavProfile from "./NavProfile"
import navButtons from "../../config/buttons"
import styles from '../../styles/layout.module.css'

export default function Header() {
  const [dropdown, setDropdown] = useState(false)
  const [session, loading] = useSession()
  const handleLogout = () => {
    signOut();
  }
  const handleDropdown = () => {
    {dropdown ? (setDropdown(false)) : (setDropdown(true))}
    console.log(dropdown)
  }

  return (
    <header className={styles.header}>
      <HeaderIcon />
      {session ? (
        <div className={styles.profileNav}>
          <div className={styles.profileDropDiv} onClick={handleDropdown}>
          <NavProfile />
          {dropdown ? (<div className={styles.dropDownDiv}>
            <div className={styles.menuItem} onClick={handleLogout}>
              <p>Sign Out</p>
            </div>
          </div>) : (null)}
          </div>
          <NavLinks navButtons={navButtons} />
        </div>
      ) : (null)}
    </header>
  )
}