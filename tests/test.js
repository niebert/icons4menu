var i4m = require("../src/main.js");

//i4m.list_dir(".");
i4m.init_used();
var vContent = i4m.load_file("testicons.html");
//console.log("File Content: " + vContent);
//call with node tests/test.js
i4m.scan_file_list([vContent]);
