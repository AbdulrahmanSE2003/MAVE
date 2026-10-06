import Logo from "@/components/layout/Logo"

const MiniWorkspace = () => {
  return (
    <div className={`flex h-svh w-full flex-col gap-6 bg-black p-14 py-7`}>
      <div
        className={`flex-between text-xs tracking-widest text-muted-foreground uppercase`}
      >
        <span>Inside MILO</span>
        <span>01 / Writing workspace</span>
      </div>
      <div
        className={`flex h-full w-full items-center gap-4 rounded-lg bg-muted p-2`}
      >
        {/*Fake Sidebar*/}
        <div
          className={`flex h-full min-w-36 flex-col justify-start gap-4 px-3 py-1.5`}
        >
          {/*Fake Logo*/}
          <Logo />
          {/*Fake Tabs*/}
          <div className={`mt-12 flex flex-col gap-6`}>
            <span
              className={`h-2 w-full animate-pulse rounded-full bg-primary`}
            />
            <span className={`h-2 w-full animate-pulse rounded-full bg-ring`} />
            <span className={`h-2 w-full animate-pulse rounded-full bg-ring`} />
          </div>
        </div>
        <div
          className={`h-full flex-1 rounded-lg border border-border bg-white p-10 shadow-xl`}
        >
          ss
        </div>
      </div>
    </div>
  )
}

export default MiniWorkspace
