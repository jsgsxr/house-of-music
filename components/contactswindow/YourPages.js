import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisH, faBell, faBullhorn } from "@fortawesome/free-solid-svg-icons"
import Image from 'next/image'
import styles from '../../styles/contacts.module.css'
import Link from "next/link"

export default function YourPages() {
  return (
    <div className={styles.yourPagesDiv}>
      <div className={styles.requestsTopDiv}>  
        <div className={styles.yourPagesTitleDiv}>
          <p className={styles.requestTitle}>Your Pages</p>
        </div>
        <div className={styles.iconsDiv}>
        <FontAwesomeIcon icon={faEllipsisH} className={styles.moreIcon} />
        </div>
      </div>
      <Link href="/coming Soon" passHref={true}>
        <div className={styles.contactCard}>
          <Image className={styles.profileImg} src="/images/steelCircut.jpeg" width="30px" height="30px" alt="profile" />
          <p className={styles.contactLabel}>Steel Circuit</p>
        </div>
      </Link>
      <div className={styles.pagesActionDiv}>
        <Link href="/comingSoon" passHref={true}>
          <div className={styles.pagesAction}>  
            <FontAwesomeIcon icon={faBell} size="lg" />
            <p className={styles.actionLabel}>2 Notifications</p>
          </div>
        </Link>
        <Link href="/comingSoon" passHref={true}>
          <div className={styles.pagesAction}>  
            <FontAwesomeIcon icon={faBullhorn} size="lg" />
            <p className={styles.actionLabel}>Create Promotion</p>
          </div>
        </Link>
      </div>
    </div>
  )
}