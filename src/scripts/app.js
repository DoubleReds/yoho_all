
//  const size=require("./urils/commit")
//  size();
const indexBoy = require('./views/index_boy.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')
const footer1Tpl = require('./views/footer1.html')
const containerTpl = require('./views/container.html')
// const homeTpl = require('./views/home.html')
const main_indexboyTpl = require('./views/main_indexboy.html')
const main_indexsortTpl = require('./views/main_indexsort.html')
const strollTpl = require('./views/stroll-main.html')
const carTpl = require('./views/car.html')
const mineTpl = require('./views/mine.html')
const poslistTpl = require('./views/poslist.html')
const indexController = require('./controllers/index')
// const main_indexboyController = require('./controllers/main_indexboy')
// const main_indexsortController = require('./controllers/main_indexsort')
// const carController = require('./controllers/car')
// const strollController = require('./controllers/stroll')
// const mineController = require('./controllers/mine')

const router = require('./urils/router')

$('#root').html(indexBoy)
const headerController = require('./controllers/header')
headerController();
// console.log(0)
// $('#root').html(main_indexboyTpl)
// $('.container').html(headerTpl + main_indexboyTpl + footerTpl)
// $('.container').html(headerTpl + main_indexsortTpl + footerTpl)
// $('.container').html(headerTpl + strollTpl)
// $('.container').html(headerTpl + carTpl)

router()

window.addEventListener('hashchange', function () {
    router()
})

indexController.footerAction()

// require('./urils/router')
// const router = new Router()
// // router.route('/', main_indexboyController.render)
// router.route('/main_indexboy', main_indexboyController.render)
// router.route('/main_indexsort', main_indexsortController.render)
// router.route('/car', carController.render)
// router.route('/stroll', strollController.render)
// router.route('/mine', mineController.render)
// router.init()
