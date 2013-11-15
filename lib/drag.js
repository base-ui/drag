var eventy = require('eventy');
var ObjectDocument = require('object-document');

module.exports = Drag;

function Drag(el) {
  var drag = eventy(this);

  el = ObjectDocument.wrapElement(el);
  el.on('mousedown', onMousedown);

  function onMousedown(mousedown) {
    drag.trigger('activate');

    ObjectDocument.on('mouseup', onMouseup);
    ObjectDocument.on('mousemove', onMousemove);
  }

  function onMouseup(mouseup) {
    drag.trigger('deactivate');

    ObjectDocument.off('mouseup', onMouseup);
    ObjectDocument.off('mousemove', onMousemove);
  }

  function onMousemove(mousemove) {
    drag.trigger('drag', mousemove);
  }
}
