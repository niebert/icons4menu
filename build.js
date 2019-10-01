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

function save_icon4color(pFilename,pInsert,pData) {
  var position = pFilename.lastIndexOf(".");
  if (pFilename.indexOf("-white.") > 0) {
    // WHITE: exclude files that are already styled with a specfic color
    console.warn("File '" + pFilename + "' is already an Icon with a defined color! File ignored");
  } else if (pFilename.indexOf("-black.") > 0) {
    // BLACK: exclude files that are already styled with a specfic color
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

function save_color_icons(pFilename,pi,pName,pData) {
  var data = pData;
  if (pName.indexOf("fa-") == 0) {
    // search 'style="fill:currentColor"' and replace with
    data = replaceString(pData,'style="fill:currentColor"','style="fill:#FFF"');
    save_icon4color(pFilename,"-white",data);
    data = replaceString(pData,'style="fill:currentColor"','style="fill:#000"');
    save_icon4color(pFilename,"-black",data);
  }
}

function save_data2json(pFilename,pi,pName) {
  var ext = get_extension(pFilename);
  switch (ext) {
    case "svg":
      var data = fs.readFileSync(pFilename, 'utf8');
      console.log("Read Icon File SYNC: '" + pFilename + "'");
      json4icons.icons[i].src = "data:image/svg+xml;utf8," + data; // SVG is a XML string so store as string
      save_color_icons(pFilename,pi,pName,data);

    break;
    case "png":
      var data = fs.readFileSync(pFilename);
      console.log("PNG-File '" + pFilename + "' stored base64 encoded");
      json4icons.icons[i].src = "data:image/png;base64," + data.toString('base64');
    break;
    default:
      console.error("Unsupported Filetype '" + ext + "' of Icon: '" + pFilename + "'");

  }
}


function init_data2json() {
  for (var i = 0; i < json4icons.icons.length; i++) {
    json4icons.icons[i].src="data_url";
  }
}


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
  fs.writeFile('./img/json4icons_build.js', json_string, (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;

      // success case, the file was saved
      console.log('JSON for json2icons saved with Base64 encoded icons!');
  });
}

setTimeout(save_icons4json, 2000);
