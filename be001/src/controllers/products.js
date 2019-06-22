const products = [
  {
    id: 1,
    name: 'Test product 1',
    description: 'A test product',
    price: 10000,
  },
  {
    id: 2,
    name: 'Test product 2',
    description: 'Another test product',
    price: 5000,
  },
];

let productsCounter = products.length;

export const index = (req, res, next) => {
  res.json(products);
  next();
};

export const show = (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const product = products.find(p => p.id === id);
  if (product) {
    res.json(product);
    next();
  } else {
    next(new Error('Product not found'));
  }
};

export const create = (req, res, next) => {
  productsCounter += 1;

  const { name, description, price } = req.body;
  const newProduct = {
    id: productsCounter,
    name,
    description,
    price,
  };
  products.push(newProduct);

  res.status(201);
  res.json(newProduct);
  next();
};

export const update = (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const product = products.find(p => p.id === id);
  if (product) {
    const { name, description, price } = req.body;
    if (name) {
      product.name = name;
    }
    if (description) {
      product.description = description;
    }
    if (price) {
      product.price = price;
    }
    res.json(product);
    next();
  } else {
    next(new Error('Product not found'));
  }
};

export const destroy = (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const idx = products.findIndex(p => p.id === id);
  if (idx > -1) {
    const deleted = products.splice(idx, 1)[0];
    res.json(deleted);
    next();
  } else {
    next(new Error('Product not found'));
  }
};
