
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


function correct_size_100_percent(pData) {
  if (pData) {
    pData = replaceString(pData,'width="14px"','width="100%"');
    pData = replaceString(pData,'height="14px"','height="100%"');
  } else {
    pData = "undefined image";
  }
  return pData;
}


function handle_src(picon,piconcolor) {
  console.log("CALL: handle_src('" + picon.name + "')");
  var src = "";
  var a = "";
  if (picon) {
    if (picon.hasOwnProperty("src")) {
      console.log("CALL: handle_src() - picon.src is defined ");
      src = picon.src;
      a   = picon.src;
      // prefix: data:image/svg+xml;
      // format: base64,
      var h = get_data_url_header(src);
      var s = remove_data_url_header(src);
      if (piconcolor) {
        //a = btoa(s);
        a = atob(s);
        console.log("CALL: piconcolor defined piconcolor='" + piconcolor + "'");
        if (picon.name.indexOf("-black.svg") > 0) {
          console.log("ICON: '" + picon.name + "' has black default color");
          a = replaceString(a,'style="fill:#000"','style="fill:' + piconcolor + '"');
          a = replaceString(a,'fill="#000"','fill="#FFF"');
        } else if (picon.name.indexOf("-white.svg") > 0) {
          console.log("ICON: '" + picon.name + "' has white default color");
          a = replaceString(a,'style="fill:currentColor"','style="fill:' + piconcolor + '"');
          a = replaceString(a,'fill="currentColor"','fill="#000"');
        } else {
          console.log("ICON: '" + picon.name + "' set with color '" + piconcolor + "'");
          a = replaceString(a,'style="fill:currentColor"','style="fill:' + piconcolor + '"');
          a = replaceString(a,'fill="currentColor"','fill="' + piconcolor + '"');
        }
        a = correct_size_100_percent(a);
        console.log("SVG: '" + picon.name + "' " + a);
        src = h + "," + btoa(a);
      } else {
        console.log("ICON COLOR: color of icon is undefined");
      }
    }

    //src = src.replace(/\n/g,"");
    //src = src.replace(/\\n/g," ");
    //src = src.replace(/\\n/g,"\n");
    //src = src.replace(/[\s]+/g," ");
    //src = src.replace(/standalone="no"/g,"");
    //src = src.replace(/"/g,"'");
  };
  console.log("SVG: "+a);
  return src;
}

function get_data_url_header(psrc) {
  var header = "data:image/svg+xml;base64";
  if (psrc) {
    var pos = psrc.indexOf(",");
    if (pos > 0) {
      header = psrc.substr(0,pos);
    }
  };
  console.log("SVG-DATA-URL-HEADER: "+header);
  return header;
}



function remove_data_url_header(psrc) {
  var src = psrc;
  if (psrc) {
    var pos = psrc.indexOf(",");
    src = psrc.substr(pos+1);
  };
  //console.log("SVG: "+src);
  return src;
}


function icon2node(pnode,pname,pext,piconcolor) {
  var iconcolor = piconcolor || "#ff0000";
  console.log("CALL: icon2node(pnode,pname,pext)");
  if (pnode) {
    var i4m = vDataJSON.json4icons.icons || [];
    if (i4m) {
      console.log("Icons4Menu defined");
    } else  {
      console.error("ERROR: Icons4Menu undefined");
    }
    var ext = pext || "svg";
    var name = pname + "." + ext;
    var found = -1;
    for (var i = 0; i < i4m.length; i++) {
      //console.log("Icon Check: '" + i4m[i].name + "' compare with '" + name + "'" );
      if (i4m[i].name == name) {
        found = i;
        console.log("Found Image: '" + name + "' in Icons4Menu");
      }
    }
    if (found >= 0) {
      console.log("Found the image-tag for '" + pname + "." + pext + "'");
      pnode.setAttribute("src",handle_src(i4m[found],iconcolor));
      console.log("src-attribute defined for '" + pname + "." + pext + "'")
    } else {
      console.error("ERROR: icon not found in Icons4Menu");
    }
  } else {
    console.error("ERROR: pnode not defined in icon2node");
  }
}

function set_icon2img(id,pname,pext) {
  var vNode = document.getElementById(id);
  console.log("'vNode' set by document.getElementById('" + id+ "') vNode.id='" + vNode.id + "'");
  if (vNode) {
    console.log("DOM node '" + id + "' found for appending image! ");
    icon2node(vNode,pname,pext);
    console.log("src set in image tag");
  } else {
    console.error("ERROR: DOM node '" + id + "' not found");
  }
}

function set_icon2img4class() {
  console.log("CALL: set_icon2img4class()");
  var vNodeArr = document.getElementsByClassName("icons4menu");
  console.log("vNodeArr defined");
  var vNode = null;
  var iconname = "cart-r";
  var iconcolor = null;
  var name = "";
  var ext = "svg";
  if (vNodeArr) {
    console.log("Icons4Menu: " + vNodeArr.length + " icons with class 'icons4menu' found.");
    for (var i = 0; i < vNodeArr.length; i++) {
      vNode = vNodeArr[i];
      if (vNode.getAttribute("iconname") === "undefined") {
        //data-attribute doesn't exist
        console.error("ERROR: Icons4Menu 'iconname' undefined use default '" + name+ "'");
      } else {
        iconname = vNode.getAttribute("iconname");
      }
      if (vNode.getAttribute("iconformat") !== "undefined") {
          ext = vNode.getAttribute("iconformat");
      }
      if (vNode.getAttribute("iconcolor") !== "undefined") {
        iconcolor = vNode.getAttribute("iconcolor");
      }
      name = iconname + "." + ext;
      console.log("DOM node '" + vNode.id + "' found");
      icon2node(vNode,iconname,ext,iconcolor);
    }
  } else {
    console.error("ERROR: no icons for Icons4Menu");
  }

}
