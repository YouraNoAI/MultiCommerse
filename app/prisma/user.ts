// pages/api/users.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    res.status(201).json(user);
  } else {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  }
}
