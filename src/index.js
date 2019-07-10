import './index.css';
var imgUrl=require('../assents/c7n.jpg');
var addImg=()=>{
    var img=document.createElement('img');
    img.setAttribute('src',imgUrl);
    document.getElementsByTagName('div')[0].append(img);
}
addImg();