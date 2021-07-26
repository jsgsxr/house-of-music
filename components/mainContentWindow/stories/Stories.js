import StoryCard from './StoryCard';
import styles from '../../../styles/mainContent.module.css'

const Stories = props => (
  <div className={styles.storyDiv}>
    {props.stories.map(button => (
      <StoryCard
        key={button.path}
        path={button.path}
        label={button.label}
        profileImg={button.profileImg}
        storyContent={button.storyContent}
      />
    ))}
  </div>
)

export default Stories;