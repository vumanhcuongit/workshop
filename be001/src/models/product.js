export default (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
  }, {});
  // Product.associate = (models) => {
  //   // associations can be defined here
  // };
  return Product;
};
