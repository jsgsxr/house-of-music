import styles from '../../styles/createPost.module.css'
import firebase from '../../firebase/initFirebase'
import { useSession } from 'next-auth/client'

export default function CreatePostButton(props) {
  const [session, loading] = useSession()
 
  const time = Date.now()
  const today = new Date(time)
  console.log(today.toUTCString())

  const sendData = () => {
    if (props.postContent) {  
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
    } else {
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
  }

  return (
    <div className={styles.postButtonDiv}>
      <button className={styles.postButton} onClick={sendData} disabled={!props.disableButton}>Post</button>
    </div>
  )
}