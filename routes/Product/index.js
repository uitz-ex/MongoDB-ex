module.exports = ({ router, Product }) => {

  router.get('/products', async ctx => {
    // Product.insertMany([
    //   { title: '产品1' },
    //   { title: '产品2' },
    //   { title: '产品3' },
    // ])

    // const data = await Product.find().skip(1).limit(2)
    // const data = await Product.find().where({
    //   title: '产品2'
    // })
    const data = await Product.find().sort({ _id: -1 })
    ctx.body = data
  })

  router.get('/products/{id: string }', async ctx => {
    const data = await Product.findById(ctx.params.id)
    ctx.body = data
  })

  router.post('/products', async ctx => {
    // const data = Object.keys(ctx.req)
    const data = ctx.request.body
    const product = await Product.create(data)
    ctx.body = product
    // ctx.body = ctx.originalUrl
  })

  router.put('/products/{ id: string }', async ctx => {
    const product = await Product.findById(ctx.params.id)
    product.title = ctx.request.body.title
    await product.save()
    ctx.body = product
  })

  router.delete('/products/{ id: string }', async ctx => {
    const product = await Product.findById(ctx.params.id)
    await product.remove()
    ctx.body = {
      success: true
    }
  })

}