import {
  ArrowUpRight,
  ChevronRight,
  HelpCircleIcon,
  KeyRound,
  Palette,
  PenLine,
  ShieldCheck,
  UserRound,
  WandSparkles,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"

const settingsSections = [
  {
    id: "account",
    title: "Account",
    description: "Your personal information and account details.",
    icon: UserRound,
  },
  {
    id: "ai",
    title: "AI provider",
    description: "Configure how MAVE connects to your AI provider.",
    icon: KeyRound,
  },
  {
    id: "writing",
    title: "Writing preferences",
    description: "Set defaults for the content you create.",
    icon: PenLine,
  },
  {
    id: "appearance",
    title: "Appearance",
    description: "Make MAVE feel comfortable to work in.",
    icon: Palette,
  },
]

function SectionHeading({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="space-y-1">
      <h2 className="text-base font-semibold tracking-tight">{title}</h2>
      <p className="text-sm leading-6 text-muted-foreground">{description}</p>
    </div>
  )
}

function Field({
  label,
  hint,
  children,
}: {
  label: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">{label}</label>
      {children}
      {hint && (
        <p className="text-xs leading-5 text-muted-foreground">{hint}</p>
      )}
    </div>
  )
}

const inputClass =
  "h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"

const selectClass =
  "h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"

export default function SettingsPage() {
  return (
    <main className="w-full scrollbar-thin space-y-8 p-5 md:p-8">
      <header className="space-y-2">
        <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
          Your workspace / Settings
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">Settings</h1>

        <p className="max-w-lg text-sm leading-6 text-muted-foreground">
          Everything you need to personalize your MAVE workspace and your
          writing experience.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-12">
        <aside className="h-fit lg:sticky lg:top-8">
          <nav
            aria-label="Settings sections"
            className="flex gap-1 overflow-x-auto lg:flex-col"
          >
            {settingsSections.map((section, index) => {
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`flex shrink-0 items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    index === 0
                      ? "bg-muted font-medium text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <HugeiconsIcon icon={section.icon} />
                  {section.title}
                </a>
              )
            })}
          </nav>
        </aside>

        <div className="min-w-0 space-y-10">
          <section id="account" className="scroll-mt-8 space-y-5">
            <SectionHeading
              title="Account"
              description="Your profile and account information."
            />

            <div className="rounded-xl border p-5 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-muted text-base font-semibold">
                  M
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">MAVE User</p>
                  <p className="truncate text-sm text-muted-foreground">
                    Your workspace profile
                  </p>
                </div>

                <span className="rounded-md border px-2 py-1 text-xs text-muted-foreground">
                  Preview
                </span>
              </div>

              <div className="my-5 border-t" />

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Display name">
                  <input
                    className={inputClass}
                    defaultValue="MAVE User"
                    placeholder="Your name"
                  />
                </Field>

                <Field label="Email address">
                  <input
                    className={inputClass}
                    type="email"
                    placeholder="Your email address"
                    disabled
                  />
                </Field>
              </div>

              <p className="mt-4 text-xs leading-5 text-muted-foreground">
                Account information will be connected to your authentication
                profile later.
              </p>
            </div>
          </section>

          <section id="ai" className="scroll-mt-8 space-y-5">
            <SectionHeading
              title="AI provider"
              description="Choose how MAVE will generate your content."
            />

            <div className="rounded-xl border p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <HugeiconsIcon icon={WandSparkles} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-sm font-medium">OpenAI</h3>
                    <span className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      Planned
                    </span>
                  </div>

                  <p className="mt-1 text-sm leading-5 text-muted-foreground">
                    Use your own API key to power content generation.
                  </p>
                </div>
              </div>

              <div className="my-5 border-t" />

              <div className="space-y-5">
                <Field
                  label="Provider"
                  hint="Additional providers can be introduced in a later version."
                >
                  <select
                    className={selectClass}
                    defaultValue="openai"
                    disabled
                  >
                    <option value="openai">OpenAI</option>
                  </select>
                </Field>

                <Field
                  label="API key"
                  hint="API key management is not connected in this preview. No key is being stored."
                >
                  <input
                    className={inputClass}
                    type="password"
                    placeholder="Add your API key later"
                    disabled
                  />
                </Field>

                <div className="flex items-start gap-2 rounded-lg bg-muted/50 p-3">
                  <HugeiconsIcon
                    icon={ShieldCheck}
                    className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                  />

                  <p className="text-xs leading-5 text-muted-foreground">
                    API credentials should be handled securely and never exposed
                    in client-side code.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="writing" className="scroll-mt-8 space-y-5">
            <SectionHeading
              title="Writing preferences"
              description="Choose your default content settings."
            />

            <div className="rounded-xl border p-5 sm:p-6">
              <div className="space-y-5">
                <Field
                  label="Default language"
                  hint="Used as the preferred language when creating new content."
                >
                  <select className={selectClass} defaultValue="en">
                    <option value="en">English</option>
                    <option value="ar">Arabic</option>
                  </select>
                </Field>

                <Field
                  label="Default platform"
                  hint="The platform preselected when you start a new post."
                >
                  <select className={selectClass} defaultValue="linkedin">
                    <option value="linkedin">LinkedIn</option>
                    <option value="instagram">Instagram</option>
                  </select>
                </Field>
              </div>

              <div className="my-5 border-t" />

              <Link
                href="/app/write"
                className="group flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted/60"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <HugeiconsIcon icon={PenLine} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">
                    Writing style references
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Add sample posts to help MAVE understand your voice.
                  </p>
                </div>

                <HugeiconsIcon
                  icon={ArrowUpRight}
                  className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </section>

          <section id="appearance" className="scroll-mt-8 space-y-5">
            <SectionHeading
              title="Appearance"
              description="Set the visual preferences for your workspace."
            />

            <div className="rounded-xl border p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium">Interface theme</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Choose light, dark, or follow your system.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Light", value: "light" },
                    { label: "Dark", value: "dark" },
                    { label: "System", value: "system" },
                  ].map((theme) => (
                    <button
                      key={theme.value}
                      type="button"
                      disabled
                      className={`rounded-lg border px-3 py-2 text-xs ${
                        theme.value === "system"
                          ? "bg-muted font-medium"
                          : "text-muted-foreground"
                      } opacity-70`}
                    >
                      {theme.label}
                    </button>
                  ))}
                </div>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                Theme selection will be connected to the app&apos;s theme
                provider later.
              </p>
            </div>
          </section>

          <section className="space-y-4 border-t pt-6">
            <div className="flex items-start gap-3">
              <HugeiconsIcon
                icon={HelpCircleIcon}
                className="mt-0.5 size-4 text-muted-foreground"
              />
              <div className="flex-1">
                <h2 className="text-sm font-medium">Need help?</h2>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Settings are currently a UI preview. Changes are not saved and
                  do not affect content generation.
                </p>
              </div>
              <HugeiconsIcon
                icon={ChevronRight}
                className="size-4 text-muted-foreground"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
