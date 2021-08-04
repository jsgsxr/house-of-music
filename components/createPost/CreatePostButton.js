import styles from '../../styles/createPostPopup.module.css'
import firebase from '../../firebase/initFirebase'
import { useSession } from 'next-auth/client'

export default function CreatePostButton(props) {
  const [session] = useSession()
 
  const time = Date.now()
  const today = new Date(time)

  const sendData = async () => {
    const obj = {
      postAuthor: session.user.name,
      path: "/meow",
      profileImg: session.user.image,
      postText: props.postText,
      postTime: today.toUTCString(),
      reactionsTotal: 0,
      userLikes: [],
      commentCount: 0,
      commentData: [],
      shareCount: 0,
      sharable: props.shareable,
    };
    if (props.postContent) {
      obj.postContent = props.postContent.name
    } 
  
    firebase.firestore().collection("postData").doc(session.user.name + time).set(obj).then(() => {
        window.location.reload()
    }).catch(err => console.log(err));
  };

  return (
    <div className={styles.postButtonDiv}>
      <button type="button" className={styles.postButton} onClick={sendData} disabled={!props.disableButton}>Post</button>
    </div>
  )
}