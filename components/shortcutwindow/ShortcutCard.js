import styles from '../../styles/shortcuts.module.css'
import Link from 'next/link'

const ShortcutCards = props => (
    <Link href={props.path} passHref={true}>
      <div className={styles.shortcutCard}>
        <div className={styles.shortcutIcon}>{props.icon}</div>
        <p className={styles.shortcutLabel}>{props.label}</p>
      </div>
    </Link>
  );
    
  export default ShortcutCards;