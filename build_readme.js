'use strict';

const fs = require('fs');
var i4m = require('./src/main.js');
var json4icons = require('./img/json4icons.json');
var vFilename = "";
var web_icon_prefix = "https://niebert.github.io/icons4menu/";


//=====================================================
//==== START GENERATION of README for ICON4MENU =======
//=====================================================
i4m.init_readme();
var vUsedIcons = i4m.get_used_icons();
var out = i4m.md_get_table4icons(vUsedIcons);
console.log("Icons Count: "+vUsedIcons.icons.length);
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
