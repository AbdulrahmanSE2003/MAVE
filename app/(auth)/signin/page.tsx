import SigninForm from "@/features/auth/signin/components/SigninForm"
import { auth } from "@/lib/auth/server"
import { redirect } from "next/navigation"

const signinPage = async () => {
  const { data } = await auth.getSession()

  if (data?.user) {
    redirect("/app")
  }
  return (
    <div className={``}>
      <SigninForm />
    </div>
  )
}

export default signinPage
