# Exercise 3: Implement Categories API
## Step 1: Write tests
- create `test/controllers/categories.test.js`
```javascript
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
```

- try to run tests (will fail at this step)
```bash
yarn test

yarn run v1.17.3
$ cross-env NODE_ENV=test jest --forceExit
Determining test suites to run...
Syncing test DB...
done!

 PASS  tests/controllers/products.test.js
 FAIL  tests/controllers/categories.test.js
  ● Categories controller › #create › creates a category

    expect(received).toBe(expected) // Object.is equality

    Expected: 201
    Received: 404

      10 |     it('creates a category', async () => {
      11 |       const response = await request(app).post('/categories').send(sampleCategoryData);
    > 12 |       expect(response.status).toBe(201);
         |                               ^
      13 |       expect(response.body.name).toEqual(sampleCategoryData.name);
      14 |     });
      15 |   });

      at Object.toBe (tests/controllers/categories.test.js:12:31)

```

## Step 2: Create the model
- use cli to create the `Category` model
```bash
yarn sql model:generate --name Category --attributes name:string
```
- there will be 2 files created, update them to es6 format (optional)

`db/migrations/{timestamp}-create-category.js`
```javascript
export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Categories', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Categories'),
};
```

`src/models/category.js`
```javascript
export default (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {});
  return Category;
};
```

- run db migration (to create the underlying table)
```bash
yarn sql db:migrate
```



