/**
 * Created by suxing on 2017/9/17.
 */
window.onload = function () {

};
window.onscroll = function () {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var headWrap = $("head-wrap");
    console.log(scrollTop);
    if (scrollTop > 50) {
        headWrap.style.boxShadow = "3px 3px 5px #333";
    }if(scrollTop === 0){
        headWrap.style.boxShadow = "none";
    }
};