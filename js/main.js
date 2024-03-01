// prevents right click
document.oncontextmenu = () => {
  alert("Don't try right click");
  return false;
};
// Prevent inspect tools
document.onkeydown = (e) => {
  // prevent f12 key
  if (e.key == "F12") {
    alert("Don't try inspect tools");
    return false;
  }
  // prevents ctrl + u
  if (e.ctrlKey && e.key == "u") {
    alert("Don't try view source");
    return false;
  }
  // prevents copy
  if (e.ctrlKey && e.key == "c") {
    alert("Don't try copy");
    return false;
  }
  //   prevents paste
  if (e.ctrlKey && e.key == "v") {
    alert("Don't try paste");
    return false;
  }
};
