/*
  Warnings:

  - You are about to drop the column `avatarUrl` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `bio` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `blog` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `company` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `hireable` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `htmlUrl` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `reposUrl` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userProfileid]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[githubProfileId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `githubProfileId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userProfileid` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_userName_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatarUrl",
DROP COLUMN "bio",
DROP COLUMN "blog",
DROP COLUMN "company",
DROP COLUMN "hireable",
DROP COLUMN "htmlUrl",
DROP COLUMN "location",
DROP COLUMN "name",
DROP COLUMN "reposUrl",
DROP COLUMN "userName",
ADD COLUMN     "githubProfileId" INTEGER NOT NULL,
ADD COLUMN     "userProfileid" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "GitHubProfile" (
    "_id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "avatarUrl" TEXT NOT NULL,
    "htmlUrl" TEXT NOT NULL,
    "reposUrl" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "blog" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "hireable" BOOLEAN NOT NULL,
    "bio" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GitHubProfile_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "avatarUrl" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "blog" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "hireable" BOOLEAN NOT NULL,
    "bio" TEXT NOT NULL,
    "sidePanelImageUrl" TEXT,
    "sidePanelImageAltUrl" TEXT,
    "fullImageUrl" TEXT,
    "jobTitle" TEXT NOT NULL,
    "gitHubUrl" TEXT,
    "linkedInUrl" TEXT,
    "twitterUrl" TEXT,
    "facebookUrl" TEXT,
    "instagramUrl" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "resumeDriveUrl" TEXT,
    "about" TEXT NOT NULL,
    "contactMessage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "author_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userProfileid_key" ON "User"("userProfileid");

-- CreateIndex
CREATE UNIQUE INDEX "User_githubProfileId_key" ON "User"("githubProfileId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userProfileid_fkey" FOREIGN KEY ("userProfileid") REFERENCES "UserProfile"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_githubProfileId_fkey" FOREIGN KEY ("githubProfileId") REFERENCES "GitHubProfile"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "UserProfile"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
