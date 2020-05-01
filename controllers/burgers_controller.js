const Product = require('../models/burger')
// -----------------------------------Update with burger info!------------------------------------
module.exports = function(app) {
  app.get("/burger", async (req, res) => {
    try {
      res.render('product/allproducts', {
        products: await Product.findAll({}).map(product => product.dataValues)
      })
    }
    catch(err) {
      res.render('product/error', {
        code: 500,
        msg: 'Something went wrong getting the products!',
      })
    }
  })
  app.get("/products/:id", async (req, res) => {
    try {
      const product = await Product.findOne({
        where: {
          id: req.params.id
        }
      })
      res.render('product/singleproduct', { ...product.dataValues })
    }
    catch(err) {
      res.render('product/error', {
        code: 404,
        msg: `Product #${ req.params.id } not found!`,
      })
    }
  })
}