var Items = [
  ['codeImages/skateboardDeck4.jpg', 29.99, 'product 1'],
  ['codeImages/SkateDeck.jpg', 15.00, 'product 2'],
  ['codeImages/skateboardDeck2.jpg', 20.00, 'product 3']
];

var cartItems = [
  ['codeImages/skateboardDeck4.jpg', 29.99, 'product 1'],
  ['codeImages/SkateDeck.jpg', 15.00, 'product 2'],
  ['codeImages/skateboardDeck2.jpg', 20.00, 'product 3']

];

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
    add.innerHTML = 'click me';

    typebox.type = 'number';
    typebox.setAttribute("id", "input" + i);
    typebox.value = 1;

  }

  function adding(Event) {
    const NUM = Event.currentTarget.dataset.cartIndex;

    cartItems.push([Items[NUM]]);
    cartItems[cartItems.length - 1][1] = Number(document.getElementById('input' + NUM).value);

    updateCart();
  }
  var totalitems = 0;

  function updateCart() {


    var itemcounter = document.getElementById('itemCount');
    totalitems = 0;
    for (var i = 0; i < cartItems.length; i++) {
      totalitems += cartItems[i][1];
  itemcounter.innerHTML = totalitems;


    }

  }

}
