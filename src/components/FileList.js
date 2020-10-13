const folder = '../images';
const fs = require('fs');

let response = [];


fs.readdir(folder, (err, files) => { 
  if (err) {
    console.log(err); 
    response = "Files not found";
  }
  else { 
    console.log("\nCurrent directory filenames:");  
    response = files;  
    console.log(files);
  } 
}) 

export default response;
