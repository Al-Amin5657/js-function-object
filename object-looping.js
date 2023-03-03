var shoppingCart = {
    Books: 2,
    Pen: 24,
    Sunglass: 3,
    mouse: 1,
    shoes: 2,
    Keyboard: 1
};
// var keys = Object.keys(shoppingCart);
// console.log(keys);
// var values = Object.values(shoppingCart);
// console.log(values);

for (var i = 0; i < keys.length; i++) {
    // var propertyName = keys[i];
    var propertyValues = shoppingCart[propertyName];
    // console.log(propertyName, propertyValues);
}

for (var propertyName in shoppingCart) {
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}