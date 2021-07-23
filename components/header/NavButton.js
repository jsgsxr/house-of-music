import Link from "next/link";
import Tippy from "@tippyjs/react";
import styles from '../../styles/layout.module.css' 

const NavButton = props => (
  <Link href={props.path} passHref={true}>
    <Tippy content={<span className={styles.toolTip}>{props.label}</span>}>
      <div className={styles.navButton}>
        <div className={styles.navIcon}>{props.icon}</div>
      </div>
    </Tippy>
  </Link>
);
  
export default NavButton;