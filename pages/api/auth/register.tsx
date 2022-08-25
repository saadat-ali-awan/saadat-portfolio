import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import PasswordValidator from "password-validator";
import path from 'path';

const prisma = new PrismaClient();
const schema = new PasswordValidator();

schema.is().min(8)
  .is().max(100)
  .has().uppercase()
  .has().lowercase()
  .has().digits(2)
  .has().not().spaces();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
  const passwordIssues = schema.validate(data.password, { details: true }) as {validation: string, arguments: number, message: string}[];
  if (passwordIssues.length > 0) {
    res.status(500).json({
      message: passwordIssues.map(issue => issue.message).join(", ")
    });
    return
  }

  // Add post data to database in BackendUser table
  try {
    const response = await fetch(path.join(process.cwd(), 'api', 'github-data'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.username,
        password: data.password,
      }),
    });

    const responseJson = await response.json();

    if (response.status === 200) {
      res.status(200).json({ message: "Registration Successful" });
    } else {
      res.status(500).json(responseJson);
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}
