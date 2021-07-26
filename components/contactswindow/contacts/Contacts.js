import ContactCard from '../contacts/ContactCard';
import styles from '../../../styles/shortcuts.module.css'

const Contacts = props => (
  <div className={styles.navDiv}>
    {props.contacts.map(button => (
      <ContactCard
        key={button.path}
        path={button.path}
        label={button.label}
        profileImg={button.profileImg}
      />
    ))}
  </div>
)

export default Contacts;