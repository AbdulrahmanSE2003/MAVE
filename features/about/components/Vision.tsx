import React from "react"

const Vision = () => {
  return (
    <div className={`relative flex-center gap-8 p-8 py-16 max-md:flex-col`}>
      <span className="w-full space-y-4 self-start text-foreground/75 uppercase md:sticky md:top-48 md:w-1/3">
        What MAVE believes
      </span>
      <div
        className={`flex w-full flex-col gap-8 leading-snug tracking-tight md:w-3/5 md:gap-16`}
      >
        {/*First */}
        <p className={`text-2xl md:text-4xl`}>
          MAVE is a personal content studio for people who have something to say
          — but don’t always have the time or distance to shape it.
        </p>
        {/*Second */}
        <div className={`flex flex-col gap-4`}>
          <h4 className={`text-2xl md:text-4xl`}>
            A tool for clarity, not volume.{" "}
          </h4>
          <p className={`paragraph`}>
            Most writing tools optimize for more. More posts, more hooks, more
            output. MAVE starts somewhere quieter: with your point of view. It
            learns from examples of your real writing, then helps turn rough
            thoughts into clear LinkedIn and Instagram content.
          </p>
          <p className={`paragraph`}>
            It doesn&apos;t replace your judgment. It gives your ideas a strong
            first form, so you can edit, refine, and make them yours.
          </p>
        </div>

        {/*Third */}
        <blockquote className="border-y border-border py-6 text-xl text-foreground sm:text-4xl md:py-10">
          “The best technology should make you feel more like yourself, not
          less.”
        </blockquote>

        {/*Fourth */}
        <div className={`flex flex-col gap-4`}>
          <h4 className={`text-4xl`}>How it works</h4>
          <p className="paragraph">
            You bring a handful of writing examples and an idea. MAVE learns the
            patterns that make your voice yours — sentence length, pacing,
            vocabulary, structure — and uses them as creative direction, not a
            formula.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Vision
