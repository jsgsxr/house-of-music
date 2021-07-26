import Link from 'next/link'
import Layout from '../../components/layouts'
import styles from '../../styles/signup.module.css'
import { useSession } from 'next-auth/client'
import UserHome from '../userHome';

export default function SignUp() {
  const [session, loading] = useSession();

  if (session) {
    return <UserHome />
  } else {
    return (
      <Layout>
      <div className={styles.loginMain}>
        <div className={styles.loginTitleDiv}>
          <h1 className={styles.loginTitle}>Find Musicians Near You!</h1>
          <h2 className={styles.loginSubTitle}>~ Starting your new band has never been easier ~</h2>
        </div>
        <div className={styles.loginDescriptionDiv}>
          <p className={styles.loginDescription}>In the House of Music lives every instrument, from every genre, and all are welcome to enter.</p>
          <p className={styles.loginDescription}>
          Looking for your next Jazz session? Or the ever-elusive, rare and treasured Drummer? Or maybe just a bass player looking to slap it up with some new friends.</p> 
          <p className={styles.loginDescription2}>Find your family, and come join us:</p>
        
          <Link href="/signin" passHref={true}>
            <button className={styles.loginLink}>Sign in</button>
          </Link>
        </div>
      </div>
      </Layout>
    )
  }
}
