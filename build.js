'use strict';

const fs = require('fs');
var json4icons = require('./img/json4icons.json');
var vFilename = "";


function get_extension(pFilename) {
  var ext = "";
  if (pFilename) {
    ext = pFilename.substr(pFilename.lastIndexOf('.') + 1);
    ext = ext.toLowerCase();
  } else {
    console.log("CALL: get_extension(pFilename) - pFilename undefined!");
  }
  return ext;
}


function replaceString(pString,pSearch,pReplace)
// replaces in the string "pString" multiple substrings "pSearch" by "pReplace"
{
	var vReturnString = '';
	//alert("cstring.js - replaceString() "+pString);
	pString = pString || "undefined string parameter in replaceString() call ";
	if (!pString) {
		console.log("replaceString()-Call - pString not defined!");
	} else if (pString != '') {
		var vHelpString = '';
    var vN = pString.indexOf(pSearch);
		while ( vN+1 > 0 ) {
			if (vN > 0) {
				vReturnString += pString.substring(0, vN);
			};
			vReturnString += pReplace;
            if (vN + pSearch.length < pString.length) {
				pString = pString.substring(vN+pSearch.length, pString.length);
			} else {
				pString = ''
			}
			vN = pString.indexOf(pSearch);
		};
	};
	return (vReturnString + pString);
}

function capitalizeFirstLetter(string) {
		if (!string) {
			string = "undef_string"
		};
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function get_wikicommons_url(data) {
  var url = "https://jquerymobile.com/download/";
  if (data) {
    var pos = data.indexOf("wikicommons");
    if (pos > 0) {
      data = data.substr(pos + 1);
      var arr = data.split('"');
      if (arr.length > 2) {
        url = arr[1];
        console.log("WikiCommons URL: '" + url + "'");
      }
    }
  }
  return url;
}

function save_icon4color(pFilename,pInsert,pData) {
  var position = pFilename.lastIndexOf(".");
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
    var vFilename4Color = [pFilename.slice(0, position), pInsert, pFilename.slice(position)].join('');
    console.log("Save Icon with color postfix 'pInsert' to '" + vFilename4Color + "'");
    fs.writeFile(vFilename4Color, pData, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;

        // success case, the file was saved
        console.log("DONE: Save Icon for Color '" + vFilename4Color + "'!");
    });
  }
}

function correct_size(pData) {
  if (pData) {
    pData = replaceString(pData,'width="100%"','width="14px"');
    pData = replaceString(pData,'height="100%"','height="14px"');
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
      data = replaceString(data,'style="fill:currentColor"','style="fill:#FFF"');
      data = replaceString(data,'fill="currentColor"','fill="#FFF"');
      // fill="currentColor"
      data = correct_size(data);
      save_icon4color(pFilename,"-white",data);

      data = pData;
      data = replaceString(data,'style="fill:currentColor"','style="fill:#000"');
      data = replaceString(data,'fill="currentColor"','fill="#000"');
      data = correct_size(data);
      save_icon4color(pFilename,"-black",data);
    }
  }
}

function save_data2json(pFilename,pi,pName) {
  var ext = get_extension(pFilename);
  switch (ext) {
    case "svg":
      var data = fs.readFileSync(pFilename, 'utf8');
      console.log("Read Icon File SYNC: '" + pFilename + "'");
      json4icons.icons[i].src = "data:image/svg+xml;utf8," + data; // SVG is a XML string so store as string
      json4icons.icons[i].wikicommons = get_wikicommons_url(data);
      save_color_icons(pFilename,pi,pName,data);

    break;
    case "png":
      var data = fs.readFileSync(pFilename);
      console.log("PNG-File '" + pFilename + "' stored base64 encoded");
      json4icons.icons[i].src = "data:image/png;base64," + data.toString('base64');
      json4icons.icons[i].wikicommons = get_wikicommons_url(null);
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
    } else if (vName.indexOf("navigation-") == 0) {
      //---- NAVIGATION ----
      json4icons.icons[i].group = "navigation";
    } else if (vName.indexOf("location") == 0) {
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
