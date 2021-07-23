import { useSession } from "next-auth/client"
import SignUp from './signup/SignUp'
import UserHome from './userHome'
import Loading from "./signup/Loading"

export default function Home() {
  const [session, loading] = useSession();

  if (loading) {
    return <Loading />
  } if (session) {
  return <UserHome />
  } else {
    return <SignUp />
  }
}
