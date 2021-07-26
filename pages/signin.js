import { providers, signIn, getSession, csrfToken } from "next-auth/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons"
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
                <button onClick={() => signIn(provider.id)}>
                  Sign in with {provider.name}
                </button>
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
    return (
      <UserHome />
    );
  }

  return {
    props: {
      providers: await providers(context),
      csrfToken: await csrfToken(context),
    },
  };
}
