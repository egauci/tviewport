var viewport = require('viewport-event').default;

var ctr = document.getElementById('overlay');
var topleft = document.getElementById('topleft');
var topright = document.getElementById('topright');
var bottomleft = document.getElementById('bottomleft');
var bottomright = document.getElementById('bottomright');

var offsetHeight, offsetWidth;

function show(vp) {
  offsetHeight = offsetHeight ? offsetHeight : ctr.offsetHeight;
  offsetWidth = offsetWidth ? offsetWidth : ctr.offsetWidth;
  var top = String(Math.floor((vp.clientHeight - offsetHeight) / 2) + vp.scrollY) + 'px';
  var left = String(Math.floor((vp.clientWidth - offsetWidth) / 2) + vp.scrollX) + 'px';
  ctr.style.top = top;
  ctr.style.left = left;
  // console.log(top, left, offsetHeight, offsetWidth);
  var html = '<pre>\n' +
    'isIOS:        ' + vp.isIOS + '\n' +
    'scrollY:      ' + vp.scrollY + '\n' +
    'scrollX:      ' + vp.scrollX + '\n' +
    'width:        ' + vp.width + '\n' +
    'height:       ' + vp.height + '\n' +
    'clientWidth:  ' + vp.clientWidth + '\n' +
    'clientHeight: ' + vp.clientHeight + '\n' +
    'top, left:    ' + top + ', ' + left + '\n' +
    '</pre>\n';
  ctr.innerHTML = html;
  topleft.style.top = String(vp.scrollY + 2) + 'px';
  topleft.style.left = String(vp.scrollX + 2) + 'px';
  topright.style.top = String(vp.scrollY + 2) + 'px';
  topright.style.left = String(vp.scrollX + vp.clientWidth - 12) + 'px';
  bottomleft.style.top = String(vp.scrollY + vp.clientHeight - 12) + 'px';
  bottomleft.style.left = String(vp.scrollX + 2) + 'px';
  bottomright.style.top = String(vp.scrollY + vp.clientHeight - 12) + 'px';
  bottomright.style.left = String(vp.scrollX + vp.clientWidth - 12) + 'px';
}

show(viewport.getViewport());

viewport.on('viewport', show);
