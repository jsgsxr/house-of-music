import ShortcutCard from './ShortcutCard';
import styles from '../../styles/shortcuts.module.css'

const Shortcuts = props => (
  <div className={styles.navDiv}>
    {props.shortcuts.map(button => (
      <ShortcutCard
        key={button.path}
        path={button.path}
        label={button.label}
        icon={button.icon}
      />
    ))}
  </div>
)

export default Shortcuts;