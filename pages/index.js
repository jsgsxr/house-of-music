import Head from 'next/head'
import { signOut, getSession } from "next-auth/client";
import Link from 'next/link'
import Layout from '../components/layouts';

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};

export default function Home({ session }) {

  return (
    <Layout className="loginMain">
      <Head>
        <title>House of Music - Login or Sign Up!</title>
        <meta name="description" content="Meet Local Musicians" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {session ? (
          <button onClick={() => signOut()}>Sign out</button>
        ) : (
          <Link href="/signin">
            <button>Sign in</button>
          </Link>
        )}
        {session && (
          <div>
            <p>Signed in as {session.user.email}</p>
            <p>Name {session.user.name}</p>
          </div>
        )}
      </main>
    </Layout>
  )
}
