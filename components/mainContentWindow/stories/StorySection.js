import Stories from "./Stories";
import styles from '../../../styles/mainContent.module.css'
import storyData from "../../../config/storyData";
import CreateStory from "./CreateStory";

export default function StorySection() {
  return (
    <div className={styles.storiesMainDiv}>
      <CreateStory />
      <Stories stories={storyData} />
    </div>
  )
}