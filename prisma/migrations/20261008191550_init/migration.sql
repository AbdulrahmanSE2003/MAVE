-- CreateEnum
CREATE TYPE "AiProvider" AS ENUM ('OPENAI', 'GEMINI');

-- CreateEnum
CREATE TYPE "Platform" AS ENUM ('LINKEDIN', 'INSTAGRAM');

-- CreateEnum
CREATE TYPE "VisualType" AS ENUM ('GENERATED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "onboardingCompletedAt" TIMESTAMP(3),
    "visualStylePreferences" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AiCredential" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "provider" "AiProvider" NOT NULL,
    "encryptedApiKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AiCredential_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WritingExample" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WritingExample_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "platform" "Platform" NOT NULL,
    "idea" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Visual" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "postId" TEXT,
    "type" "VisualType" NOT NULL,
    "storageKey" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "prompt" TEXT,
    "aspectRatio" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Visual_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "User_onboardingCompletedAt_idx" ON "User"("onboardingCompletedAt");

-- CreateIndex
CREATE INDEX "AiCredential_userId_idx" ON "AiCredential"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "AiCredential_userId_provider_key" ON "AiCredential"("userId", "provider");

-- CreateIndex
CREATE INDEX "WritingExample_userId_idx" ON "WritingExample"("userId");

-- CreateIndex
CREATE INDEX "Post_userId_idx" ON "Post"("userId");

-- CreateIndex
CREATE INDEX "Post_userId_platform_idx" ON "Post"("userId", "platform");

-- CreateIndex
CREATE INDEX "Visual_userId_idx" ON "Visual"("userId");

-- CreateIndex
CREATE INDEX "Visual_postId_idx" ON "Visual"("postId");

-- AddForeignKey
ALTER TABLE "AiCredential" ADD CONSTRAINT "AiCredential_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WritingExample" ADD CONSTRAINT "WritingExample_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Visual" ADD CONSTRAINT "Visual_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Visual" ADD CONSTRAINT "Visual_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
