import Logo from "@/components/layout/Logo"
import AuthErrorHandler from "./AuthErrorHandler"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={`flex justify-start`}>
      <AuthErrorHandler />

      <div
        className={`relative flex-between min-h-screen w-1/2 flex-col items-start overflow-hidden bg-foreground p-12 text-background max-md:hidden dark:bg-background dark:text-foreground`}
      >
        {/*Logo*/}
        <Logo />

        {/*Intro Text*/}
        <div className={`relative z-10 leading-relaxed`}>
          <h2 className={`text-6xl`}>Your ideas,</h2>
          <h2 className={`text-6xl text-primary`}>your voice.</h2>
          <p
            className={`mt-6 paragraph text-sm font-normal not-dark:text-background/70`}
          >
            A personal studio for content that sounds like you.
          </p>
        </div>

        <p className={`paragraph text-xs not-dark:text-background/70`}>
          &copy; {new Date().getFullYear()} MAVE
        </p>

        {/*Circle*/}
        <div
          className={`absolute right-12 -bottom-16 h-72 w-72 rounded-full bg-transparent ring-124 ring-primary`}
        />
      </div>
      <div
        className={`flex min-h-screen w-1/2 flex-col justify-center bg-muted p-8 px-28`}
      >
        {children}
      </div>
    </main>
  )
}
