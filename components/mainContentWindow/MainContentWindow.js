import styles from '../../styles/mainContent.module.css'
import CreatePost from './CreatePost'
import StorySection from './stories/StorySection'

export default function MainContentWindow() {
    return (
      <div className={styles.mainContentDiv}>
        <StorySection />
        <CreatePost />
      </div>
    )
  }