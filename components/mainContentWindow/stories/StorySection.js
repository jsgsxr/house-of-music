import Stories from "./Stories";
import styles from '../../../styles/mainContent.module.css'
import storyData from "../../../config/storyData";
import CreateStory from "./CreateStory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function StorySection() {
  return (
    <div className={styles.storiesMainDiv}>
      <CreateStory />
      <Stories stories={storyData} />
      <div className={styles.storyNextDiv}>
        <FontAwesomeIcon className={styles.nextIcon} icon={faArrowRight} size="lg" />
      </div>
    </div>
  )
}