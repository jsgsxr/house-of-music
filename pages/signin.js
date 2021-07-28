import { providers, signIn, getSession, csrfToken } from "next-auth/client"
import styles from '../styles/signin.module.css'
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// import firebase from "../firebase/initFirebase";

// const uiConfig = {
//   signInSuccessUrl: "/userHome",
//   signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
// }

function Signin({ providers}) {
  return (
    <div className={styles.signInOpacity}> 
    <div className={styles.signInBody}>
      <div className={styles.signInDiv}>
        <h1 className={styles.signInTitle}>Sign In With:</h1>
        <div className={styles.buttonDiv}>
          {Object.values(providers).map((provider) => {
            return (
              <div key={provider.name}>
                <button onClick={() => signIn(provider.id, {
                  json: true,
                })}>
                  Sign in with {provider.name}
                </button>
                {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>  
    </div>
  );
}

export default Signin;

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
