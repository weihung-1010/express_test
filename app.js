// require packages used in the project
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

// express 樣版引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 載入靜態檔案
app.use(express.static('public'))
// routes setting
app.get('/', (req, res) => {
  res.render('index')
})
// about 路由
app.get('/about', (req, res) => {
  res.render('about')
})
// portfolio 路由
app.get('/portfolio',(req, res) => {
  res.render('portfolio')
})
// contact 路由
app.get('/contact',(req, res) => {
  res.render('contact')
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})