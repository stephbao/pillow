var index = 1;
var bag = new Array();
var images = new Array();
var names = new Array();
var prices = new Array();
var quantities = new Array();
var customs = new Array();
var sizes = new Array();
var itemList = new Array();

showDivs(index);

//index of the second element shown
function plusDivs(n) {
  showDivs(index += n);
}

//show 2 elements at a time in carousel
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

//change information on product detail page based off of type of pillow selected
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

//create pillow object with details
function Pillow() {
  this.image = document.getElementById("cat").src;
  this.name = document.getElementById("name").innerHTML;
  this.price = document.getElementById("price").innerHTML;
  this.quantity = document.getElementById("quantity").value;
  this.size = document.getElementById("size").innerHTML;
  this.custom = document.getElementById("custom").value;
}

//first attempt to add to localstorage, could not figure out what to do after
function addToBag() {
  var pillow = new Pillow()
  bag.push(pillow);
  localStorage.setItem("pillows", JSON.stringify(bag));
  bag = JSON.parse(localStorage.getItem("pillows"));
  if (localStorage.getItem("num") == null) { localStorage.setItem("num", "0")}
  var num = JSON.parse(localStorage.getItem("num"));
  num = parseInt(num, 10) + 1;
  console.log(num);
  localStorage.setItem("num", JSON.stringify(num));
  document.getElementById("num").innerHTML = JSON.parse(localStorage.getItem("num"));

  for (i = 0; i < JSON.parse(localStorage.getItem("pillows")).length; i++) {
    images.push(JSON.parse(localStorage.getItem("pillows"))[i].image)
    names.push(JSON.parse(localStorage.getItem("pillows"))[i].name)
    prices.push(JSON.parse(localStorage.getItem("pillows"))[i].price)
    quantities.push(JSON.parse(localStorage.getItem("pillows"))[i].quantity)
    sizes.push(JSON.parse(localStorage.getItem("pillows"))[i].size)
    customs.push(JSON.parse(localStorage.getItem("pillows"))[i].custom)
  }
  localStorage.setItem("images", JSON.stringify(images));
  localStorage.setItem("names", JSON.stringify(names));
  localStorage.setItem("prices", JSON.stringify(prices));
  localStorage.setItem("quantities", JSON.stringify(quantities));
  localStorage.setItem("sizes", JSON.stringify(sizes));
  localStorage.setItem("customs", JSON.stringify(customs));
}

//second attempt based on lab, bugged
function addListItem() {
  //var itemInput = new Pillow();
  var newItem = document.createElement("li");
  newItem.appendChild(document.createTextNode(new Pillow()));
  itemList.appendChild(newItem);
  localStorage.setItem("listPillows", JSON.stringify(list));
  if (localStorage.getItem("num") == null) { localStorage.setItem("num", "0")}
  var num = JSON.parse(localStorage.getItem("num"));
  num = parseInt(num, 10) + 1;
  localStorage.setItem("num", JSON.stringify(num));
  document.getElementById("num").innerHTML = JSON.parse(localStorage.getItem("num"));
}

function deleteListItem(item) {
    // remove li element (item) from ol element (item.parentNode)
    item.parentNode.removeChild(item);
}
