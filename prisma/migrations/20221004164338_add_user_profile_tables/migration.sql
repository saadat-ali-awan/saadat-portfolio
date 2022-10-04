-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "avatar_url" TEXT,
    "html_url" TEXT,
    "repos_url" TEXT,
    "userName" TEXT,
    "company" TEXT,
    "blog" TEXT,
    "location" TEXT,
    "hireable" BOOLEAN,
    "bio" TEXT,
    "sidePanelImg" TEXT,
    "sidePanelAvatar" TEXT,
    "fullImageUrl" TEXT,
    "jobTitle" TEXT,
    "githubUrl" TEXT,
    "twitterUrl" TEXT,
    "linkedinUrl" TEXT,
    "facebookUrl" TEXT,
    "instagramUrl" TEXT,
    "youtubeUrl" TEXT,
    "phone" TEXT,
    "resumeUrl" TEXT,
    "about" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GitHubProfile" (
    "id" TEXT NOT NULL,
    "avatar_url" TEXT,
    "html_url" TEXT,
    "repos_url" TEXT,
    "userName" TEXT,
    "company" TEXT,
    "blog" TEXT,
    "location" TEXT,
    "hireable" BOOLEAN,
    "bio" TEXT,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "GitHubProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Repository" (
    "_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "htmlUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "repositoryImageUrl" TEXT NOT NULL DEFAULT 'https://avatars.githubusercontent.com/u/35307862?v=4',
    "githubProfileId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Repository_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "GitHubProfile_profileId_key" ON "GitHubProfile"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_profileId_key" ON "Skill"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "Repository_htmlUrl_key" ON "Repository"("htmlUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Repository_githubProfileId_key" ON "Repository"("githubProfileId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GitHubProfile" ADD CONSTRAINT "GitHubProfile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repository" ADD CONSTRAINT "Repository_githubProfileId_fkey" FOREIGN KEY ("githubProfileId") REFERENCES "GitHubProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
