import { providers, signIn, getSession, csrfToken } from "next-auth/client"
import Link from "next/link"
import styles from '../styles/signin.module.css'

function signin({ providers}) {
  return (
    <div className={styles.signInOpacity}> 
    <div className={styles.signInBody}>
      <div className={styles.signInDiv}>
        <h1 className={styles.signInTitle}>Sign In With:</h1>
        <div className={styles.buttonDiv}>
          {Object.values(providers).map((provider) => {
            return (
              <div key={provider.name}>
                <Link href="/userHome" passHref={true}>
                  <button onClick={() => signIn(provider.id)}>
                    Sign in with {provider.name}
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>  
    </div>
  );
}

export default signin;

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/userHome" },
    };
  }

  return {
    props: {
      providers: await providers(context),
      csrfToken: await csrfToken(context),
    },
  };
}
