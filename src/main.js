const fs = require('fs');
const vLS  = require("./js/loadsave.js");
const i4m  = require("../img/json4icons.json");
var vIconsContainer = vLS.clone_json(i4m);
vIconsContainer.icons = [];

/*
module.exports = {
  "walk_directory": walk_directory,
  "walker4folder": walker4folder,
  "save_scanned": timeout_save_scanned,
  "ls": ls
};
{
    "repository": "https://www.github.io/niebert/icons4menu",
    "date": "2020/07/27",
    "icons": [
        {
            "name": "action-black.png",
            "path": "img/icons-png",
            "used": false,
            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAH1JREFUOMtjYCAOzAJiNgYywH8gPgbEkuRoBOFnQGyJLgjDDVBxNSBeDsQf0OR/AnEaAw5NdkD8BYuhWDXCAC8QvwDiH0BcB8TihJwKA/lA/BmIrQkFDrrG3UAcjhY4M5GiowGXxrl4QrcBWS26RiMiogWrRga6aSQFk68RAP5OVqWXKdm9AAAAAElFTkSuQmCC",
            "license": "CC0",
            "group": "main",
            "wikicommons": "https://jquerymobile.com/download/"
        },
        ...
      ]
}
*/

function init_used() {
  for (var i = 0; i < i4m.icons.length; i++) {
    i4m.icons[i].used = false;
  }
}

function scan_file(pContent) {
  console.log("Scan file content for used icons.");
  //var vContent = vLS.load_file(pFilename);
  var vContent = pContent +  " ";
  //console.log("File Content:\n"+vContent);
  if (vContent) {
    console.log("File Content exists in scan_file()");
    //console.log("info-white.svg - indexOf()=" + vContent.indexOf("use_icons.html"));
    for (var i = 0; i < i4m.icons.length; i++) {
      if (i4m.icons[i].hasOwnProperty("name")) {
        var vIconName = i4m.icons[i].name;
        //console.log("Check Icon: '" + vIconName + "'");
        if (vIconName) {
          if (vContent.indexOf(vIconName) >= 0) {
            i4m.icons[i].used = true;
            console.log("Icon: '" + vIconName+ "' found");
          } else {
            //console.log("Icon: '" + vIconName+ "' not found");
          }
        } else {
          console.log("icons["+ i +"] does not exist.");
        }
      }
    }
    /*
    if (vContent.indexOf('info-white.svg') >= 0){
      console.log("info-white.svg exists in file");
    }
    */
  } else {
    console.log("File Content undefined");
  }
}

function scan_file_list (pFileArray) {
  var vFileArray = pFileArray || [];
  for (var i = 0; i < vFileArray.length; i++) {
    scan_file(vFileArray[i]);
  }
}


function get_used_icons() {
  var vUsedIcons = vLS.clone_json(vIconsContainer);
  vUsedIcons.icons = [];
  for (var i = 0; i < i4m.icons.length; i++) {
    if (i4m.icons[i].used == true) {
      vUsedIcons.icons.push(vLS.clone_json(i4m.icons[i]));
    }
  }
  return vUsedIcons;
}

function save_used_icons(pFilename) {
  var vUsedIcons = get_used_icons();
  if (vUsedIcons) {
    var vContent = JSON.stringify(vJSON);
    vLS.save_file(pFilename,vContent);
    console.log("Used Icons saved to filename '" + pFilename + "'");
  }
}

function save_used_icons2file(pFoldername) {
  if (pFoldername) {
    for (var i = 0; i < i4m.icons.length; i++) {
      if (i4m.icons[i].used == true) {
        if (i4m.icons[i].src) {
          let base64Image = i4m.icons[i].src.split(';base64,').pop();
          let vFilename = pFoldername + '/' + i4m.icons[i].name;
          fs.writeFile(vFilename, base64Image, {encoding: 'base64'}, function(err) {
            console.log('File "' + vFilename + '" created');
          });

        }
      }
    }
    console.log("Save used icons to folder '" + pFoldername +"'");
  }
}


i4m.init_used = init_used;
i4m.list_dir = vLS.list_dir;
i4m.load_file = vLS.load_file;
i4m.save_file = vLS.save_file;
i4m.scan_file = scan_file;
i4m.scan_file_list = scan_file;
i4m.get_used_icons = get_used_icons;
i4m.save_used_icons = save_used_icons;
i4m.save_used_icons2file = save_used_icons2file;

module.exports = i4m;
