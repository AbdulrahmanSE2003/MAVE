-- The ContentType enum values were normalized to plain uppercase labels
-- ('LINKEDIN_POST', …). Restore the column default that was dropped while
-- cleaning up the previous 'Linkedin Post' value, matching schema.prisma's
-- `@default(LINKEDIN_POST)`.
ALTER TABLE "Post" ALTER COLUMN "contentType" SET DEFAULT 'LINKEDIN_POST';
