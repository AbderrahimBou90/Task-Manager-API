const Product = require("../models/product");

// testing controller
const getAllProductsStatic = async (req, res) => {
  // we chain sort() method if name normal that's mean a-z if negative z-a
  // if price normal that mean from smaller to bigger (<<<) if negative oposite (>>>>)
  const products = await Product.find({}).select("name price").sort('name')
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
    result = result.sort('createAt')
  }
  // handling select fields (options)
  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  } 
  // handling pagination with limit and skip methods 
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  const skip = (page -1) * limit
  // we have 23 items 
  // we want 7 items in a page 
  // we divide 23/7 we get 3.28 pages which means 3 pages each have 7 items and the last page have only 2 items (7 + 7 + 7 + 2 = 23) and with that we have 4 pages 
  result = result.skip(skip).limit(limit)




  // we add await after chaning find and sort methods in products variable and if sort false we await only find() method 
  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
