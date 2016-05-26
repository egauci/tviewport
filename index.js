var viewport = require('../dist/index.js');

var ctr = document.getElementById('overlay');

function show(vp) {
  var html = '<pre>\n' +
    'scrollY:      ' + vp.scrollY + '\n' +
    'scrollX:      ' + vp.scrollX + '\n' +
    'width:        ' + vp.width + '\n' +
    'height:       ' + vp.height + '\n' +
    'clientWidth:  ' + vp.clientWidth + '\n' +
    'clientHeight: ' + vp.clientHeight + '\n' +
    '</pre>\n';
  ctr.innerHTML = html;
}

show(viewport.getViewport());

viewport.on('viewport', show);
