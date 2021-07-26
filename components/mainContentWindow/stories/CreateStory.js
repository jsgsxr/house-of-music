import Image from "next/image"
import Link from "next/link"
import { useSession } from 'next-auth/client'
import styles from '../../../styles/mainContent.module.css'

export default function CreateStory() {
  const [session, loading] = useSession();

  return (
    <Link href='/createStory' passHref={true}>
      <div className={styles.storyCard}>
        <div className={styles.storyContentDiv}>
          <Image className={styles.storyContent} src={session.user.image} position="relative" layout='fill' objectFit='cover' alt="story" />
        </div>
        <p className={styles.storyLabel}>Create Story</p>
      </div>
    </Link>
  )
}