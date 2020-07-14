"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _csvtojson = _interopRequireDefault(require("csvtojson"));

var fs = _interopRequireWildcard(require("fs"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var csvFilePath = './sample.csv';
var outputTextFilePath = './output.txt';

function readCsvFile(filePath) {
  return new Promise(function (resolve) {
    (0, _csvtojson["default"])().fromFile(filePath).then(function (csvObject) {
      return resolve(csvObject);
    });
  });
}

function writeLine(text) {
  fs.appendFile(outputTextFilePath, text + '\n', function (err) {
    if (err) throw err;
    console.log('Line added successfully');
  });
}

function writeFile(csvObject) {
  csvObject.forEach(function (object) {
    writeLine(JSON.stringify(object));
  });
}

function deleteFile(path) {
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
  }
}

function readAndWriteFile() {
  return _readAndWriteFile.apply(this, arguments);
}

function _readAndWriteFile() {
  _readAndWriteFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var csvObject;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return readCsvFile(csvFilePath);

          case 2:
            csvObject = _context.sent;
            deleteFile(outputTextFilePath);
            writeFile(csvObject);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _readAndWriteFile.apply(this, arguments);
}

readAndWriteFile();
