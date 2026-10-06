# MAVE

> **Your ideas, your voice.**

MAVE is a personal creative content studio that helps creators turn their ideas into platform-ready content while keeping their own voice and writing style.

## What MAVE Does

MAVE lets users:

- Connect their own AI provider
- Add up to 5 writing examples
- Generate content from any idea
- Create platform-specific drafts for LinkedIn and Instagram
- Edit and refine generated content
- Generate visuals from finalized content
- Save and manage generated visuals

MAVE is designed to feel like a creative workspace rather than a traditional AI dashboard.

---

## Product Philosophy

MAVE focuses on one simple principle:

> AI should help you express your ideas — not replace your voice.

The user's writing examples are used as style references. MAVE does not copy them or use them as templates.

The current MVP intentionally avoids:

- Embeddings
- Vector databases
- RAG
- Topic similarity detection
- Complex style analysis

Keep the product simple, fast, and focused.

---

## Tech Stack

- **Next.js** — App Router
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **PostgreSQL**
- **Prisma**
- **Better Auth**
- **OpenAI**
- **pnpm**

---

## Project Structure

```text
src/
├── app/
│   ├── (marketing)/
│   ├── auth/
│   └── dashboard/
│
├── components/
│   ├── ui/
│   └── shared/
│
├── features/
│   ├── generation/
│   ├── style/
│   └── visuals/
│
└── lib/
```

The exact structure may evolve as the application grows, but features should remain isolated and responsibilities should stay clear.

---

## Architecture

MAVE uses a server-first architecture.

```text
UI
 ↓
Server Action
 ↓
Validation
 ↓
Service / Application Logic
 ↓
Database / AI Provider
```

Server Actions act as the boundary between the UI and server-side application logic.

Business logic should not live inside UI components.

AI/provider-specific implementation should remain isolated from the rest of the application.

---

## Getting Started

### Requirements

- Node.js
- pnpm
- PostgreSQL

### Install

```bash
pnpm install
```

### Environment Variables

Create a local environment file:

```bash
cp .env.example .env.local
```

Configure the required environment variables before running the application.

Never commit secrets or user API keys.

### Database

Run the project's Prisma migrations:

```bash
pnpm prisma migrate dev
```

Generate the Prisma client when required:

```bash
pnpm prisma generate
```

### Development

```bash
pnpm dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## Development Rules

Before making changes, read:

```text
AGENTS.md
```

It is the source of truth for the project's:

- Architecture
- Design system
- Engineering conventions
- Security rules
- Product constraints
- Agent behavior

---

## Design Direction

MAVE is:

- Editorial
- Minimal
- Premium
- Creative
- Warm
- Confident
- Human

Core palette:

| Token | Value |
|---|---|
| Background | `#F5F3EE` |
| Foreground | `#181816` |
| Accent | `#D6FF4B` |
| Muted | `#DCD9D1` |
| Surface | `#FFFFFF` |

Avoid generic AI visual language such as:

- Purple/blue gradients
- Glowing blobs
- Robots
- AI chips
- Excessive glassmorphism
- Futuristic dashboard patterns

---

## Scripts

Use the project's package scripts rather than introducing duplicate commands.

Typical commands:

```bash
pnpm dev
pnpm build
pnpm lint
```

---

## Status

🚧 **MVP — In Development**

MAVE is currently being built as a focused MVP, with the writing experience and visual generation forming the core product.

---

## Creator

Built & designed by **Abdulrahman Saad**.