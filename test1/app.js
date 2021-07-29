//console.log('HELLO');

const greetings = (name, lover) => console.log(`${name} is in love with ${lover}`);

//greetings('Ricardo', 'Vane');

//console.log(__dirname);
//console.log(__filename);

const data = require('./users');
const fs = require('fs');

// Read File
// fs.readFile('./txtFiles/welcome.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }
// });

// Write File
// fs.writeFile('./txtFiles/welcome.txt', 'Hello darling', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File content updated!!');
//     }
// });

// Append File
fs.appendFile('./txtFiles/welcome.txt', '\r\nSee you soon',  (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log('New line added to the file!!');
    }
});