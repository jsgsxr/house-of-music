import Link from 'next/link'
import Image from 'next/image'
import styles from '../../../styles/posts.module.css'
import firebase from '../../../firebase/initFirebase'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faUserFriends, faEllipsisH, faThumbsUp, faCommentAlt, faShareSquare, faArrowDown, faGlobeAsia } from '@fortawesome/free-solid-svg-icons'
import Comments from './comments/Comments'

function PostCards(props) {
  let liked = false
  if (props.userLikes.includes(props.session.user.name)) {
    liked = true
  }
  const [openComment, setOpenComment] = useState(false)
  const [isliked, setIsLiked] = useState(liked)
  const [commentText, setCommentText] = useState("")
  const time = Date.now()
  const today = new Date(time)
  let [reactions, setReactions] = useState(props.userLikes.length)
  let dbCommentCount = props.commentCount

  const handleOpenComment = () => {
    {openComment ? (setOpenComment(false)) : (setOpenComment(true))}
    console.log(openComment)
  }

  const handleLike = async() => {
    {isliked ? (setIsLiked(false)) : (setIsLiked(true))}
    {!isliked ? firebase.firestore().collection("postData").doc(props.ID).update({
      reactionsTotal: reactions + 1,
      userLikes: firebase.firestore.FieldValue.arrayUnion(props.session.user.name)
    }) : firebase.firestore().collection("postData").doc(props.ID).update({
      reactionsTotal: reactions,
      userLikes: firebase.firestore.FieldValue.arrayRemove(props.session.user.name)
    })}
    {!isliked ? setReactions(() => reactions + 1) : setReactions(() => reactions - 1)}
    console.log("Liked?" + liked)
  }

  const handleTextInput = event => {
    setCommentText(event.target.value)
  }

  const handleEnterKey = async(event) => {
    if (event.keyCode === 13) {
      firebase.firestore().collection("postData").doc(props.ID).update({
        commentCount: (dbCommentCount || 0) + 1,
        commentData: firebase.firestore.FieldValue.arrayUnion({
          commentIMG: props.session.user.image,
          commentLikes: [],
          commentName: props.session.user.name,
          commentText: commentText,
          commentTime: today.toUTCString(),
          path: props.session.user.name,
          reactionsTotal: 0,
        })
      }).then(() => {
        window.location.reload()
      })
    }
  }

  return (
    <div className={styles.postCard}>
      <div className={styles.postHeaderDiv}>
        <div className={styles.postHeaderInfoDiv}>
          <Link href="/comingSoon" passHref={true}> 
            <Image className={styles.postProfileImg} src={props.profileImg} width="40px" height="40px" alt="profile" /> 
          </Link>
          <div className={styles.postHeaderInfo}>
            <Link href="/comingSoon" passHref={true}>  
              <p className={styles.postAuthor}>{props.postAuthor}</p>
            </Link>  
            <p className={styles.postData}>
              5h 
              <FontAwesomeIcon className={styles.dataDot} icon={faCircle} size="sm" />
              {!props.sharable ? <FontAwesomeIcon icon={faUserFriends} size="sm" /> :
              <FontAwesomeIcon icon={faGlobeAsia} size="sm" />}
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
      {(reactions > 0) ? (
        <div className={styles.reactionCountMainDiv}>
          <div className={styles.reactionCount}>
            <div className={styles.reactionIconsDiv}>
              <FontAwesomeIcon icon={faThumbsUp} />  
            </div>
            <p className={styles.totalReactions}>{reactions}</p>
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
            <div className={styles.reactActionDiv} onClick={handleOpenComment}>
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
          <Comments commentCount={props.commentCount} commentData={props.commentData} session={props.session} ID={props.ID} />
          <div className={styles.commentsHeader}>
            <Image className={styles.userProfileImg} src={props.session.user.image} width="35px" height="35px" alt="profile" />
            <input className={styles.commentInput} id="comment" name="comment" placeholder="Write a comment. . ." onKeyDown={handleEnterKey} onChange={handleTextInput} />
          </div>
        </div>) : (null)}
      </div>
    </div>
  )
}
    
export default PostCards