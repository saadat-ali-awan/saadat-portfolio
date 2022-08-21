import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUserData(userName: String) {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  const dataJson = await response.json();
  return dataJson;
}

async function getUserRepos(userName: String) {
  const response = await fetch(`https://api.github.com/users/${userName}/repos`);
  const dataJson = await response.json();
  return dataJson;
}

async function getGithubData(userName: String) {
  const userData = await getUserData(userName);
  const userRepos = await getUserRepos(userName);
  return { userData, userRepos };
}

async function updateUserData(userData: any) {
  const data = {
    name: userData.name || '',
    avatarUrl: userData.avatar_url || '',
    htmlUrl: userData.html_url || '',
    reposUrl: userData.repos_url || '',
    userName: userData.login || '',
    company: userData.company || '',
    blog: userData.blog || '',
    location: userData.location || '',
    hireable: userData.hireable || true,
    bio: userData.bio || ''
  }
  await prisma.user.upsert({
    where: {
      userName: userData.login,
    },
    update: data,
    create: data,
  });
}

async function updateUserRepos(userRepos: Array<any>) {
  const user = await prisma.user.findUnique({
    where: {
      userName: userRepos[0].owner.login,
    },
  });

  if (user) {
    userRepos.forEach(async (repo: any) => {
      const data = {
        name: repo.name || '',
        fullName: repo.full_name || '',
        htmlUrl: repo.html_url || '',
        description: repo.description || '',
        authorId: user!.id || undefined,
        createdAt: repo.created_at || '',
        updatedAt: repo.updated_at || '',
      }
      await prisma.repository.upsert({
        where: {
          htmlUrl: repo.html_url,
        },
        update: data,
        create: data,
      });
    });
  }
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await prisma.$connect();
  const { user_name } = req.query;
  if (typeof user_name === "string") {
    try {
      const { userData, userRepos } = await getGithubData(user_name)
      await updateUserData(userData);
      await updateUserRepos(userRepos);
      res.status(200).json({
        message: "ok"
      });
    } catch (error: any) {
      res.status(500).json({
        message: error.message
      });
    }


  } else {
    res.status(500).json({ "message": "Error", "error-message": "Provide Username" });
  }

  await prisma.$disconnect();
}
