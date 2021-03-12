'use strict';
var Base64 = require('js-base64').Base64;
const fs = require('fs');
const i4m = require('./src/main.js');
//const shell = require('shelljs')
//shell.exec('sh scan-icons.sh')
var json4icons = require('./img/json4icons.json');
var vFilename = "";


function get_extension(pFilename) {
  var ext = "";
  if (pFilename) {
    if (pFilename.lastIndexOf('.') > 0) {
      ext = pFilename.substr(pFilename.lastIndexOf('.') + 1);
      ext = ext.toLowerCase();
    } else {
      console.warn("Extension undefined in pFilename");
    }
  } else {
    console.log("CALL: get_extension(pFilename) - pFilename undefined!");
  }
  return ext;
}


function X_get_icon_source_url(data) {
  var url = "https://jquerymobile.com/download/";
  if (data) {
    var param = i4m.extract_parameter_svg("wikicommons",data);
    if (param) {
        url = param;
        console.log("WikiCommons URL: '" + url + "'");
    }

    param = i4m.extract_parameter_svg("icons4menu",data);
    if (param) {
        url = param;
        console.log("Icons4Menu URL: '" + url + "'");
    }
  } else {
    console.warn("get_icon_source_url(data) - data was not defined");
  }
  if (!url) {
    url = "http://undefined.icon.url";
  }
  return url;
}

function save_icon4color(pFilename,pInsert,pData) {
  var position = pFilename.lastIndexOf(".");
  if (pFilename) {
    if (pFilename.indexOf("-white.") > 0) {
      // WHITE: exclude files that are already styled with a specfic color
      console.warn("File '" + pFilename + "' is already an Icon with a defined color! File ignored");
    } else if (pFilename.indexOf("-black.") > 0) {
      // BLACK: exclude files that are already styled with a specfic color
      console.warn("File '" + pFilename + "' is already an Icon with a defined color! File ignored");
    } else if (pFilename.indexOf("-red.") > 0) {
      // WHITE: exclude files that are already styled with a specfic color
      console.warn("File '" + pFilename + "' is already an Icon with a defined color! File ignored");
    } else {
      if (position > 0) {
        var vFilename4Color = [pFilename.slice(0, position), pInsert, pFilename.slice(position)].join('');
        console.log("Save Icon with color postfix 'pInsert' to '" + vFilename4Color + "'");
        fs.writeFile(vFilename4Color, pData, (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;

            // success case, the file was saved
            console.log("DONE: Save Icon for Color '" + vFilename4Color + "'!");
        });
      } else {
        console.log("save_icon4color(pFilename,...) - pFilename='" + pFilename + "' position '.' at "+position);
      }
    }
  } else {
    console.error("ERROR: save_icon4color(pFilename,...) - pFilename undefined");
  }
}

function correct_size(pData) {
  if (pData) {
    pData = i4m.replaceString(pData,'width="100%"','width="14px"');
    pData = i4m.replaceString(pData,'height="100%"','height="14px"');
  } else {
    pData = "undefined image";
  }
  return pData;
}

function save_color_icons(pFilename,pi,pName,pData) {
  var data = pData;
  if (pName.indexOf("fa-") == 0) {
    if ((pName.indexOf("-white.svg") > 0) || (pName.indexOf("-black.svg") > 0)) {
      // no write files
    } else {
      // search 'style="fill:currentColor"' and replace with
      data = i4m.replaceString(data,'style="fill:currentColor"','style="fill:#EEE"');
      data = i4m.replaceString(data,'fill="currentColor"','fill="#EEE"');
      // fill="currentColor"
      data = correct_size(data);
      save_icon4color(pFilename,"-white",data);

      data = pData;
      data = i4m.replaceString(data,'style="fill:currentColor"','style="fill:#000"');
      data = i4m.replaceString(data,'fill="currentColor"','fill="#000"');
      data = correct_size(data);
      save_icon4color(pFilename,"-black",data);
    }
  }
}

