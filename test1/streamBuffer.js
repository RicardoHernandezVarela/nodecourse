const fs = require('fs');

const readtStream = fs.createReadStream('./txtFiles/largetxt.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./txtFiles/writeStream.txt');

readtStream.on('data', chunk => {
    //console.log('********** NEW CHUNK ***********');
    //console.log(chunk);

    writeStream.write('********** WRITING NEW CHUNK ***********\n');
    writeStream.write(chunk);
    console.log('It´s done!!');
});