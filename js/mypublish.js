/**
 * Created by suxing on 2017/9/18.
 */
window.onload = function (ev) {

    //改变类型信息
    changeMyPublishType(ev);
};

//改变类型信息
function changeMyPublishType(ev) {
    var mylost = $("main-mylost");
    var myfound = $("main-myfound");

    mylost.onclick = function () {
        mylost.classList.add("main-publish-nav-bg");
        myfound.classList.remove("main-publish-nav-bg");
    };

    myfound.onclick = function () {
        mylost.classList.remove("main-publish-nav-bg");
        myfound.classList.add("main-publish-nav-bg");
    };
}
