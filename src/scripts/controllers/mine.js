const mineTpl = require('../views/mine.html')
const headerTpl = require('../views/header.html')
const footerTpl = require('../views/footer.html')
const mineController = {
    render() {
        return $('.container .main').html(mineTpl)
    }
}

module.exports = mineController
