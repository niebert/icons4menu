const w4f = require("../src/walker4folder.js");


function my_handle_file(file,pathItem,dirAppend) {
  console.log("File:         '" + file + "'\n" +
              "Path File:    '" + pathItem + "'\n" +
              "Subdirectory: '" + dirAppend + "'");
}

function my_handle_dir(file,pathItem,dirAppend) {
  console.log("Directory:           '" + file + "'\n" +
              "Path Dir::    '" + pathItem + "'\n" +
              "Parent Subdirectory: '" + dirAppend + "'");
}

//---walker4folder recurses into subdirectories
//w4f.walker4folder();
//w4f.walker4folder("./src");
//w4f.walker4folder("./src",my_handle_file);
//w4f.walker4folder("../img",my_handle_file,my_handle_dir);
//w4f.walker4folder("../img/icons-svg",my_handle_file,my_handle_dir);
w4f.walker4folder("../img/icons-png",my_handle_file,my_handle_dir);
