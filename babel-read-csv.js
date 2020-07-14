
import csv from 'csvtojson';
import * as fs from 'fs';

const csvFilePath = './sample.csv';
const outputTextFilePath = './output.txt';

function readCsvFile(filePath) {
  return new Promise((resolve) => {
    csv().fromFile(filePath).then(csvObject => {
      return resolve(csvObject)
    });
  })
}

function writeLine(text) {
  fs.appendFile(outputTextFilePath, text + '\n', (err) => {
    if (err) throw err;
    console.log('Line added successfully');
  })
}

function writeFile(csvObject) {
  csvObject.forEach(object => {
    writeLine(JSON.stringify(object));
  });
}

function deleteFile(path) {
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
  }
}

async function readAndWriteFile() {
  const csvObject = await readCsvFile(csvFilePath);
  deleteFile(outputTextFilePath);
  writeFile(csvObject);
}

readAndWriteFile();
