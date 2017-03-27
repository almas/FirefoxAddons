dusalconverter.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ dusalconverter.showFirefoxContextMenu(e); }, false);
};

dusalconverter.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-dusalconverter").hidden = gContextMenu.onImage;
};

window.addEventListener("load", dusalconverter.onFirefoxLoad, false);
