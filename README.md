# Icons4Menu
This repository is a SVG images resource based on SVG icons [JQuery Mobile 1.4.5](https://jquerymobile.com/download/) and extended with SVG icons from Wiki Commons. The icons are primary collected for application in menus with e.g. Hamburger Menus like [hamburger_menu_app](https://niebert.github.io/hamburger_menu_app/) as an [AppLSAC](https://en.wikiversity.org/wiki/AppLSAC).

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
* `src`: is the base64 encoded data of the image as Data URL that can used in images in the DOM. The source us either the `XML` source text of the `SVG` image or the binary data as base64 encoded data of the image.

The file `json4icons.js` is a library that populates a hash object `vDataJSON` defined with `var vDataJSON = {};` in the main HTML file that embeds the `icons4menu`.

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
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/action-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>action-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-action-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/action-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>action-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-action-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/grid-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>grid-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-grid-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/grid-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>grid-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-grid-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/home-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>home-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-home-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/home-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>home-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-home-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/info-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>info-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-info-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/info-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>info-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-info-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/shop-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>shop-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-shop-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/shop-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>shop-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-shop-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/action-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>action-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-action-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/action-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>action-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-action-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-folder-open-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/3a/Folder_open_alt_font_awesome.svg' target='_blank'>fa-folder-open-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Folder_open_alt_font_awesome.svg' target='_blank'>Folder_open_alt_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-folder-open-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/3a/Folder_open_alt_font_awesome.svg' target='_blank'>fa-folder-open-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Folder_open_alt_font_awesome.svg' target='_blank'>Folder_open_alt_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-folder-open.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/3a/Folder_open_alt_font_awesome.svg' target='_blank'>fa-folder-open.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Folder_open_alt_font_awesome.svg' target='_blank'>Folder_open_alt_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-hamburger-icon-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/0/04/Reorder_font_awesome.svg' target='_blank'>fa-hamburger-icon-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Reorder_font_awesome.svg' target='_blank'>Reorder_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-hamburger-icon-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/0/04/Reorder_font_awesome.svg' target='_blank'>fa-hamburger-icon-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Reorder_font_awesome.svg' target='_blank'>Reorder_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-hamburger-icon.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/0/04/Reorder_font_awesome.svg' target='_blank'>fa-hamburger-icon.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Reorder_font_awesome.svg' target='_blank'>Reorder_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-print-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/e/e4/Print_font_awesome.svg' target='_blank'>fa-print-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Print_font_awesome.svg' target='_blank'>Print_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-print-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/e/e4/Print_font_awesome.svg' target='_blank'>fa-print-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Print_font_awesome.svg' target='_blank'>Print_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-print.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/e/e4/Print_font_awesome.svg' target='_blank'>fa-print.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Print_font_awesome.svg' target='_blank'>Print_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-settings-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/9/92/Cog_font_awesome.svg' target='_blank'>fa-settings-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Cog_font_awesome.svg' target='_blank'>Cog_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-settings-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/9/92/Cog_font_awesome.svg' target='_blank'>fa-settings-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Cog_font_awesome.svg' target='_blank'>Cog_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-settings.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/9/92/Cog_font_awesome.svg' target='_blank'>fa-settings.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Cog_font_awesome.svg' target='_blank'>Cog_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-trash-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/7/7d/Trash_font_awesome.svg' target='_blank'>fa-trash-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Trash_font_awesome.svg' target='_blank'>Trash_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-trash-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/7/7d/Trash_font_awesome.svg' target='_blank'>fa-trash-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Trash_font_awesome.svg' target='_blank'>Trash_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-trash.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/7/7d/Trash_font_awesome.svg' target='_blank'>fa-trash.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Trash_font_awesome.svg' target='_blank'>Trash_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/grid-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>grid-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-grid-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/grid-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>grid-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-grid-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/home-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>home-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-home-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/home-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>home-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-home-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/info-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>info-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-info-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/info-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>info-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-info-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/shop-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>shop-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-shop-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/shop-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>shop-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-shop-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `main`  </td> </tr>

</table></center>

### Action and Processes
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/alert-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>alert-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-alert-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/alert-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>alert-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-alert-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/forbidden-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>forbidden-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-forbidden-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/forbidden-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>forbidden-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-forbidden-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/minus-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>minus-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-minus-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/minus-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>minus-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-minus-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/plus-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>plus-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-plus-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/plus-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>plus-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-plus-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/refresh-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>refresh-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-refresh-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/refresh-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>refresh-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-refresh-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/star-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>star-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-star-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/star-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>star-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-star-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/tag-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>tag-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-tag-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/tag-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>tag-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-tag-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/alert-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>alert-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-alert-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/alert-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>alert-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-alert-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-cancel-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/de/Remove_font_awesome.svg' target='_blank'>fa-cancel-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Remove_font_awesome.svg' target='_blank'>Remove_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-cancel-red.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/de/Remove_font_awesome.svg' target='_blank'>fa-cancel-red.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Remove_font_awesome.svg' target='_blank'>Remove_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-cancel-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/de/Remove_font_awesome.svg' target='_blank'>fa-cancel-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Remove_font_awesome.svg' target='_blank'>Remove_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-cancel.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/de/Remove_font_awesome.svg' target='_blank'>fa-cancel.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Remove_font_awesome.svg' target='_blank'>Remove_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-spinner-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/d4/Spinner_font_awesome.svg' target='_blank'>fa-spinner-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Spinner_font_awesome.svg' target='_blank'>Spinner_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-spinner-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/d4/Spinner_font_awesome.svg' target='_blank'>fa-spinner-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Spinner_font_awesome.svg' target='_blank'>Spinner_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-spinner.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/d4/Spinner_font_awesome.svg' target='_blank'>fa-spinner.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Spinner_font_awesome.svg' target='_blank'>Spinner_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-undo-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/0/0d/Undo_font_awesome.svg' target='_blank'>fa-undo-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Undo_font_awesome.svg' target='_blank'>Undo_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-undo-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/0/0d/Undo_font_awesome.svg' target='_blank'>fa-undo-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Undo_font_awesome.svg' target='_blank'>Undo_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-undo.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/0/0d/Undo_font_awesome.svg' target='_blank'>fa-undo.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Undo_font_awesome.svg' target='_blank'>Undo_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/forbidden-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>forbidden-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-forbidden-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/forbidden-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>forbidden-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-forbidden-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/minus-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>minus-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-minus-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/minus-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>minus-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-minus-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/plus-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>plus-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-plus-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/plus-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>plus-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-plus-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/refresh-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>refresh-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-refresh-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/refresh-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>refresh-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-refresh-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/star-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>star-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-star-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/star-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>star-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-star-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/tag-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>tag-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-tag-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/tag-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>tag-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-tag-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `action`  </td> </tr>

</table></center>

### Arrow
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-d-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-d-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-d-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-d-l-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-d-l-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-d-l-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-d-l-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-d-l-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-d-l-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-d-r-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-d-r-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-d-r-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-d-r-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-d-r-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-d-r-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-d-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-d-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-d-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-l-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-l-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-l-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-l-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-l-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-l-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-r-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-r-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-r-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-r-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-r-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-r-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-u-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-u-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-u-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-u-l-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-u-l-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-u-l-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-u-l-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-u-l-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-u-l-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-u-r-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-u-r-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-u-r-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-u-r-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-u-r-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-u-r-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-u-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-u-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-u-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-d-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-d-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-d-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-d-l-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-d-l-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-d-l-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-d-l-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-d-l-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-d-l-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-d-r-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-d-r-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-d-r-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-d-r-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-d-r-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-d-r-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-d-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-d-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-d-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-l-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-l-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-l-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-l-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-l-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-l-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-r-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-r-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-r-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-r-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-r-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-r-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-u-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-u-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-u-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-u-l-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-u-l-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-u-l-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-u-l-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-u-l-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-u-l-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-u-r-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-u-r-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-u-r-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-u-r-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-u-r-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-u-r-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-u-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>arrow-u-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-arrow-u-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `arrow`  </td> </tr>

</table></center>

### Media
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/audio-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>audio-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-audio-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/audio-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>audio-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-audio-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/video-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>video-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-video-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/video-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>video-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-video-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/audio-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>audio-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-audio-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/audio-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>audio-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-audio-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-chart-pie-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/5/56/Font_Awesome_5_solid_chart-pie.svg' target='_blank'>fa-chart-pie-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_chart-pie.svg' target='_blank'>Font_Awesome_5_solid_chart-pie.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-chart-pie-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/5/56/Font_Awesome_5_solid_chart-pie.svg' target='_blank'>fa-chart-pie-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_chart-pie.svg' target='_blank'>Font_Awesome_5_solid_chart-pie.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-chart-pie.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/5/56/Font_Awesome_5_solid_chart-pie.svg' target='_blank'>fa-chart-pie.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_chart-pie.svg' target='_blank'>Font_Awesome_5_solid_chart-pie.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-line-chart-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/e/ed/Font_Awesome_5_solid_chart-line.svg' target='_blank'>fa-line-chart-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_chart-line.svg' target='_blank'>Font_Awesome_5_solid_chart-line.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-line-chart-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/e/ed/Font_Awesome_5_solid_chart-line.svg' target='_blank'>fa-line-chart-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_chart-line.svg' target='_blank'>Font_Awesome_5_solid_chart-line.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-line-chart.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/e/ed/Font_Awesome_5_solid_chart-line.svg' target='_blank'>fa-line-chart.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_chart-line.svg' target='_blank'>Font_Awesome_5_solid_chart-line.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/video-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>video-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-video-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/video-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>video-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-video-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `media`  </td> </tr>

</table></center>

### Other
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/back-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>back-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-back-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/back-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>back-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-back-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/bars-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>bars-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-bars-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/bars-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>bars-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-bars-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/bullets-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>bullets-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-bullets-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/bullets-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>bullets-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-bullets-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/calendar-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>calendar-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-calendar-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/calendar-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>calendar-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-calendar-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/camera-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>camera-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-camera-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/camera-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>camera-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-camera-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/check-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>check-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-check-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/check-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>check-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-check-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/clock-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>clock-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-clock-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/clock-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>clock-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-clock-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/cloud-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>cloud-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-cloud-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/cloud-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>cloud-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-cloud-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/comment-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>comment-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-comment-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/comment-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>comment-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-comment-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/delete-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>delete-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-delete-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/delete-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>delete-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-delete-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/edit-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>edit-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-edit-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/edit-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>edit-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-edit-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/eye-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>eye-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-eye-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/eye-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>eye-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-eye-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/forward-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>forward-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-forward-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/forward-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>forward-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-forward-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/gear-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>gear-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-gear-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/gear-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>gear-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-gear-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/lock-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>lock-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-lock-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/lock-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>lock-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-lock-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/mail-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>mail-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-mail-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/mail-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>mail-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-mail-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/recycle-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>recycle-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-recycle-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/recycle-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>recycle-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-recycle-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/back-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>back-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-back-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/back-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>back-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-back-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/bars-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>bars-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-bars-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/bars-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>bars-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-bars-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/bullets-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>bullets-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-bullets-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/bullets-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>bullets-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-bullets-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/calendar-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>calendar-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-calendar-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/calendar-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>calendar-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-calendar-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/camera-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>camera-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-camera-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/camera-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>camera-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-camera-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/check-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>check-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-check-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/check-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>check-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-check-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/clock-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>clock-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-clock-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/clock-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>clock-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-clock-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/cloud-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>cloud-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-cloud-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/cloud-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>cloud-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-cloud-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/comment-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>comment-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-comment-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/comment-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>comment-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-comment-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/delete-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>delete-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-delete-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/delete-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>delete-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-delete-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/edit-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>edit-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-edit-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/edit-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>edit-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-edit-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/eye-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>eye-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-eye-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/eye-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>eye-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-eye-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-barcode-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/6/6b/Barcode_font_awesome.svg' target='_blank'>fa-barcode-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Barcode_font_awesome.svg' target='_blank'>Barcode_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-barcode-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/6/6b/Barcode_font_awesome.svg' target='_blank'>fa-barcode-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Barcode_font_awesome.svg' target='_blank'>Barcode_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-barcode.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/6/6b/Barcode_font_awesome.svg' target='_blank'>fa-barcode.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Barcode_font_awesome.svg' target='_blank'>Barcode_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-edit-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/4/4c/Edit_font_awesome.svg' target='_blank'>fa-edit-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Edit_font_awesome.svg' target='_blank'>Edit_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-edit-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/4/4c/Edit_font_awesome.svg' target='_blank'>fa-edit-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Edit_font_awesome.svg' target='_blank'>Edit_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-edit.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/4/4c/Edit_font_awesome.svg' target='_blank'>fa-edit.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Edit_font_awesome.svg' target='_blank'>Edit_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-envelope-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/3d/Envelope_font_awesome.svg' target='_blank'>fa-envelope-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Envelope_font_awesome.svg' target='_blank'>Envelope_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-envelope-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/3d/Envelope_font_awesome.svg' target='_blank'>fa-envelope-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Envelope_font_awesome.svg' target='_blank'>Envelope_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-envelope.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/3d/Envelope_font_awesome.svg' target='_blank'>fa-envelope.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Envelope_font_awesome.svg' target='_blank'>Envelope_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-file-save-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/2/20/Save_font_awesome.svg' target='_blank'>fa-file-save-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Save_font_awesome.svg' target='_blank'>Save_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-file-save-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/2/20/Save_font_awesome.svg' target='_blank'>fa-file-save-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Save_font_awesome.svg' target='_blank'>Save_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-file-save.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/2/20/Save_font_awesome.svg' target='_blank'>fa-file-save.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Save_font_awesome.svg' target='_blank'>Save_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-harddisk-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/f/ff/Font_Awesome_5_solid_hdd.svg' target='_blank'>fa-harddisk-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_hdd.svg' target='_blank'>Font_Awesome_5_solid_hdd.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-harddisk-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/f/ff/Font_Awesome_5_solid_hdd.svg' target='_blank'>fa-harddisk-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_hdd.svg' target='_blank'>Font_Awesome_5_solid_hdd.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-harddisk.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/f/ff/Font_Awesome_5_solid_hdd.svg' target='_blank'>fa-harddisk.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_hdd.svg' target='_blank'>Font_Awesome_5_solid_hdd.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-language-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/32/Language_font_awesome_v5.svg' target='_blank'>fa-language-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Language_font_awesome_v5.svg' target='_blank'>Language_font_awesome_v5.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-language-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/32/Language_font_awesome_v5.svg' target='_blank'>fa-language-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Language_font_awesome_v5.svg' target='_blank'>Language_font_awesome_v5.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-language.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/32/Language_font_awesome_v5.svg' target='_blank'>fa-language.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Language_font_awesome_v5.svg' target='_blank'>Language_font_awesome_v5.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-sort-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/0/07/Sort_font_awesome.svg' target='_blank'>fa-sort-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Sort_font_awesome.svg' target='_blank'>Sort_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-sort-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/0/07/Sort_font_awesome.svg' target='_blank'>fa-sort-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Sort_font_awesome.svg' target='_blank'>Sort_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-sort.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/0/07/Sort_font_awesome.svg' target='_blank'>fa-sort.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Sort_font_awesome.svg' target='_blank'>Sort_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/forward-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>forward-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-forward-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/forward-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>forward-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-forward-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/gear-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>gear-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-gear-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/gear-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>gear-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-gear-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/lock-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>lock-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-lock-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/lock-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>lock-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-lock-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/mail-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>mail-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-mail-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/mail-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>mail-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-mail-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/recycle-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>recycle-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-recycle-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/recycle-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>recycle-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-recycle-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `other`  </td> </tr>

</table></center>

### Navigation
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/carat-d-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>carat-d-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-d-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/carat-d-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>carat-d-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-d-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/carat-l-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>carat-l-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-l-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/carat-l-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>carat-l-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-l-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/carat-r-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>carat-r-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-r-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/carat-r-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>carat-r-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-r-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/carat-u-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>carat-u-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-u-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/carat-u-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>carat-u-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-u-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/location-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>location-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-location-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/location-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>location-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-location-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/navigation-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>navigation-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-navigation-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/navigation-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>navigation-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-navigation-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-d-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>carat-d-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-d-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-d-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>carat-d-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-d-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-l-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>carat-l-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-l-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-l-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>carat-l-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-l-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-r-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>carat-r-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-r-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-r-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>carat-r-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-r-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-u-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>carat-u-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-u-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-u-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>carat-u-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-carat-u-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/location-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>location-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-location-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/location-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>location-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-location-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/navigation-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>navigation-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-navigation-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/navigation-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>navigation-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-navigation-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `navigation`  </td> </tr>

</table></center>

### Medical
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/heart-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>heart-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-heart-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `medical`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/heart-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>heart-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-heart-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `medical`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/heart-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>heart-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-heart-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `medical`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/heart-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>heart-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-heart-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `medical`  </td> </tr>

</table></center>

### Device
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/phone-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>phone-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-phone-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `device`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/phone-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>phone-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-phone-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `device`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-camera-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/d1/Camera_font_awesome.svg' target='_blank'>fa-camera-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Camera_font_awesome.svg' target='_blank'>Camera_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `device`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-camera-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/d1/Camera_font_awesome.svg' target='_blank'>fa-camera-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Camera_font_awesome.svg' target='_blank'>Camera_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `device`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-camera.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/d1/Camera_font_awesome.svg' target='_blank'>fa-camera.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Camera_font_awesome.svg' target='_blank'>Camera_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `device`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-tablet-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/30/Tablet_font_awesome.svg' target='_blank'>fa-tablet-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Tablet_font_awesome.svg' target='_blank'>Tablet_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `device`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-tablet-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/30/Tablet_font_awesome.svg' target='_blank'>fa-tablet-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Tablet_font_awesome.svg' target='_blank'>Tablet_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `device`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-tablet.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/30/Tablet_font_awesome.svg' target='_blank'>fa-tablet.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Tablet_font_awesome.svg' target='_blank'>Tablet_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `device`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-vr-headset-black.svg" width="20"> </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_brands_simplybuilt.svg' target='_blank'>fa-vr-headset-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:File:Font_Awesome_5_brands_simplybuilt.svg' target='_blank'>File:Font_Awesome_5_brands_simplybuilt.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `device`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-vr-headset-white.svg" width="20"> </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_brands_simplybuilt.svg' target='_blank'>fa-vr-headset-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:File:Font_Awesome_5_brands_simplybuilt.svg' target='_blank'>File:Font_Awesome_5_brands_simplybuilt.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `device`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-vr-headset.svg" width="20"> </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_brands_simplybuilt.svg' target='_blank'>fa-vr-headset.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:File:Font_Awesome_5_brands_simplybuilt.svg' target='_blank'>File:Font_Awesome_5_brands_simplybuilt.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `device`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/phone-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>phone-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-phone-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `device`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/phone-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>phone-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-phone-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `device`  </td> </tr>

</table></center>

### Login
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/power-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>power-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-power-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/power-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>power-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-power-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/user-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>user-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-user-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/user-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>user-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-user-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-signin-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/c/c5/Signin_font_awesome.svg' target='_blank'>fa-signin-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Signin_font_awesome.svg' target='_blank'>Signin_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-signin-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/c/c5/Signin_font_awesome.svg' target='_blank'>fa-signin-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Signin_font_awesome.svg' target='_blank'>Signin_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-signin.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/c/c5/Signin_font_awesome.svg' target='_blank'>fa-signin.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Signin_font_awesome.svg' target='_blank'>Signin_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-signout-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/db/Signout_font_awesome.svg' target='_blank'>fa-signout-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Signout_font_awesome.svg' target='_blank'>Signout_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-signout-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/db/Signout_font_awesome.svg' target='_blank'>fa-signout-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Signout_font_awesome.svg' target='_blank'>Signout_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-signout.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/db/Signout_font_awesome.svg' target='_blank'>fa-signout.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Signout_font_awesome.svg' target='_blank'>Signout_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/power-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>power-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-power-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/power-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>power-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-power-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/user-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>user-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-user-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/user-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>user-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-user-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `login`  </td> </tr>

</table></center>

### Editor
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/search-black.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>search-black.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-search-black.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/search-white.png" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>search-white.png</a> </td><td> `img/icons-png`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-search-white.png</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-copy-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/0/04/Copy_font_awesome.svg' target='_blank'>fa-copy-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Copy_font_awesome.svg' target='_blank'>Copy_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-copy-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/0/04/Copy_font_awesome.svg' target='_blank'>fa-copy-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Copy_font_awesome.svg' target='_blank'>Copy_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-copy.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/0/04/Copy_font_awesome.svg' target='_blank'>fa-copy.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Copy_font_awesome.svg' target='_blank'>Copy_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-enumeration-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/31/Ol_font_awesome.svg' target='_blank'>fa-enumeration-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Ol_font_awesome.svg' target='_blank'>Ol_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-enumeration-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/31/Ol_font_awesome.svg' target='_blank'>fa-enumeration-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Ol_font_awesome.svg' target='_blank'>Ol_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-enumeration.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/3/31/Ol_font_awesome.svg' target='_blank'>fa-enumeration.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Ol_font_awesome.svg' target='_blank'>Ol_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-font-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/f/f1/Font_Awesome_5_solid_font.svg' target='_blank'>fa-font-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_font.svg' target='_blank'>Font_Awesome_5_solid_font.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-font-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/f/f1/Font_Awesome_5_solid_font.svg' target='_blank'>fa-font-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_font.svg' target='_blank'>Font_Awesome_5_solid_font.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-font.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/f/f1/Font_Awesome_5_solid_font.svg' target='_blank'>fa-font.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_font.svg' target='_blank'>Font_Awesome_5_solid_font.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-list-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/1/1b/List_font_awesome.svg' target='_blank'>fa-list-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:List_font_awesome.svg' target='_blank'>List_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-list-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/1/1b/List_font_awesome.svg' target='_blank'>fa-list-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:List_font_awesome.svg' target='_blank'>List_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-list.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/1/1b/List_font_awesome.svg' target='_blank'>fa-list.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:List_font_awesome.svg' target='_blank'>List_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-paste-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/4/46/Paste_font_awesome.svg' target='_blank'>fa-paste-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Paste_font_awesome.svg' target='_blank'>Paste_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-paste-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/4/46/Paste_font_awesome.svg' target='_blank'>fa-paste-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Paste_font_awesome.svg' target='_blank'>Paste_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-paste.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/4/46/Paste_font_awesome.svg' target='_blank'>fa-paste.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Paste_font_awesome.svg' target='_blank'>Paste_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/search-black.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>search-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-search-black.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/search-white.svg" width="20"> </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>search-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://jquerymobile.com/download/' target='_blank'>JQ-search-white.svg</a> </td><td> <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> </td><td> `editor`  </td> </tr>

</table></center>

### Audio Player
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-backward-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/c/c8/Backward_font_awesome.svg' target='_blank'>fa-audio-backward-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Backward_font_awesome.svg' target='_blank'>Backward_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-backward-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/c/c8/Backward_font_awesome.svg' target='_blank'>fa-audio-backward-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Backward_font_awesome.svg' target='_blank'>Backward_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-backward.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/c/c8/Backward_font_awesome.svg' target='_blank'>fa-audio-backward.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Backward_font_awesome.svg' target='_blank'>Backward_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-eject-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/1/14/Font_Awesome_5_solid_eject.svg' target='_blank'>fa-audio-eject-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_eject.svg' target='_blank'>Font_Awesome_5_solid_eject.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-eject-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/1/14/Font_Awesome_5_solid_eject.svg' target='_blank'>fa-audio-eject-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_eject.svg' target='_blank'>Font_Awesome_5_solid_eject.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-eject.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/1/14/Font_Awesome_5_solid_eject.svg' target='_blank'>fa-audio-eject.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_eject.svg' target='_blank'>Font_Awesome_5_solid_eject.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-forward-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/7/7f/Forward_font_awesome.svg' target='_blank'>fa-audio-forward-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Forward_font_awesome.svg' target='_blank'>Forward_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-forward-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/7/7f/Forward_font_awesome.svg' target='_blank'>fa-audio-forward-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Forward_font_awesome.svg' target='_blank'>Forward_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-forward.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/7/7f/Forward_font_awesome.svg' target='_blank'>fa-audio-forward.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Forward_font_awesome.svg' target='_blank'>Forward_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-pause-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/a/af/Pause_font_awesome.svg' target='_blank'>fa-audio-pause-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Pause_font_awesome.svg' target='_blank'>Pause_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-pause-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/a/af/Pause_font_awesome.svg' target='_blank'>fa-audio-pause-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Pause_font_awesome.svg' target='_blank'>Pause_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-pause.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/a/af/Pause_font_awesome.svg' target='_blank'>fa-audio-pause.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Pause_font_awesome.svg' target='_blank'>Pause_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-play-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/d3/Play_font_awesome.svg' target='_blank'>fa-audio-play-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Play_font_awesome.svg' target='_blank'>Play_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-play-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/d3/Play_font_awesome.svg' target='_blank'>fa-audio-play-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Play_font_awesome.svg' target='_blank'>Play_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-play.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/d/d3/Play_font_awesome.svg' target='_blank'>fa-audio-play.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Play_font_awesome.svg' target='_blank'>Play_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-record-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/a/a0/Circle_font_awesome.svg' target='_blank'>fa-audio-record-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Circle_font_awesome.svg' target='_blank'>Circle_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-record-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/a/a0/Circle_font_awesome.svg' target='_blank'>fa-audio-record-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Circle_font_awesome.svg' target='_blank'>Circle_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-record.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/a/a0/Circle_font_awesome.svg' target='_blank'>fa-audio-record.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Circle_font_awesome.svg' target='_blank'>Circle_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-stop-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/b/b9/Font_Awesome_5_solid_square.svg' target='_blank'>fa-audio-stop-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_square.svg' target='_blank'>Font_Awesome_5_solid_square.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-stop-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/b/b9/Font_Awesome_5_solid_square.svg' target='_blank'>fa-audio-stop-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_square.svg' target='_blank'>Font_Awesome_5_solid_square.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-stop.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/b/b9/Font_Awesome_5_solid_square.svg' target='_blank'>fa-audio-stop.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_square.svg' target='_blank'>Font_Awesome_5_solid_square.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `audio`  </td> </tr>

</table></center>

### Products and Objects
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-book-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/b/b3/Book_font_awesome.svg' target='_blank'>fa-book-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Book_font_awesome.svg' target='_blank'>Book_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `product`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-book-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/b/b3/Book_font_awesome.svg' target='_blank'>fa-book-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Book_font_awesome.svg' target='_blank'>Book_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `product`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-book.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/b/b3/Book_font_awesome.svg' target='_blank'>fa-book.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Book_font_awesome.svg' target='_blank'>Book_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `product`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-picture-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/8/84/Picture_font_awesome.svg' target='_blank'>fa-picture-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Picture_font_awesome.svg' target='_blank'>Picture_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `product`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-picture-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/8/84/Picture_font_awesome.svg' target='_blank'>fa-picture-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Picture_font_awesome.svg' target='_blank'>Picture_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `product`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-picture.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/8/84/Picture_font_awesome.svg' target='_blank'>fa-picture.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Picture_font_awesome.svg' target='_blank'>Picture_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `product`  </td> </tr>

</table></center>

### Filetype
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-file-archive-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/5/5d/Font_Awesome_5_regular_file-archive.svg' target='_blank'>fa-file-archive-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_regular_file-archive.svg' target='_blank'>Font_Awesome_5_regular_file-archive.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `filetype`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-file-archive-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/5/5d/Font_Awesome_5_regular_file-archive.svg' target='_blank'>fa-file-archive-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_regular_file-archive.svg' target='_blank'>Font_Awesome_5_regular_file-archive.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `filetype`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-file-archive.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/5/5d/Font_Awesome_5_regular_file-archive.svg' target='_blank'>fa-file-archive.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Font_Awesome_5_regular_file-archive.svg' target='_blank'>Font_Awesome_5_regular_file-archive.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `filetype`  </td> </tr>

</table></center>

### Vehicle
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> File </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-truck-black.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/1/1c/Truck_font_awesome.svg' target='_blank'>fa-truck-black.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Truck_font_awesome.svg' target='_blank'>Truck_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `vehicle`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-truck-white.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/1/1c/Truck_font_awesome.svg' target='_blank'>fa-truck-white.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Truck_font_awesome.svg' target='_blank'>Truck_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `vehicle`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-truck.svg" width="20"> </td><td> <a href='https://upload.wikimedia.org/wikipedia/commons/1/1c/Truck_font_awesome.svg' target='_blank'>fa-truck.svg</a> </td><td> `img/icons-svg`  </td><td> <a href='https://commons.wikimedia.org/wiki/File:Truck_font_awesome.svg' target='_blank'>Truck_font_awesome.svg</a> </td><td> <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> </td><td> `vehicle`  </td> </tr>

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
* `cc3bysa-recycle.svg` for [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) licensed icons from [Wiki Commons]((https://commons.wikimedia.org/w/index.php?title=Special:Search&limit=500&offset=0&profile=default&search=FontAwesome.com&advancedSearch-current=%7B%7D&ns0=1&ns6=1&ns12=1&ns14=1&ns100=1&ns106=1),
* `cc4by-recycle.svg` for [`CC BY 4.0`]( https://creativecommons.org/licenses/by/4.0/) licensed icons e.g. from an additional source used in the fork of `icons4menu`.

This allows users to identify the license of the file directly from the filename.
