import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import firebase from '../../../../firebase/initFirebase'
import styles from '../../../../styles/comments.module.css'
import Image from 'next/image'

export default function CommentCard(props) {
  let isliked = props.commentLikes.includes(props.session.user.name)
  const likeTotal = props.commentLikes.length

  const handleCommentLike = () => {
    {!isliked ? firebase.firestore().collection("postData").doc(props.ID).update({
      commentLikes: firebase.firestore.FieldValue.arrayUnion(props.session.user.name)}
      ) : firebase.firestore().collection("postData").doc(props.ID).update({
        commentLikes: firebase.firestore.FieldValue.arrayRemove(props.session.user.name)}
      )}
  }

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
          <p className={styles.commentLike} onClick={handleCommentLike}>Like</p>
          <FontAwesomeIcon className={styles.dotIcon} icon={faCircle} />
          <p className={styles.commentReply}>Reply</p>
          <FontAwesomeIcon className={styles.dotIcon} icon={faCircle} />
          <p className={styles.commentTime}>9h</p>
        </div>
        {(props.commentLikes.length > 0) ? (
        <div className={styles.reactionBubble}>
          <div className={styles.likeIconDiv}>
            <FontAwesomeIcon icon={faThumbsUp} />
          </div>
          <p className={styles.likeCountNumber}>{likeTotal}</p>
        </div> ) : null}
      </div>
    </div>
  )
}