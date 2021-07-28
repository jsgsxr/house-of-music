import styles from '../../../styles/contacts.module.css'
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
            <div className={styles.iconsDiv}>
              <FontAwesomeIcon icon={faPhoneVolume} />
            </div>
            <div className={styles.iconsDiv}>
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className={styles.iconsDiv}>
              <FontAwesomeIcon icon={faEllipsisH} />
            </div>
          </div>
      </div>
      <div className={styles.contactsMessengerDiv}>
        <Contacts contacts={contactData} />
      </div>
    </div>
  )
}