'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('companies', [{
      name: 'Nubank',
      bio: 'Nubank o baco blablabla',
      email: 'nubank@email.com',
      website: 'www.nubank.com',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'PicPay',
      bio: 'Outro banco só que verde',
      email: 'picpay@email.com',
      website: 'www.picpay.com',
      created_at: new Date(),
      updated_at: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('companies', null, {})
  }
};
