module.exports = ({ router, Product }) => {

  router.get('/test', async ctx => {
    // Product.insertMany([
    //   { title: '产品1' },
    //   { title: '产品2' },
    //   { title: '产品3' },
    // ])
    ctx.body = await Product.find()
  })

}