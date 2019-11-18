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
<th> Icon </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/action-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-action-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/action-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-action-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/grid-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-grid-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/grid-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-grid-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/home-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-home-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/home-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-home-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/info-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-info-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/info-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-info-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/shop-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-shop-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/shop-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-shop-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/action-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-action-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/action-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-action-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-folder-open-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Folder_open_alt_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Folder_open_alt_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-folder-open-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Folder_open_alt_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Folder_open_alt_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-folder-open.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Folder_open_alt_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Folder_open_alt_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-hamburger-icon-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Reorder_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Reorder_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-hamburger-icon-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Reorder_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Reorder_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-hamburger-icon.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Reorder_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Reorder_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-print-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Print_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Print_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-print-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Print_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Print_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-print.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Print_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Print_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-settings-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Cog_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Cog_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-settings-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Cog_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Cog_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-settings.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Cog_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Cog_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-trash-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Trash_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Trash_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-trash-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Trash_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Trash_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-trash.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Trash_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Trash_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/grid-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-grid-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/grid-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-grid-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/home-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-home-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/home-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-home-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/info-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-info-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/info-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-info-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/shop-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-shop-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `main`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/shop-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-shop-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `main`  </td> </tr>

</table></center>

### Action and Processes
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/alert-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-alert-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/alert-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-alert-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/forbidden-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-forbidden-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/forbidden-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-forbidden-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/minus-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-minus-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/minus-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-minus-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/plus-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-plus-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/plus-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-plus-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/refresh-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-refresh-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/refresh-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-refresh-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/star-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-star-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/star-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-star-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/tag-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-tag-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/tag-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-tag-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/alert-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-alert-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/alert-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-alert-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-cancel-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Remove_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Remove_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-cancel-red.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Remove_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Remove_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-cancel-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Remove_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Remove_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-cancel.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Remove_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Remove_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-spinner-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Spinner_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Spinner_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-spinner-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Spinner_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Spinner_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-spinner.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Spinner_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Spinner_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-undo-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Undo_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Undo_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-undo-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Undo_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Undo_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-undo.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Undo_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Undo_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/forbidden-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-forbidden-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/forbidden-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-forbidden-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/minus-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-minus-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/minus-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-minus-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/plus-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-plus-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/plus-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-plus-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/refresh-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-refresh-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/refresh-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-refresh-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/star-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-star-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/star-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-star-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/tag-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-tag-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/tag-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-tag-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `action`  </td> </tr>

</table></center>

### Arrow
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-d-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-arrow-d-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-d-l-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-arrow-d-l-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-d-l-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-arrow-d-l-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-d-r-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-arrow-d-r-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-d-r-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-arrow-d-r-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-d-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-arrow-d-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-l-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-arrow-l-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-l-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-arrow-l-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-r-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-arrow-r-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-r-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-arrow-r-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-u-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-arrow-u-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-u-l-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-arrow-u-l-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-u-l-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-arrow-u-l-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-u-r-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-arrow-u-r-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-u-r-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-arrow-u-r-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/arrow-u-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-arrow-u-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-d-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-arrow-d-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-d-l-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-arrow-d-l-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-d-l-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-arrow-d-l-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-d-r-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-arrow-d-r-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-d-r-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-arrow-d-r-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-d-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-arrow-d-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-l-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-arrow-l-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-l-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-arrow-l-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-r-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-arrow-r-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-r-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-arrow-r-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-u-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-arrow-u-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-u-l-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-arrow-u-l-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-u-l-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-arrow-u-l-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-u-r-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-arrow-u-r-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-u-r-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-arrow-u-r-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-u-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-arrow-u-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `arrow`  </td> </tr>

</table></center>

### Media
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/audio-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-audio-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/audio-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-audio-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/video-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-video-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/video-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-video-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/audio-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-audio-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/audio-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-audio-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-chart-pie-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Font_Awesome_5_solid_chart-pie.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_chart-pie.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-chart-pie-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Font_Awesome_5_solid_chart-pie.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_chart-pie.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-chart-pie.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Font_Awesome_5_solid_chart-pie.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_chart-pie.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-line-chart-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Font_Awesome_5_solid_chart-line.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_chart-line.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-line-chart-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Font_Awesome_5_solid_chart-line.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_chart-line.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-line-chart.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Font_Awesome_5_solid_chart-line.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_chart-line.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/video-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-video-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `media`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/video-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-video-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `media`  </td> </tr>

</table></center>

