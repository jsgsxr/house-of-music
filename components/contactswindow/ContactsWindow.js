import styles from '../../styles/contacts.module.css'
import ContactRequests from './ContactsRequests'

export default function ContactsWindow() {
    return (
      <div className={styles.contactsDiv}>
        <ContactRequests />
        <div className={styles.contactsDivider} />
      </div>
    )
  }