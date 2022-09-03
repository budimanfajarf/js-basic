// Example higher order function

// const arrayMap = (arr, action) => {
//     const loopTrough = (arr, action, newArray = [], index = 0) => {
//         const item = arr[index];
//         if (!item) return newArray;
//         return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
//     }

//     return loopTrough(arr, action);
// }

// const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

// const newNames = arrayMap(names, (name) => `${name}!`);

// console.log({
//     names,
//     newNames,
// });

/**
 * output:
 * {
 *   names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
 *   newNames: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * }
 */

const books = [
    { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
    { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
    { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
    { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
    { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
    { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
    { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
];

const greatAuthors = books.filter((book) => book.sales > 1000000).map((book) => `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`);

console.log('greatAuthors', greatAuthors);