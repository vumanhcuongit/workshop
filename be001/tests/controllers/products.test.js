import request from 'supertest';
import app from '../../src/app';

describe('Products controller', () => {
  describe('#index', () => {
    it('shows list of products', async () => {
      const response = await request(app).get('/products').send();
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  });
});
