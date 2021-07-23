import { useSession } from "next-auth/client"
import Layout from '../components/layouts'
import SignUp from './signup/SignUp'
import UserHome from './userHome'


// export const getServerSideProps = async (context) => {
//   const session = await getSession(context);

//   return {
//     props: {
//       session,
//     },
//   };
// };

export default function Home() {
  const [session, loading] = useSession();

  return (
    <>
      {session ? (
        <UserHome />
      ) : (
        <SignUp />
      )}
   </>
  )
}
