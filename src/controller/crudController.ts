import {prisma} from '../models/db';
import {Request, Response} from 'express';

export const user = {
  create: async (req: Request, res: Response) => {
    const name = req.body.name;
    const address = req.body.address;

    await prisma.user
      .create({
        data: {
          name: name,
          address: address,
        },
      })
      .then((response) => {
        console.log(response);
        return res.send(response);
      })
      .catch((error) => {
        console.error(error);
        return res.send(error);
      });
  },

  read: async (req: Request, res: Response) => {
    await prisma.user
      .findMany()
      .then((response) => {
        console.log(response);
        return res.send(response);
      })
      .catch((error) => {
        console.error(error);
        return res.send(error);
      });
  },

  update: async (req: Request, res: Response) => {
    const id = req.body.id;
    const name = req.body.name;
    const address = req.body.address;

    await prisma.user
      .update({
        where: {id: id},
        data: {name: name, address: address},
      })
      .then((response) => {
        console.log(response);
        return res.send(response);
      })
      .catch((error) => {
        console.error(error);
        return res.send(error);
      });
  },

  remove: async (req: Request, res: Response) => {
    const id = req.body.id;

    await prisma.user
      .deleteMany({
        where: {id: id},
      })
      .then((response) => {
        console.log(response);
        return res.send(response);
      })
      .catch((error) => {
        console.error(error);
        return res.send(error);
      });
  },
};
