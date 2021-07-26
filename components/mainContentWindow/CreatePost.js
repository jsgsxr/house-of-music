import Image from "next/image"
import Link from "next/link"
import { useSession } from "next-auth/client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVideo, faPhotoVideo, faGuitar } from "@fortawesome/free-solid-svg-icons"
import styles from '../../styles/createPost.module.css'

export default function CreatePost() {
  const [session, loading] = useSession();

  return (
    <div className={styles.createPostMainDiv}>
      <div className={styles.createPostContentDiv}>
        <Image className={styles.createPostImg} src={session.user.image} width="45px" height="45px" alt="profile" />
        <Link href="/createPost" passHref={true}>
          <div className={styles.createPostContentInput}>
            <p className={styles.createPostContent}>Whats on your mind, {session.user.name.split(" ")[0]}?</p>
          </div>
        </Link>
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