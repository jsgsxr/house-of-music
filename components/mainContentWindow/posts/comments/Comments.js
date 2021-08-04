import styles from '../../../../styles/comments.module.css'
import CommentCard from './CommentCard'

export default function Comments(props) {
  
  return (
    <div className={styles.commentsMainDiv}>
      {props.commentCount > 2 ? <p className={styles.moreCommentsLink}>View {props.commentCount - 1} more comments</p> : null}
      {props.commentData && props.commentData.map(button => (
        <CommentCard
        key={button.path}
        commentName={button.commentName}
        commentIMG={button.commentIMG}
        commentText={button.commentText}
        reactionsTotal={button.reactionsTotal}
        commentLikes={button.commentLikes}
        commentTime={button.commentTime}
        />
      ))}
    </div>
  )
}
