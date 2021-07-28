import firebase from '../../firebase/initFirebase'

const CreatePost = () => {
  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection('postData')
        .doc()
        .set({
          postAuthor: "Cid",
          path: "/cidProfile",
          profileImg: '/images/cid.jpeg',
          postText: 'My New Ride',
          postContent: "I like Pie",
          reactionsTotal: 25,
          isliked: false,
          commentCount: 6,
          shareCount: 9,
          sharable: false,
        }).then(alert('Data was successfully sent to cloud firestore!'))
    } catch (error) {
        console.log(error)
        alert(error)
    }
  }

  return (
    <div style={{ margin: '5px 0' }}>
      <button onClick={sendData}>Create Post</button>
    </div>
  )
}

export default CreatePost