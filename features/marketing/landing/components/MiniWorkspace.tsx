import FakeWorkSpace from "./FakeWorkSpace"

const MiniWorkspace = () => {
  return (
    <div
      id="miniworkspace"
      className={`flex min-h-svh w-full flex-col gap-6 bg-black p-7 py-7 md:p-10`}
    >
      <div
        className={`flex-between text-xs tracking-widest text-muted-foreground uppercase`}
      >
        <span>Inside MAVE</span>
        <span>Writing workspace</span>
      </div>
      <FakeWorkSpace />
    </div>
  )
}

export default MiniWorkspace
