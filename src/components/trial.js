const testFolder = '../images/Gintoki.png';
const fs = require('fs');

var file = new File(["foo"], testFolder, {
  type: "image/png",
});

console.log(file);