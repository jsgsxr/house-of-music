import NavButton from "./NavButton";
import styles from '../../styles/layout.module.css'

const NavLinks = props => (
  <div className={styles.navDiv}>
    {props.navButtons.map(button => (
      <NavButton
        key={button.path}
        path={button.path}
        label={button.label}
        icon={button.icon}
      />
    ))}
  </div>
)

export default NavLinks;