const Koa = require('koa')
const KoaRouter = require('koa-rapid-router')
const app = new Koa()
const routerC = new KoaRouter()
const router = routerC.create()
const path = require('path')

app.use(require('koa-bodyparser')())
  .use(require('@koa/cors')())
  .use(require('koa-static')(path.join(__dirname, './static')))

require('./routes/Product')({ router, Product })


// app.use(router.routes(), router.allowedMethods())
app.use(routerC.Koa())



app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})