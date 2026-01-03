const prisma = require('./prisma/client');

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "test@example.com",
      name: "Test User",
    },
  });
  console.log(user);
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