function save_data2json(pFilename,pi,pName) {
  var ext = get_extension(pFilename);
  var default_icon_source = "https://jquerymobile.com/download/";
  var icon = {
    "name": "undef.svg",
    "path": "img/icons-svg",
    "used": false,
    "src": "",
    "license": "CC0",
    "group": "undef_group",
    "icon_source": default_icon_source,
    "url": ""
  };
  switch (ext) {
    case "svg":
      var data = fs.readFileSync(pFilename, 'utf8');
      console.log("Read Icon File SYNC: '" + pFilename + "'");
      //json4icons.icons[i].src = "data:image/svg+xml;utf8," + data; // SVG is a XML string so store as string
      //json4icons.icons[i].src = "data:image/svg+xml;base64," + data.toString('base64'); // SVG is a XML string so store as string
      if (data) {
        json4icons.icons[i].src = "data:image/svg+xml;base64," + Base64.encode(data);
        json4icons.icons[i].raw = data;
        json4icons.icons[i].icon_source = i4m.get_icon_source_page(json4icons.icons[i],default_icon_source);
        json4icons.icons[i].url = i4m.get_icon_source_url(json4icons.icons[i]);
        save_color_icons(pFilename,pi,pName,data);
      } else {
        console.error("ERROR: '" + pFilename + "' does not exist!");
      }

    break;
    case "png":
      var data = fs.readFileSync(pFilename);
      console.log("PNG-File '" + pFilename + "' stored base64 encoded");
      json4icons.icons[i].src = "data:image/png;base64," + data.toString('base64');
      json4icons.icons[i].icon_source = default_icon_source; //i4m.get_icon_source_url(null);
      json4icons.icons[i].url = i4m.get_icon_source_url(json4icons.icons[i]);
    break;
    default:
      console.error("Unsupported Filetype '" + ext + "' of Icon: '" + pFilename + "'");

  }
}


