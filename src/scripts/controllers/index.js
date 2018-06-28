const indexController = {
    footerAction() {
        // var i = 1;
        const pagelist = ['/main_indexboy', '/main_indexsort', '/stroll', '/car', '/mine']
        $('.footer-tab li').on('click', function () {
            console.log(9);
            location.hash = pagelist[$(this).index()];
            // console.log(location.hash);
            $(this).addClass('active').siblings().removeClass('active')
        })
        // let pathname = location.pathname.substr(1)
        // let curIndex = pagelist.indexOf(pathname)
        // curIndex = curIndex > 0 ? curIndex : 0
        // $('footer li').eq(curIndex).addClass('active').siblings().removeClass('active')
    }
}

module.exports = indexController
