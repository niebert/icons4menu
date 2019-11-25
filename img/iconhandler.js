
function handle_src(psrc) {
  var src = "";
  if (psrc) {
    src = psrc;
    // prefix: data:image/svg+xml;
    var h = get_data_url_header(src);
    var s = remove_data_url_header(src);
    var a = as
    //src = src.replace(/\n/g,"");
    //src = src.replace(/\\n/g," ");
    //src = src.replace(/\\n/g,"\n");
    //src = src.replace(/[\s]+/g," ");
    //src = src.replace(/standalone="no"/g,"");
    //src = src.replace(/"/g,"'");
  };
  console.log("SVG: "+src);
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
      pnode.setAttribute("src",handle_src(i4m[found].src,piconcolor));

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