### Other
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/back-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-back-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/back-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-back-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/bars-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-bars-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/bars-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-bars-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/bullets-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-bullets-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/bullets-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-bullets-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/calendar-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-calendar-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/calendar-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-calendar-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/camera-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-camera-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/camera-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-camera-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/check-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-check-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/check-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-check-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/clock-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-clock-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/clock-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-clock-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/cloud-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-cloud-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/cloud-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-cloud-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/comment-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-comment-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/comment-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-comment-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/delete-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-delete-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/delete-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-delete-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/edit-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-edit-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/edit-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-edit-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/eye-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-eye-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/eye-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-eye-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/forward-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-forward-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/forward-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-forward-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/gear-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-gear-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/gear-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-gear-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/lock-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-lock-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/lock-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-lock-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/mail-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-mail-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/mail-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-mail-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/recycle-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-recycle-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/recycle-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-recycle-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/back-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-back-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/back-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-back-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/bars-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-bars-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/bars-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-bars-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/bullets-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-bullets-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/bullets-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-bullets-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/calendar-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-calendar-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/calendar-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-calendar-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/camera-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-camera-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/camera-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-camera-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/check-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-check-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/check-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-check-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/clock-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-clock-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/clock-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-clock-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/cloud-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-cloud-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/cloud-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-cloud-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/comment-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-comment-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/comment-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-comment-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/delete-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-delete-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/delete-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-delete-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/edit-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-edit-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/edit-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-edit-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/eye-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-eye-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/eye-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-eye-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-barcode-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Barcode_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Barcode_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-barcode-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Barcode_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Barcode_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-barcode.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Barcode_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Barcode_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-edit-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Edit_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Edit_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-edit-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Edit_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Edit_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-edit.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Edit_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Edit_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-envelope-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Envelope_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Envelope_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-envelope-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Envelope_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Envelope_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-envelope.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Envelope_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Envelope_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-file-save-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Save_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Save_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-file-save-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Save_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Save_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-file-save.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Save_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Save_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-harddisk-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Font_Awesome_5_solid_hdd.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_hdd.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-harddisk-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Font_Awesome_5_solid_hdd.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_hdd.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-harddisk.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Font_Awesome_5_solid_hdd.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_hdd.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-language-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Language_font_awesome_v5.svg`](https://commons.wikimedia.org/wiki/File:Language_font_awesome_v5.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-language-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Language_font_awesome_v5.svg`](https://commons.wikimedia.org/wiki/File:Language_font_awesome_v5.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-language.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Language_font_awesome_v5.svg`](https://commons.wikimedia.org/wiki/File:Language_font_awesome_v5.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-sort-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Sort_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Sort_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-sort-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Sort_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Sort_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-sort.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Sort_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Sort_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/forward-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-forward-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/forward-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-forward-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/gear-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-gear-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/gear-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-gear-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/lock-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-lock-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/lock-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-lock-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/mail-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-mail-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/mail-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-mail-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/recycle-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-recycle-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/recycle-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-recycle-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `other`  </td> </tr>

</table></center>

### Navigation
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/carat-d-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-carat-d-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/carat-d-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-carat-d-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/carat-l-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-carat-l-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/carat-l-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-carat-l-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/carat-r-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-carat-r-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/carat-r-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-carat-r-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/carat-u-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-carat-u-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/carat-u-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-carat-u-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/location-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-location-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/location-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-location-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/navigation-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-navigation-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/navigation-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-navigation-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-d-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-carat-d-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-d-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-carat-d-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-l-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-carat-l-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-l-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-carat-l-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-r-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-carat-r-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-r-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-carat-r-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-u-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-carat-u-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-u-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-carat-u-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/location-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-location-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/location-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-location-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/navigation-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-navigation-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `navigation`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/navigation-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-navigation-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `navigation`  </td> </tr>

</table></center>

### Medical
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/heart-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-heart-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `medical`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/heart-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-heart-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `medical`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/heart-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-heart-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `medical`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/heart-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-heart-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `medical`  </td> </tr>

</table></center>

### Device
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/phone-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-phone-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `device`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/phone-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-phone-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `device`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-camera-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Camera_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Camera_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `device`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-camera-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Camera_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Camera_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `device`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-camera.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Camera_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Camera_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `device`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-tablet-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Tablet_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Tablet_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `device`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-tablet-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Tablet_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Tablet_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `device`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-tablet.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Tablet_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Tablet_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `device`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-vr-headset-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`File:Font_Awesome_5_brands_simplybuilt.svg`](https://commons.wikimedia.org/wiki/File:File:Font_Awesome_5_brands_simplybuilt.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `device`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-vr-headset-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`File:Font_Awesome_5_brands_simplybuilt.svg`](https://commons.wikimedia.org/wiki/File:File:Font_Awesome_5_brands_simplybuilt.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `device`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-vr-headset.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`File:Font_Awesome_5_brands_simplybuilt.svg`](https://commons.wikimedia.org/wiki/File:File:Font_Awesome_5_brands_simplybuilt.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `device`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/phone-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-phone-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `device`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/phone-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-phone-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `device`  </td> </tr>

</table></center>

### Login
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/power-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-power-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/power-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-power-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/user-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-user-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/user-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-user-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-signin-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Signin_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Signin_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-signin-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Signin_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Signin_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-signin.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Signin_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Signin_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-signout-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Signout_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Signout_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-signout-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Signout_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Signout_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-signout.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Signout_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Signout_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/power-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-power-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/power-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-power-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/user-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-user-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `login`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/user-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-user-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `login`  </td> </tr>

</table></center>

### Editor
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/search-black.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-search-black.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-png/search-white.png" width="20"> </td><td> `img/icons-png`  </td><td> [`JQ-search-white.png`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-copy-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Copy_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Copy_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-copy-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Copy_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Copy_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-copy.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Copy_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Copy_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-enumeration-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Ol_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Ol_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-enumeration-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Ol_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Ol_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-enumeration.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Ol_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Ol_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-font-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Font_Awesome_5_solid_font.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_font.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-font-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Font_Awesome_5_solid_font.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_font.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-font.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Font_Awesome_5_solid_font.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_font.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-list-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`List_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:List_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-list-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`List_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:List_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-list.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`List_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:List_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-paste-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Paste_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Paste_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-paste-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Paste_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Paste_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-paste.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Paste_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Paste_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/search-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-search-black.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `editor`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/search-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`JQ-search-white.svg`](https://jquerymobile.com/download/) </td><td> [`CC0`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) </td><td> `editor`  </td> </tr>

</table></center>

### Audio Player
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-backward-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Backward_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Backward_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-backward-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Backward_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Backward_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-backward.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Backward_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Backward_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-eject-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Font_Awesome_5_solid_eject.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_eject.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-eject-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Font_Awesome_5_solid_eject.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_eject.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-eject.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Font_Awesome_5_solid_eject.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_eject.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-forward-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Forward_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Forward_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-forward-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Forward_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Forward_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-forward.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Forward_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Forward_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-pause-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Pause_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Pause_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-pause-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Pause_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Pause_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-pause.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Pause_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Pause_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-play-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Play_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Play_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-play-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Play_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Play_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-play.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Play_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Play_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-record-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Circle_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Circle_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-record-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Circle_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Circle_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-record.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Circle_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Circle_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-stop-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Font_Awesome_5_solid_square.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_square.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-stop-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Font_Awesome_5_solid_square.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_square.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `audio`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-stop.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Font_Awesome_5_solid_square.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_square.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `audio`  </td> </tr>

</table></center>

### Products and Objects
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-book-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Book_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Book_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `product`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-book-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Book_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Book_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `product`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-book.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Book_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Book_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `product`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-picture-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Picture_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Picture_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `product`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-picture-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Picture_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Picture_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `product`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-picture.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Picture_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Picture_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `product`  </td> </tr>

</table></center>

### Filetype
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-file-archive-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Font_Awesome_5_regular_file-archive.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_regular_file-archive.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `filetype`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-file-archive-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Font_Awesome_5_regular_file-archive.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_regular_file-archive.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `filetype`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-file-archive.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Font_Awesome_5_regular_file-archive.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_regular_file-archive.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `filetype`  </td> </tr>

</table></center>

### Vehicle
<center>
<table border=1 bgcolor="#C0C0C0">
<tr>
<th> Icon </th><th> Folder  </th><th>  Source File </th><th> Licence  </th><th> Group </th>
</tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-truck-black.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Truck_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Truck_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `vehicle`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-truck-white.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Truck_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Truck_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `vehicle`  </td> </tr>
<tr>
<td>  <img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-truck.svg" width="20"> </td><td> `img/icons-svg`  </td><td> [`Truck_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Truck_font_awesome.svg) </td><td> [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) </td><td> `vehicle`  </td> </tr>

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
