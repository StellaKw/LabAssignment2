let productModel = require("../model/product");

module.exports.home = async function (req, res, next) {
  try {
    res.json({
     
      message: "Welcome to dress store application",
    });
  } catch (error) {
    next(error);
  }
};

module.exports.getProducts = async function (req, res, next) {
  try {
    let products = await productModel.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

module.exports.getProduct = async function (req, res, next) {
  try {
    let id = req.params.id;
    let product = await productModel.findById(id);
    if (product != null) {
      res.json(product);
    } else throw new Error("Product not found");
  } catch (error) {
    next(error);
  }
};

module.exports.add = async function (req, res, next) {
  try {
    let data = await productModel.create(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports.update = async function (req, res, next) {
  try {
    let id = req.params.id;
    let product = new productModel(req.body);
    product._id = id;
    let data = await productModel.findByIdAndUpdate(id, product);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports.remove = async function (req, res, next) {
  try {
    let id = req.params.id;
    let data = await productModel.findByIdAndDelete(id);
    res.json(data);
  } catch (error) {
    next(error);
  }
};
