import styles from '../../../styles/contacts.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faSearch, faEllipsisH } from '@fortawesome/free-solid-svg-icons' 
import Contacts from '../../contactswindow/contacts/Contacts'
import contactData from '../../../config/contactData'

export default function ContactMessenger() {
  return (
    <div className={styles.messengerMainDiv}>
      <div className={styles.messengerHeaderDiv}>
          <p className={styles.contactsTitle}>Contacts</p>
          <div className={styles.headerIcons}>
            <Link href="/comingSoon" passHref={true}>
              <div className={styles.iconsDiv}>
                <FontAwesomeIcon icon={faPhoneVolume} />
              </div>
            </Link>
            <Link href="/comingSoon" passHref={true}>
              <div className={styles.iconsDiv}>
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </Link>
            <Link href="/comingSoon" passHref={true}>
              <div className={styles.iconsDiv}>
                <FontAwesomeIcon icon={faEllipsisH} />
              </div>
            </Link>
          </div>
      </div>
      <div className={styles.contactsMessengerDiv}>
        <Contacts contacts={contactData} />
      </div>
    </div>
  )
}