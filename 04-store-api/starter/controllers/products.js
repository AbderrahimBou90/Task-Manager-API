const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  // we chain sort() method if name normal that's mean a-z if negative z-a
  // if price normal that mean from smaller to bigger (<<<) if negative oposite (>>>>)
  const products = await Product.find({}).select("name price");
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  // console.log(req.query)
  // we handling if the property in data is there but the value doesn't much and if we try to setup a property doesn't exist in our data.
  // we pull out only the properties names in our query
  const { featured, company, name, sort,fields } = req.query;
  // setup empty object
  const queryObejct = new Object();
  // handling featured
  if (featured) {
    // add property to the object
    queryObejct.featured = featured == "true" ? true : false;
  }
  // handling company
  if (company) {
    queryObejct.company = company;
  }
  // handling name
  if (name) {
    queryObejct.name = { $regex: name, $options: "i" };
  }
  // console.log(queryObejct);
  let result = Product.find(queryObejct);
  // handling sort 
  if (sort) {
      const sortList = sort.split(',').join(' ')
      result = result.sort(sortList)
  } else{
    result = result.sort('')
  }
  // handling select fields (options)
  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  } 
  // we add await after chaning find and sort methods in products variable and if sort false we await only find() method 
  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
