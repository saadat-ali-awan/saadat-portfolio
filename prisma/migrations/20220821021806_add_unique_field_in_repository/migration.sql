/*
  Warnings:

  - A unique constraint covering the columns `[htmlUrl]` on the table `Repository` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Repository_htmlUrl_key" ON "Repository"("htmlUrl");
