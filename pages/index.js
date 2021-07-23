import { Redirect, getSession } from "next-auth/client"
import Layout from '../components/layouts'
import SignUp from '../components/signup/SignUp'


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
        {session ? (
          <Redirect to="/userHome" />
        ) : (
          <SignUp />
        )}
    </Layout>
  )
}
