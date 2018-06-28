const main_indexsortTpl = require('../views/main_indexsort.html')
const headerTpl = require('../views/header.html')
const footerTpl = require('../views/footer.html')
const main_indexsortController = {
    render() {
        return $('.container .main').html(main_indexsortTpl)
    }
}

module.exports = main_indexsortController
