import ProfileShortcut from './ProfileShortcut'
import styles from '../../styles/shortcuts.module.css'
import Shortcuts from './Shortcuts'
import shortcuts from '../../config/shortcuts'

export default function ShortcutWindow() {
  return (
    <div className={styles.shortcutsDiv}>
      <ProfileShortcut />
      <Shortcuts className={styles.topShortcuts} shortcuts={shortcuts} />
      <div className={styles.shortcutsDivider} />
    </div>
  )
}