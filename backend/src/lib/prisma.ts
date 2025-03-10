import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const connectPrisma = async () => {
    await prisma.$connect();
  };

const disconnectPrisma = async () => {
  await prisma.$disconnect();
};

export default prisma
export {
    connectPrisma,
    disconnectPrisma
};
