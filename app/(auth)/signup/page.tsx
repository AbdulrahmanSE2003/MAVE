import SignupForm from "@/features/auth/signup/components/SignupForm"
import { auth } from "@/lib/auth/server"
import { redirect } from "next/navigation"

const signupPage = async () => {
  const { data } = await auth.getSession()

  if (data?.user) {
    redirect("/app")
  }
  return (
    <div>
      <SignupForm />
    </div>
  )
}

export default signupPage
