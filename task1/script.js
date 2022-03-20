// JavaScript
 var myNodelist = document.getElementsByTagName("LI");
for (let node of myNodelist) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  node.appendChild(span);
}

var close = document.getElementsByClassName("close");
for (let element of close) {
  element.onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}
