const mongoose = require('mongoose')
mongoose.connect('mongodb://test:liujiaxin@192.168.0.115:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })

const CategorySchema = new mongoose.Schema({
  name: { type: String }
})
CategorySchema.virtual('posts', {
  localField: '_id',
  ref: 'Post',
  foreignField: 'categories',
  justOne: false
})
const Category = mongoose.model('Category', CategorySchema)

const Post = mongoose.model('Post', new mongoose.Schema({
  title: { type: String },
  body: { type: String },
  category: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
}))

! async function () {

  const cats = await Category.find().populate('posts')
  console.log(JSON.stringify(cats))

  // await Post.insertMany([
  //   { title: '我的第一篇帖子', body: '内容1' },
  //   { title: '我的第二篇帖子', body: '内容2' },
  // ])
  // await Category.insertMany([
  // { name: 'nodejs' },
  // { name: 'vuejs' }
  // ])
  // console.log(await Category.find())
  // const cat1 = await Category.findOne({ name: 'nodejs' })
  // const cat2 = await Category.findOne({ name: 'vuejs' })
  // const post1 = await Post.findOne({ title: '我的第一篇帖子' })
  // const post2 = await Post.findOne({ title: '我的第二篇帖子' })
  // post1.categories = [cat1, cat2]
  // post2.categories = [cat2]
  // await post1.save()
  // await post2.save()
  // const posts = await Post.find().populate('categories')
  // console.log(posts[0], posts[1])
}()

const Product = mongoose.model('Product', new mongoose.Schema({
  title: String,
}))

module.exports = { Product }