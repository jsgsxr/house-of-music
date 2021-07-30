import Image from "next/image"
import Link from "next/link"
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVideo, faPhotoVideo, faGuitar } from "@fortawesome/free-solid-svg-icons"
import styles from '../../styles/createPost.module.css'

export default function CreatePost(props) {

  return (
    <div className={styles.createPostMainDiv}>
      <div className={styles.createPostContentDiv}>
        <Image className={styles.createPostImg} src={props.session.user.image} width="45px" height="45px" alt="profile" />
        <div className={styles.createPostContentInput} onClick={props.handleOpen} >
          <p className={styles.createPostContent}>Whats on your mind, {props.session.user.name.split(" ")[0]}?</p>
        </div>
      </div>
      <div className={styles.createPostDivider} />
      <div className={styles.createPostAddons}>
        <Link href="/liveVideo" passHref={true}>
          <div className={styles.createAddonDiv}>
            <FontAwesomeIcon className={styles.videoIcon} icon={faVideo} size="lg" />
            <p className={styles.createAddonLabel}>Live Video</p>
          </div>
        </Link>
        <Link href="/photoVideo" passHref={true}>
          <div className={styles.createAddonDiv}>
            <FontAwesomeIcon className={styles.photoIcon} icon={faPhotoVideo} size="lg" />  
            <p className={styles.createAddonLabel}>Photo/Video</p>
          </div>
        </Link>
        <Link href="/bandPractice" passHref={true}>
          <div className={styles.createAddonDiv}>
            <FontAwesomeIcon className={styles.guitarIcon} icon={faGuitar} size="lg" />
            <p className={styles.createAddonLabel}>Band Practice</p>
          </div>
        </Link>
      </div>
    </div>
  )
}