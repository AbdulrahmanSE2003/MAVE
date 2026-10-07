const Logo = ({ showSlogan = false }: { showSlogan?: boolean }) => {
  return (
    <div className={`flex flex-col gap-2`}>
      <span className="font-black">
        MAVE <span className="text-2xl text-primary">.</span>
      </span>
      {showSlogan && (
        <p className={`text-sm text-muted-foreground`}>
          Your ideas, your voice.
        </p>
      )}
    </div>
  )
}

export default Logo
