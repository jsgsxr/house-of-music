import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserFriends, faEllipsisH } from "@fortawesome/free-solid-svg-icons"
import Image from 'next/image'
import styles from '../../styles/contacts.module.css'
import Link from "next/link"

export default function ContactRequests() {
  return (
    <div className={styles.requestsDiv}>
      <div className={styles.requestsTopDiv}>  
        <div className={styles.requestTitleDiv}>
          <FontAwesomeIcon icon={faUserFriends} />
          <p className={styles.requestTitle}>Friend Requests</p>
        </div>
        <FontAwesomeIcon icon={faEllipsisH} className={styles.moreIcon} />
      </div>
      <div className={styles.friendRequestDiv}>
        <Link href="/comingSoon" passHref={true}>
          <div className={styles.profileDiv}>
            <div className={styles.profilePicDiv}>
              <Image src='/images/testprofilepic.jpeg' className={styles.profilePic} alt="profile" width="50px" height="50px" />
            </div>  
            <div className={styles.friendNameDiv}>
              <p className={styles.friendName}>
              周悟颺
              <br />
              1 day ago
              </p>  
            </div>
          </div>
        </Link>
        <div className={styles.confirmDiv}>
          <Link href="/comingSoon" passHref={true}>
            <button className={styles.confirmButton}>Confirm</button>
          </Link>
          <Link href="/comingSoon" passHref={true}>
            <button className={styles.deleteButton}>Delete</button>
          </Link>
        </div>
      </div>
    </div>
  )
}