# MAVE — Agent Instructions

## 1. Project

MAVE is a creative content studio built around one idea:

> **Your ideas, your voice.**

Users provide an idea and their own writing examples. MAVE uses those examples as style references to generate platform-specific content and can later generate visuals from the finalized content.

The product should feel like a **premium creative tool**, not a generic AI dashboard.

---

## 2. Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- PostgreSQL
- Prisma
- Neon
- OpenAI
- pnpm

### Authentication & Database

- Authentication: Neon Auth
- Database: Neon PostgreSQL
- ORM: Prisma
- Never introduce Better Auth unless explicitly requested.
- Keep authentication logic separate from application business logic.
- Never expose authentication secrets or database credentials to the client.
- Use server-side authentication checks for protected routes and Server Actions.
- User-owned AI provider credentials must be encrypted server-side and must never be exposed to the browser.

Use the existing project versions and configuration. Do not upgrade or replace dependencies unless explicitly requested.

---

## 3. Core Engineering Rules

### TypeScript

- Strict TypeScript.
- Never use `any`.
- Avoid unnecessary type assertions.
- Prefer explicit domain types.
- Keep types close to the feature that owns them.
- Do not silence TypeScript errors with `@ts-ignore` or `@ts-expect-error` unless explicitly justified.

### React / Next.js

- Use Server Components by default.
- Add `"use client"` only when client-side behavior is actually required.
- Keep client components small and focused.
- Do not move server logic into client components.
- Avoid unnecessary client-side state.
- Avoid unnecessary API routes.

### Server Actions

Server Actions are the primary boundary for mutations and application operations that originate from the UI.

Use this flow:

```text
UI
↓
Server Action
↓
Validation
↓
Application / Service Logic
↓
Database / External Provider
```

Server Actions should not contain large business logic.

They should:

1. Validate input.
2. Authenticate/authorize the user when required.
3. Call the appropriate application/service layer.
4. Return a safe result.
5. Handle expected errors explicitly.

Never expose secrets or provider credentials to the browser.

### External Providers

Keep AI/provider-specific implementation isolated from application logic.

The application should not depend directly on OpenAI SDK details throughout the UI or feature code.

Use a clear provider/service boundary.

---

## 4. Architecture

Prefer feature-oriented organization.

Example:

```text
features/
├── generation/
│   ├── actions.ts
│   ├── service.ts
│   ├── prompts.ts
│   ├── schemas.ts
│   └── types.ts
├── style/
├── visuals/
└── ...
```

Shared infrastructure belongs in appropriate shared directories such as:

```text
components/
lib/
```

Do not create abstractions simply for the sake of abstraction.

Use the simplest architecture that preserves clear boundaries.

---

## 5. Validation

Validate all external/user input at the server boundary.

Never trust:

- form input
- URL parameters
- cookies
- client state
- provider responses

Use the project's established validation library/pattern.

Validation errors should be safe and understandable.

---

## 6. Error Handling

Handle expected failures explicitly.

Relevant categories include:

- Validation errors
- Authentication/authorization errors
- Database errors
- AI/provider errors
- Generation errors
- Unexpected errors

Do not expose raw database errors, provider errors, stack traces, API keys, or internal implementation details to users.

User-facing errors should be concise and useful.

Internal logging may contain additional diagnostic information when appropriate.

---

## 7. Security

- Never expose API keys to the client.
- Never hardcode secrets.
- Never commit secrets.
- User AI credentials must remain server-side.
- Sensitive credentials must be encrypted before persistent storage.
- Environment secrets belong in environment variables.
- Verify ownership/authorization before accessing user-owned resources.
- Never trust IDs supplied by the client without authorization checks.

---

# 8. MAVE Design System

## Brand

**MAVE**

Tagline:

**Your ideas, your voice.**

MAVE should feel:

- Creative
- Editorial
- Minimal
- Premium
- Confident
- Warm
- Slightly playful
- Human

Avoid making MAVE look like a stereotypical AI product.

### Never use as a visual direction

- Purple/blue AI gradients
- Glowing blobs
- Robots
- Brains
- AI chips
- Excessive glassmorphism
- Generic futuristic dashboards
- Stock-AI imagery
- Excessive neon
- Overly rounded "AI SaaS" cards

