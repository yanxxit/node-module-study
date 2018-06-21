const zlib = require('zlib');
const gzip = zlib.createGzip();
const fs = require('fs');


const inp = fs.createReadStream('input.txt');
const out = fs.createWriteStream('input.txt.zip');

inp.pipe(gzip).pipe(out);
