import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create a single User
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Jon Doe",
  //     email: "john@gmail.com",
  //   },
  // });
  //Get all Users
  //   const users = await prisma.user.findMany({
  //     include: {
  //       articles: true,
  //     },
  //   });
  // Create article and associate it with a user.
  //   const article = await prisma.article.create({
  //     data: {
  //       title: "How to make a REST API with NodeJS",
  //       body: "This is a tutorial on how to make a REST API with NodeJS",
  //       author: {
  //         connect: {
  //           id: 1,
  //         },
  //       },
  //     },
  //   });
  //   const articles = await prisma.article.findMany();
  //   console.log(article);
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "sara smith",
  //       email: "sara@gmail.com",
  //       articles: {
  //         create: {
  //           title: "saras first article",
  //           body: "this is saras first article",
  //         },
  //       },
  //     },
  //   });

  //   const article = await prisma.article.create({
  //     data: {
  //       title: "saras second article",
  //       body: "this is saras second article",
  //       author: {
  //         connect: {
  //           id: 2,
  //         },
  //       },
  //     },
  //   });

  //   const articles = await prisma.article.findMany({
  //     where: {
  //       authorId: 2,
  //     },
  //   });

  //   console.log(articles);

  // loop through users and print their articles
  //   users.forEach((user) => {
  //     console.log(`User: ${user.name}, Email: ${user.email}`);
  //     console.log("Articles:");
  //     user. articles.forEach((article) => {
  //       console.log(`-Title: ${article.title}, Body: ${article.body}`);
  //     });
  //     console.log("\n");
  //   });

  // Update data

  const article = await prisma.user.delete({
    where: {
      id: 2,
    },
  });
  console.log(article);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
