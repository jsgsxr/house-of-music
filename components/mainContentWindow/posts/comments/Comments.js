import styles from '../../../../styles/comments.module.css'
import CommentCard from './CommentCard'
import { useState } from 'react'

export default function Comments(props) {
  const [showMore, setShowMore] = useState(false)
  const [commentShownCount, setCommentShownCount] = useState(2)

  const handleMoreComments = () => {
    !showMore ? setShowMore(true) : setShowMore(false)
    !showMore ? setCommentShownCount(props.commentData.length) : setCommentShownCount(2)
  }
  
  return (
    <div className={styles.commentsMainDiv}>
      {props.commentCount > 2 && !showMore ? <p className={styles.moreCommentsLink} onClick={handleMoreComments}>View {props.commentCount - 2} more comments</p> : null}
      {props.commentData && props.commentData.slice(0, commentShownCount).map(button => (
        <CommentCard
        key={button.path}
        ID={props.ID}
        commentName={button.commentName}
        commentIMG={button.commentIMG}
        commentText={button.commentText}
        reactionsTotal={button.reactionsTotal}
        commentLikes={button.commentLikes}
        commentTime={button.commentTime}
        session={props.session}
        />
      ))}
    </div>
  )
}
