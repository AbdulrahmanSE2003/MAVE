import { Badge } from "@/components/ui/badge"
const ChangelogHero = () => {
  return (
    <div
      id="hero"
      className="relative flex min-h-[80svh] w-full items-center justify-start p-6"
    >
      {/*Hero Intro*/}
      <div
        className={`flex-col gap-1 [&_h1]:text-6xl sm:[&_h1]:text-8xl [&_h2]:text-6xl sm:[&_h2]:text-8xl`}
      >
        <Badge className={`mb-2 p-3 uppercase`} variant={"outline"}>
          Changelog{" "}
        </Badge>
        <h1 className={`max-w-xl`}>What’s new in MILO.</h1>
        <p className={`mt-6 max-w-lg paragraph text-base`}>
          New features, thoughtful improvements, and everything we’re refining
          along the way.
        </p>
      </div>
    </div>
  )
}

export default ChangelogHero
