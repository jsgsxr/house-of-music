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

export default function Home({ props }) {

  return (
    <div className="loginMain">
      <Head>
        <title>House of Music - Login or Sign Up!</title>
        <meta name="description" content="Meet Local Musicians" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <main>
        {props.session ? (
          <button onClick={() => signOut()}>Sign out</button>
        ) : (
          <button onClick={() => signIn()}>Sign in</button>
        )}
        {props.session && (
          <div>
            <p>Signed in as {props.session.user.email}</p>
            <p>Name {props.session.user.name}</p>
            <Image src={props.session.user.image} />
          </div>
        )}
      </main>
    </div>
  )
}
