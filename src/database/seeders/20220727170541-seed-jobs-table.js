'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const [companies] = await queryInterface.sequelize.query('SELECT id FROM companies;');

    await queryInterface.bulkInsert('jobs', [{
      title: 'BackEnd Developer',
      description: 'Vaga para backend po',
      limit_date: '22-08-2022',
      company_id: companies[0].id,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      title: 'FrontEnd developer',
      description: 'Vaga front end po',
      limit_date: '22-08-2022',
      company_id: companies[1].id,
      created_at: new Date(),
      updated_at: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('jobs', null, {});
  }
};
