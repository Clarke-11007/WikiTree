javascript:
var title = "" + document.title;
var endName = title.indexOf(" (b.");
var name = title.substr(0, endName);
var node = document.createElement("div");
node.innerHTML = '<a href="' + window.location + '">' + name + '</a>';
copyToClip(node.innerHTML);
alert("copied to clipboard:" + node.innerHTML);
function copyToClip(str) {
  function listener(e) {
    e.clipboardData.setData("text/html", str);
    e.clipboardData.setData("text/plain", str);
    e.preventDefault();
  }
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
};