import debug from 'debug';
import app from './app';

const dbg = debug('BE001:main');

(async () => {
  await app.listen(3000);
  dbg('Server is listening on port 3000');
})();
