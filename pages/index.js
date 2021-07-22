import Head from 'next/head'
import { signIn, signOut, getSession } from "next-auth/client";
import Image from 'next/image'

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
            <Image src={session.user.image} />
          </div>
        )}
      </main>
    </div>
  )
}
