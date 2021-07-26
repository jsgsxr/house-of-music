import Image from "next/image"
import Link from "next/link"
import { useSession } from 'next-auth/client'
import styles from '../../../styles/mainContent.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

export default function CreateStory() {
  const [session, loading] = useSession();

  return (
    <Link href='/createStory' passHref={true}>
      <div className={styles.createStoryCard}>
        <div className={styles.createStoryContentDiv}>
          <Image className={styles.storyContent} src={session.user.image} position="relative" layout='fill' objectFit='cover' alt="story" />
        </div>
        <div className={styles.mainPlusDiv}>
          <div className={styles.bluePlusDiv}>
            <FontAwesomeIcon className={styles.bluePlus} icon={faPlus} size="lg" />
          </div> 
        </div> 
        <div className={styles.createStoryFooter}>
          <p className={styles.createStoryLabel}>Create Story</p>
        </div>  
      </div>
    </Link>
  )
}