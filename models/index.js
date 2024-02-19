const Category = require("./Category");
const Product = require("./Product");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Product belongsTo Category
Product.belongsTo(Category, {
	foreignKey: "category_id",
});

// Category hasMany Product
Category.hasMany(Product, {
	foreignKey: "category_id",
});

// Product belongsToMany Tag (through ProductTag)
Product.belongsToMany(Tag, {
	through: ProductTag,
	foreignKey: "product_id",
});

// Tag belongsToMany Product (through ProductTag)
Tag.belongsToMany(Product, {
	through: ProductTag,
	foreignKey: "tag_id",
});

module.exports = {Category, Product, Tag, ProductTag};
