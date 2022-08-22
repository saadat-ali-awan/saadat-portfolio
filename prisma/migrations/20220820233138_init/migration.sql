-- CreateTable
CREATE TABLE "User" (
    "_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "avatarUrl" TEXT NOT NULL,
    "htmlUrl" TEXT NOT NULL,
    "reposUrl" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "blog" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "hireable" BOOLEAN NOT NULL,
    "bio" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Repository" (
    "_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "htmlUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "author_id" INTEGER NOT NULL,

    CONSTRAINT "Repository_pkey" PRIMARY KEY ("_id")
);

-- AddForeignKey
ALTER TABLE "Repository" ADD CONSTRAINT "Repository_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
