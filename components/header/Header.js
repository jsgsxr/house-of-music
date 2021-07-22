import HeaderIcon from "./HeaderIcon"
import NavLinks from "./NavLinks"
import { useSession } from 'next-auth/client'
import navButtons from "../../config/buttons"
import styles from '../../styles/layout.module.css'

export default function Header() {
  const [session, loading] = useSession();

  return (
    <header className={styles.header}>
      <HeaderIcon />
      {session ? (<NavLinks navButtons={navButtons} />) : (null)}
    </header>
  )
}