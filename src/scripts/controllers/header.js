const headerTpl = require('../views/header.html');
module.exports = ()=>{
    $('.download-close').on('click',()=>{
        $(".top-downloadbar").css({
            "display":"none"
        })
    })
   
}
