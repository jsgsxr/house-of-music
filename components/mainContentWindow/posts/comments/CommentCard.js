import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import styles from '../../../../styles/comments.module.css'
import Image from 'next/image'

export default function CommentCard(props) {
  return (
    <div className={styles.commentCardMainDiv}>
      <div className={styles.commentImgDiv}>
        <Image className={styles.commentImg} src={props.commentIMG} width="40px" height="40px" alt="profile" />
      </div>
      <div className={styles.commentColumnDiv}>
        <div className={styles.commentContentDiv}>
          <p className={styles.commentAuthor}>{props.commentName}</p>
          <p className={styles.commentText}>{props.commentText}</p>
        </div>
        <div className={styles.commentReactionDiv}>
          <p className={styles.commentLike}>Like</p>
          <FontAwesomeIcon className={styles.dotIcon} icon={faCircle} />
          <p className={styles.commentReply}>Reply</p>
          <FontAwesomeIcon className={styles.dotIcon} icon={faCircle} />
          <p className={styles.commentTime}>9h</p>
        </div>
      </div>
    </div>
  )
}