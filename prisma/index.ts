import { PrismaClient } from "@prisma/client";

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more: 
// https://pris.ly/d/help/next-js-best-practices

let prisma: PrismaClient;

const config = {
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    },
  }
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient(config)
} else {
   // @ts-ignore
  if (!global.prisma) {
     // @ts-ignore
    global.prisma = new PrismaClient(config)
  }
   // @ts-ignore
  prisma = global.prisma
}

export default prisma
