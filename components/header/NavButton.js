import Link from "next/link";
import styles from '../../styles/layout.module.css' 

const NavButton = props => (
  <Link href={props.path}>
    <div className={styles.navButton}>
      <div className={styles.navIcon}>{props.icon}</div>
      <span className={styles.navLabel}>{props.label}</span>
    </div>
  </Link>
);
  
export default NavButton;