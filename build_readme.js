'use strict';

const fs = require('fs');
var json4icons = require('./img/json4icons.json');
var vFilename = "";
var web_icon_prefix = "https://niebert.github.io/icons4menu/";


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


function get_header4group(group) {
  var header = capitalizeFirstLetter(group);
  var header4group = {
    "action": "Action and Processes",
    "editor":"Editor",
    "navigation":"Navigation",
    "main":"Load, Save, Print, Cancel, Trash, Settings",
    "product":"Products and Objects",
    "audio":"Audio Player"
  };
  if (header4group.hasOwnProperty(group)) {
    header = header4group[group];
  };
  return header;
}

function get_icon_source_name(icon) {
  var name = "JQ-"+icon.name;
  if (icon.name.indexOf("fa-") == 0) {
    if (icon.icon_source) {
      var pos = icon.icon_source.lastIndexOf("/");
      if (pos > 0) {
        name = icon.icon_source.substr(pos+1);
      }
    }
  }
  return name;
}

function MD_get_table_group_header(group) {
  var out = "\n\n"
  out += "### " + get_header4group(group) +"\n";
  out += "| Icon | File | Folder  |  Source File | Licence  | Group |\n";
  out += "|---|---|---|---|---|---|";
  return out;
}

function get_table_group_header(group) {
  var out = "\n\n"
  out += "### " + get_header4group(group) +"\n";
  out +="<center>\n"
  out +="<table border=1 bgcolor=\"#C0C0C0\">\n"
  out +="<tr>\n"
  out += "<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>\n";
  out +="</tr>\n"
  return out;
}

function get_table_row4icon(icon) {
  var out = "";
  var wc_name = get_icon_source_name(icon); // Wiki Commons Name
  out +="<tr>\n"
  out += "<td>  <img style=\"background-color:#C0C0C0;\"  src=\"" + web_icon_prefix + icon.path + "/" + icon.name + "\" width=\"20\"> </td><td> <a href='" + icon.icon_source + "' target='_blank'><code>" + icon.name + "</code></a> </td><td> <code>" + icon.path + "</code>  </td><td> <a href='" + get_icon_source_page(icon) + "' target='_blank'>" + wc_name + "</a> </td><td> " + get_icon_license(icon) + " </td><td> <code>" + get_icon_group(icon) + "</code>  </td> ";
  out +="</tr>\n"
  return out;
}

function MD_get_table_row4icon(icon) {
  var out = "\n";
  var wc_name = get_icon_source_name(icon); // Wiki Commons Name
  out += "| <img src=\"" + web_icon_prefix + icon.path + "/" + icon.name + "\" width=\"20\">  ";
  out += "| [\`" + icon.name + "\`](" + icon.icon_source +")  | \`" + icon.name + "\` | \`" + icon.path + "\`  | [\`" + wc_name + "\`](" + get_icon_source_page(icon) + ") | " + get_icon_license(icon) + " | \`" + get_icon_group(icon) + "\`  | ";
  return out;
}

function get_table_group_tail(group) {
  return "\n</table></center>";
}

function MD_get_table_group_tail(group) {
  return "\n";
}

function get_icon_group(icon) {
  var group = "undefined";
  if (icon.hasOwnProperty("group")) {
    group = icon.group;
  }
  return group;
}

function MD_get_icon_license(icon) {
  var url = "undefined licence";
  switch (icon.license) {
    case "CC0":
      url = "https://creativecommons.org/publicdomain/zero/1.0/deed.en";
    break;
    case "CC BY-SA 3.0":
      url = "https://creativecommons.org/licenses/by-sa/3.0/";
    break;
    case "CC BY 4.0":
      url = "https://creativecommons.org/licenses/by/4.0/";
    break;
    default:
      url = "https://creativecommons.org/licenses";
  }
  return "[\`" + icon.license + "\`](" + url + ")";
}

function get_icon_license(icon) {
  var url = "undefined licence";
  switch (icon.license) {
    case "CC0":
      url = "https://creativecommons.org/publicdomain/zero/1.0/deed.en";
    break;
    case "CC BY-SA 3.0":
      url = "https://creativecommons.org/licenses/by-sa/3.0/";
    break;
    case "CC BY 4.0":
      url = "https://creativecommons.org/licenses/by/4.0/";
    break;
    default:
      url = "https://creativecommons.org/licenses";
  }
  return "<a href='" + url + "' target='_blank'>" + icon.license + "</a>";
}

function get_icon_source_page(icon) {
  var url = icon.icon_source; // could also be a JQ Mobile URL
  if (icon.name.indexOf("fa-") == 0) {
    url = "https://commons.wikimedia.org/wiki/File:" + get_icon_source_name(icon);
  };
  return url;
}

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
    out += get_table_group_header(group);
    for (var i = 0; i < readme[group].length; i++) {
      out += get_table_row4icon(readme[group][i]);
    }
    out += get_table_group_tail(group);
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
