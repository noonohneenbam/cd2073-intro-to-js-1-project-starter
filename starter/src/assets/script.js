/* Completed: Create an array named products which you will use to add all of your product object literals that you create in the next step. */
let totalPaid = 0;
const products =[


/* Completed: Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
{ 
  productId:1, 
  name: "cherry",
  price:5,
  quantity:12,
  image: "/Users/hkim/cd2073-intro-to-js-1-project-starter/starter/src/images/cherry.jpg"
}, {
  productId:2,
  name: "orange",
  price:3,
  quantity:4,
  image: "/Users/hkim/cd2073-intro-to-js-1-project-starter/starter/src/images/orange.jpg"
}, {
  productId:3,
  name: "strawberry",
  price:4,
  quantity:9,
  image: "/Users/hkim/cd2073-intro-to-js-1-project-starter/starter/src/images/strawberry.jpg"
  }
];


/* Completed: Declare an empty array named cart to hold the items in the cart */
let cart = [];

/* Completed: adding function to avoid code repetition*/
function getProductByIdFromList(productId, productList) {
  return productList.find((product) => product.productId === productId);
};

/* Completed: Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  let product = getProductByIdFromList(productId, products);
  if (product) {
    let cartItem = getProductByIdFromList(productId, cart);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      let newProduct = { ...product, quantity: 1 };
      cart.push(newProduct);
    }
  }
};


/* Completed: Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  let product = getProductByIdFromList(productId, cart);
  if (product) {
    product.quantity++;
  }
};


/* Completed: Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  let product = getProductByIdFromList(productId, cart);
  if (product) {
    product.quantity--;
    if (product.quantity === 0) {
      removeProductFromCart(productId);
    }
  }
};


/* Completed: Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  let productIndex = getProductByIdFromList(productId, cart);
  if (productIndex !== -1) {
    cart.splice(productIndex, 1);
  }
};


/* Completed: Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/
function cartTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }
  return total;
}



/* Completed: Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  cart = [];
};


/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/
function pay(amount) {
  let total = cartTotal();
  totalPaid += amount;
  let remaining = totalPaid - total;
  if (remaining < 0) {
    return remaining;
  } else {
    let change = remaining;
    totalPaid -= change; // subtract the change from totalPaid
    emptyCart(); // empty cart after payment
    return change;
  }
};


/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
};

