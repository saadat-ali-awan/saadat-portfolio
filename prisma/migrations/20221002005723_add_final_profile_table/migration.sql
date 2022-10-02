/*
  Warnings:

  - A unique constraint covering the columns `[finalProfileId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `finalProfileId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "finalProfileId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "FinalProfile" (
    "_id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
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
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FinalProfile_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FinalProfile_userId_key" ON "FinalProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_finalProfileId_key" ON "User"("finalProfileId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_finalProfileId_fkey" FOREIGN KEY ("finalProfileId") REFERENCES "FinalProfile"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
