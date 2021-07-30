import styles from '../../styles/createPost.module.css'
import firebase from '../../firebase/initFirebase'
import { useSession } from 'next-auth/client'

export default function CreatePostButton(props) {
  const [session, loading] = useSession()
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
        postContent: props.postContent.name,
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