function clone_json(pJSON) {
  var vJSON = {};
  if (pJSON) {
    vJSON = JSON.parse(JSON.stringify(pJSON));
  } else {
    console.log("ERROR: cloneJSON(pJSON) - pJSON undefined!");
  }
  return vJSON;
}

function load_file (pFilename) {
  //var fs = require('fs');
  var vContent = fs.readFileSync(pFilename, 'utf8');
  //console.log(vContent);
  if (vContent) {
    console.log("load_file('" + pFilename + "') was sucessful");
  } else {
    vContent = " ";
    console.log("WARNING: load_file('" + pFilename + "') has no content");
  }
  return vContent;
}

function save_file(pFilename, pContent) {
	fs.writeFile(pFilename, pContent, function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The file '" + pFilename + "' was saved!");
  });
}

function load_json(pFilename) {
  // vJSON = require(pFilename);
	var vJSON = null;
  if (fs.existsSync(pFilename)) {
    console.log("Found file '" + pFilename + "'");
		var vJSONstring = load_file(pFilename);
	  try {
	    vJSON = JSON.parse(vJSONstring);
	    console.log("load_json('" + pFilename + "')");
	    // console.log(JSON.parse(vJSONstring));
	  } catch (objError) {
	    if (objError instanceof SyntaxError) {
	        console.error(objError.name);
	    } else {
	        console.error(objError.message);
	    }
	    vJSON = null;
	  }

	} else {
		console.error("File '" + pFilename + "' does not exist!'");
	}
  return vJSON;
}

function save_json(pFilename, pJSON) {
  var vContent = JSON.stringify(pJSON,null,4);
  save_file(pFilename,vContent);
}

function concat_files_to_string(pFileArr) {
  var vOut = "";
  for (var i = 0; i < pFileArr.length; i++) {
    vOut += load_file(pFileArr[i]);
  }
  return vOut;
}
