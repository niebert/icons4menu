const fs = require('fs');
const vLS  = require("./js/loadsave.js");
const vSTR  = require("./js/string.js");
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

function init_used(pBoolean) {
  var init_value = false;
  if (pBoolean && pBoolean == true) {
    init_value = true;
  }
  for (var i = 0; i < i4m.icons.length; i++) {
    i4m.icons[i].used = false;
  }
}
function init_readme() {
  for (var i = 0; i < i4m.icons.length; i++) {
    i4m.icons[i].used = true;
    var vName = i4m.icons[i].name;
    if (vName.indexOf("-white") > 0) {
      //console.log("README Icon "+vName +" is white");
      i4m.icons[i].used = false;
    }
    if (vName.indexOf("-black") > 0) {
      //console.log("README Icon "+vName +" is black");
      i4m.icons[i].used = false;
    }
    if (vName.indexOf("-red") > 0) {
      //console.log("README Icon "+vName +" is black");
      i4m.icons[i].used = false;
    }
    var vPath = i4m.icons[i].path;
    if (vPath.indexOf("icons-png") > 0) {
      i4m.icons[i].used = false;
    }
    if (i4m.icons[i].used == true) {
      console.log("README Icon: '" + vName + "' ");
    }
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

function get_groups4icons(pUsedIcons) {
  var vUsedIcons = pUsedIcons || i4m;
  var vIcons = vUsedIcons.icons;
  var group_hash = {};
  for (var i = 0; i < vIcons.length; i++) {
    var g = vIcons[i].group;
    group_hash[g] = g;
  }
  var groups = [];
  for (var gname in group_hash) {
    groups.push(gname);
  }
  //groups.sort();
  return groups;
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
    var vContent = JSON.stringify(vUsedIcons);
    vLS.save_file(pFilename,vContent);
    console.log("Used Icons saved to filename '" + pFilename + "'");
  }
}

function save_file_base64(pFilename,pContent64) {
  fs.writeFile(pFilename, pContent64, {encoding: 'base64'}, function(err) {
    if (err) {
      console.error('ERROR: Saving File base64: "' + pFilename + '" '+err);
    } else {
      console.log('Saving File base64: "' + pFilename + '" successful!');
    }
  });
}

function save_used_icons2file(pFoldername) {
  if (pFoldername) {
    for (var i = 0; i < i4m.icons.length; i++) {
      if (i4m.icons[i].used == true) {
        console.log("Save Icon: "+i4m.icons[i].name);
        if (i4m.icons[i].src) {
          var base64Image = i4m.icons[i].src.split(';base64,').pop();
          //var vFilename = pFoldername + '/' + i4m.icons[i].path + '/' + i4m.icons[i].name;
          var vFilename = pFoldername + '/' + i4m.icons[i].name;
          save_file_base64(vFilename,base64Image);
        }
      }
    }
    console.log("Save used icons to folder '" + pFoldername +"'");
  }  else {
    console.warn("WARNING: Please provide a path to directory where the images should bes stored in the subfolder 'img/'.");
  }

}

//----
function md_get_table4icons(pUsedIcons) {
  var vUsedIcons = pUsedIcons || i4m;
  var vIcons = vUsedIcons.icons;
  var out = "";
  console.log("CALL: md_get_table4icons(pIcons) - number of Icons "+vIcons.length);
  var groups = get_groups4icons(vUsedIcons);
  console.log("Icon Groups: [" + groups.join(",")+ "]");
  for (var i = 0; i < groups.length; i++) {
    out += md_get_table_group_header(groups[i]);
    for (var j = 0; j < vIcons.length; j++) {
      if (vIcons[j].group == groups[i]) {
        console.log("Table Icon: " + vIcons[j].name + " - Group: "+vIcons[j].group);
        out += md_get_table_row4icon(vIcons[j]);
      }
    }
  }
  return out;
}

function get_table4icons(pUsedIcons) {
  var vUsedIcons = pUsedIcons || i4m;
  var vIcons = vUsedIcons.icons;
  var out = "";
  var groups = get_groups4icons(vUsedIcons);
  for (var i = 0; i < groups.length; i++) {
    out += get_table_group_header(groups[i]);
    for (var j = 0; j < vIcons.length; j++) {
      if (vIcons[j].group == groups[i]) {
        out += get_table_row4icon(vIcons[j]);
      }
    }
  }
  return out;
}

function get_header4group(group) {
  var header = vSTR.capitalizeFirstLetter(group);
  var header4group = {
    "action": "Action and Processes",
    "editor":"Editor",
    "navigation":"Navigation",
    "main":"Load, Save, Print, Cancel, Trash, Settings",
    "product":"Products and Objects",
    "audio":"Audio Player",
    "other": "Miscellaneous Icons"
  };
  if (header4group.hasOwnProperty(group)) {
    header = header4group[group];
  }
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
  } else if (icon.name.indexOf("i4m-") == 0) {
    name = "Icon4Menu-" + icon.name.substr(4);
  }
  return name;
}

function get_icon_source_url(icon) {
  var web_icon_prefix = get_web_icon_prefix(icon);
  var url = web_icon_prefix + "/" + icon.path + "/" + icon.name;
  if (icon.name.indexOf("fa-") == 0) {
    url = get_icon_source_page(icon);
  }
  return url;
}

function md_get_table_ungrouped() {
  var out = "\n\n";
  out += "### Icons4Menu - Table of Icons\n";
  out += "| Icon | File | Folder  |  Source File | Licence  | Group |\n";
  out += "|---|---|---|---|---|---|";
  for (var j = 0; j < vIcons.length; j++) {
      out += get_table_row4icon(vIcons[j]);
  }
  out += md_get_table_group_tail("all");
  return out;
}

