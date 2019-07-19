import request from 'supertest';
import app from '../../src/app';

const sampleCategoryData = {
  name: 'Sample Category',
};

describe('Categories controller', () => {
  describe('#create', () => {
    it('creates a category', async () => {
      const response = await request(app).post('/categories').send(sampleCategoryData);
      expect(response.status).toBe(201); // http code 201 -> created
      expect(response.body.name).toEqual(sampleCategoryData.name);
    });
  });

  describe('#index', () => {
    it('shows list of categories', async () => {
      const response = await request(app).get('/categories').send();
      expect(response.statusCode).toBe(200); // http code 200 -> success
      expect(response.body).toBeInstanceOf(Array);
    });
  });

  describe('#show', () => {
    it('shows a category details', async () => {
      const id = 1; // mock it for now
      const response = await request(app).get(`/categories/${id}`).send();
      expect(response.statusCode).toBe(200);
      expect(response.body.id).toEqual(id);
      expect(response.body.name).toEqual('Some name');
    });
  });

  describe('#update', () => {
    it('updates a category', async () => {
      const id = 1; // mock it for now
      const response = await request(app).put(`/categories/${id}`).send({
        name: 'Updated name',
      });
      expect(response.statusCode).toBe(204); // http code 204 -> no content
    });
  });

  describe('#destroy', () => {
    it('deletes a category', async () => {
      const id = 1; // mock it for now
      const response = await request(app).delete(`/categories/${id}`).send();
      expect(response.statusCode).toBe(204);
    });
  });
});
