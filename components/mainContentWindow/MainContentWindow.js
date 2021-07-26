import postData from '../../config/postData'
import styles from '../../styles/mainContent.module.css'
import CreatePost from './CreatePost'
import Posts from './posts/Posts'
import StorySection from './stories/StorySection'

export default function MainContentWindow() {
    return (
      <div className={styles.mainContentDiv}>
        <StorySection />
        <CreatePost />
        <Posts posts={postData} />
      </div>
    )
  }