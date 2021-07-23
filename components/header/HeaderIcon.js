import Link from 'next/link'
import Image from 'next/Image'
import styles from '../../styles/layout.module.css'

export default function HeaderIcon() {
  return (
    <Link href="/">
      <div className={styles.headerIcon}>
        <Image className={styles.headImage} src="/../public/images/logo-1.jpeg" width="80px" height="60px" />
        <h1 className={styles.headerTitle}>House of Music</h1>
      </div>
    </Link>
  )
}