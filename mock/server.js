const jsonServer = require('json-server')
const server = jsonServer.create()

// Support middleware
const middleware = jsonServer.defaults()
server.use(middleware)

// 支持加载多个db json文件
const _ = require('underscore')
const path = require('path')
const fs = require('fs')
const mockDir = path.join(__dirname, 'data')
const base = {}
const files = fs.readdirSync(mockDir)
files.forEach(function (file) {
  _.extend(base, require(path.resolve(mockDir, file)))
})
const router = jsonServer.router(base)
server.use(router)

// 返回自定义格式数据
router.render = (req, res) => {
  console.log(res.locals.data)
  res.jsonp({
    data: res.locals.data,
    status: 0,
    msg: ''
  })
}

server.listen(9090, () => {
  console.log('JSON Server is running')
})

// server.use((req, res, next) => {
//   if (isAuthorized(req)) { // add your authorization logic here
//     next() // continue to JSON Server router
//   } else {
//     res.sendStatus(401)
//   }
// })

// 处理登录逻辑
server.post('/account/login', function (req, res) {
  let db = router.db
  let data = db.get('login').value()  //这里的login就是db中的key
  res.jsonp({
    data: data,
    status: 0,
    message: ''
  })
})
