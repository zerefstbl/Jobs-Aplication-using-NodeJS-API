'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('candidates', [{
      name: 'Miguel',
      bio: 'Bio do Miguel',
      email: 'migueal@gmail.com',
      phone: '545485498549',
      open_to_work: true,
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('candidates', null, {})
  }
};
