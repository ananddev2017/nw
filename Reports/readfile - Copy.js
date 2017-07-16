var content;
// First I want to read the file
fs.readFile('./Reports/Data.csv', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;
    processFile();          // Or put the next step in a function and invoke it
});

function processFile() {
    lines = content.split("\r");   // look up
    rowCount = lines.length;
}