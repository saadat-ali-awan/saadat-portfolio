import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Add post data to database in BackendUser table
  try {
    await prisma.backendUser.create({
      data: {
        name: req.body.username,
        password: req.body.password,
      },
    });
    res.status(200).json({ message: "Registration Successful" });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}
