const main_indexboyController = require('../controllers/main_indexboy')
const main_indexsortController = require('../controllers/main_indexsort')
// const homeController = require('../controllers/guangdata')
const guangdataController = require('../controllers/guangdata')
const carController = require('../controllers/car')
const mineController = require('../controllers/mine')

module.exports = function () {
    let hash = location.hash.substr(1);
    // $('.container').remove()
    switch (hash) {
        case '':
        case '/main_indexboy':
            main_indexboyController.render();
            break
        case '/main_indexsort':
            main_indexsortController.render();
            break
        case '/stroll':
            guangdataController.render();
            break
        case '/car':
            carController.render();
            break
        case '/mine':
            mineController.render();
            break
        default:
            break
    }
}
// // function Router() {
// //     this.currentUrl = ''
// //     this.routes = {}
// // }

// // var noop = function () { }

// // Router.prototype.route = function (url, cb) {
// //     this.routes[url] = cb || noop
// //     // console.log(this.routes)
// // }

// // Router.prototype.refresh = function () {
// //     this.currentUrl = location.hash.slice(1) || '/index'
// //     this.routes[this.currentUrl]()
// //     // console.log(this.currentUrl)
// // }

// // Router.prototype.init = function () {
// //     window.addEventListener('load', this.refresh.bind(this))
// //     window.addEventListener('hashchange', this.refresh.bind(this))
// // }

// // module.exports = Router

















// function Router() {
//     this.currentUrl = ''
//     this.routes = {}
// }

// var noop = function () { }

// Router.prototype.route = function (url, cb) {
//     this.routes[url] = cb || noop
// }

// Router.prototype.refresh = function () {
//     this.currentUrl = location.hash.slice(1) || '/index'
//     this.routes[this.currentUrl]()
// }

// Router.prototype.init = function () {
//     window.addEventListener('load', this.refresh.bind(this))
//     window.addEventListener('hashchange', this.refresh.bind(this))
// }

// module.exports = Router
