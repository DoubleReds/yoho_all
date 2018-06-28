module.exports = () => {
    var PixelRatio = 1 / window.devicePixelRatio
    document.write('<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=' + PixelRatio + ',minimum-scale=' + PixelRatio + ',maximum-scale=' + PixelRatio + '" />')
    var html = document.getElementsByTagName("html")[0];
    var pageWidth = html.getBoundingClientRect().width;
    html.style.fontSize = pageWidth / 16  + "px";
    //phone5下是40px;
}