function init_icon_group() {
  var vName = "";
  for (var i = 0; i < json4icons.icons.length; i++) {
    json4icons.icons[i].group="other";
    vName = json4icons.icons[i].name;
    if (vName.indexOf("fa-file-archive") == 0) {
     //---- FILE TYPES ----
     json4icons.icons[i].group = "filetype";
    } else if (vName.indexOf("home") == 0) {
      //---- MAIN ----
      json4icons.icons[i].group = "main";
    } else if (vName.indexOf("action") == 0) {
       //---- MAIN ----
       json4icons.icons[i].group = "main";
    } else if (vName.indexOf("fa-folder") == 0) {
      //---- MAIN ----
      json4icons.icons[i].group = "main";
    } else if (vName.indexOf("fa-save") == 0) {
      //---- MAIN ----
      json4icons.icons[i].group = "main";
    } else if (vName.indexOf("shop") == 0) {
      //---- MAIN ----
      json4icons.icons[i].group = "main";
    } else if (vName.indexOf("home") == 0) {
      //---- MAIN ----
      json4icons.icons[i].group = "main";
    } else if (vName.indexOf("info") == 0) {
      //---- MAIN ----
      json4icons.icons[i].group = "main";
    } else if (vName.indexOf("fa-settings") == 0) {
      //---- MAIN ----
      json4icons.icons[i].group = "main";
    } else if (vName.indexOf("fa-trash") == 0) {
      //---- MAIN ----
      json4icons.icons[i].group = "main";
    } else if (vName.indexOf("grid") == 0) {
      //---- MAIN ----
      json4icons.icons[i].group = "main";
    } else if (vName.indexOf("fa-print") == 0) {
      //---- MAIN ----
      json4icons.icons[i].group = "main";
    } else if (vName.indexOf("fa-hamburger") == 0) {
      //---- MAIN ----
      json4icons.icons[i].group = "main";
    } else if (vName.indexOf("fa-cancel") == 0) {
      //---- ACTION/PROCESSES ----
      json4icons.icons[i].group = "action";
    } else if (vName.indexOf("fa-undo") == 0) {
      //---- ACTION/PROCESSES ----
      json4icons.icons[i].group = "action";
    } else if (vName.indexOf("fa-cancel") == 0) {
      //---- ACTION/PROCESSES ----
      json4icons.icons[i].group = "action";
    } else if (vName.indexOf("plus") == 0) {
      //---- ACTION/PROCESSES ----
      json4icons.icons[i].group = "action";
    } else if (vName.indexOf("minus") == 0) {
      //---- ACTION/PROCESSES ----
      json4icons.icons[i].group = "action";
    } else if (vName.indexOf("star") == 0) {
      //---- ACTION/PROCESSES ----
      json4icons.icons[i].group = "action";
    } else if (vName.indexOf("refresh") == 0) {
      //---- ACTION/PROCESSES ----
      json4icons.icons[i].group = "action";
    } else if (vName.indexOf("fa-spinner") == 0) {
      //---- ACTION/PROCESSES ----
      json4icons.icons[i].group = "action";
    } else if (vName.indexOf("forbidden") == 0) {
      //---- ACTION/PROCESSES ----
      json4icons.icons[i].group = "action";
    } else if (vName.indexOf("tag") == 0) {
      //---- ACTION/PROCESSES ----
      json4icons.icons[i].group = "action";
    } else if (vName.indexOf("arrow-") == 0) {
      //---- ARROWS ----
      json4icons.icons[i].group = "arrow";
    } else if (vName.indexOf("alert-") == 0) {
      //---- ACTIONS ----
      json4icons.icons[i].group = "action";
    } else if (vName.indexOf("location") == 0) {
      //---- NAVIGATION ----
      json4icons.icons[i].group = "navigation";
    } else if (vName.indexOf("carat-") == 0) {
      //---- NAVIGATION ----
      json4icons.icons[i].group = "navigation";
    } else if (vName.indexOf("i4m-carat-") == 0) {
      //---- NAVIGATION ----
      json4icons.icons[i].group = "navigation";
    } else if (vName.indexOf("navigation-") == 0) {
      //---- NAVIGATION ----
      json4icons.icons[i].group = "navigation";
    } else if (vName.indexOf("location") == 0) {
      //---- NAVIGATION ----
      json4icons.icons[i].group = "navigation";
    } else if (vName.indexOf("nav-back") == 0) {
      //---- NAVIGATION ----
      json4icons.icons[i].group = "navigation";
    } else if (vName.indexOf("audio-") == 0) {
      //---- MEDIA ----
      json4icons.icons[i].group = "media";
    } else if (vName.indexOf("video-") == 0) {
      json4icons.icons[i].group = "media";
    } else if (vName.indexOf("fa-line-chart") == 0) {
      json4icons.icons[i].group = "media";
    } else if (vName.indexOf("fa-chart-pie") == 0) {
      json4icons.icons[i].group = "media";
    } else if (vName.indexOf("fa-audio-") == 0) {
      json4icons.icons[i].group = "audio";
    } else if (vName.indexOf("audio-") == 0) {
      json4icons.icons[i].group = "audio";
    } else if (vName.indexOf("user") == 0) {
      //---- LOGIN/SIGN IN/OUT ----
      json4icons.icons[i].group = "login";
    } else if (vName.indexOf("fa-sign") == 0) {
      //---- LOGIN/SIGN IN/OUT ----
      json4icons.icons[i].group = "login";
    } else if (vName.indexOf("power") == 0) {
      //---- LOGIN/SIGN IN/OUT ----
      json4icons.icons[i].group = "login";
    } else if (vName.indexOf("fa-enumeration") == 0) {
      //---- EDITOR ----
      json4icons.icons[i].group = "editor";
    } else if (vName.indexOf("fa-list") == 0) {
      json4icons.icons[i].group = "editor";
    } else if (vName.indexOf("fa-copy") == 0) {
      json4icons.icons[i].group = "editor";
    } else if (vName.indexOf("fa-paste") == 0) {
      json4icons.icons[i].group = "editor";
    } else if (vName.indexOf("fa-font") == 0) {
      json4icons.icons[i].group = "editor";
    } else if (vName.indexOf("search") == 0) {
      json4icons.icons[i].group = "editor";
    } else if (vName.indexOf("fa-plus-") == 0) {
      json4icons.icons[i].group = "editor";
    } else if (vName.indexOf("fa-minus-") == 0) {
      json4icons.icons[i].group = "editor";
    } else if (vName.indexOf("heart") == 0) {
      //---- MEDICAL ----
      json4icons.icons[i].group = "medical";
    } else if (vName.indexOf("fa-vr-") == 0) {
      //---- DEVICE ----
      json4icons.icons[i].group = "device";
    } else if (vName.indexOf("fa-tablet") == 0) {
      //---- DEVICE ----
      json4icons.icons[i].group = "device";
    } else if (vName.indexOf("phone") == 0) {
      //---- DEVICE ----
      json4icons.icons[i].group = "device";
    } else if (vName.indexOf("phone") == 0) {
      //---- DEVICE ----
      json4icons.icons[i].group = "device";
    } else if (vName.indexOf("fa-camera") == 0) {
      //---- DEVICE ----
      json4icons.icons[i].group = "device";
    } else if (vName.indexOf("fa-tablet") == 0) {
      //---- DEVICE ----
      json4icons.icons[i].group = "device";
    } else if (vName.indexOf("fa-book") == 0) {
      //---- PRODUCT/OBJECTS ----
      json4icons.icons[i].group = "product";
    } else if (vName.indexOf("fa-key") == 0) {
      //---- ACTION/PROCESSES ----
      json4icons.icons[i].group = "product";
    } else if (vName.indexOf("fa-picture") == 0) {
      //---- PRODUCT/OBJECTS ----
      json4icons.icons[i].group = "product";
    } else if (vName.indexOf("fa-truck") == 0) {
      //---- VEHICLE ----
      json4icons.icons[i].group = "vehicle";
    }
  }
}


