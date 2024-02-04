const number = [2, 3, 4, 5, 6 ,7 ,8];
const name = 'doremon';

const checkingArray = Array.isArray(number);
console.log(checkingArray);

const checkingNameArray = Array.isArray(name);
console.log(checkingNameArray);

if(checkingArray == true) {
    console.log('number variable is an array');
}
else{
    console.log('number variable is not an array')
}

if(checkingNameArray == true) {
    console.log('name variable is an array');
}
else{
    console.log('name variable is not an array');
}