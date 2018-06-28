module.exports = function () {
    $.ajax({
        url: "/api/user/signin",
        // url: "/api/signin.do",api还是不能找到，反向代理
        // url: "/api/signin.do",
        type: "get",
        dataType: "json",
        success: (res) => {
            console.log(4545);
            console.log(res);
        }
    })
}