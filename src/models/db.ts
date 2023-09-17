require('dotenv').config();
import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export {prisma};

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (err) => {
//     console.error(err);
//     await prisma.$disconnect();
//     process.exit(1);
//   });