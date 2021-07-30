import ProfileShortcut from './ProfileShortcut'
import styles from '../../styles/shortcuts.module.css'
import Shortcuts from './Shortcuts'
import shortcutData from '../../config/shortcutData'
import CreatePost from '../../functions/cloudFirestore/createPost'

export default function ShortcutWindow() {
  return (
    <div className={styles.shortcutsDiv}>
      <ProfileShortcut />
      <Shortcuts className={styles.topShortcuts} shortcuts={shortcutData} />
      <div className={styles.shortcutsDivider} />
    </div>
  )
}