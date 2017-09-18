/**
 * Created by suxing on 2017/9/17.
 */
window.onload = function () {

    //如何显示点击按钮后返回顶部的过度动画
    backTopAnimation();

};
window.onscroll = function () {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    //如何显示头部阴影
    showHeadShadow(scrollTop);
    //如何显示回到顶部按钮
    showBackTop(scrollTop);
};


//点击返回顶部按钮后显示过度动画
function backTopAnimation() {
    var backTop = $("back-top");
    var speed = 50;//速度为50
    backTop.onclick = function () {
        clearInterval(backTop.timer);
        backTop.timer = setInterval(function () {
            var currentScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            document.body.scrollTop = document.documentElement.scrollTop = currentScrollTop - speed;
            if (currentScrollTop === 0) {
                document.body.scrollTop = document.documentElement.scrollTop;
                clearInterval(backTop.timer);
            }
        }, 5);
    };
}

//head是否显示阴影
function showHeadShadow(scrollTop) {
    var headWrap = $("head-wrap");
    //若>50显示阴影
    if (scrollTop > 50) {
        headWrap.style.boxShadow = "3px 3px 5px #333";
    }
    //若=0不显示阴影
    if (scrollTop === 0) {
        headWrap.style.boxShadow = "none";
    }
}

//是否显示回到顶部按钮
function showBackTop(scrollTop) {
    var backTop = $("back-top");
    //>500显示返回顶部,<500不显示
    if (scrollTop > 500) {
        backTop.style.display = "block";
    } else {
        backTop.style.display = "none";
    }
}