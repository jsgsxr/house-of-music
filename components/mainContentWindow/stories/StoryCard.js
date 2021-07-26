import styles from '../../../styles/mainContent.module.css'
import Link from 'next/link'

const StoryCards = props => (
    <Link href={props.path} passHref={true}>
      <div className={styles.storyCard}>
        <div className={styles.storyContent}>{props.storyContent}</div>
        <div className={styles.storyProfileImg}>{props.icon}</div>
        <p className={styles.storyLabel}>{props.label}</p>
      </div>
    </Link>
  );
    
  export default StoryCards;