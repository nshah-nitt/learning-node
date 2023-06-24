const fs = require('fs');
fs.readFile("./textfile/file.txt", "utf-8", function (error, data) {
    console.log(error, data);
    console.log("hurr")
})

fs.writeFileSync("./textfile/file.txt","harsh")