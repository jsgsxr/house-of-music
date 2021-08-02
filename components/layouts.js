import Head from 'next/head'
import styles from '../styles/layout.module.css'
import Header from '../components/header/Header'
import Footer from './footer/Footer'

export default function Layout({ children }) {

  return (
    <div className={styles.root}>
      <Head>
        <title>House of Music - Find Local Musicians!</title>
        <meta name="description" content="Meet Local Musicians" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.body}>{children}</main>
      <Footer />
    </div>
  )
}