---

## Colors

Use the existing MAVE tokens/preset.

Core palette:

```text
Background: #F5F3EE
Foreground: #181816
Accent:     #D6FF4B
Muted:      #DCD9D1
Surface:    #FFFFFF
```

Lime is an accent, not the dominant color.

Do not introduce random colors.

If a new color is genuinely required, extend the design system deliberately rather than adding arbitrary values.

---

## Typography

Primary font:

**Geist**

Use a strong editorial hierarchy.

Approximate scale:

```text
Display: 64 / 68
H1:      48 / 52
H2:      32 / 38
H3:      24 / 30
Body:    16 / 24
Small:   14 / 20
Caption: 12 / 16
```

Adjust responsively where appropriate.

Do not create arbitrary typography styles for individual elements.

---

## Layout

MAVE should not look like a collection of boxed SaaS cards.

Prefer:

- strong whitespace
- large typography
- editorial composition
- clear hierarchy
- asymmetric compositions when appropriate
- subtle borders
- restrained surfaces
- visual depth through spacing and typography

The interface should have visual weight without relying on excessive shadows or cards.

---

## Components

Use shadcn/ui as the component foundation.

Do not blindly use default shadcn styling.

Components should visually belong to MAVE.

Prefer reusable primitives for:

- Buttons
- Inputs
- Textareas
- Dialogs
- Dropdowns
- Tabs
- Tooltips
- Toasts
- Forms

Do not create duplicate components when an existing component can be appropriately extended.

---

# 9. Marketing Pages

Current public pages:

```text
/
 /about
 /changelog
```

Marketing pages are static unless a real requirement requires dynamic behavior.

Prioritize:

1. Strong first impression
2. Clear brand identity
3. Excellent typography
4. Visual hierarchy
5. Responsive behavior
6. Accessibility
7. Performance

Do not add fake statistics, fake testimonials, fake users, fake activity, or fake product data.

Do not add unnecessary animations.

Animations should communicate hierarchy or interaction, not exist just because they look impressive.

---

# 10. Current Product Structure

Expected application areas:

```text
/auth/sign-in
/auth/sign-up

/dashboard
/dashboard/onboarding
/dashboard/write
/dashboard/visuals
/dashboard/settings
```

Do not implement these areas unless explicitly requested.

---

# 11. Product Behavior

MAVE's current MVP intentionally does NOT use:

- Embeddings
- Vector search
- pgvector
- RAG
- Topic similarity detection
- Complex visual-style embeddings

Writing style is learned from a maximum of **5 user-provided writing examples**.

Examples are references for voice and style.

The generated content must not copy examples verbatim.

---

# 12. AI Generation

For content generation:

```text
User idea
+
User writing examples
+
Platform instructions
↓
AI generation
↓
Platform-specific drafts
```

Initial platforms:

- LinkedIn
- Instagram

LinkedIn should generally be more professional and developed.

Instagram should generally be shorter, more casual, and may use emojis where appropriate.

Never hardcode generated content into the UI.

---

# 13. Visual Generation

Visual generation happens after content generation.

Flow:

```text
Idea
+
Final/selected post
+
Platform
+
Optional visual references
↓
Image generation
↓
Visual
```

Do not generate visuals automatically when generating a post.

---

# 14. Database

Keep the MVP schema minimal.

Core concepts include:

- User
- AI provider credential
- Style example
- Content
- Visual

Do not create tables for hypothetical future features.

---

# 15. UI States

Every meaningful interactive feature should consider:

- Loading
- Empty
- Success
- Error
- Disabled
- Validation

Do not leave users staring at an unchanged interface during slow operations.

---

# 16. Accessibility

Follow accessible HTML and interaction patterns.

- Use semantic elements.
- Buttons must be buttons.
- Links must be links.
- Inputs require labels.
- Interactive elements need visible focus states.
- Do not rely on color alone.
- Maintain sufficient contrast.
- Keyboard interaction must work.

---

# 17. Responsive Design

Design mobile-first.

The product must work across:

- Mobile
- Tablet
- Desktop

Do not simply shrink the desktop layout.

Reconsider layout hierarchy at smaller breakpoints.

---

# 18. Performance

Prefer:

