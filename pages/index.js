import Head from 'next/head'
import { signIn, signOut, getSession } from "next-auth/client";

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};

export default function Home() {

  return (
    <div className="loginMain">
      <Head>
        <title>House of Music - Login or Sign Up!</title>
        <meta name="description" content="Meet Local Musicians" />
        <link rel="icon" href="/favicon.ico" />

        {/* firebase init */}
        <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-firestore.js"></script>
        <script src="https://www.gstatic.com/firebasejs/ui/4.8.1/firebase-ui-auth.js"></script>
        <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.8.1/firebase-ui-auth.css" />

      </Head>
      <main>
        {session ? (
          <button onClick={() => signOut()}>Sign out</button>
        ) : (
          <button onClick={() => signIn()}>Sign in</button>
        )}
        {session && (
          <div>
            <p>Signed in as {session.user.email}</p>
            <p>Name {session.user.name}</p>
            <Image src={session.user.image} alt={session.user.name} />
          </div>
        )}
      </main>
    </div>
  )
}
