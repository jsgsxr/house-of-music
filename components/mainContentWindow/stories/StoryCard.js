import styles from '../../../styles/mainContent.module.css'
import Link from 'next/link'
import Image from 'next/image'

const StoryCards = props => (
    <Link href={props.path} passHref={true}>
      <div className={styles.storyCard}>
        <div className={styles.storyContentDiv}>
          <Image className={styles.storyContent} src={props.storyContent} position="relative" layout='fill' objectFit='cover' alt="story" />
        </div>
        <div className={styles.storyProfileImgDiv}>
          <Image className={styles.storyProfileImg} src={props.profileImg} width="35px" height="35px" alt="profile" />
        </div>
        <p className={styles.storyLabel}>{props.label}</p>
      </div>
    </Link>
  );
    
  export default StoryCards;