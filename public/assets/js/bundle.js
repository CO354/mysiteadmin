/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./frontend/main.js ***!
  \**************************/
var videoModel = document.querySelector('.videoModel');
var btnVideo = document.querySelector('.btn-event-player');
videoModel.addEventListener('click', function () {
  var div = document.createElement('div');
  div.setAttribute('class', 'modal-dialog modal-xl d-none');
  div.innerHTML = '';
  btnVideo.appendChild(div);
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map