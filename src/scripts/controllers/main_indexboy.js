const main_indexboyTpl = require('../views/main_indexboy.html')
const headerTpl = require('../views/header.html')
const footerTpl = require('../views/footer.html')
const swiper = require("./swiper")
const main_indexboyController = {
    render() {
        $('.container .main').html(main_indexboyTpl)
        swiper();
    }


}

module.exports = main_indexboyController
