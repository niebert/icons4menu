'use strict';

const fs = require('fs');
var i4m = require('./src/main.js');
var json4icons = require('./img/json4icons.json');
var vFilename = "";
var web_icon_prefix = "https://niebert.github.io/icons4menu/";


//=====================================================
//==== START GENERATION of README for ICON4MENU =======
//=====================================================
var readme = {};
var icon = null;
// ----------------------------------------------------
// -------- Push Icon to Readme Group Array -----------
for (var i = 0; i < json4icons.icons.length; i++) {
  icon = json4icons.icons[i];
  if (!readme[icon.group]) {
    readme[icon.group] = [];
  }
  readme[icon.group].push(icon);
}
// ----------------------------------------------------
// ---------- Create Readme Group Tables --------------
var out = "";
for (var group in readme) {
  if (readme.hasOwnProperty(group)) {
    out += i4m.get_table_group_header(group);
    for (var i = 0; i < readme[group].length; i++) {
      out += i4m.get_table_row4icon(readme[group][i]);
    }
    out += i4m.get_table_group_tail(group);
  }
}
// ----------------------------------------------------
// --------- Write ICON TABLES for README--------------

var readme_file = './src/readme/table4icons.md';
fs.writeFile(readme_file, out, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('README file "' + readme_file + '" saved for icons!');
});

//setTimeout(save_readme4icons, 2000);
