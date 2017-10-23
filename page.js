var index = 1;
var bag = new Array();
var length = 0;
showDivs(index);

function plusDivs(n) {
  showDivs(index += n);
}

function showDivs(n) {
  var i;
  var more = document.getElementsByClassName("more");
  if (n > more.length) {index = 1}
  if (n < 1) {index = more.length}
  for (i = 0; i < more.length; i++) {
     more[i].style.display = "none";
  }
  more[index-1].style.display = "inline";
  more[index].style.display = "inline";
}

function pillowType(id) {
  var i;
  var property = document.getElementById(id);
  var pillows = document.getElementsByClassName("prod");
  for (i = 0; i < pillows.length; i++) {
    pillows[i].style.backgroundColor = "white";
    pillows[i].style.color = "grey";
  }
  property.style.backgroundColor = "grey";
  property.style.color = "white";

  var size = document.getElementsByClassName("size");
  var price = document.getElementsByClassName("price");
  var cat = document.getElementsByClassName("detail");

  if (id == "couch") {
    size[0].innerHTML = "24 x 19 inches";
    price[0].innerHTML = "$24.00";
    cat[0].src= "https://image.prntscr.com/image/9q2FkECzT0ixYm6xnoDmMg.png";
  }
  else if (id == "bed") {
    size[0].innerHTML = "20 x 30 inches";
    price[0].innerHTML = "$27.00";
    cat[0].src = "https://image.prntscr.com/image/pEfiBfr5SaC8vP2LyowO8Q.png";
  }
  else if (id == "round") {
    size[0].innerHTML = "18 inches diameter";
    price[0].innerHTML = "$20.00";
    cat[0].src = "https://image.prntscr.com/image/iVX7Vwo-TN6r8R8LXcYkww.png";
  }
  else if (id == "floor") {
    size[0].innerHTML = "36 x 36 inches";
    price[0].innerHTML = "$32.00";
    cat[0].src = "https://image.prntscr.com/image/bAcN8B8GQLOvt12WLtt6vA.png";
  }
}

function Pillow() {
  this.image = document.getElementById("cat");
  this.name = document.getElementById("name");
  this.price = document.getElementById("price");
  this.quantity = document.getElementById("quantity");
  this.size = document.getElementById("size");
  this.custom = document.getElementById("custom");
}

function addToBag() {
  var pillow = Pillow()
  bag.push(pillow);
  length += 1;
  console.log(length["size"]);
}

localStorage.setItem("pillows", JSON.stringify(bag));
var localBag = JSON.parse(localStorage.getItem("pillows"));

localBag