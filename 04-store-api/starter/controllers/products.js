const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const search = 'abl'
  const products = await Product.find({ 
    name:{$regex:search,$options:'i'}
   });
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  // console.log(req.query)
  // we handling if the property in data is there but the value doesn't much and if we try to setup a property doesn't exist in our data.
  // we pull out only the properties names in our data
  const { featured,company,name} = req.query;

  const queryObejct = new Object();
  // handling featured
  if (featured) {
    queryObejct.featured = featured == "true" ? true : false;
  }
  // handling company 
  if(company){
    queryObejct.company = company
  }
  // handling name 
  if(name){
    queryObejct.name = { $regex: name, $options: "i" };
  }
  console.log(queryObejct);
  const products = await Product.find(queryObejct);
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
