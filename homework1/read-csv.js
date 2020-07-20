var fs = require('fs');
const csv = require('csvtojson')
const path = require('path');

const csvFilePath = path.join(__dirname + '\\sample.csv');
const outPutPath = path.join(__dirname + '\\output.txt');

csv().fromFile(csvFilePath)
  .then((jsonObj) => {
    console.log(jsonObj);
    fs.writeFile(outPutPath, JSON.stringify(jsonObj), (err) => {
      if(err) throw err;
      console.log('File is created successfully');
    })
  });
