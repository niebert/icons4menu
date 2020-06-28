# Icons4Menu
This repository is a SVG images resource based on SVG icons [JQuery Mobile 1.4.5](https://jquerymobile.com/download/) and extended with SVG icons from [Wiki Commons](https://commons.wikimedia.org/). The icons are primary collected for menus in webbased application or for icons in buttons.

## Usage of Icons4Menu - WebApps
Icons4Menu are generated for the Wikiversity Learning Resource about [AppLSAC](https://en.wikiversity.org/wiki/AppLSAC).
* **`hamburger_menu_app`** Icons in Hamburger Menus like [hamburger_menu_app](https://niebert.github.io/hamburger_menu_app/)
* **`jsoneditor_app`** Icons in JSON Editor WebApp in buttons - see [jsoneditor_app](https://niebert.github.io/jsoneditor_app/)


## Download of Icons with a Script
The icons can be downloaded with a script:
* [wget_icons.sh](https://niebert.github.io/icons4menu/wget_icons.sh)
* The download of icons for your WebApp (resp. [AppLSAC](https://en.wikiversity.org/wiki/AppLSAC)) can be started from the shell command line with
```
   sh ./wget_icons.sh
```
* the script call of [wget_icons.sh](https://niebert.github.io/icons4menu/wget_icons.sh) downloads the SVG icons of this repository and it is equivalent to the script call:
```
   sh ./wget_icons.sh svg
```
* if you want to download the PNG icons of the repository (JQuery Mobile 1.4.5 - CC0) you can call the script with the parameter `png`:
```
   sh ./wget_icons.sh png
```

## Update the `wget_icons.sh` Script
Any time new icons are added to the repository `icons4menu` the script `wget_icons.sh` is updated as well, because the new icons are added to the list of `wget` download commands in the script. There is an easy way to update the `wget_icons.sh` script to the latest version by downloading the script   [`update_wget_icons.sh`](https://niebert.github.io/icons4menu/update_wget_icons.sh). If you want to use the update script, navigate to the folder in which you want to have the `icons4menu` folder `img/` and then download the script with:
```
  wget https://niebert.github.io/icons4menu/update_wget_icons.sh
```
Please check the content of the script before executing, so that you are sure that the script does what you expect the script to (i.e. updating the script `wget_icons.sh`). Then check the content of `wget_icons.sh`. Performs the script the expected down or do you want to reduce the number of downloaded icons before executing the script `wget_icons.sh`. If you are sure that the script download all the icons you need, perform the download operation by calling:
```
  sh ./wget_icons.sh
```


## JSON file `json4icons.json` and `json4icons.js`
The JSON file `json4icons.json` contains a list of all icons with
* `name`: filename,
* `path`: the path to the icon,
* `license`: the license information for the icon,
* `raw`: available only for SVG (Scalable Vector Graphics) images. `raw` contains the raw string content was added to the JSON. This was added for transparent encoding of the SVG and those developers that prefer to use the raw string format in XML for the image can use that. In a browser you can convert   
* `src`: is the base64 encoded data of the image as Data URL that can used in images in the DOM. The source us either the `XML` source text of the `SVG` image or the binary data as base64 encoded data of the image.

The file `json4icons.js` is a library that populates a hash object `vDataJSON` defined with `var vDataJSON = {};` in the main HTML file that embeds the `icons4menu`.
* `used` is boolean that can be set by an application to reduce the number of icons in the JSON data to the used icons. Set all used icons to `true` and remove all the unused icons from the JSON to reduce the size of the JSON especially for WebApps (see also [AppLSAC on Wikiversity](https://en.wikiversity.org/wiki/WebApps_with_LocalStorage_and_AppCache) ).

### Example Icon Record in `json4icons.js`
```json
{
    "name": "arrow-r-black.svg",
    "path": "img/icons-svg",
    "used": false,
    "src": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0....",
    "license": "CC0",
    "group": "arrow",
    "raw": "<?xml version=\"1.0\"...",
    "wikicommons": "https://jquerymobile.com/download/"
}
```
The content in `src` and `raw` are shortend so that the record fits into this README page.

## JSON File Icons4Menu
The repository contains also a [JSON file](https://niebert.github.io/icons4menu/json4icons.json) with all icons of the repository. The JSON file [`json4icons.json`](https://niebert.github.io/icons4menu/json4icons.json) can be used to identify the used icons with NodeJS and delete the unused icons from your `img/` folder of your WebApp to save disk space and reduce the size of your WebApp.

Even if you remove icons from your WebApp in the folder `img/` you should keep the license file `LICENSE_Jquery_Mobile.txt`, `README.md` and `README_Icons4Menu.html` in that repository for licensing information about the icons.

## Preview All Icons4Menu
The listed icons below do not contain the [JQuery Mobile 1.4.5 Icons](https://jquerymobile.com/download/). To preview all icons for navigation menus see

* [Preview Icons4Menu](https://niebert.github.io/icons4menu)
* [Usage in Hamburger Menu](https://niebert.github.io/hamburger_menu_app) - [GitHub-Repo](https://www.github.com/niebert/icons4menu)
* [Learn about AppLSAC](https://en.wikiversity.org/wiki/WebApps_with_LocalStorage_and_AppCache/) - This repository was developed for a Wikiversity learning resource. The

## Added Icons from WikiCommons
The following icons are selected from the following [SVG-Icons in Wiki Commons](https://commons.wikimedia.org/w/index.php?title=Special:Search&limit=500&offset=0&profile=default&search=FontAwesome.com&advancedSearch-current=%7B%7D&ns0=1&ns6=1&ns12=1&ns14=1&ns100=1&ns106=1). For FontAwesome Icon survey see [FontAwesome 4.7.0](https://fontawesome.com/v4.7.0/icons/) for finding the appropriate icon file name.


### Load, Save, Print, Cancel, Trash, Settings
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/action-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>action-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-action-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/action-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>action-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-action-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/grid-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>grid-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-grid-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/grid-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>grid-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-grid-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/home-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>home-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-home-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/home-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>home-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-home-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/info-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>info-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-info-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/info-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>info-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-info-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/shop-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>shop-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-shop-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/shop-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>shop-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-shop-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/action-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>action-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-action-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/action-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>action-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-action-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-folder-open-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/3a/Folder_open_alt_font_awesome.svg' target='_blank'><code>fa-folder-open-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Folder_open_alt_font_awesome.svg' target='_blank'>Folder_open_alt_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-folder-open-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/3a/Folder_open_alt_font_awesome.svg' target='_blank'><code>fa-folder-open-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Folder_open_alt_font_awesome.svg' target='_blank'>Folder_open_alt_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-folder-open.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/3a/Folder_open_alt_font_awesome.svg' target='_blank'><code>fa-folder-open.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Folder_open_alt_font_awesome.svg' target='_blank'>Folder_open_alt_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-hamburger-icon-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/0/04/Reorder_font_awesome.svg' target='_blank'><code>fa-hamburger-icon-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Reorder_font_awesome.svg' target='_blank'>Reorder_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-hamburger-icon-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/0/04/Reorder_font_awesome.svg' target='_blank'><code>fa-hamburger-icon-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Reorder_font_awesome.svg' target='_blank'>Reorder_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-hamburger-icon.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/0/04/Reorder_font_awesome.svg' target='_blank'><code>fa-hamburger-icon.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Reorder_font_awesome.svg' target='_blank'>Reorder_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-print-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/e/e4/Print_font_awesome.svg' target='_blank'><code>fa-print-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Print_font_awesome.svg' target='_blank'>Print_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-print-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/e/e4/Print_font_awesome.svg' target='_blank'><code>fa-print-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Print_font_awesome.svg' target='_blank'>Print_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-print.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/e/e4/Print_font_awesome.svg' target='_blank'><code>fa-print.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Print_font_awesome.svg' target='_blank'>Print_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-settings-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/9/92/Cog_font_awesome.svg' target='_blank'><code>fa-settings-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Cog_font_awesome.svg' target='_blank'>Cog_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-settings-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/9/92/Cog_font_awesome.svg' target='_blank'><code>fa-settings-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Cog_font_awesome.svg' target='_blank'>Cog_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-settings.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/9/92/Cog_font_awesome.svg' target='_blank'><code>fa-settings.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Cog_font_awesome.svg' target='_blank'>Cog_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-trash-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/7/7d/Trash_font_awesome.svg' target='_blank'><code>fa-trash-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Trash_font_awesome.svg' target='_blank'>Trash_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-trash-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/7/7d/Trash_font_awesome.svg' target='_blank'><code>fa-trash-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Trash_font_awesome.svg' target='_blank'>Trash_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-trash.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/7/7d/Trash_font_awesome.svg' target='_blank'><code>fa-trash.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Trash_font_awesome.svg' target='_blank'>Trash_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/grid-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>grid-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-grid-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/grid-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>grid-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-grid-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/home-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>home-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-home-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/home-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>home-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-home-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/info-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>info-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-info-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/info-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>info-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-info-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/shop-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>shop-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-shop-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>main</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/shop-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>shop-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-shop-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>main</code>  </td> </tr>

</table></center>

### Action and Processes
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/alert-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>alert-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-alert-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/alert-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>alert-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-alert-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/forbidden-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>forbidden-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-forbidden-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/forbidden-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>forbidden-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-forbidden-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/minus-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>minus-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-minus-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/minus-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>minus-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-minus-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/plus-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>plus-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-plus-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/plus-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>plus-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-plus-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/refresh-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>refresh-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-refresh-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/refresh-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>refresh-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-refresh-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/star-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>star-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-star-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/star-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>star-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-star-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/tag-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>tag-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-tag-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/tag-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>tag-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-tag-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/alert-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>alert-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-alert-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/alert-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>alert-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-alert-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-cancel-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/de/Remove_font_awesome.svg' target='_blank'><code>fa-cancel-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Remove_font_awesome.svg' target='_blank'>Remove_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-cancel-red.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/de/Remove_font_awesome.svg' target='_blank'><code>fa-cancel-red.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Remove_font_awesome.svg' target='_blank'>Remove_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-cancel-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/de/Remove_font_awesome.svg' target='_blank'><code>fa-cancel-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Remove_font_awesome.svg' target='_blank'>Remove_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-cancel.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/de/Remove_font_awesome.svg' target='_blank'><code>fa-cancel.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Remove_font_awesome.svg' target='_blank'>Remove_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-spinner-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/d4/Spinner_font_awesome.svg' target='_blank'><code>fa-spinner-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Spinner_font_awesome.svg' target='_blank'>Spinner_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-spinner-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/d4/Spinner_font_awesome.svg' target='_blank'><code>fa-spinner-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Spinner_font_awesome.svg' target='_blank'>Spinner_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-spinner.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/d4/Spinner_font_awesome.svg' target='_blank'><code>fa-spinner.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Spinner_font_awesome.svg' target='_blank'>Spinner_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-undo-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/0/0d/Undo_font_awesome.svg' target='_blank'><code>fa-undo-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Undo_font_awesome.svg' target='_blank'>Undo_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-undo-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/0/0d/Undo_font_awesome.svg' target='_blank'><code>fa-undo-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Undo_font_awesome.svg' target='_blank'>Undo_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-undo.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/0/0d/Undo_font_awesome.svg' target='_blank'><code>fa-undo.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Undo_font_awesome.svg' target='_blank'>Undo_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/forbidden-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>forbidden-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-forbidden-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/forbidden-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>forbidden-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-forbidden-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/minus-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>minus-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-minus-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/minus-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>minus-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-minus-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/plus-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>plus-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-plus-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/plus-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>plus-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-plus-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/refresh-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>refresh-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-refresh-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/refresh-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>refresh-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-refresh-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/star-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>star-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-star-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/star-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>star-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-star-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/tag-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>tag-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-tag-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/tag-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>tag-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-tag-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>action</code>  </td> </tr>

</table></center>

### Arrow
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-d-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-d-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-d-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-d-l-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-d-l-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-d-l-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-d-l-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-d-l-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-d-l-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-d-r-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-d-r-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-d-r-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-d-r-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-d-r-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-d-r-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-d-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-d-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-d-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-l-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-l-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-l-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-l-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-l-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-l-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-r-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-r-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-r-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-r-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-r-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-r-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-u-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-u-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-u-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-u-l-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-u-l-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-u-l-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-u-l-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-u-l-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-u-l-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-u-r-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-u-r-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-u-r-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-u-r-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-u-r-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-u-r-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-u-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-u-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-u-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-d-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-d-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-d-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-d-l-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-d-l-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-d-l-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-d-l-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-d-l-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-d-l-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-d-r-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-d-r-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-d-r-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-d-r-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-d-r-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-d-r-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-d-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-d-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-d-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-l-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-l-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-l-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-l-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-l-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-l-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-r-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-r-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-r-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-r-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-r-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-r-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-u-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-u-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-u-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-u-l-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-u-l-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-u-l-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-u-l-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-u-l-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-u-l-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-u-r-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-u-r-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-u-r-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-u-r-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-u-r-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-u-r-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-u-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>arrow-u-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-u-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>arrow</code>  </td> </tr>

</table></center>

### Media
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/audio-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>audio-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-audio-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>media</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/audio-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>audio-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-audio-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>media</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/video-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>video-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-video-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>media</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/video-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>video-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-video-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>media</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/audio-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>audio-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-audio-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>media</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/audio-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>audio-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-audio-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>media</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-chart-pie-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/5/56/Font_Awesome_5_solid_chart-pie.svg' target='_blank'><code>fa-chart-pie-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_chart-pie.svg' target='_blank'>Font_Awesome_5_solid_chart-pie.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>media</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-chart-pie-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/5/56/Font_Awesome_5_solid_chart-pie.svg' target='_blank'><code>fa-chart-pie-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_chart-pie.svg' target='_blank'>Font_Awesome_5_solid_chart-pie.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>media</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-chart-pie.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/5/56/Font_Awesome_5_solid_chart-pie.svg' target='_blank'><code>fa-chart-pie.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_chart-pie.svg' target='_blank'>Font_Awesome_5_solid_chart-pie.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>media</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-line-chart-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/e/ed/Font_Awesome_5_solid_chart-line.svg' target='_blank'><code>fa-line-chart-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_chart-line.svg' target='_blank'>Font_Awesome_5_solid_chart-line.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>media</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-line-chart-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/e/ed/Font_Awesome_5_solid_chart-line.svg' target='_blank'><code>fa-line-chart-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_chart-line.svg' target='_blank'>Font_Awesome_5_solid_chart-line.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>media</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-line-chart.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/e/ed/Font_Awesome_5_solid_chart-line.svg' target='_blank'><code>fa-line-chart.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_chart-line.svg' target='_blank'>Font_Awesome_5_solid_chart-line.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>media</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/video-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>video-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-video-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>media</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/video-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>video-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-video-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>media</code>  </td> </tr>

</table></center>

### Other
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/back-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>back-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-back-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/back-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>back-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-back-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/bars-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>bars-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-bars-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/bars-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>bars-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-bars-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/bullets-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>bullets-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-bullets-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/bullets-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>bullets-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-bullets-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/calendar-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>calendar-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-calendar-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/calendar-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>calendar-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-calendar-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/camera-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>camera-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-camera-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/camera-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>camera-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-camera-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/check-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>check-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-check-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/check-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>check-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-check-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/clock-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>clock-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-clock-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/clock-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>clock-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-clock-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/cloud-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>cloud-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-cloud-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/cloud-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>cloud-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-cloud-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/comment-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>comment-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-comment-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/comment-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>comment-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-comment-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/delete-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>delete-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-delete-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/delete-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>delete-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-delete-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/edit-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>edit-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-edit-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/edit-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>edit-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-edit-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/eye-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>eye-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-eye-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/eye-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>eye-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-eye-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/forward-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>forward-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-forward-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/forward-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>forward-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-forward-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/gear-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>gear-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-gear-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/gear-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>gear-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-gear-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/lock-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>lock-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-lock-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/lock-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>lock-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-lock-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/mail-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>mail-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-mail-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/mail-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>mail-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-mail-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/recycle-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>recycle-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-recycle-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/recycle-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>recycle-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-recycle-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/back-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>back-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-back-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/back-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>back-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-back-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/bars-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>bars-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-bars-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/bars-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>bars-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-bars-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/bullets-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>bullets-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-bullets-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/bullets-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>bullets-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-bullets-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/calendar-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>calendar-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-calendar-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/calendar-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>calendar-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-calendar-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/camera-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>camera-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-camera-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/camera-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>camera-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-camera-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/check-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>check-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-check-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/check-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>check-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-check-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/clock-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>clock-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-clock-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/clock-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>clock-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-clock-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/cloud-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>cloud-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-cloud-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/cloud-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>cloud-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-cloud-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/comment-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>comment-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-comment-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/comment-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>comment-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-comment-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/delete-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>delete-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-delete-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/delete-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>delete-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-delete-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/edit-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>edit-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-edit-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/edit-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>edit-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-edit-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/eye-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>eye-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-eye-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/eye-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>eye-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-eye-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-barcode-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/6/6b/Barcode_font_awesome.svg' target='_blank'><code>fa-barcode-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Barcode_font_awesome.svg' target='_blank'>Barcode_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-barcode-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/6/6b/Barcode_font_awesome.svg' target='_blank'><code>fa-barcode-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Barcode_font_awesome.svg' target='_blank'>Barcode_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-barcode.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/6/6b/Barcode_font_awesome.svg' target='_blank'><code>fa-barcode.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Barcode_font_awesome.svg' target='_blank'>Barcode_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-edit-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/4/4c/Edit_font_awesome.svg' target='_blank'><code>fa-edit-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Edit_font_awesome.svg' target='_blank'>Edit_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-edit-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/4/4c/Edit_font_awesome.svg' target='_blank'><code>fa-edit-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Edit_font_awesome.svg' target='_blank'>Edit_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-edit.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/4/4c/Edit_font_awesome.svg' target='_blank'><code>fa-edit.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Edit_font_awesome.svg' target='_blank'>Edit_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-envelope-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/3d/Envelope_font_awesome.svg' target='_blank'><code>fa-envelope-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Envelope_font_awesome.svg' target='_blank'>Envelope_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-envelope-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/3d/Envelope_font_awesome.svg' target='_blank'><code>fa-envelope-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Envelope_font_awesome.svg' target='_blank'>Envelope_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-envelope.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/3d/Envelope_font_awesome.svg' target='_blank'><code>fa-envelope.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Envelope_font_awesome.svg' target='_blank'>Envelope_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-file-save-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/2/20/Save_font_awesome.svg' target='_blank'><code>fa-file-save-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Save_font_awesome.svg' target='_blank'>Save_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-file-save-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/2/20/Save_font_awesome.svg' target='_blank'><code>fa-file-save-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Save_font_awesome.svg' target='_blank'>Save_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-file-save.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/2/20/Save_font_awesome.svg' target='_blank'><code>fa-file-save.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Save_font_awesome.svg' target='_blank'>Save_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-harddisk-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/f/ff/Font_Awesome_5_solid_hdd.svg' target='_blank'><code>fa-harddisk-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_hdd.svg' target='_blank'>Font_Awesome_5_solid_hdd.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-harddisk-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/f/ff/Font_Awesome_5_solid_hdd.svg' target='_blank'><code>fa-harddisk-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_hdd.svg' target='_blank'>Font_Awesome_5_solid_hdd.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-harddisk.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/f/ff/Font_Awesome_5_solid_hdd.svg' target='_blank'><code>fa-harddisk.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_hdd.svg' target='_blank'>Font_Awesome_5_solid_hdd.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-language-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/32/Language_font_awesome_v5.svg' target='_blank'><code>fa-language-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Language_font_awesome_v5.svg' target='_blank'>Language_font_awesome_v5.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-language-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/32/Language_font_awesome_v5.svg' target='_blank'><code>fa-language-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Language_font_awesome_v5.svg' target='_blank'>Language_font_awesome_v5.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-language.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/32/Language_font_awesome_v5.svg' target='_blank'><code>fa-language.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Language_font_awesome_v5.svg' target='_blank'>Language_font_awesome_v5.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-qrcode.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/b/bb/Qrcode_font_awesome.svg' target='_blank'><code>fa-qrcode.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Qrcode_font_awesome.svg' target='_blank'>Qrcode_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-sort-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/0/07/Sort_font_awesome.svg' target='_blank'><code>fa-sort-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Sort_font_awesome.svg' target='_blank'>Sort_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-sort-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/0/07/Sort_font_awesome.svg' target='_blank'><code>fa-sort-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Sort_font_awesome.svg' target='_blank'>Sort_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-sort.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/0/07/Sort_font_awesome.svg' target='_blank'><code>fa-sort.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Sort_font_awesome.svg' target='_blank'>Sort_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/forward-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>forward-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-forward-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/forward-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>forward-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-forward-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/gear-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>gear-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-gear-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/gear-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>gear-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-gear-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/lock-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>lock-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-lock-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/lock-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>lock-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-lock-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/mail-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>mail-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-mail-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/mail-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>mail-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-mail-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/recycle-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>recycle-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-recycle-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/recycle-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>recycle-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-recycle-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>other</code>  </td> </tr>

</table></center>

### Navigation
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/carat-d-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>carat-d-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-d-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>navigation</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/carat-d-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>carat-d-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-d-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>navigation</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/carat-l-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>carat-l-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-l-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>navigation</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/carat-l-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>carat-l-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-l-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>navigation</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/carat-r-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>carat-r-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-r-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>navigation</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/carat-r-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>carat-r-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-r-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>navigation</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/carat-u-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>carat-u-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-u-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>navigation</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/carat-u-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>carat-u-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-u-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>navigation</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/location-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>location-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-location-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>navigation</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/location-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>location-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-location-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>navigation</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/navigation-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>navigation-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-navigation-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>navigation</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/navigation-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>navigation-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-navigation-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>navigation</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-d-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>carat-d-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-d-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>navigation</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-d-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>carat-d-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-d-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>navigation</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-l-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>carat-l-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-l-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>navigation</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-l-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>carat-l-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-l-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>navigation</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-r-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>carat-r-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-r-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>navigation</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-r-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>carat-r-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-r-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>navigation</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-u-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>carat-u-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-u-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>navigation</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-u-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>carat-u-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-u-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>navigation</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/location-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>location-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-location-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>navigation</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/location-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>location-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-location-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>navigation</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/navigation-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>navigation-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-navigation-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>navigation</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/navigation-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>navigation-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-navigation-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>navigation</code>  </td> </tr>

</table></center>

### Medical
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/heart-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>heart-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-heart-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>medical</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/heart-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>heart-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-heart-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>medical</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/heart-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>heart-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-heart-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>medical</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/heart-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>heart-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-heart-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>medical</code>  </td> </tr>

</table></center>

### Device
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/phone-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>phone-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-phone-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>device</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/phone-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>phone-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-phone-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>device</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-camera-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/d1/Camera_font_awesome.svg' target='_blank'><code>fa-camera-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Camera_font_awesome.svg' target='_blank'>Camera_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>device</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-camera-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/d1/Camera_font_awesome.svg' target='_blank'><code>fa-camera-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Camera_font_awesome.svg' target='_blank'>Camera_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>device</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-camera.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/d1/Camera_font_awesome.svg' target='_blank'><code>fa-camera.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Camera_font_awesome.svg' target='_blank'>Camera_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>device</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-tablet-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/30/Tablet_font_awesome.svg' target='_blank'><code>fa-tablet-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Tablet_font_awesome.svg' target='_blank'>Tablet_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>device</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-tablet-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/30/Tablet_font_awesome.svg' target='_blank'><code>fa-tablet-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Tablet_font_awesome.svg' target='_blank'>Tablet_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>device</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-tablet.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/30/Tablet_font_awesome.svg' target='_blank'><code>fa-tablet.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Tablet_font_awesome.svg' target='_blank'>Tablet_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>device</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-vr-headset-black.svg" width="20"> </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_brands_simplybuilt.svg' target='_blank'><code>fa-vr-headset-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:File:Font_Awesome_5_brands_simplybuilt.svg' target='_blank'>File:Font_Awesome_5_brands_simplybuilt.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>device</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-vr-headset-white.svg" width="20"> </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_brands_simplybuilt.svg' target='_blank'><code>fa-vr-headset-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:File:Font_Awesome_5_brands_simplybuilt.svg' target='_blank'>File:Font_Awesome_5_brands_simplybuilt.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>device</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-vr-headset.svg" width="20"> </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_brands_simplybuilt.svg' target='_blank'><code>fa-vr-headset.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:File:Font_Awesome_5_brands_simplybuilt.svg' target='_blank'>File:Font_Awesome_5_brands_simplybuilt.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>device</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/phone-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>phone-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-phone-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>device</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/phone-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>phone-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-phone-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>device</code>  </td> </tr>

</table></center>

### Login
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/power-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>power-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-power-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>login</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/power-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>power-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-power-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>login</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/user-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>user-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-user-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>login</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/user-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>user-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-user-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>login</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-signin-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/c/c5/Signin_font_awesome.svg' target='_blank'><code>fa-signin-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Signin_font_awesome.svg' target='_blank'>Signin_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>login</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-signin-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/c/c5/Signin_font_awesome.svg' target='_blank'><code>fa-signin-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Signin_font_awesome.svg' target='_blank'>Signin_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>login</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-signin.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/c/c5/Signin_font_awesome.svg' target='_blank'><code>fa-signin.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Signin_font_awesome.svg' target='_blank'>Signin_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>login</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-signout-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/db/Signout_font_awesome.svg' target='_blank'><code>fa-signout-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Signout_font_awesome.svg' target='_blank'>Signout_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>login</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-signout-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/db/Signout_font_awesome.svg' target='_blank'><code>fa-signout-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Signout_font_awesome.svg' target='_blank'>Signout_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>login</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-signout.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/db/Signout_font_awesome.svg' target='_blank'><code>fa-signout.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Signout_font_awesome.svg' target='_blank'>Signout_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>login</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/power-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>power-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-power-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>login</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/power-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>power-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-power-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>login</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/user-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>user-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-user-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>login</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/user-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>user-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-user-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>login</code>  </td> </tr>

</table></center>

### Editor
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/search-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>search-black.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-search-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>editor</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/search-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>search-white.png</code></a> </td><td> <code>img/icons-png</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-search-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>editor</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-copy-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/0/04/Copy_font_awesome.svg' target='_blank'><code>fa-copy-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Copy_font_awesome.svg' target='_blank'>Copy_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>editor</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-copy-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/0/04/Copy_font_awesome.svg' target='_blank'><code>fa-copy-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Copy_font_awesome.svg' target='_blank'>Copy_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>editor</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-copy.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/0/04/Copy_font_awesome.svg' target='_blank'><code>fa-copy.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Copy_font_awesome.svg' target='_blank'>Copy_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>editor</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-enumeration-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/31/Ol_font_awesome.svg' target='_blank'><code>fa-enumeration-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Ol_font_awesome.svg' target='_blank'>Ol_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>editor</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-enumeration-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/31/Ol_font_awesome.svg' target='_blank'><code>fa-enumeration-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Ol_font_awesome.svg' target='_blank'>Ol_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>editor</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-enumeration.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/31/Ol_font_awesome.svg' target='_blank'><code>fa-enumeration.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Ol_font_awesome.svg' target='_blank'>Ol_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>editor</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-font-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/f/f1/Font_Awesome_5_solid_font.svg' target='_blank'><code>fa-font-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_font.svg' target='_blank'>Font_Awesome_5_solid_font.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>editor</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-font-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/f/f1/Font_Awesome_5_solid_font.svg' target='_blank'><code>fa-font-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_font.svg' target='_blank'>Font_Awesome_5_solid_font.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>editor</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-font.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/f/f1/Font_Awesome_5_solid_font.svg' target='_blank'><code>fa-font.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_font.svg' target='_blank'>Font_Awesome_5_solid_font.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>editor</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-list-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/1/1b/List_font_awesome.svg' target='_blank'><code>fa-list-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:List_font_awesome.svg' target='_blank'>List_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>editor</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-list-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/1/1b/List_font_awesome.svg' target='_blank'><code>fa-list-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:List_font_awesome.svg' target='_blank'>List_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>editor</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-list.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/1/1b/List_font_awesome.svg' target='_blank'><code>fa-list.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:List_font_awesome.svg' target='_blank'>List_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>editor</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-paste-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/4/46/Paste_font_awesome.svg' target='_blank'><code>fa-paste-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Paste_font_awesome.svg' target='_blank'>Paste_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>editor</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-paste-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/4/46/Paste_font_awesome.svg' target='_blank'><code>fa-paste-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Paste_font_awesome.svg' target='_blank'>Paste_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>editor</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-paste.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/4/46/Paste_font_awesome.svg' target='_blank'><code>fa-paste.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Paste_font_awesome.svg' target='_blank'>Paste_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>editor</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/search-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>search-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-search-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>editor</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/search-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'><code>search-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-search-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> <code>editor</code>  </td> </tr>

</table></center>

### Audio Player
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-backward-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/c/c8/Backward_font_awesome.svg' target='_blank'><code>fa-audio-backward-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Backward_font_awesome.svg' target='_blank'>Backward_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>audio</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-backward-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/c/c8/Backward_font_awesome.svg' target='_blank'><code>fa-audio-backward-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Backward_font_awesome.svg' target='_blank'>Backward_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>audio</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-backward.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/c/c8/Backward_font_awesome.svg' target='_blank'><code>fa-audio-backward.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Backward_font_awesome.svg' target='_blank'>Backward_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>audio</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-eject-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/1/14/Font_Awesome_5_solid_eject.svg' target='_blank'><code>fa-audio-eject-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_eject.svg' target='_blank'>Font_Awesome_5_solid_eject.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>audio</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-eject-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/1/14/Font_Awesome_5_solid_eject.svg' target='_blank'><code>fa-audio-eject-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_eject.svg' target='_blank'>Font_Awesome_5_solid_eject.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>audio</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-eject.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/1/14/Font_Awesome_5_solid_eject.svg' target='_blank'><code>fa-audio-eject.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_eject.svg' target='_blank'>Font_Awesome_5_solid_eject.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>audio</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-forward-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/7/7f/Forward_font_awesome.svg' target='_blank'><code>fa-audio-forward-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Forward_font_awesome.svg' target='_blank'>Forward_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>audio</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-forward-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/7/7f/Forward_font_awesome.svg' target='_blank'><code>fa-audio-forward-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Forward_font_awesome.svg' target='_blank'>Forward_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>audio</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-forward.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/7/7f/Forward_font_awesome.svg' target='_blank'><code>fa-audio-forward.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Forward_font_awesome.svg' target='_blank'>Forward_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>audio</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-pause-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/a/af/Pause_font_awesome.svg' target='_blank'><code>fa-audio-pause-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Pause_font_awesome.svg' target='_blank'>Pause_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>audio</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-pause-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/a/af/Pause_font_awesome.svg' target='_blank'><code>fa-audio-pause-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Pause_font_awesome.svg' target='_blank'>Pause_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>audio</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-pause.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/a/af/Pause_font_awesome.svg' target='_blank'><code>fa-audio-pause.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Pause_font_awesome.svg' target='_blank'>Pause_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>audio</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-play-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/d3/Play_font_awesome.svg' target='_blank'><code>fa-audio-play-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Play_font_awesome.svg' target='_blank'>Play_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>audio</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-play-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/d3/Play_font_awesome.svg' target='_blank'><code>fa-audio-play-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Play_font_awesome.svg' target='_blank'>Play_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>audio</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-play.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/d3/Play_font_awesome.svg' target='_blank'><code>fa-audio-play.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Play_font_awesome.svg' target='_blank'>Play_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>audio</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-record-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/a/a0/Circle_font_awesome.svg' target='_blank'><code>fa-audio-record-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Circle_font_awesome.svg' target='_blank'>Circle_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>audio</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-record-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/a/a0/Circle_font_awesome.svg' target='_blank'><code>fa-audio-record-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Circle_font_awesome.svg' target='_blank'>Circle_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>audio</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-record.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/a/a0/Circle_font_awesome.svg' target='_blank'><code>fa-audio-record.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Circle_font_awesome.svg' target='_blank'>Circle_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>audio</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-stop-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/b/b9/Font_Awesome_5_solid_square.svg' target='_blank'><code>fa-audio-stop-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_square.svg' target='_blank'>Font_Awesome_5_solid_square.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>audio</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-stop-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/b/b9/Font_Awesome_5_solid_square.svg' target='_blank'><code>fa-audio-stop-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_square.svg' target='_blank'>Font_Awesome_5_solid_square.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>audio</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-stop.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/b/b9/Font_Awesome_5_solid_square.svg' target='_blank'><code>fa-audio-stop.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_square.svg' target='_blank'>Font_Awesome_5_solid_square.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>audio</code>  </td> </tr>

</table></center>

### Products and Objects
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-book-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/b/b3/Book_font_awesome.svg' target='_blank'><code>fa-book-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Book_font_awesome.svg' target='_blank'>Book_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>product</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-book-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/b/b3/Book_font_awesome.svg' target='_blank'><code>fa-book-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Book_font_awesome.svg' target='_blank'>Book_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>product</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-book.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/b/b3/Book_font_awesome.svg' target='_blank'><code>fa-book.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Book_font_awesome.svg' target='_blank'>Book_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>product</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-picture-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/8/84/Picture_font_awesome.svg' target='_blank'><code>fa-picture-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Picture_font_awesome.svg' target='_blank'>Picture_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>product</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-picture-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/8/84/Picture_font_awesome.svg' target='_blank'><code>fa-picture-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Picture_font_awesome.svg' target='_blank'>Picture_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>product</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-picture.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/8/84/Picture_font_awesome.svg' target='_blank'><code>fa-picture.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Picture_font_awesome.svg' target='_blank'>Picture_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>product</code>  </td> </tr>

</table></center>

### Filetype
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-file-archive-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/5/5d/Font_Awesome_5_regular_file-archive.svg' target='_blank'><code>fa-file-archive-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_regular_file-archive.svg' target='_blank'>Font_Awesome_5_regular_file-archive.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>filetype</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-file-archive-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/5/5d/Font_Awesome_5_regular_file-archive.svg' target='_blank'><code>fa-file-archive-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_regular_file-archive.svg' target='_blank'>Font_Awesome_5_regular_file-archive.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>filetype</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-file-archive.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/5/5d/Font_Awesome_5_regular_file-archive.svg' target='_blank'><code>fa-file-archive.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_regular_file-archive.svg' target='_blank'>Font_Awesome_5_regular_file-archive.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>filetype</code>  </td> </tr>

</table></center>

### Vehicle
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-truck-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/1/1c/Truck_font_awesome.svg' target='_blank'><code>fa-truck-black.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Truck_font_awesome.svg' target='_blank'>Truck_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>vehicle</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-truck-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/1/1c/Truck_font_awesome.svg' target='_blank'><code>fa-truck-white.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Truck_font_awesome.svg' target='_blank'>Truck_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>vehicle</code>  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-truck.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/1/1c/Truck_font_awesome.svg' target='_blank'><code>fa-truck.svg</code></a> </td><td> <code>img/icons-svg</code>  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Truck_font_awesome.svg' target='_blank'>Truck_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> <code>vehicle</code>  </td> </tr>

</table></center>

## Style Sheets CSS for Icons
The spinner icon is static. You might expect the spinner icon `fa-spinner.svg` to rotate. This can be accomplish with CSS class definition for a class `icon-spin`:
* Add in your CSS file the following styles for the class `icon-spin`:
```css
.icon-spin {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120px;
    height: 120px;
    margin:-60px 0 0 -60px;
    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;
}
@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
```
* The you can make the icons rotate by adding the `icon-spin` classname to the icon:
```html
<img class="icon-spin" src="img/icons-svg/fa-spinner.svg" alt="" width="20" height="20">
```



## Scan Icons

### Scan Shell Script for images
The shell script `scan_icons.sh` scans all icons in the subdirectory `img/` and creates and HTML file `img/index.html` and a `wget` download script, that can be modified for downloading a subset of the images.

### Shell Script `wget_icons.sh`
The shell script `wget_icons.sh` can be used to download a subset of images. In the provided default version it downloads all icons in this repository.

* This `README.md` will also be  downloaded and stored in `img/README_Icons4Menu.html`. Please do not remove this file because it provides a reference to the origin of the files and the corresponding licenses.
* The JQuery Mobile License is stored in `img/LICENSE_Jquery_Mobile.txt`. For JQuery Mobile license see file `LICENSE_Jquery_Mobile.txt` in the repository `Icons4Menu`.

### Use in other SVG Images in other repositories
The script `update_wget_icons.sh` updates the script `wget_icons.sh` from the repository [icons4menu](https://www.github.com/niebert/icons4menu) and replaces the script `wget_icons.sh`. The script `wget_icons.sh` can be used to download an updated version of the icons. Please modify the script according to your needs, to download just a subset for your [AppLSAC](https://en.wikiversity.org/wiki/WebApps_with_LocalStorage_and_AppCache).

If the repository [icons4menu](https://www.github.com/niebert/icons4menu)  is expanded with more icons with a Creative Commons license, that it is recommended to update the download script `wget_icons.sh` with the following commands:
```bash
sh ./update_wget_icons.sh
sh ./wget_icons.sh
```
The second command downloads the icons. You can help to minimize the GitHub server load by tailoring the script according to your needs.

If you want to check out an [example repository on GitHub](), that uses the [Icons4Menu icons](https://niebert.github.io/hamburger_menu_app) in an AppLSAC analyze the subdirectory `img/` in [`hamburger_menu_app`](https://www.github.com/niebert/hamburger_menu_app).

## Add License Info File
If you use the repository add this README.md file to the [WebApp](https://en.wikiversity.org/wiki/WebApps_with_LocalStorage_and_AppCache), so that users of web-based applications can identify the origin of the SVG and PNG icons. The repository incorporated SVG and PNG icons with two licenses:
* Creative Commons `CC Zero` - https://creativecommons.org/publicdomain/zero/1.0/deed.en
* Creative Commons `CC BY-SA 3.0`  - see https://creativecommons.org/licenses/by-sa/3.0/  with the `fa-` as file attribution prefix.

### Attribution for Files - File Prefix
If we consider the `CC BY-SA 3.0` license provides the freedom to:
* **Share** — copy and redistribute the material in any medium or format
* **Adapt** — remix, transform, and build upon the material for any purpose, even commercially.
These two freedoms are also provided for the license `CC Zero`. Furthermore for all `CC BY-SA 3.0` licensed icons an `attribution` and a `share alike` requirement is defined (see https://creativecommons.org/licenses/by-sa/3.0/):

* **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
* **ShareAlike** — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.

The JQuery Mobile 1.4.5 PNG and SVG icons in this repository (i.e. icons without `fa-` prefix) do not require the "attribution",  but it is recommended to provide attribution also to JQuery Mobile 1.4.5 with the [CC Zero](https://creativecommons.org/publicdomain/zero/1.0/deed.en) license for icons without the `fa-` prefix. Especially for adding more icons in forks of the repository `icons4menu` the prefix `fa-` should also be used to distinguish  `CC Zero` licensed icons without `fa-` prefix from `CC BY-SA 3.0` licensed icon that need a `file attribution` by adding the prefix `fa-` in the filename.

### More than 2 Licenses in Forks of `icons4menu` with license prefix
If you have more than 2 licenses in your fork of `icons4menu` you could add a license prefix for all icons, e.g.:

* `cc0-recycle.svg` for [`CC Zero`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) licensed icons from JQuery Mobile 1.4.5,
* `cc3bysa-recycle.svg` for [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) licensed icons from [Wiki Commons](https://commons.wikimedia.org/w/index.php?title=Special:Search&limit=500&offset=0&profile=default&search=FontAwesome.com&advancedSearch-current=%7B%7D&ns0=1&ns6=1&ns12=1&ns14=1&ns100=1&ns106=1),
* `cc4by-recycle.svg` for [`CC BY 4.0`]( https://creativecommons.org/licenses/by/4.0/) licensed icons e.g. from an additional source used in the fork of `icons4menu`.

This allows users to identify the license of the file directly from the filename.
