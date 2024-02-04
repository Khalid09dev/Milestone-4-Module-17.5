const books = ['javascript-novice to ninja', 'programming-er 14 gen.', 'peramoy-life er perasitamol'];

const include = books.includes('javascript-novice to ninja');
console.log(include);

if(books.includes('javascript-novice to ninja')) {
    console.log('yes, javascript book is here');
}
else{
    console.log('javascript book was not here');
}