function init_data2json() {
  var vName = "";
  for (var i = 0; i < json4icons.icons.length; i++) {
    json4icons.icons[i].src="data_url";
    vName = json4icons.icons[i].name;
    if (vName.indexOf("fa-") == 0) {
      json4icons.icons[i].license = "CC BY-SA 3.0";
    } else {
      json4icons.icons[i].license = "CC0";
    };
    /*
    json4icons.icons[i].id4src = "/5/5d/";
    json4icons.icons[i].name4src = "Font_Awesome____.svg";
    json4icons.icons[i].adddate = "2019"
    */
  }
  init_icon_group();
}

//==== START SCANNING IMAGES for ICON4MENU ============
init_data2json();
// -------------- Convert and Encode Files --------------------------
for (var i = 0; i < json4icons.icons.length; i++) {
  //console.log("Icon: json4icons.icons[i].path='" + json4icons.icons[i].path + "'");
  // set the filename
  vFilename = "./" + json4icons.icons[i].path + "/" + json4icons.icons[i].name;
  //console.log("Icon File: '" + vFilename + "'");
  try {
    if (fs.existsSync(vFilename)) {
      //console.log("Icon File EXISTS: '" + vFilename + "'");
      //file exists
      save_data2json(vFilename,i,json4icons.icons[i].name);
    }
  } catch(err) {
    console.error(err);
  }
}

function save_icons4json() {
  var json_string = JSON.stringify(json4icons,null,4);
  fs.writeFile('./img/json4icons.json', json_string, (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;

      // success case, the file was saved
      console.log('JSON file json4icons.json saved with Base64 encoded icons!');
  });
  json_string = "vDataJSON.json4icons = " + json_string + ";";
  fs.writeFile('./img/json4icons.js', json_string, (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;

      // success case, the file was saved
      console.log('Javascript Library for Icons json2icons.js saved with Base64 encoded icons!');
  });
}

setTimeout(save_icons4json, 2000);
