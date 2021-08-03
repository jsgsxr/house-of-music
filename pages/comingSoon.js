import Layout from '../components/layouts'
import { useRouter } from 'next/router'
import styles from '../styles/shortcuts.module.css'

export default function ComingSoon() {
  const router = useRouter()

  return (
    <Layout>
      <div className={styles.comingSoonMain}>
        <div className={styles.comingSoonOpaque}>
          <div className={styles.comingSoonTitle}>
            <h1 className={styles.titleH1}>
              Coming Soon!
            </h1>
          </div>
          <div className={styles.comingSoonBody}>
            <h3 className={styles.subTitleH3}>
              Still getting the perfect mix for this track! 
            </h3>
            <p className={styles.subTitleP}>
              ~ Come back soon and tell us how it sounds ~
            </p>
          </div>
          <button className={styles.backButton} onClick={() => router.back()}>Rewind</button>
        </div>
      </div>
    </Layout>
  )
}