var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
};
// Get property Values
var bookCount = shoppingCart.books;
console.log(bookCount);
var penCount = shoppingCart['pen'];
console.log(penCount);
var properties = Object.keys(shoppingCart);
console.log(properties)
var values = Object.values(shoppingCart);
console.log(values);

var propertyName = 'mouse';
var propertyValues = shoppingCart[propertyName];
console.log(propertyName, propertyValues);
// set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 20;
console.log(shoppingCart);
shoppingCart[propertyName] = 90;
console.log(shoppingCart);

