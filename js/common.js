/**
 * Created by suxing on 2017/9/17.
 */
function $(id) {
    return document.getElementById(id);
}

function OnClickListener(obj, type, handler, flg) {
    if (!flg) {
        flg = false;
    }
    if (obj.addEventListener) {
        obj.addEventListener(type, handler, flg);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + type, handler, flg);
    } else {
        obj["on" + type] = handler;
    }
}

function getEvent(ev) {
    return ev || window.event;
}

function getTarget(ev) {
    return getEvent(ev).target || getEvent(ev).srcElement;
}