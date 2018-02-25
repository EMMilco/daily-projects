import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

import Root from 'components/root';

const smile = () => {
  const $html = $("<b>:)</b>");

  $html.css({
    "display": "block",
    "position": "fixed",
    "bottom": "10px",
    "right": "10px",
    "-webkit-transform": "rotate(90deg)",
    "font-family": "Inconsolata, monospace"
  });

  $("body").append($html);
};

const insertDeskHash = () => {
  chrome.storage.local.get("deskHash", storage => {
    const $input = $("input.desk-hash")
    if ($input.length) {
      $input.val(storage.deskHash);
      smile();
    }
  });
};

insertDeskHash();

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<Root />, document.querySelector('#app'));
});
