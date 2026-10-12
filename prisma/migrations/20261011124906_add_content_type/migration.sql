-- CreateEnum
CREATE TYPE "ContentType" AS ENUM ('Linkedin Post', 'INSTAGRAM_CAPTION', 'INSTAGRAM_CAROUSEL');

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "contentType" "ContentType" NOT NULL DEFAULT 'Linkedin Post';
