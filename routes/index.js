const router = require('koa-router')()
const { query } = require('../database/mysql')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/test', async (ctx, next) => {
    let sql = 'SELECT * FROM test'
    let dataList = await query( sql )
    ctx.body = dataList;
})

// 用户注册
router.get('/register', async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  console.log(ctx.query);
  let sql = 'INSERT INTO user_tb (user_tel, user_psd, user_type, user_date) VALUES ("'+ctx.query.tel+'","'+ctx.query.psd+'","'+ctx.query.select+'",NOW())';
  let dataList = await query( sql )
  ctx.body = '成功';
})

// 用户登录

router.get('/login', async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  console.log(ctx.query);
  let sql = 'select * from user_tb where user_tel="' + ctx.query.name +'" and  user_psd="' + ctx.query.psd +'"';
  let dataList = await query( sql )
  if (dataList.length > 0) {
    ctx.body = JSON.stringify({
      code: '1',
      status: 'success',
      result: dataList
    })
  } else {
    ctx.body = JSON.stringify({
      code: '0',
      status: 'fail',
      result: dataList
    })
  }
})

module.exports = router
