const model = require('../models/guangdata')
const poslistTpl = require('../views/poslist.html')

const strollTpl = require('../views/stroll-main.html')
const headerTpl = require('../views/header.html')
const footerTpl = require('../views/footer.html')
// const scrollUtil = require('../utils/scroll')

 const guangdataController = {
     async  render() {
        //  let i=1;
        //  i++;
        let result = await model.find({page:1})
        // console.log(result)
        let data = result.list
        // console.log(data)
        let html = template.render(poslistTpl, {result:data})
        // console.log(html)
        
        $('.container .main').html(strollTpl)
        $('.guang-list').html(html);
        $(".guang-item img").forEach((ele)=>{
            let url = $(ele).attr("src");
            let index = url.lastIndexOf("?");
            url = url.substr(0,index);
            $(ele).attr("src",url);
        });
        this.onloadData();
        //scrollUtil()
    },
    onloadData(){
        console.log("数据加载完毕！")
    }

      // render(){
      //   $('.container .main').html(strollTpl)
      // }
    
  }

module.exports = guangdataController
