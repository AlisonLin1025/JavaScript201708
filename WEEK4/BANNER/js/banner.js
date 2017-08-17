var banner = document.querySelector('.banner'),
    imgBox = banner.querySelector('.imgBox'),
    imgList = imgBox.getElementsByTagName('img'),//->querySelectorAll:不存在DOM映射机制,下面绑定数据后,不能自动的填充到当前这个集合中,所以我们应该使用getElementsByTagName,它有DOM映射机制
    focus = banner.querySelector('.focus'),
    focusList = focus.getElementsByTagName('li'),
    changeLeft = banner.querySelector('.changeLeft'),
    changeRight = banner.querySelector('.changeRight');

//=>数据绑定
~function () {
    var bannerData = null,
        xhr = new XMLHttpRequest;
    xhr.open('GET', 'json/banner.json', false);
    xhr.onreadystatechange = function () {
        xhr.readyState === 4 && xhr.status === 200 ? bannerData = utils.toJSON(xhr.responseText) : null;
    };
    xhr.send(null);

    var str = ``,
        strFocus = ``;
    for (var i = 0; i < bannerData.length; i++) {
        var item = bannerData[i];
        str += `<li><a href="${item.link}">
            <img src="" alt="" data-src="${item.img}">
        </a></li>`;

        strFocus += `<li class="${i === 0 ? 'select' : ''}"></li>`;
    }
    imgBox.innerHTML = str;
    focus.innerHTML = strFocus;
}();

//=>图片延迟加载
window.onload = function () {
    lazyImg(imgList[0]);//->当页面加载成功后,我们首先把第一张图片做延迟加载
};
function lazyImg(oImg) {
    if (oImg.isLoad) return;
    oImg.isLoad = true;//->isLoad:自定义属性
    var tempImg = new Image;
    tempImg.onload = function () {
        oImg.src = this.src;
        oImg.style.display = 'block';
        tempImg = null;
    };
    tempImg.src = oImg.getAttribute('data-src');//->部分IE浏览器需要把SRC赋值操作放在ONLOAD事件的下面,这样加载成功后才会触发ONLOAD事件
}

//=>轮播图运动
~function () {
    

}();














