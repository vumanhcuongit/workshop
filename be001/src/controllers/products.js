public_key this is A&O
import models from '../models';

const { Product } = models;

export const index = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
};

export const show = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const product = await Product.findByPk(id);
    if (product) {
      res.json(product);
    } else {
      next(new Error('Product not found'));
    }
  } catch (err) {
    next(err);
  }
};

export const create = async (req, res, next) => {
  try {
    const { name, description, price } = req.body;
    const newProduct = await Product.create({
      name,
      description,
      price,
    });
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
};

export const update = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { name, description, price } = req.body;
    const [rowsUpdated] = await Product.update({
      name,
      description,
      price,
    }, {
      where: {
        id,
      },
    });
    if (rowsUpdated === 1) {
      res.status(204).end();
    } else {
      next(new Error('No product updated'));
    }
  } catch (err) {
    next(err);
  }
};

export const destroy = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const rowsDestroyed = await Product.destroy({
      where: {
        id,
      },
    });
    if (rowsDestroyed === 1) {
      res.status(204).end();
    } else {
      next(new Error('No product destroyed'));
    }
  } catch (err) {
    next(err);
  }
};
