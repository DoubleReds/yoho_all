const headerTpl = require('../views/header.html')
const footerTpl = require('../views/footer.html')
const carTpl = require("../views/car.html")
const carController = {
    render() {
        return $('.container .main').html(carTpl)
    }
}

module.exports = carController
