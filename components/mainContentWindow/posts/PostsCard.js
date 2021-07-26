import Link from 'next/link'
import Image from 'next/image'
import styles from '../../../styles/posts.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PostCards = props => (
    <Link href={props.path} passHref={true}>
      <div className={styles.postCard}>
        <div className={styles.postHeaderDiv}>
          <div className={styles.postHeaderInfoDiv}>
            <Image className={styles.postProfileImg} src={props.profileImg} width="35px" height="35px" alt="profile" />
            <div className={styles.postHeaderInfo}>
              <p className={styles.postLabel}>{props.label}</p>
              <p className={styles.postData}>
                5h * <FontAwesomeIcon icon={} size="sm" />
              </p>
            </div>
          </div>
          <div className={styles.moreIcon}>
            <FontAwesomeIcon icon={} size="lg" />
          </div>
        </div>
        <div className={styles.postContentDiv}>
          {props.postContent}
        </div>
        <div className={styles.reactionsMainDiv}>
          <div className={styles.reactionCount}>
            
          </div>
          <div className={styles.likeCommentShareDiv}>
            
          </div>
          <div className={styles.commentsDiv}>
            
          </div>
        </div>
      </div>
    </Link>
  );
    
  export default PostCards;