public_key this is A&O
import models from '../src/models';

export default async () => {
  console.log('\nSyncing test DB...');
  await models.sequelize.sync({
    force: true,
  });
  console.log('done!\n');
};
