import styles from '../styles/layout.module.css'

export default function Layout({ children, page }) {
  return (
    <div className={styles.root}>
      <header className={styles.header}>

      </header>
      <main className={page}>{children}</main>
      <footer>

      </footer>
    </div>
  )
}