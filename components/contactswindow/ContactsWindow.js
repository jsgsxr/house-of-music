import styles from '../../styles/contacts.module.css'
import ContactMessenger from './contacts/ContactMessenger'
import ContactRequests from './ContactsRequests'
import YourPages from './YourPages'

export default function ContactsWindow() {
    return (
      <div className={styles.contactsDiv}>
        <ContactRequests />
        <div className={styles.contactsDivider} />
        <YourPages />
        <div className={styles.contactsDivider} />
        <ContactMessenger />
      </div>
    )
  }