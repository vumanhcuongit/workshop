import models from '../src/models';

export default async () => {
  console.log('\nDisconnecting from DB...');
  await models.sequelize.close();
  console.log('done!\n');
};
