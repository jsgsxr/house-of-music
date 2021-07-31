import styles from '../../styles/createPost.module.css'
import firebase from '../../firebase/initFirebase'
import { useSession } from 'next-auth/client'
import { useState } from 'react'

export default function CreatePostButton(props) {
  const [session] = useSession()
  const [loading, setLoading] = useState(true)
 
  const time = Date.now()
  const today = new Date(time)

  const sendData = async() => {
    const db = firebase.firestore()
    if (props.postContent) {  
      await 
        db.collection('postData')
        .doc()
        .set({
          postAuthor: session.user.name,
          path: "/cidProfile",
          profileImg: session.user.image,
          postText: props.postText,
          postContent: props.postContent.name,
          postTime: today.toUTCString(),
          reactionsTotal: 1,
          isliked: false,
          commentCount: 0,
          shareCount: 0,
          sharable: props.shareable,
        }).then(alert('Your Post was Sent!'))
        setLoading(false)
    } else {
        await
          db.collection('postData')
          .add({
            postAuthor: session.user.name,
            path: "/cidProfile",
            profileImg: session.user.image,
            postText: props.postText,
            postTime: today.toUTCString(),
            reactionsTotal: 1,
            isliked: false,
            commentCount: 0,
            shareCount: 0,
            sharable: props.shareable,
          }).then(alert('Your Post was Sent! (no content)'))
          setLoading(false)
      }
  }

  return (
    <div className={styles.postButtonDiv}>
      <button className={styles.postButton} onClick={!loading && sendData} disabled={!props.disableButton}>Post</button>
    </div>
  )
}