import styles from '../../../styles/contacts.module.css'
import Link from 'next/link'
import Image from 'next/image'

const ContactCards = props => (
    <Link href={props.path} passHref={true}>
      <div className={styles.contactCard}>
        <div className={styles.profilePic}>
          <Image className={styles.profileImg} src={props.profileImg} width="30px" height="30px" />
        </div>
        <p className={styles.contactLabel}>{props.label}</p>
      </div>
    </Link>
  );
    
  export default ContactCards;