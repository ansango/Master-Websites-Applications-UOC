/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

/**
 * Libraries
 */
import "@fortawesome/fontawesome-free/css/all.css";
/**
 * Libraries
 */

function onReady(callback) {
  const intervalId = window.setInterval(function () {
    if (document.getElementsByTagName("body")[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 3000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? "block" : "none";
}

onReady(function () {
  setVisible("#cv", true);
  setVisible("#loading", false);
});
