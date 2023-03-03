var student = { id: 7, name: 'Solaiman', class: 'Six' };
var mobile = {
    name: 'Samsung',
    color: 'Black',
    ram: '64gb',
    pice: 19000,
    camera: '25mp'
}

var myComputer = {
    name: 'Lenovo',
    price: 39000,
    color: 'Silver',
    processor: 'i7'
}
var name = myComputer.name;
myComputer.color = 'Black';
console.log(name);
console.log(myComputer);