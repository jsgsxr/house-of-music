import Link from 'next/link'
import Image from 'next/image'
import styles from '../../../styles/posts.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faUserFriends, faEllipsisH, faThumbsUp, faCommentAlt, faShareSquare } from '@fortawesome/free-solid-svg-icons'

const PostCards = props => (

  <div className={styles.postCard}>
    <div className={styles.postHeaderDiv}>
      <div className={styles.postHeaderInfoDiv}>
        <Link href="/authorProfile" passHref={true}>
          <Image className={styles.postProfileImg} src={props.profileImg} width="40px" height="40px" alt="profile" />
        </Link>  
        <div className={styles.postHeaderInfo}>
          <Link href="/authorProfile" passHref={true}>  
            <p className={styles.postAuthor}>{props.postAuthor}</p>
          </Link>  
          <p className={styles.postData}>
            5h 
            <FontAwesomeIcon className={styles.dataDot} icon={faCircle} size="sm" />
            <FontAwesomeIcon icon={faUserFriends} size="sm" />
          </p>
        </div>
      </div>
      <div className={styles.moreIcon}>
        <FontAwesomeIcon icon={faEllipsisH} size="lg" />
      </div>
    </div>
    {props.postText ? 
      (<div className={styles.postTextDiv}>
        <p className={styles.postText}>{props.postText}</p>  
      </div>
    ) : (null)}
    <div className={styles.postContentDiv}>
      {props.postContent} 
    </div>
    <div className={styles.reactionsMainDiv}>
      <div className={styles.reactionCountMainDiv}>
        <div className={styles.reactionCount}>
          <div className={styles.reactionIconsDiv}>
            <FontAwesomeIcon icon={faThumbsUp} size="md" />  
          </div>
          <p className={styles.totalReactions}>{props.reactionsTotal}</p>
        </div>
        <div className={styles.commentShareCountDiv}>
          <p className={styles.commentCountText}>{props.commentCount} Comments</p>
          <p className={styles.shareCountText}>{props.shareCount} Shares</p>
        </div>
      </div>
      <div className={styles.likeCommentShareDiv}>
        <div className={styles.reactActionDiv}>
          <div className={styles.likeActionDiv}>  
            <FontAwesomeIcon icon={faThumbsUp} size="md" />
            <p className={styles.reactActionText}>Like</p>
          </div>
        </div> 
        <div className={styles.reactActionDiv}>
          <FontAwesomeIcon icon={faCommentAlt} size="md" />
          <p className={styles.reactActionText}>Comment</p>
        </div>
        {props.sharable ?
        (<div className={styles.reactActionDiv}>
          <FontAwesomeIcon icon={faShareSquare} size="md" />
          <p className={styles.reactActionText}>Share</p>
        </div>) : (null)}
      </div>

    </div>
  </div>

);
    
export default PostCards;