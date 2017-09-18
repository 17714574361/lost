/**
 * Created by suxing on 2017/9/18.
 */
window.onload = function () {
    isSshowDelBtn();
    isShowPawBtn();
    delAll();
    showPaw();
};

function showPaw() {
    var paw = $("login-paw");
    var showPaw = $("show-paw");
    var flg = true;
    showPaw.onclick = function () {
        if (flg) {
            paw.type = "text";
            showPaw.style.color = "#333";
            flg = false;
        } else {
            paw.type = "password";
            showPaw.style.color = "#eee";
            flg = true;
        }
    }
}

function delAll() {
    var tel = $("login-tel");
    var paw = $("login-paw");
    var accountDel = $("account-del");
    accountDel.onclick = function () {
        tel.value = "";
        paw.value = "";
    }
}
function isSshowDelBtn() {
    var tel = $("login-tel");
    var accountDel = $("account-del");
    tel.oninput = function () {
        if (tel.value.length > 0) {
            accountDel.style.visibility = "visible";
        } else {
            accountDel.style.visibility = "hidden";
        }
    };

    // tel.onpropertychange = function () {
    //     if (tel.value.length > 0) {
    //         accountDel.style.visibility = "visible";
    //     }else{
    //         accountDel.style.visibility = "hidden";
    //     }
    // }

}
function isShowPawBtn() {
    var paw = $("login-paw");
    var showPaw = $("show-paw");
    paw.oninput = function () {
        if (paw.value.length > 0) {
            showPaw.style.visibility = "visible";
        } else {
            showPaw.style.visibility = "hidden";
        }
    };

    // paw.onpropertychange = function () {
    //     if (paw.value.length > 0) {
    //         showPaw.style.visibility = "visible";
    //     }else{
    //         showPaw.style.visibility = "hidden";
    //     }
    // }
}