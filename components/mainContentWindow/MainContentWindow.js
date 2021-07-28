// import postData from '../../config/postData'
import styles from '../../styles/mainContent.module.css'
import CreatePost from './CreatePost'
import Posts from './posts/Posts'
import StorySection from './stories/StorySection'
import { useSession } from 'next-auth/client'
import React, { useEffect, useState } from 'react'
import firebase from '../../firebase/initFirebase'

export default function MainContentWindow() {
  const [session] = useSession()
  const [postData, setPostData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async() => {
    const response = firebase.firestore().collection("postData").orderBy("postTime", "desc")
    const data = await response.get()
    data.docs.map((item) => {
      console.log(item.data())
      setPostData(postData => [...postData, item.data()])
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
      <CreatePost session={session} />
      <Posts posts={!loading && postData} session={session} />
    </div>
  )
}
