let fs = require('fs');

function readFile() {
    console.log('reading...')
    fs.readFile('./async/data.txt', 'utf-8', function(err, data) {
        if(err) { console.log('something went wrong', err) ; return; }
        console.log(data)
    })
};

readFile();