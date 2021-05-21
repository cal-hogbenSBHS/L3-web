var Items = [
  ['codeImages/skateboardDeck4.jpg', 29.99, 'product 1'],
  ['codeImages/SkateDeck.jpg', 15.00, 'product 2'],
  ['codeImages/skateboardDeck2.jpg', 20.00, 'product 3']
];

var cartItems = [];

function run() {
  var main = document.getElementById('products');

  for (var i = 0; i < Items.length; i++) {

    var ele = document.createElement('li');
    var pic = document.createElement('img');
    var heading = document.createElement('h1');
    var price = document.createElement('h2');
    var add = document.createElement('button');
    var typebox = document.createElement('input');

    main.appendChild(ele);
    ele.appendChild(pic);
    ele.appendChild(heading);
    ele.appendChild(price);
    ele.appendChild(add);
    ele.appendChild(typebox);

    add.dataset.cartIndex = i;
    add.addEventListener('click', adding, false);

    pic.src = Items[i][0];
    price.innerHTML = '$' + Items[i][1];
    heading.innerHTML = 'product';
    add.innerHTML = 'add';

    typebox.type = 'number';
    typebox.setAttribute("id", "input" + i);
    typebox.value = 1;
  }
} // end func

function adding(Event) {
  const NUM = Event.currentTarget.dataset.cartIndex;

  cartItems.push([Items[NUM]]);
  cartItems[Items.length - 1][1] = Number(document.getElementById('input' + NUM).value);
  updateCart();

} // end func


function loadcart() {
  var main = document.getElementById('cartness');

  var data = sessionStorage.getItem('cartItems');
  data = JSON.parse(data);

  cartItems = data;

  updateCart();

  for (var i = 0; i < cartItems.length; i++) {

    var ele = document.createElement('li');
    var pic = document.createElement('img');
    var heading = document.createElement('h1');
    var price = document.createElement('h2');
    var deleteitem = document.createElement('button');
    var amount = document.createElement('h2');
    var subtotal = document.createElement('h3');


    main.appendChild(ele);
    ele.appendChild(pic);
    ele.appendChild(heading);
    ele.appendChild(price);
    ele.appendChild(deleteitem);
    ele.appendChild(amount);
    ele.appendChild(subtotal);

    deleteitem.dataset.cartIndex = i;
    deleteitem.addEventListener('click', deleteme, false);

    pic.src = cartItems[i][0][0];
    price.innerHTML = '$' + cartItems[i][0][1];
    heading.innerHTML = 'product' + i;
    deleteitem.innerHTML = 'delete';

    amount.innerHTML = cartItems[i][1];
    subtotal.innerHTML = '$' + cartItems[i][1] * cartItems[i][0][1];

  }
} // end func

function deleteme() {
  const NUM = event.currentTarget.dataset.cartIndex;

  delete cartItems[NUM];

  cartItems = cartItems.filter(item => item !== undefined);

  updateCart();
  loadcart();
  window.location.reload(true);

}

function adding(Event) {
  const NUM = Event.currentTarget.dataset.cartIndex;

  cartItems.push([Items[NUM]]);
  cartItems[cartItems.length - 1][1] = Number(document.getElementById('input' + NUM).value);
  updateCart();

} // end func
var totalitems = 0;

function updateCart() {
  var itemcounter = document.getElementById('checkout');

  totalitems = 0;

  for (var i = 0; i < cartItems.length; i++) {
    totalitems += cartItems[i][1];
  }
  window.sessionStorage.setItem('cartItems', JSON.stringify(cartItems));

  itemcounter.innerHTML = totalitems;

} // end func
