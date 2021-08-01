import styles from '../../styles/mainContent.module.css'
import CreatePost from './CreatePost'
import Posts from './posts/Posts'
import StorySection from './stories/StorySection'
import { useSession } from 'next-auth/client'
import React, { useEffect, useState } from 'react'
import firebase from '../../firebase/initFirebase'

export default function MainContentWindow(props) {
  const [session] = useSession()
  const [postData, setPostData] = useState([])
  const [itemID, setItemID] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async() => {
    const response = firebase.firestore().collection("postData").orderBy("postTime", "desc")
    const data = await response.get()
    data.docs.map((item) => {
      let posts = item.data()
      posts.id = item.id
      console.log(item.data())
      setPostData(postData => [...postData, posts])
    })
  }

  useEffect(() => {
    fetchData()
    setLoading(false)
  }, [])
  console.log(postData)
 
  return (
    <div className={styles.mainContentDiv}>
      <StorySection session={session} />
      <CreatePost session={session} handleOpen={props.handleOpen} />
      <Posts posts={!loading && postData} session={session} />
    </div>
  )
}
