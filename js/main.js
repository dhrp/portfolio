
document.getElementById('body').onresize = OnResize;


function OnMouseDown(e) {
log("mousedown");
log(e.target.innerHTML);
}

function OnTouchMove(event) {
log("touchmove");
log(event);
event.preventDefault();
}

function OnResize(event) {
//    var portfolioTitle = document.getElementById('portfolioTitle');
var portfolioTitle = $('#portfolioTitle');
var gridContainer = $('#gridContainer');
var wrapper = $('#wrapper');

if (wrapper.height() > 505) {
portfolioTitle.css("margin-top", "0");
} else {
portfolioTitle.css ("margin-top", "100px");
}
}


function log(string) {
document.getElementById('logoutput').innerHTML += string + "<br>";
}

function status(string) {
document.getElementById('statuswindow').innerHTML = string;

}

function drawGrid(items) {

var gridContainer = document.getElementById('gridContainer');

for (i=0; i < items; i++) {
var block = document.createElement('div');
block.setAttribute('id', i.toString());
block.setAttribute('class', 'gridblock');
block.innerHTML = i.toString();
setMouseOverEffect(block);
gridContainer.appendChild(block);
}
}

function setMouseOverEffect(element) {

$(element).mouseover( function() {
$(element).css("background-color", "silver");
});
$(element).mouseout( function() {
$(element).css("background-color", "#f8f8ff");
});


}

function showDocumentWidth() {
log("show width");

log(koffiedik.getDocumentWidth());
}


drawGrid(11);
showDocumentWidth();
