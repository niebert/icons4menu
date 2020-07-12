console.log("START: walker4folder.js started");

//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const ls = require("./loadsave.js");

// walk_directory(directoryPath);

//joining path of directory
// var directoryPath = path.join(__dirname, '.');
var directoryPath = '.';
//passsing directoryPath and callback function
var dirAppend = "";



var dirs = [];
var files = [];

var handle_dir = function (file,pathItem,dirAppend) {
  handle_dir_default(file,pathItem,dirAppend);
}

var handle_file = function (file,pathItem,dirAppend) {
  handle_file_default(file,pathItem,dirAppend);
}

function isFile(pathItem) {
  var extension = path.extname(pathItem);
  console.log("File: '"+pathItem+"' with Extension: '"+extension+"'");
  return extension;
}

function handle_dir_default(file,pathItem,dirAppend) {
  dirs.push(dirAppend+file);
}

function handle_file_default(file,pathItem,dirAppend) {
  files.push(dirAppend+file);
}

function filter_file(file,pathItem,dirAppend) {
  var ign = 0;
  var ign_arr = [".DS_Store",".git"];
  for (var i = 0; i < ign_arr.length; i++) {

  }
  if (ign > 0 ) {
    console.log("Ignore file '"+file+"'");
  } else {
    console.log("handle file '"+file+"'");
    handle_file(file,pathItem,dirAppend);
  }
}

function filter_dir(file,pathItem,dirAppend) {
  var ign = 0;
  var ign_arr = [".git"];
  if (file == ".DS_Store") {
    console.log("Ignore '.DS_Store'");
  } else {
    console.log("handle file '"+file+"'");
    handle_file(file,pathItem,dirAppend);
  }
}

function process_file(file,pathItem,dirAppend) {
  fs.lstat(pathItem, (err, stats) => {
    if(err) {
      return console.log(err); //Handle error
    } else {
      //console.log("is a directory: "+stats.isDirectory());
      //console.log("is file: "+stats.isFile());
      if (stats.isDirectory()) {
        //console.log("'"+file+"' is a directory ''"+ pathItem + "/'");
        var scandir = dirAppend+file+"/";
        console.log("DIR:  "+scandir);
        handle_dir(file,pathItem,dirAppend);
        walk_directory(pathItem,scandir);
      } else if (stats.isFile()) {
        console.log("FILE: "+dirAppend+file+" ");
        filter_file(file,pathItem,dirAppend);
      }
    }
  });

  //console.log("------isDirectory: "+path+"");
  //console.log(`Is file: ${stats.isFile()}`);
  //console.log(`Is directory: ${stats.isDirectory()}`);
  //console.log(`Is symbolic link: ${stats.isSymbolicLink()}`);
}

function log_file_properties(pathItem) {


  let path = pathItem;
  fs.lstat(path, (err, stats) => {

    if(err)
        return console.log(err); //Handle error
    console.log("------isDirectory: "+path+"");
    console.log(`Is file: ${stats.isFile()}`);
    console.log(`Is directory: ${stats.isDirectory()}`);
    console.log(`Is symbolic link: ${stats.isSymbolicLink()}`);
    console.log(`Is FIFO: ${stats.isFIFO()}`);
    console.log(`Is socket: ${stats.isSocket()}`);
    console.log(`Is character device: ${stats.isCharacterDevice()}`);
    console.log(`Is block device: ${stats.isBlockDevice()}`);
  });
}

function walk_directory (directoryPath,dirAppend) {
  dirAppend = dirAppend || "";
  fs.readdir(directoryPath, function (err, files) {
      //handling error
      if (err) {
          return console.log('Unable to scan directory: ' + err);
      }
      //listing all files using forEach
      files.forEach(function (file) {
          // Do whatever you want to do with the file
          //isFile(directoryPath+"/"+file);
          //log_file_properties(directoryPath+"/"+file);
          process_file(file,directoryPath+"/"+file,dirAppend);
      });
  });

}

function save_scanned() {
  ls.save_json('scanned_file.json',{'dirs':dirs,'files':files})
  console.log("DONE");
}


function timeout_save_scanned() {
  setTimeout(save_scanned,1000);
}

function walker4folder (pDirectoryPath,pHandler_File,pHandler_Dir) {
  var vDirPath = pDirectoryPath || directoryPath;
  handle_dir = pHandler_Dir || handle_dir_default;
  handle_file = pHandler_File || handle_file_default;
  walk_directory (vDirPath,"");
}

module.exports = {
  "walk_directory": walk_directory,
  "walker4folder": walker4folder,
  "save_scanned": timeout_save_scanned,
  "ls": ls
};
