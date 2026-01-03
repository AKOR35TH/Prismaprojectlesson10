const prisma = require('../prisma/client');

const getAllUsers = async () => {
  return await prisma.user.findMany();
};

const createUser = async (userData) => {
  return await prisma.user.create({
    data: {
      name: userData.name,
      email: userData.email,
    },
  });
};

module.exports = { getAllUsers, createUser };