var i4m = require("../src/main.js");

//i4m.list_dir(".");
i4m.init_used();
//var vContent = i4m.load_file("testicons.html");
var vContent = i4m.load_file("./tests/testicons.html");
//var vContent = i4m.load_file("../../JSONEditor/json-editor/src/iconlibs/icons4menu.js");
//console.log("File Content: " + vContent);
//call with node tests/test.js
i4m.scan_file_list([vContent]);

console.log("\nSave used icons:\n");
//i4m.save_used_icons2file("../../JSONEditor/json-editor/docs/img/icons-svg");
//i4m.save_used_icons2file(".");
var used_icons = i4m.get_used_icons();
var vTable = i4m.md_get_table4icons(used_icons);
//console.log("Used Icons: \n"+JSON.stringify(used_icons,null,4));
//i4m.save_file("../../JSONEditor/json-editor/src/readme/table4icons.md",vTable);
i4m.save_file("tests/table4icons.md",vTable);
