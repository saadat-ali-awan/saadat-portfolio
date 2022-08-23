import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient();
  await prisma.repository.deleteMany({});
  await prisma.user.deleteMany({});
  res.send("ok");
}
