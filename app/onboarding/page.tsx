import Onboarding from "@/features/onboarding/components/Onboarding"
import { requireOnboarding } from "@/lib/users/routing"

const page = async () => {
  const { state } = await requireOnboarding()

  return (
    <div>
      <Onboarding state={state}/>
    </div>
  )
}

export default page
