// 从接口获得后端的数据
const model = {
    find(obj) {
      // fetch('/lagou/listmore.json')
      // fetch('http://localhost:3000/backend/poslist')
      var url = "api?page="+obj.page;
      return fetch(url)
        .then(response => response.json())
        .then(result => {
          return result
        })
    }
  }
  
  module.exports = model
  