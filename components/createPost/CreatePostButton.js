import styles from '../../styles/createPost.module.css'
import firebase from '../../firebase/initFirebase'
import { useSession } from 'next-auth/client'
import { useState } from 'react'

export default function CreatePostButton(props) {
  const [session, loading] = useSession()
  const [postContent, setPostContent] = useState(null)
  const time = Date.now()
  const today = new Date(time)
  console.log(today.toUTCString())

  if (props.postContent) {setPostContent({postContent: props.postContent})
} else {null}  

  const sendData = () => {
    try {
      firebase
      .firestore()
      .collection('postData')
      .doc()
      .set({
        postAuthor: session.user.name,
        path: "/cidProfile",
        profileImg: session.user.image,
        postText: props.postText,
        postContent,
        postTime: today.toUTCString(),
        reactionsTotal: 1,
        isliked: false,
        commentCount: 0,
        shareCount: 0,
        sharable: props.shareable,
      }).then(alert('Your Post was Sent!'))
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  return (
    <div className={styles.postButtonDiv}>
      <button className={styles.postButton} onClick={sendData} disabled={!props.disableButton}>Post</button>
    </div>
  )
}