function get_table_ungrouped() {
  var out = "\n\n";
  out += "<h3> Icons4Menu - Table of Icons </h3>\n";
  out +="<center>\n";
  out +="<table border=1 bgcolor=\"#C0C0C0\">\n";
  out +="<tr>\n";
  out += "<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>\n";
  out +="</tr>\n";
  for (var j = 0; j < vIcons.length; j++) {
      out += get_table_row4icon(vIcons[j]);
  }
  out += get_table_group_tail("all");
  return out;
}

function md_get_table_group_header(group) {
  var out = "\n\n";
  out += "### " + get_header4group(group) +"\n";
  out += "| Icon | File | Folder  |  Source File | Licence  | Group |\n";
  out += "|---|---|---|---|---|---|";
  return out;
}

function get_table_group_header(group) {
  var out = "\n\n";
  out += "<h3>" + get_header4group(group) +"</h3>\n";
  out +="<center>\n";
  out +="<table border=1 bgcolor=\"#C0C0C0\">\n";
  out +="<tr>\n";
  out += "<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>\n";
  out +="</tr>\n";
  return out;
}

function get_web_icon_prefix(icon) {
  var prefix = i4m.webroot;
  return prefix;
}

function get_table_row4icon(icon) {
  var out = "";
  var web_icon_prefix = get_web_icon_prefix(icon);
  var wc_name = get_icon_source_name(icon); // Wiki Commons Name
  out +="<tr>\n";
  out += "<td style=\"background-color:#C0C0C0;\">  <img src=\"" + web_icon_prefix + "/" + icon.path + "/" + icon.name + "\" width=\"20\"> </td><td> <a href='" + icon.icon_source + "' target='_blank'><code>" + icon.name + "</code></a> </td><td> <code>" + icon.path + "</code>  </td><td> <a href='" + get_icon_source_page(icon) + "' target='_blank'>" + wc_name + "</a> </td><td> " + get_icon_license(icon) + " </td><td> <code>" + icon.group + "</code>  </td> ";
  out +="</tr>\n";
  return out;
}

function md_get_table_row4icon(icon) {
  var out = "\n";
  var web_icon_prefix = get_web_icon_prefix(icon);
  var wc_name = get_icon_source_name(icon); // Wiki Commons Name
  out += "| <span style='bgcolor:#888888'><img src=\"" + web_icon_prefix + "/" + icon.path + "/" + icon.name + "\" width=\"20\"> </span> ";
  out += "| [\`" + icon.name + "\`](" + icon.icon_source +")  | \`" + icon.path + "\`  | [\`" + wc_name + "\`](" + get_icon_source_page(icon) + ") | " + get_icon_license(icon) + " | \`" + icon.group + "\`  | ";
  return out;
}

function get_table_group_tail(group) {
  return "\n</table></center>";
}

function md_get_table_group_tail(group) {
  return "\n";
}

function get_icon_group(icon) {
  var group = "undefined";
  if (icon.hasOwnProperty("group")) {
    group = icon.group;
  }
  return group;
}

function get_icon_license_url(icon) {
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
  return url;
}

function md_get_icon_license(icon) {
  var url = get_icon_license_url(icon);
  return "[\`" + icon.license + "\`](" + url + ")";
}

function get_icon_license(icon) {
  var url = get_icon_license_url(icon);
  return "<a href='" + url + "' target='_blank'>" + icon.license + "</a>";
}

function get_icon_source_page(icon,urlinit) {
  var url = urlinit || icon.icon_source; // could also be a JQ Mobile URL
  if (icon.name.indexOf("fa-") == 0) {
    url = "https://commons.wikimedia.org/wiki/File:" + get_icon_source_name(icon);
  } else if (icon.name.indexOf("i4m-") == 0) {
    url = "https://niebert.github.io/img/icons-svg/" + icon.name;
  }
  return url;
}

i4m.ls = vLS;
i4m.str = vSTR;

i4m.init_used = init_used;
i4m.init_readme = init_readme;
i4m.list_dir = vLS.list_dir;
i4m.load_file = vLS.load_file;
i4m.save_file = vLS.save_file;
i4m.scan_file = scan_file;
i4m.scan_file_list = scan_file;
i4m.get_used_icons = get_used_icons;
i4m.save_used_icons = save_used_icons;
i4m.save_used_icons2file = save_used_icons2file;

i4m.get_table4icons = get_table4icons;
i4m.get_table_ungrouped = get_table_ungrouped;
i4m.get_header4group = get_header4group;
i4m.get_icon_source_name = get_icon_source_name;
i4m.get_icon_source_url = get_icon_source_url;
i4m.get_table_group_header = get_table_group_header;
i4m.get_table_group_header = get_table_group_header;
i4m.get_table_row4icon = get_table_row4icon;
i4m.get_table_group_tail = get_table_group_tail;
i4m.get_icon_group = get_icon_group;
i4m.get_icon_license_url = get_icon_license_url;

i4m.md_get_table4icons = md_get_table4icons;
i4m.md_get_table_ungrouped = md_get_table_ungrouped;
i4m.md_get_table_group_header = md_get_table_group_header;
i4m.md_get_table_row4icon = md_get_table_row4icon;
i4m.md_get_icon_license = md_get_icon_license;
i4m.md_get_table_group_tail = md_get_table_group_tail;
i4m.get_icon_license = get_icon_license;
i4m.get_icon_source_page = get_icon_source_page;

i4m.capitalizeFirstLetter = vSTR.capitalizeFirstLetter,
i4m.replaceString = vSTR.replaceString,


module.exports = i4m;
