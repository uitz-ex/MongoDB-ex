const Koa = require('koa')
const KoaRouter = require('koa-router')
const app = new Koa()
const router = new KoaRouter()
const path = require('path')
const PORT = 8081
const mongoose = require('mongoose')

mongoose.connect('mongodb://192.168.0.115:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
const Product = mongoose.model('Product', new mongoose.Schema({
  title: String,
}))


app.use(require('koa-bodyparser')())
app.use(require('koa-cors')())
app.use(require('koa-static')(path.join(__dirname, './static')))

require('./routes/index')({ router, Product })


app.use(router.routes())



app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})