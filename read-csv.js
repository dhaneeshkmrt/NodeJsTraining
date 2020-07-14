
var fs = require('fs');
const csv = require('csvtojson')
const csvFilePath = './sample.csv';

csv().fromFile(csvFilePath)
  .then((jsonObj) => {
    console.log(jsonObj);
    fs.writeFile('./output.txt', JSON.stringify(jsonObj), (err) => {
      if(err) throw err;
      console.log('File is created successfully');
    })
  })