- Server Components
- Static rendering where possible
- Minimal client JavaScript
- Optimized images
- Lazy loading when appropriate
- Minimal dependencies

Do not introduce a library for functionality that is trivial to implement with the existing stack.

---

# 19. Code Quality

Before considering a task complete:

- TypeScript passes.
- Lint passes.
- Build passes when relevant.
- No unused imports.
- No dead code.
- No debug logs.
- No accidental secrets.
- No unnecessary dependencies.
- No duplicated business logic.

Do not refactor unrelated code while implementing a focused task.

---

# 20. Agent Behavior

Before modifying code:

1. Inspect the existing implementation.
2. Understand the current structure.
3. Reuse existing patterns.
4. Make the smallest clean change that solves the task.

Do not:

- Rewrite working architecture unnecessarily.
- Invent requirements.
- Add features that were not requested.
- Replace libraries without a reason.
- Create unnecessary abstractions.
- Modify unrelated files.

When a requirement is ambiguous, inspect the existing project conventions first.

When implementation requires a product decision that cannot safely be inferred, stop and ask.

---

# 21. Visual Quality Bar

MAVE should feel intentionally designed.

Do not settle for:

- Generic centered hero sections
- Default shadcn layouts
- Repeated cards everywhere
- Excessive borders
- Excessive rounded containers
- Generic SaaS dashboard patterns
- Random decorative gradients
- Template-looking pages

Every major section should have a clear visual purpose.

The result should feel like a real product designed by a product designer, not an AI-generated starter template.

# MAVE — AI Agent Instructions

## Project Principles

- MAVE is a production-minded AI-powered creative content studio.
- Prioritize security, maintainability, testing, and a consistent user experience.
- Avoid unnecessary complexity, premature abstractions, and unrelated refactoring.
- Inspect the existing repository before making assumptions about its architecture or implementation.

## Working Agreement

1. Inspect the relevant files and current Git state before proposing changes.
2. Explain the problem, intended behavior, and proposed files before implementing non-trivial changes.
3. Do not modify files until the user approves the proposed plan.
4. Implement one approved milestone at a time.
5. Explain important technical decisions in practical, understandable language.
6. Run appropriate checks and report their actual results.
7. Never claim that tests, builds, or checks passed unless they were actually run.
8. Summarize changed files and verification steps after each milestone.

## Development Standards

- Use TypeScript and follow the existing project conventions.
- Use `pnpm` for package management and project commands.
- Reuse existing application logic instead of duplicating business rules.
- Validate inputs and enforce authorization on the server.
- Never expose secrets, API keys, encryption keys, or private user data.
- Enforce user ownership and data isolation on every relevant operation.
- Add appropriate tests as features are implemented.
- Avoid refactoring unrelated code.

## Testing and Quality

- Inspect existing testing infrastructure before introducing new tools.
- Introduce testing incrementally, beginning with meaningful unit tests.
- Add integration and end-to-end tests where appropriate.
- Run relevant tests, TypeScript checks, linting, and production builds before stable milestones.
- Prioritize authentication, authorization, user data isolation, AI credentials, usage limits, and core user workflows.

## Git and Versioning

- Use small, meaningful commits for logical changes.
- Create version tags only at meaningful, stable milestones.
- Follow semantic versioning conventions where appropriate.
- Verify the working tree and relevant checks before tagging a release.
- Never overwrite existing release tags without explicit approval.
- Do not commit or create tags unless the user has approved the work.

## Product Roadmap

The long-term roadmap includes:

1. Complete onboarding.
2. Build the core content studio.
3. Introduce testing incrementally.
4. Support English, Arabic, and Spanish, including Arabic RTL.
5. Build reusable application services.
6. Integrate MCP with compatible AI clients.
7. Add an in-app AI chatbot.
8. Evaluate WebMCP when browser and client support justify it.
9. Introduce server-side entitlements, trials, usage limits, and paid plans.
10. Harden the product for a stable release.

Consult the project's roadmap documentation for current progress. Do not implement future phases without approval.

## Current Task Discipline

Always distinguish between:

- What already exists.
- What is incomplete.
- What is merely planned.

Do not assume that roadmap items have been implemented. Inspect the repository and Git history first.
