export default {
  up: queryInterface => queryInterface.bulkInsert('Products', [
    {
      name: 'Test product 1',
      description: 'A test product',
      price: 10000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Test product 2',
      description: 'Another test product',
      price: 5000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),

  down: queryInterface => queryInterface.bulkDelete('Products', null, {}),
};
