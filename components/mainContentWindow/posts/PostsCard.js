import Link from 'next/link'
import Image from 'next/image'
import styles from '../../../styles/posts.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faUserFriends, faEllipsisH, faThumbsUp, faCommentAlt, faShareSquare, faArrowDown } from '@fortawesome/free-solid-svg-icons'

function PostCards(props) {
  const [openComment, setOpenComment] = useState(false)
  const [isliked, setIsLiked] = useState(props.isliked)

  const handleOpenComment = () => {
    {openComment ? (setOpenComment(false)) : (setOpenComment(true))}
    console.log(openComment);
  }

  const handleLike = () => {
    {isLiked ? (setIsLiked(false)) : (setIsLiked(true));
    console.log("Liked?" + props.isLiked);}
  }

  return (
    <div className={styles.postCard}>
      <div className={styles.postHeaderDiv}>
        <div className={styles.postHeaderInfoDiv}>
            <Image className={styles.postProfileImg} src={props.profileImg} width="40px" height="40px" alt="profile" /> 
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
      <div className={styles.postTextDiv}>
        <p className={styles.postText}>{props.postText}</p>  
      </div>
      
      {props.postContent ? (
        <div className={styles.postContentDiv}>
          <Image src={props.postContent} position="relative" layout='fill' objectFit='cover' alt="story" />
        </div>) : (null)}
      <div className={styles.reactionsMainDiv}>
      {(props.reactionsTotal > 0) ? (
        <div className={styles.reactionCountMainDiv}>
          <div className={styles.reactionCount}>
            <div className={styles.reactionIconsDiv}>
              <FontAwesomeIcon icon={faThumbsUp} />  
            </div>
            <p className={styles.totalReactions}>{props.reactionsTotal}</p>
          </div>
          <div className={styles.commentShareCountDiv}>
            {(props.commentCount > 0) ? (<p className={styles.commentCountText}>{props.commentCount} Comments</p>) : (null)}
            {(props.shareCount > 0) ? (<p className={styles.shareCountText}>{props.shareCount} Shares</p>) : (null)}
          </div>
        </div>) : (null)}
        <div className={styles.likeCommentShareDiv}>
          <div className={styles.reactActionsMain}>
            <div className={styles.reactActionDiv}>
              <div className={isliked ? (styles.likeActionDivLiked) : (styles.likeActionDiv)} onClick={handleLike}>  
                <FontAwesomeIcon icon={faThumbsUp} />
                <p className={styles.reactActionText}>Like</p>
              </div>
            </div> 
            <div className={styles.reactActionDiv}>
              <FontAwesomeIcon icon={faCommentAlt} />
              <p className={styles.reactActionText}>Comment</p>
            </div>
            {props.sharable ?
            (<div className={styles.reactActionDiv}>
              <FontAwesomeIcon icon={faShareSquare} />
              <p className={styles.reactActionText}>Share</p>
            </div>) : (null)}
          </div>
          <div className={styles.openCommentsSelector} onClick={handleOpenComment} >
            <Image className={styles.userProfileImg} src={props.session.user.image} width="25px" height="25px" alt="profile" />
            <FontAwesomeIcon className={styles.arrowDownIcon} icon={faArrowDown} size="sm" />
          </div>
        </div>
        {openComment ? (<div className={styles.commentBorderDiv} />) : (null)}
        {openComment ? (<div className={styles.commentsMainDiv}>
          <div className={styles.commentsHeader}>
            <Image className={styles.userProfileImg} src={props.session.user.image} width="35px" height="35px" alt="profile" />
            <input className={styles.commentInput} id="comment" name="comment" placeholder="Write a comment. . ." />
          </div>
        </div>) : (null)}
      </div>
    </div>
  )
}
    
export default PostCards;