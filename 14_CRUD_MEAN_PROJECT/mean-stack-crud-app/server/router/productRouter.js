const express = require("express");
const Product = require("../model/Product");
const router = express.Router();

/* 
    USAGE : Get all the products
    URL : http://127.0.0.1:3000/api/products
    Method : GET
    Fields : no-fields
*/
router.get("/products", async (request, response) => {
  try {
    let products = await Product.find();
    return response.status(200).json(products);
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      message: error.message,
    });
  }
});

/* 
    USAGE : Get single product
    URL : http://127.0.0.1:3000/api/product/:id
    Method : GET
    Fields : no-fields
*/
router.get("/product/:id", async (request, response) => {
  try {
    let productId = request.params.id;
    let product = await Product.findById(productId);
    return response.status(200).json(product);
  } catch (error) {
    // console.err(error);
    return response.status(500).json({ message: "Internal Server Error" });
  }
});

/* 
    USAGE : Create A Product
    URL : http://127.0.0.1:3000/api/product
    Method : POST
    Fields : no-fields
*/
router.post("/product", async (request, response) => {
  try {
    let newProduct = {
      name: request.body.name,
      image: request.body.image,
      price: request.body.price,
      qty: request.body.qty,
      info: request.body.info,
    };
    // Check If product already exists or not
    let product = await Product.findOne({ name: request.body.name });
    if (product) {
      return response.status(401).json({ message: "Product Already Exists" });
    }
    product = new Product(newProduct);
    product = await product.save();
    // return response.status(200).json(product); // insert the product to database
    return response.status(200).json({
      message: "Product is Created",
      product: product,
    });
  } catch (error) {
    // console.err(error);
    return response.status(500).json({
      message: error.message,
    });
  }
});

/* 
    USAGE : Update A Product
    URL : http://127.0.0.1:3000/api/product/:id
    Method : PUT
    Fields : no-fields
*/
router.put("/product/:id", async (request, response) => {
  let productId = request.params.id;
  try {
    let updatedProduct = {
      name: request.body.name,
      image: request.body.image,
      price: request.body.price,
      qty: request.body.qty,
      info: request.body.info,
    };
    // Check If product already exists or not
    let product = await Product.findById(productId);
    if (!product) {
      return response.status(401).json({ message: "Product Doesn't Exist" });
    }
    //update
    product = await Product.findByIdAndUpdate(
      productId,
      { $set: updatedProduct },
      { new: true }
    );
    return response.status(200).json({
      message: "Product is Updated",
      product: product,
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      message: error.message,
    });
  }
});

/* 
    USAGE : Delete A Product
    URL : http://127.0.0.1:3000/api/product/:id
    Method : DELETE
    Fields : no-fields
*/
router.delete("/product/:id", async (request, response) => {
  let productId = request.params.id;
  try {
    // Check If product already exists or not
    let product = await Product.findById(productId);
    if (!product) {
      return response.status(401).json({ message: "Product Doesn't Exist" });
    }
    //delete
    product = await Product.findByIdAndDelete(productId);
    response.status(200).json({ message: "Product is Deleted" });
  } catch (error) {
    // console.err(error);
    return response.status(500).json({
      message: error.message,
    });
  }
});
module.exports = router;
