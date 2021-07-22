import styles from '../styles/layout.module.css'
import Header from '../components/header/Header'

export default function Layout({ children, page }) {
  return (
    <div className={styles.root}>
      <Header />
      <main className={page}>{children}</main>
      <footer>

      </footer>
    </div>
  )
}