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
  <H3>Icons in Path: icons-png</H3>
  <quote>
  <table border='2' style='background-color:#CACACA;margin-left:40px'>
    <tr>
       <td>
         <b>Icon</b>
       </td>
       <td>
         <b>File</b>
       </td>
       <td>
         <b>Folder</b>
       </td>
    </tr>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/action-black.png"></TD>
    <TD><a href="icons-png/action-black.png">action-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/action-white.png"></TD>
    <TD><a href="icons-png/action-white.png">action-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/alert-black.png"></TD>
    <TD><a href="icons-png/alert-black.png">alert-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/alert-white.png"></TD>
    <TD><a href="icons-png/alert-white.png">alert-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-black.png"></TD>
    <TD><a href="icons-png/arrow-d-black.png">arrow-d-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-l-black.png"></TD>
    <TD><a href="icons-png/arrow-d-l-black.png">arrow-d-l-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-l-white.png"></TD>
    <TD><a href="icons-png/arrow-d-l-white.png">arrow-d-l-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-r-black.png"></TD>
    <TD><a href="icons-png/arrow-d-r-black.png">arrow-d-r-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-r-white.png"></TD>
    <TD><a href="icons-png/arrow-d-r-white.png">arrow-d-r-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-white.png"></TD>
    <TD><a href="icons-png/arrow-d-white.png">arrow-d-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-l-black.png"></TD>
    <TD><a href="icons-png/arrow-l-black.png">arrow-l-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-l-white.png"></TD>
    <TD><a href="icons-png/arrow-l-white.png">arrow-l-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-r-black.png"></TD>
    <TD><a href="icons-png/arrow-r-black.png">arrow-r-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-r-white.png"></TD>
    <TD><a href="icons-png/arrow-r-white.png">arrow-r-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-black.png"></TD>
    <TD><a href="icons-png/arrow-u-black.png">arrow-u-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-l-black.png"></TD>
    <TD><a href="icons-png/arrow-u-l-black.png">arrow-u-l-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-l-white.png"></TD>
    <TD><a href="icons-png/arrow-u-l-white.png">arrow-u-l-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-r-black.png"></TD>
    <TD><a href="icons-png/arrow-u-r-black.png">arrow-u-r-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-r-white.png"></TD>
    <TD><a href="icons-png/arrow-u-r-white.png">arrow-u-r-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-white.png"></TD>
    <TD><a href="icons-png/arrow-u-white.png">arrow-u-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/audio-black.png"></TD>
    <TD><a href="icons-png/audio-black.png">audio-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/audio-white.png"></TD>
    <TD><a href="icons-png/audio-white.png">audio-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/bars-black.png"></TD>
    <TD><a href="icons-png/bars-black.png">bars-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/bars-white.png"></TD>
    <TD><a href="icons-png/bars-white.png">bars-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/bullets-black.png"></TD>
    <TD><a href="icons-png/bullets-black.png">bullets-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/bullets-white.png"></TD>
    <TD><a href="icons-png/bullets-white.png">bullets-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/calendar-black.png"></TD>
    <TD><a href="icons-png/calendar-black.png">calendar-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/calendar-white.png"></TD>
    <TD><a href="icons-png/calendar-white.png">calendar-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/camera-black.png"></TD>
    <TD><a href="icons-png/camera-black.png">camera-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/camera-white.png"></TD>
    <TD><a href="icons-png/camera-white.png">camera-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-d-black.png"></TD>
    <TD><a href="icons-png/carat-d-black.png">carat-d-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-d-white.png"></TD>
    <TD><a href="icons-png/carat-d-white.png">carat-d-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-l-black.png"></TD>
    <TD><a href="icons-png/carat-l-black.png">carat-l-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-l-white.png"></TD>
    <TD><a href="icons-png/carat-l-white.png">carat-l-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-r-black.png"></TD>
    <TD><a href="icons-png/carat-r-black.png">carat-r-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-r-white.png"></TD>
    <TD><a href="icons-png/carat-r-white.png">carat-r-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-u-black.png"></TD>
    <TD><a href="icons-png/carat-u-black.png">carat-u-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-u-white.png"></TD>
    <TD><a href="icons-png/carat-u-white.png">carat-u-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/check-black.png"></TD>
    <TD><a href="icons-png/check-black.png">check-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/check-white.png"></TD>
    <TD><a href="icons-png/check-white.png">check-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/clock-black.png"></TD>
    <TD><a href="icons-png/clock-black.png">clock-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/clock-white.png"></TD>
    <TD><a href="icons-png/clock-white.png">clock-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/cloud-black.png"></TD>
    <TD><a href="icons-png/cloud-black.png">cloud-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/cloud-white.png"></TD>
    <TD><a href="icons-png/cloud-white.png">cloud-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/comment-black.png"></TD>
    <TD><a href="icons-png/comment-black.png">comment-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/comment-white.png"></TD>
    <TD><a href="icons-png/comment-white.png">comment-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/delete-black.png"></TD>
    <TD><a href="icons-png/delete-black.png">delete-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/delete-white.png"></TD>
    <TD><a href="icons-png/delete-white.png">delete-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/edit-black.png"></TD>
    <TD><a href="icons-png/edit-black.png">edit-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/edit-white.png"></TD>
    <TD><a href="icons-png/edit-white.png">edit-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/eye-black.png"></TD>
    <TD><a href="icons-png/eye-black.png">eye-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/eye-white.png"></TD>
    <TD><a href="icons-png/eye-white.png">eye-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/forbidden-black.png"></TD>
    <TD><a href="icons-png/forbidden-black.png">forbidden-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/forbidden-white.png"></TD>
    <TD><a href="icons-png/forbidden-white.png">forbidden-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/forward-black.png"></TD>
    <TD><a href="icons-png/forward-black.png">forward-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/forward-white.png"></TD>
    <TD><a href="icons-png/forward-white.png">forward-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/gear-black.png"></TD>
    <TD><a href="icons-png/gear-black.png">gear-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/gear-white.png"></TD>
    <TD><a href="icons-png/gear-white.png">gear-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/grid-black.png"></TD>
    <TD><a href="icons-png/grid-black.png">grid-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/grid-white.png"></TD>
    <TD><a href="icons-png/grid-white.png">grid-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/heart-black.png"></TD>
    <TD><a href="icons-png/heart-black.png">heart-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/heart-white.png"></TD>
    <TD><a href="icons-png/heart-white.png">heart-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/home-black.png"></TD>
    <TD><a href="icons-png/home-black.png">home-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/home-white.png"></TD>
    <TD><a href="icons-png/home-white.png">home-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/info-black.png"></TD>
    <TD><a href="icons-png/info-black.png">info-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/info-white.png"></TD>
    <TD><a href="icons-png/info-white.png">info-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/location-black.png"></TD>
    <TD><a href="icons-png/location-black.png">location-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/location-white.png"></TD>
    <TD><a href="icons-png/location-white.png">location-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/lock-black.png"></TD>
    <TD><a href="icons-png/lock-black.png">lock-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/lock-white.png"></TD>
    <TD><a href="icons-png/lock-white.png">lock-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/mail-black.png"></TD>
    <TD><a href="icons-png/mail-black.png">mail-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/mail-white.png"></TD>
    <TD><a href="icons-png/mail-white.png">mail-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/minus-black.png"></TD>
    <TD><a href="icons-png/minus-black.png">minus-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/minus-white.png"></TD>
    <TD><a href="icons-png/minus-white.png">minus-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/nav-back-black.png"></TD>
    <TD><a href="icons-png/nav-back-black.png">nav-back-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/nav-back-white.png"></TD>
    <TD><a href="icons-png/nav-back-white.png">nav-back-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/navigation-black.png"></TD>
    <TD><a href="icons-png/navigation-black.png">navigation-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/navigation-white.png"></TD>
    <TD><a href="icons-png/navigation-white.png">navigation-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/phone-black.png"></TD>
    <TD><a href="icons-png/phone-black.png">phone-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/phone-white.png"></TD>
    <TD><a href="icons-png/phone-white.png">phone-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/plus-black.png"></TD>
    <TD><a href="icons-png/plus-black.png">plus-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/plus-white.png"></TD>
    <TD><a href="icons-png/plus-white.png">plus-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/power-black.png"></TD>
    <TD><a href="icons-png/power-black.png">power-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/power-white.png"></TD>
    <TD><a href="icons-png/power-white.png">power-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/recycle-black.png"></TD>
    <TD><a href="icons-png/recycle-black.png">recycle-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/recycle-white.png"></TD>
    <TD><a href="icons-png/recycle-white.png">recycle-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/refresh-black.png"></TD>
    <TD><a href="icons-png/refresh-black.png">refresh-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/refresh-white.png"></TD>
    <TD><a href="icons-png/refresh-white.png">refresh-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/search-black.png"></TD>
    <TD><a href="icons-png/search-black.png">search-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/search-white.png"></TD>
    <TD><a href="icons-png/search-white.png">search-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/shop-black.png"></TD>
    <TD><a href="icons-png/shop-black.png">shop-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/shop-white.png"></TD>
    <TD><a href="icons-png/shop-white.png">shop-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/star-black.png"></TD>
    <TD><a href="icons-png/star-black.png">star-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/star-white.png"></TD>
    <TD><a href="icons-png/star-white.png">star-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/tag-black.png"></TD>
    <TD><a href="icons-png/tag-black.png">tag-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/tag-white.png"></TD>
    <TD><a href="icons-png/tag-white.png">tag-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/user-black.png"></TD>
    <TD><a href="icons-png/user-black.png">user-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/user-white.png"></TD>
    <TD><a href="icons-png/user-white.png">user-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/video-black.png"></TD>
    <TD><a href="icons-png/video-black.png">video-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/video-white.png"></TD>
    <TD><a href="icons-png/video-white.png">video-white.png</a></TD>
    <TD>icons-png</TD>
  </TABLE>
  <HR>
  <H3>Icons in Path: icons-svg</H3>
  <quote>
  <table border='2' style='background-color:#CACACA;margin-left:40px'>
    <tr>
       <td>
         <b>Icon</b>
       </td>
       <td>
         <b>File</b>
       </td>
       <td>
         <b>Folder</b>
       </td>
    </tr>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/action-black.svg"></TD>
    <TD><a href="icons-svg/action-black.svg">action-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/action-white.svg"></TD>
    <TD><a href="icons-svg/action-white.svg">action-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/action.svg"></TD>
    <TD><a href="icons-svg/action.svg">action.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/alert-black.svg"></TD>
    <TD><a href="icons-svg/alert-black.svg">alert-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/alert-white.svg"></TD>
    <TD><a href="icons-svg/alert-white.svg">alert-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/alert.svg"></TD>
    <TD><a href="icons-svg/alert.svg">alert.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-black.svg"></TD>
    <TD><a href="icons-svg/arrow-d-black.svg">arrow-d-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-l-black.svg"></TD>
    <TD><a href="icons-svg/arrow-d-l-black.svg">arrow-d-l-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-l-white.svg"></TD>
    <TD><a href="icons-svg/arrow-d-l-white.svg">arrow-d-l-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-r-black.svg"></TD>
    <TD><a href="icons-svg/arrow-d-r-black.svg">arrow-d-r-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-r-white.svg"></TD>
    <TD><a href="icons-svg/arrow-d-r-white.svg">arrow-d-r-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-white.svg"></TD>
    <TD><a href="icons-svg/arrow-d-white.svg">arrow-d-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d.svg"></TD>
    <TD><a href="icons-svg/arrow-d.svg">arrow-d.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-l-black.svg"></TD>
    <TD><a href="icons-svg/arrow-l-black.svg">arrow-l-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-l-white.svg"></TD>
    <TD><a href="icons-svg/arrow-l-white.svg">arrow-l-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-l.svg"></TD>
    <TD><a href="icons-svg/arrow-l.svg">arrow-l.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-r-black.svg"></TD>
    <TD><a href="icons-svg/arrow-r-black.svg">arrow-r-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-r-white.svg"></TD>
    <TD><a href="icons-svg/arrow-r-white.svg">arrow-r-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-r.svg"></TD>
    <TD><a href="icons-svg/arrow-r.svg">arrow-r.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-black.svg"></TD>
    <TD><a href="icons-svg/arrow-u-black.svg">arrow-u-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-l-black.svg"></TD>
    <TD><a href="icons-svg/arrow-u-l-black.svg">arrow-u-l-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-l-white.svg"></TD>
    <TD><a href="icons-svg/arrow-u-l-white.svg">arrow-u-l-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-l.svg"></TD>
    <TD><a href="icons-svg/arrow-u-l.svg">arrow-u-l.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-r-black.svg"></TD>
    <TD><a href="icons-svg/arrow-u-r-black.svg">arrow-u-r-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-r-white.svg"></TD>
    <TD><a href="icons-svg/arrow-u-r-white.svg">arrow-u-r-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-r.svg"></TD>
    <TD><a href="icons-svg/arrow-u-r.svg">arrow-u-r.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-white.svg"></TD>
    <TD><a href="icons-svg/arrow-u-white.svg">arrow-u-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u.svg"></TD>
    <TD><a href="icons-svg/arrow-u.svg">arrow-u.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/audio-black.svg"></TD>
    <TD><a href="icons-svg/audio-black.svg">audio-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/audio-white.svg"></TD>
    <TD><a href="icons-svg/audio-white.svg">audio-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/audio.svg"></TD>
    <TD><a href="icons-svg/audio.svg">audio.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bars-black.svg"></TD>
    <TD><a href="icons-svg/bars-black.svg">bars-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bars-white.svg"></TD>
    <TD><a href="icons-svg/bars-white.svg">bars-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bars.svg"></TD>
    <TD><a href="icons-svg/bars.svg">bars.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bullets-black.svg"></TD>
    <TD><a href="icons-svg/bullets-black.svg">bullets-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bullets-white.svg"></TD>
    <TD><a href="icons-svg/bullets-white.svg">bullets-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bullets.svg"></TD>
    <TD><a href="icons-svg/bullets.svg">bullets.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/calendar-black.svg"></TD>
    <TD><a href="icons-svg/calendar-black.svg">calendar-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/calendar-white.svg"></TD>
    <TD><a href="icons-svg/calendar-white.svg">calendar-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/calendar.svg"></TD>
    <TD><a href="icons-svg/calendar.svg">calendar.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/camera-black.svg"></TD>
    <TD><a href="icons-svg/camera-black.svg">camera-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/camera-white.svg"></TD>
    <TD><a href="icons-svg/camera-white.svg">camera-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/camera.svg"></TD>
    <TD><a href="icons-svg/camera.svg">camera.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-d-black.svg"></TD>
    <TD><a href="icons-svg/carat-d-black.svg">carat-d-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-d-white.svg"></TD>
    <TD><a href="icons-svg/carat-d-white.svg">carat-d-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-d.svg"></TD>
    <TD><a href="icons-svg/carat-d.svg">carat-d.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-l-black.svg"></TD>
    <TD><a href="icons-svg/carat-l-black.svg">carat-l-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-l-white.svg"></TD>
    <TD><a href="icons-svg/carat-l-white.svg">carat-l-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-l.svg"></TD>
    <TD><a href="icons-svg/carat-l.svg">carat-l.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-r-black.svg"></TD>
    <TD><a href="icons-svg/carat-r-black.svg">carat-r-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-r-white.svg"></TD>
    <TD><a href="icons-svg/carat-r-white.svg">carat-r-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-r.svg"></TD>
    <TD><a href="icons-svg/carat-r.svg">carat-r.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-u-black.svg"></TD>
    <TD><a href="icons-svg/carat-u-black.svg">carat-u-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-u-white.svg"></TD>
    <TD><a href="icons-svg/carat-u-white.svg">carat-u-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-u.svg"></TD>
    <TD><a href="icons-svg/carat-u.svg">carat-u.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/check-black.svg"></TD>
    <TD><a href="icons-svg/check-black.svg">check-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/check-white.svg"></TD>
    <TD><a href="icons-svg/check-white.svg">check-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/check.svg"></TD>
    <TD><a href="icons-svg/check.svg">check.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/clock-black.svg"></TD>
    <TD><a href="icons-svg/clock-black.svg">clock-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/clock-white.svg"></TD>
    <TD><a href="icons-svg/clock-white.svg">clock-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/clock.svg"></TD>
    <TD><a href="icons-svg/clock.svg">clock.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/cloud-black.svg"></TD>
    <TD><a href="icons-svg/cloud-black.svg">cloud-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/cloud-white.svg"></TD>
    <TD><a href="icons-svg/cloud-white.svg">cloud-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/cloud.svg"></TD>
    <TD><a href="icons-svg/cloud.svg">cloud.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/comment-black.svg"></TD>
    <TD><a href="icons-svg/comment-black.svg">comment-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/comment-white.svg"></TD>
    <TD><a href="icons-svg/comment-white.svg">comment-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/comment.svg"></TD>
    <TD><a href="icons-svg/comment.svg">comment.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/delete-black.svg"></TD>
    <TD><a href="icons-svg/delete-black.svg">delete-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/delete-white.svg"></TD>
    <TD><a href="icons-svg/delete-white.svg">delete-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/delete.svg"></TD>
    <TD><a href="icons-svg/delete.svg">delete.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/edit-black.svg"></TD>
    <TD><a href="icons-svg/edit-black.svg">edit-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/edit-white.svg"></TD>
    <TD><a href="icons-svg/edit-white.svg">edit-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/edit.svg"></TD>
    <TD><a href="icons-svg/edit.svg">edit.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/eye-black.svg"></TD>
    <TD><a href="icons-svg/eye-black.svg">eye-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/eye-white.svg"></TD>
    <TD><a href="icons-svg/eye-white.svg">eye-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/eye.svg"></TD>
    <TD><a href="icons-svg/eye.svg">eye.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-backward-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-backward-black.svg">fa-audio-backward-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-backward-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-backward-white.svg">fa-audio-backward-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-backward.svg"></TD>
    <TD><a href="icons-svg/fa-audio-backward.svg">fa-audio-backward.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-eject-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-eject-black.svg">fa-audio-eject-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-eject-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-eject-white.svg">fa-audio-eject-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-eject.svg"></TD>
    <TD><a href="icons-svg/fa-audio-eject.svg">fa-audio-eject.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-forward-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-forward-black.svg">fa-audio-forward-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-forward-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-forward-white.svg">fa-audio-forward-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-forward.svg"></TD>
    <TD><a href="icons-svg/fa-audio-forward.svg">fa-audio-forward.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-pause-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-pause-black.svg">fa-audio-pause-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-pause-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-pause-white.svg">fa-audio-pause-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-pause.svg"></TD>
    <TD><a href="icons-svg/fa-audio-pause.svg">fa-audio-pause.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-play-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-play-black.svg">fa-audio-play-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-play-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-play-white.svg">fa-audio-play-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-play.svg"></TD>
    <TD><a href="icons-svg/fa-audio-play.svg">fa-audio-play.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-record-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-record-black.svg">fa-audio-record-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-record-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-record-white.svg">fa-audio-record-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-record.svg"></TD>
    <TD><a href="icons-svg/fa-audio-record.svg">fa-audio-record.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-stop-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-stop-black.svg">fa-audio-stop-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-stop-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-stop-white.svg">fa-audio-stop-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-stop.svg"></TD>
    <TD><a href="icons-svg/fa-audio-stop.svg">fa-audio-stop.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-barcode-black.svg"></TD>
    <TD><a href="icons-svg/fa-barcode-black.svg">fa-barcode-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-barcode-white.svg"></TD>
    <TD><a href="icons-svg/fa-barcode-white.svg">fa-barcode-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-barcode.svg"></TD>
    <TD><a href="icons-svg/fa-barcode.svg">fa-barcode.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-book-black.svg"></TD>
    <TD><a href="icons-svg/fa-book-black.svg">fa-book-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-book-white.svg"></TD>
    <TD><a href="icons-svg/fa-book-white.svg">fa-book-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-book.svg"></TD>
    <TD><a href="icons-svg/fa-book.svg">fa-book.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-camera-black.svg"></TD>
    <TD><a href="icons-svg/fa-camera-black.svg">fa-camera-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-camera-white.svg"></TD>
    <TD><a href="icons-svg/fa-camera-white.svg">fa-camera-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-camera.svg"></TD>
    <TD><a href="icons-svg/fa-camera.svg">fa-camera.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-cancel-black.svg"></TD>
    <TD><a href="icons-svg/fa-cancel-black.svg">fa-cancel-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-cancel-red.svg"></TD>
    <TD><a href="icons-svg/fa-cancel-red.svg">fa-cancel-red.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-cancel-white.svg"></TD>
    <TD><a href="icons-svg/fa-cancel-white.svg">fa-cancel-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-cancel.svg"></TD>
    <TD><a href="icons-svg/fa-cancel.svg">fa-cancel.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-chart-pie-black.svg"></TD>
    <TD><a href="icons-svg/fa-chart-pie-black.svg">fa-chart-pie-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-chart-pie-white.svg"></TD>
    <TD><a href="icons-svg/fa-chart-pie-white.svg">fa-chart-pie-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-chart-pie.svg"></TD>
    <TD><a href="icons-svg/fa-chart-pie.svg">fa-chart-pie.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-copy-black.svg"></TD>
    <TD><a href="icons-svg/fa-copy-black.svg">fa-copy-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-copy-white.svg"></TD>
    <TD><a href="icons-svg/fa-copy-white.svg">fa-copy-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-copy.svg"></TD>
    <TD><a href="icons-svg/fa-copy.svg">fa-copy.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-edit-black.svg"></TD>
    <TD><a href="icons-svg/fa-edit-black.svg">fa-edit-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-edit-white.svg"></TD>
    <TD><a href="icons-svg/fa-edit-white.svg">fa-edit-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-edit.svg"></TD>
    <TD><a href="icons-svg/fa-edit.svg">fa-edit.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-enumeration-black.svg"></TD>
    <TD><a href="icons-svg/fa-enumeration-black.svg">fa-enumeration-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-enumeration-white.svg"></TD>
    <TD><a href="icons-svg/fa-enumeration-white.svg">fa-enumeration-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-enumeration.svg"></TD>
    <TD><a href="icons-svg/fa-enumeration.svg">fa-enumeration.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-envelope-black.svg"></TD>
    <TD><a href="icons-svg/fa-envelope-black.svg">fa-envelope-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-envelope-white.svg"></TD>
    <TD><a href="icons-svg/fa-envelope-white.svg">fa-envelope-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-envelope.svg"></TD>
    <TD><a href="icons-svg/fa-envelope.svg">fa-envelope.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-archive-black.svg"></TD>
    <TD><a href="icons-svg/fa-file-archive-black.svg">fa-file-archive-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-archive-white.svg"></TD>
    <TD><a href="icons-svg/fa-file-archive-white.svg">fa-file-archive-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-archive.svg"></TD>
    <TD><a href="icons-svg/fa-file-archive.svg">fa-file-archive.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-save-black.svg"></TD>
    <TD><a href="icons-svg/fa-file-save-black.svg">fa-file-save-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-save-white.svg"></TD>
    <TD><a href="icons-svg/fa-file-save-white.svg">fa-file-save-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-save.svg"></TD>
    <TD><a href="icons-svg/fa-file-save.svg">fa-file-save.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-folder-open-black.svg"></TD>
    <TD><a href="icons-svg/fa-folder-open-black.svg">fa-folder-open-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-folder-open-white.svg"></TD>
    <TD><a href="icons-svg/fa-folder-open-white.svg">fa-folder-open-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-folder-open.svg"></TD>
    <TD><a href="icons-svg/fa-folder-open.svg">fa-folder-open.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-font-black.svg"></TD>
    <TD><a href="icons-svg/fa-font-black.svg">fa-font-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-font-white.svg"></TD>
    <TD><a href="icons-svg/fa-font-white.svg">fa-font-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-font.svg"></TD>
    <TD><a href="icons-svg/fa-font.svg">fa-font.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-globe-black.svg"></TD>
    <TD><a href="icons-svg/fa-globe-black.svg">fa-globe-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-globe-white.svg"></TD>
    <TD><a href="icons-svg/fa-globe-white.svg">fa-globe-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-globe.svg"></TD>
    <TD><a href="icons-svg/fa-globe.svg">fa-globe.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-hamburger-icon-black.svg"></TD>
    <TD><a href="icons-svg/fa-hamburger-icon-black.svg">fa-hamburger-icon-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-hamburger-icon-white.svg"></TD>
    <TD><a href="icons-svg/fa-hamburger-icon-white.svg">fa-hamburger-icon-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-hamburger-icon.svg"></TD>
    <TD><a href="icons-svg/fa-hamburger-icon.svg">fa-hamburger-icon.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-harddisk-black.svg"></TD>
    <TD><a href="icons-svg/fa-harddisk-black.svg">fa-harddisk-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-harddisk-white.svg"></TD>
    <TD><a href="icons-svg/fa-harddisk-white.svg">fa-harddisk-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-harddisk.svg"></TD>
    <TD><a href="icons-svg/fa-harddisk.svg">fa-harddisk.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-key-black.svg"></TD>
    <TD><a href="icons-svg/fa-key-black.svg">fa-key-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-key-white.svg"></TD>
    <TD><a href="icons-svg/fa-key-white.svg">fa-key-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-key.svg"></TD>
    <TD><a href="icons-svg/fa-key.svg">fa-key.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-language-black.svg"></TD>
    <TD><a href="icons-svg/fa-language-black.svg">fa-language-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-language-white.svg"></TD>
    <TD><a href="icons-svg/fa-language-white.svg">fa-language-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-language.svg"></TD>
    <TD><a href="icons-svg/fa-language.svg">fa-language.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-line-chart-black.svg"></TD>
    <TD><a href="icons-svg/fa-line-chart-black.svg">fa-line-chart-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-line-chart-white.svg"></TD>
    <TD><a href="icons-svg/fa-line-chart-white.svg">fa-line-chart-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-line-chart.svg"></TD>
    <TD><a href="icons-svg/fa-line-chart.svg">fa-line-chart.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-list-black.svg"></TD>
    <TD><a href="icons-svg/fa-list-black.svg">fa-list-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-list-white.svg"></TD>
    <TD><a href="icons-svg/fa-list-white.svg">fa-list-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-list.svg"></TD>
    <TD><a href="icons-svg/fa-list.svg">fa-list.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-minus-square-black.svg"></TD>
    <TD><a href="icons-svg/fa-minus-square-black.svg">fa-minus-square-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-minus-square-white.svg"></TD>
    <TD><a href="icons-svg/fa-minus-square-white.svg">fa-minus-square-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-minus-square.svg"></TD>
    <TD><a href="icons-svg/fa-minus-square.svg">fa-minus-square.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-paste-black.svg"></TD>
    <TD><a href="icons-svg/fa-paste-black.svg">fa-paste-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-paste-white.svg"></TD>
    <TD><a href="icons-svg/fa-paste-white.svg">fa-paste-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-paste.svg"></TD>
    <TD><a href="icons-svg/fa-paste.svg">fa-paste.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-picture-black.svg"></TD>
    <TD><a href="icons-svg/fa-picture-black.svg">fa-picture-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-picture-white.svg"></TD>
    <TD><a href="icons-svg/fa-picture-white.svg">fa-picture-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-picture.svg"></TD>
    <TD><a href="icons-svg/fa-picture.svg">fa-picture.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-plus-square-black.svg"></TD>
    <TD><a href="icons-svg/fa-plus-square-black.svg">fa-plus-square-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-plus-square-white.svg"></TD>
    <TD><a href="icons-svg/fa-plus-square-white.svg">fa-plus-square-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-plus-square.svg"></TD>
    <TD><a href="icons-svg/fa-plus-square.svg">fa-plus-square.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-print-black.svg"></TD>
    <TD><a href="icons-svg/fa-print-black.svg">fa-print-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-print-white.svg"></TD>
    <TD><a href="icons-svg/fa-print-white.svg">fa-print-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-print.svg"></TD>
    <TD><a href="icons-svg/fa-print.svg">fa-print.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-qrcode-black.svg"></TD>
    <TD><a href="icons-svg/fa-qrcode-black.svg">fa-qrcode-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-qrcode-white.svg"></TD>
    <TD><a href="icons-svg/fa-qrcode-white.svg">fa-qrcode-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-qrcode.svg"></TD>
    <TD><a href="icons-svg/fa-qrcode.svg">fa-qrcode.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-settings-black.svg"></TD>
    <TD><a href="icons-svg/fa-settings-black.svg">fa-settings-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-settings-white.svg"></TD>
    <TD><a href="icons-svg/fa-settings-white.svg">fa-settings-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-settings.svg"></TD>
    <TD><a href="icons-svg/fa-settings.svg">fa-settings.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signin-black.svg"></TD>
    <TD><a href="icons-svg/fa-signin-black.svg">fa-signin-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signin-white.svg"></TD>
    <TD><a href="icons-svg/fa-signin-white.svg">fa-signin-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signin.svg"></TD>
    <TD><a href="icons-svg/fa-signin.svg">fa-signin.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signout-black.svg"></TD>
    <TD><a href="icons-svg/fa-signout-black.svg">fa-signout-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signout-white.svg"></TD>
    <TD><a href="icons-svg/fa-signout-white.svg">fa-signout-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signout.svg"></TD>
    <TD><a href="icons-svg/fa-signout.svg">fa-signout.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-sort-black.svg"></TD>
    <TD><a href="icons-svg/fa-sort-black.svg">fa-sort-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-sort-white.svg"></TD>
    <TD><a href="icons-svg/fa-sort-white.svg">fa-sort-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-sort.svg"></TD>
    <TD><a href="icons-svg/fa-sort.svg">fa-sort.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-spinner-black.svg"></TD>
    <TD><a href="icons-svg/fa-spinner-black.svg">fa-spinner-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-spinner-white.svg"></TD>
    <TD><a href="icons-svg/fa-spinner-white.svg">fa-spinner-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-spinner.svg"></TD>
    <TD><a href="icons-svg/fa-spinner.svg">fa-spinner.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-tablet-black.svg"></TD>
    <TD><a href="icons-svg/fa-tablet-black.svg">fa-tablet-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-tablet-white.svg"></TD>
    <TD><a href="icons-svg/fa-tablet-white.svg">fa-tablet-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-tablet.svg"></TD>
    <TD><a href="icons-svg/fa-tablet.svg">fa-tablet.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-trash-black.svg"></TD>
    <TD><a href="icons-svg/fa-trash-black.svg">fa-trash-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-trash-white.svg"></TD>
    <TD><a href="icons-svg/fa-trash-white.svg">fa-trash-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-trash.svg"></TD>
    <TD><a href="icons-svg/fa-trash.svg">fa-trash.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-truck-black.svg"></TD>
    <TD><a href="icons-svg/fa-truck-black.svg">fa-truck-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-truck-white.svg"></TD>
    <TD><a href="icons-svg/fa-truck-white.svg">fa-truck-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-truck.svg"></TD>
    <TD><a href="icons-svg/fa-truck.svg">fa-truck.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-undo-black.svg"></TD>
    <TD><a href="icons-svg/fa-undo-black.svg">fa-undo-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-undo-white.svg"></TD>
    <TD><a href="icons-svg/fa-undo-white.svg">fa-undo-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-undo.svg"></TD>
    <TD><a href="icons-svg/fa-undo.svg">fa-undo.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-vr-headset-black.svg"></TD>
    <TD><a href="icons-svg/fa-vr-headset-black.svg">fa-vr-headset-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-vr-headset-white.svg"></TD>
    <TD><a href="icons-svg/fa-vr-headset-white.svg">fa-vr-headset-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-vr-headset.svg"></TD>
    <TD><a href="icons-svg/fa-vr-headset.svg">fa-vr-headset.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forbidden-black.svg"></TD>
    <TD><a href="icons-svg/forbidden-black.svg">forbidden-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forbidden-white.svg"></TD>
    <TD><a href="icons-svg/forbidden-white.svg">forbidden-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forbidden.svg"></TD>
    <TD><a href="icons-svg/forbidden.svg">forbidden.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forward-black.svg"></TD>
    <TD><a href="icons-svg/forward-black.svg">forward-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forward-white.svg"></TD>
    <TD><a href="icons-svg/forward-white.svg">forward-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forward.svg"></TD>
    <TD><a href="icons-svg/forward.svg">forward.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/gear-black.svg"></TD>
    <TD><a href="icons-svg/gear-black.svg">gear-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/gear-white.svg"></TD>
    <TD><a href="icons-svg/gear-white.svg">gear-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/gear.svg"></TD>
    <TD><a href="icons-svg/gear.svg">gear.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/grid-black.svg"></TD>
    <TD><a href="icons-svg/grid-black.svg">grid-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/grid-white.svg"></TD>
    <TD><a href="icons-svg/grid-white.svg">grid-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/grid.svg"></TD>
    <TD><a href="icons-svg/grid.svg">grid.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/heart-black.svg"></TD>
    <TD><a href="icons-svg/heart-black.svg">heart-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/heart-white.svg"></TD>
    <TD><a href="icons-svg/heart-white.svg">heart-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/heart.svg"></TD>
    <TD><a href="icons-svg/heart.svg">heart.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/home-black.svg"></TD>
    <TD><a href="icons-svg/home-black.svg">home-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/home-white.svg"></TD>
    <TD><a href="icons-svg/home-white.svg">home-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/home.svg"></TD>
    <TD><a href="icons-svg/home.svg">home.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-dd-black.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-dd-black.svg">i4m-carat-dd-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-dd-white.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-dd-white.svg">i4m-carat-dd-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-dd.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-dd.svg">i4m-carat-dd.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-ll-black.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-ll-black.svg">i4m-carat-ll-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-ll-white.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-ll-white.svg">i4m-carat-ll-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-ll.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-ll.svg">i4m-carat-ll.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-rr-black.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-rr-black.svg">i4m-carat-rr-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-rr-white.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-rr-white.svg">i4m-carat-rr-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-rr.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-rr.svg">i4m-carat-rr.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-uu-black.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-uu-black.svg">i4m-carat-uu-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-uu-white.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-uu-white.svg">i4m-carat-uu-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-uu.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-uu.svg">i4m-carat-uu.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal-black.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal-black.svg">i4m-wiki2reveal-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal-frame-black.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal-frame-black.svg">i4m-wiki2reveal-frame-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal-frame-white.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal-frame-white.svg">i4m-wiki2reveal-frame-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal-frame.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal-frame.svg">i4m-wiki2reveal-frame.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal-white.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal-white.svg">i4m-wiki2reveal-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal.svg">i4m-wiki2reveal.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/info-black.svg"></TD>
    <TD><a href="icons-svg/info-black.svg">info-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/info-white.svg"></TD>
    <TD><a href="icons-svg/info-white.svg">info-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/info.svg"></TD>
    <TD><a href="icons-svg/info.svg">info.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/location-black.svg"></TD>
    <TD><a href="icons-svg/location-black.svg">location-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/location-white.svg"></TD>
    <TD><a href="icons-svg/location-white.svg">location-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/location.svg"></TD>
    <TD><a href="icons-svg/location.svg">location.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/lock-black.svg"></TD>
    <TD><a href="icons-svg/lock-black.svg">lock-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/lock-white.svg"></TD>
    <TD><a href="icons-svg/lock-white.svg">lock-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/lock.svg"></TD>
    <TD><a href="icons-svg/lock.svg">lock.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/mail-black.svg"></TD>
    <TD><a href="icons-svg/mail-black.svg">mail-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/mail-white.svg"></TD>
    <TD><a href="icons-svg/mail-white.svg">mail-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/mail.svg"></TD>
    <TD><a href="icons-svg/mail.svg">mail.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/minus-black.svg"></TD>
    <TD><a href="icons-svg/minus-black.svg">minus-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/minus-white.svg"></TD>
    <TD><a href="icons-svg/minus-white.svg">minus-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/minus.svg"></TD>
    <TD><a href="icons-svg/minus.svg">minus.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/nav-back-black.svg"></TD>
    <TD><a href="icons-svg/nav-back-black.svg">nav-back-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/nav-back-white.svg"></TD>
    <TD><a href="icons-svg/nav-back-white.svg">nav-back-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/nav-back.svg"></TD>
    <TD><a href="icons-svg/nav-back.svg">nav-back.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/navigation-black.svg"></TD>
    <TD><a href="icons-svg/navigation-black.svg">navigation-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/navigation-white.svg"></TD>
    <TD><a href="icons-svg/navigation-white.svg">navigation-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/navigation.svg"></TD>
    <TD><a href="icons-svg/navigation.svg">navigation.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/phone-black.svg"></TD>
    <TD><a href="icons-svg/phone-black.svg">phone-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/phone-white.svg"></TD>
    <TD><a href="icons-svg/phone-white.svg">phone-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/phone.svg"></TD>
    <TD><a href="icons-svg/phone.svg">phone.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/plus-black.svg"></TD>
    <TD><a href="icons-svg/plus-black.svg">plus-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/plus-white.svg"></TD>
    <TD><a href="icons-svg/plus-white.svg">plus-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/plus.svg"></TD>
    <TD><a href="icons-svg/plus.svg">plus.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/power-black.svg"></TD>
    <TD><a href="icons-svg/power-black.svg">power-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/power-white.svg"></TD>
    <TD><a href="icons-svg/power-white.svg">power-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/power.svg"></TD>
    <TD><a href="icons-svg/power.svg">power.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/recycle-black.svg"></TD>
    <TD><a href="icons-svg/recycle-black.svg">recycle-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/recycle-white.svg"></TD>
    <TD><a href="icons-svg/recycle-white.svg">recycle-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/recycle.svg"></TD>
    <TD><a href="icons-svg/recycle.svg">recycle.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/refresh-black.svg"></TD>
    <TD><a href="icons-svg/refresh-black.svg">refresh-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/refresh-white.svg"></TD>
    <TD><a href="icons-svg/refresh-white.svg">refresh-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/refresh.svg"></TD>
    <TD><a href="icons-svg/refresh.svg">refresh.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/search-black.svg"></TD>
    <TD><a href="icons-svg/search-black.svg">search-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/search-white.svg"></TD>
    <TD><a href="icons-svg/search-white.svg">search-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/search.svg"></TD>
    <TD><a href="icons-svg/search.svg">search.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/shop-black.svg"></TD>
    <TD><a href="icons-svg/shop-black.svg">shop-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/shop-white.svg"></TD>
    <TD><a href="icons-svg/shop-white.svg">shop-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/shop.svg"></TD>
    <TD><a href="icons-svg/shop.svg">shop.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/star-black.svg"></TD>
    <TD><a href="icons-svg/star-black.svg">star-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/star-white.svg"></TD>
    <TD><a href="icons-svg/star-white.svg">star-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/star.svg"></TD>
    <TD><a href="icons-svg/star.svg">star.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/tag-black.svg"></TD>
    <TD><a href="icons-svg/tag-black.svg">tag-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/tag-white.svg"></TD>
    <TD><a href="icons-svg/tag-white.svg">tag-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/tag.svg"></TD>
    <TD><a href="icons-svg/tag.svg">tag.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/user-black.svg"></TD>
    <TD><a href="icons-svg/user-black.svg">user-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/user-white.svg"></TD>
    <TD><a href="icons-svg/user-white.svg">user-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/user.svg"></TD>
    <TD><a href="icons-svg/user.svg">user.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/video-black.svg"></TD>
    <TD><a href="icons-svg/video-black.svg">video-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/video-white.svg"></TD>
    <TD><a href="icons-svg/video-white.svg">video-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/video.svg"></TD>
    <TD><a href="icons-svg/video.svg">video.svg</a></TD>
    <TD>icons-svg</TD>
  </TABLE>
  <HR>
  <H3>Icons in Path: icons-png</H3>
  <quote>
  <table border='2' style='background-color:#CACACA;margin-left:40px'>
    <tr>
       <td>
         <b>Icon</b>
       </td>
       <td>
         <b>File</b>
       </td>
       <td>
         <b>Folder</b>
       </td>
    </tr>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/action-black.png"></TD>
    <TD><a href="icons-png/action-black.png">action-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/action-white.png"></TD>
    <TD><a href="icons-png/action-white.png">action-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/alert-black.png"></TD>
    <TD><a href="icons-png/alert-black.png">alert-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/alert-white.png"></TD>
    <TD><a href="icons-png/alert-white.png">alert-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-black.png"></TD>
    <TD><a href="icons-png/arrow-d-black.png">arrow-d-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-l-black.png"></TD>
    <TD><a href="icons-png/arrow-d-l-black.png">arrow-d-l-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-l-white.png"></TD>
    <TD><a href="icons-png/arrow-d-l-white.png">arrow-d-l-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-r-black.png"></TD>
    <TD><a href="icons-png/arrow-d-r-black.png">arrow-d-r-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-r-white.png"></TD>
    <TD><a href="icons-png/arrow-d-r-white.png">arrow-d-r-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-white.png"></TD>
    <TD><a href="icons-png/arrow-d-white.png">arrow-d-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-l-black.png"></TD>
    <TD><a href="icons-png/arrow-l-black.png">arrow-l-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-l-white.png"></TD>
    <TD><a href="icons-png/arrow-l-white.png">arrow-l-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-r-black.png"></TD>
    <TD><a href="icons-png/arrow-r-black.png">arrow-r-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-r-white.png"></TD>
    <TD><a href="icons-png/arrow-r-white.png">arrow-r-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-black.png"></TD>
    <TD><a href="icons-png/arrow-u-black.png">arrow-u-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-l-black.png"></TD>
    <TD><a href="icons-png/arrow-u-l-black.png">arrow-u-l-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-l-white.png"></TD>
    <TD><a href="icons-png/arrow-u-l-white.png">arrow-u-l-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-r-black.png"></TD>
    <TD><a href="icons-png/arrow-u-r-black.png">arrow-u-r-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-r-white.png"></TD>
    <TD><a href="icons-png/arrow-u-r-white.png">arrow-u-r-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-white.png"></TD>
    <TD><a href="icons-png/arrow-u-white.png">arrow-u-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/audio-black.png"></TD>
    <TD><a href="icons-png/audio-black.png">audio-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/audio-white.png"></TD>
    <TD><a href="icons-png/audio-white.png">audio-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/bars-black.png"></TD>
    <TD><a href="icons-png/bars-black.png">bars-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/bars-white.png"></TD>
    <TD><a href="icons-png/bars-white.png">bars-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/bullets-black.png"></TD>
    <TD><a href="icons-png/bullets-black.png">bullets-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/bullets-white.png"></TD>
    <TD><a href="icons-png/bullets-white.png">bullets-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/calendar-black.png"></TD>
    <TD><a href="icons-png/calendar-black.png">calendar-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/calendar-white.png"></TD>
    <TD><a href="icons-png/calendar-white.png">calendar-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/camera-black.png"></TD>
    <TD><a href="icons-png/camera-black.png">camera-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/camera-white.png"></TD>
    <TD><a href="icons-png/camera-white.png">camera-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-d-black.png"></TD>
    <TD><a href="icons-png/carat-d-black.png">carat-d-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-d-white.png"></TD>
    <TD><a href="icons-png/carat-d-white.png">carat-d-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-l-black.png"></TD>
    <TD><a href="icons-png/carat-l-black.png">carat-l-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-l-white.png"></TD>
    <TD><a href="icons-png/carat-l-white.png">carat-l-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-r-black.png"></TD>
    <TD><a href="icons-png/carat-r-black.png">carat-r-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-r-white.png"></TD>
    <TD><a href="icons-png/carat-r-white.png">carat-r-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-u-black.png"></TD>
    <TD><a href="icons-png/carat-u-black.png">carat-u-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-u-white.png"></TD>
    <TD><a href="icons-png/carat-u-white.png">carat-u-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/check-black.png"></TD>
    <TD><a href="icons-png/check-black.png">check-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/check-white.png"></TD>
    <TD><a href="icons-png/check-white.png">check-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/clock-black.png"></TD>
    <TD><a href="icons-png/clock-black.png">clock-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/clock-white.png"></TD>
    <TD><a href="icons-png/clock-white.png">clock-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/cloud-black.png"></TD>
    <TD><a href="icons-png/cloud-black.png">cloud-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/cloud-white.png"></TD>
    <TD><a href="icons-png/cloud-white.png">cloud-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/comment-black.png"></TD>
    <TD><a href="icons-png/comment-black.png">comment-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/comment-white.png"></TD>
    <TD><a href="icons-png/comment-white.png">comment-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/delete-black.png"></TD>
    <TD><a href="icons-png/delete-black.png">delete-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/delete-white.png"></TD>
    <TD><a href="icons-png/delete-white.png">delete-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/edit-black.png"></TD>
    <TD><a href="icons-png/edit-black.png">edit-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/edit-white.png"></TD>
    <TD><a href="icons-png/edit-white.png">edit-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/eye-black.png"></TD>
    <TD><a href="icons-png/eye-black.png">eye-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/eye-white.png"></TD>
    <TD><a href="icons-png/eye-white.png">eye-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/forbidden-black.png"></TD>
    <TD><a href="icons-png/forbidden-black.png">forbidden-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/forbidden-white.png"></TD>
    <TD><a href="icons-png/forbidden-white.png">forbidden-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/forward-black.png"></TD>
    <TD><a href="icons-png/forward-black.png">forward-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/forward-white.png"></TD>
    <TD><a href="icons-png/forward-white.png">forward-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/gear-black.png"></TD>
    <TD><a href="icons-png/gear-black.png">gear-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/gear-white.png"></TD>
    <TD><a href="icons-png/gear-white.png">gear-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/grid-black.png"></TD>
    <TD><a href="icons-png/grid-black.png">grid-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/grid-white.png"></TD>
    <TD><a href="icons-png/grid-white.png">grid-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/heart-black.png"></TD>
    <TD><a href="icons-png/heart-black.png">heart-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/heart-white.png"></TD>
    <TD><a href="icons-png/heart-white.png">heart-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/home-black.png"></TD>
    <TD><a href="icons-png/home-black.png">home-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/home-white.png"></TD>
    <TD><a href="icons-png/home-white.png">home-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/info-black.png"></TD>
    <TD><a href="icons-png/info-black.png">info-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/info-white.png"></TD>
    <TD><a href="icons-png/info-white.png">info-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/location-black.png"></TD>
    <TD><a href="icons-png/location-black.png">location-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/location-white.png"></TD>
    <TD><a href="icons-png/location-white.png">location-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/lock-black.png"></TD>
    <TD><a href="icons-png/lock-black.png">lock-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/lock-white.png"></TD>
    <TD><a href="icons-png/lock-white.png">lock-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/mail-black.png"></TD>
    <TD><a href="icons-png/mail-black.png">mail-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/mail-white.png"></TD>
    <TD><a href="icons-png/mail-white.png">mail-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/minus-black.png"></TD>
    <TD><a href="icons-png/minus-black.png">minus-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/minus-white.png"></TD>
    <TD><a href="icons-png/minus-white.png">minus-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/nav-back-black.png"></TD>
    <TD><a href="icons-png/nav-back-black.png">nav-back-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/nav-back-white.png"></TD>
    <TD><a href="icons-png/nav-back-white.png">nav-back-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/navigation-black.png"></TD>
    <TD><a href="icons-png/navigation-black.png">navigation-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/navigation-white.png"></TD>
    <TD><a href="icons-png/navigation-white.png">navigation-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/phone-black.png"></TD>
    <TD><a href="icons-png/phone-black.png">phone-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/phone-white.png"></TD>
    <TD><a href="icons-png/phone-white.png">phone-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/plus-black.png"></TD>
    <TD><a href="icons-png/plus-black.png">plus-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/plus-white.png"></TD>
    <TD><a href="icons-png/plus-white.png">plus-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/power-black.png"></TD>
    <TD><a href="icons-png/power-black.png">power-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/power-white.png"></TD>
    <TD><a href="icons-png/power-white.png">power-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/recycle-black.png"></TD>
    <TD><a href="icons-png/recycle-black.png">recycle-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/recycle-white.png"></TD>
    <TD><a href="icons-png/recycle-white.png">recycle-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/refresh-black.png"></TD>
    <TD><a href="icons-png/refresh-black.png">refresh-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/refresh-white.png"></TD>
    <TD><a href="icons-png/refresh-white.png">refresh-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/search-black.png"></TD>
    <TD><a href="icons-png/search-black.png">search-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/search-white.png"></TD>
    <TD><a href="icons-png/search-white.png">search-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/shop-black.png"></TD>
    <TD><a href="icons-png/shop-black.png">shop-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/shop-white.png"></TD>
    <TD><a href="icons-png/shop-white.png">shop-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/star-black.png"></TD>
    <TD><a href="icons-png/star-black.png">star-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/star-white.png"></TD>
    <TD><a href="icons-png/star-white.png">star-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/tag-black.png"></TD>
    <TD><a href="icons-png/tag-black.png">tag-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/tag-white.png"></TD>
    <TD><a href="icons-png/tag-white.png">tag-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/user-black.png"></TD>
    <TD><a href="icons-png/user-black.png">user-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/user-white.png"></TD>
    <TD><a href="icons-png/user-white.png">user-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/video-black.png"></TD>
    <TD><a href="icons-png/video-black.png">video-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/video-white.png"></TD>
    <TD><a href="icons-png/video-white.png">video-white.png</a></TD>
    <TD>icons-png</TD>
  </TABLE>
  <HR>
  <H3>Icons in Path: icons-svg</H3>
  <quote>
  <table border='2' style='background-color:#CACACA;margin-left:40px'>
    <tr>
       <td>
         <b>Icon</b>
       </td>
       <td>
         <b>File</b>
       </td>
       <td>
         <b>Folder</b>
       </td>
    </tr>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/action-black.svg"></TD>
    <TD><a href="icons-svg/action-black.svg">action-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/action-white.svg"></TD>
    <TD><a href="icons-svg/action-white.svg">action-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/action.svg"></TD>
    <TD><a href="icons-svg/action.svg">action.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/alert-black.svg"></TD>
    <TD><a href="icons-svg/alert-black.svg">alert-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/alert-white.svg"></TD>
    <TD><a href="icons-svg/alert-white.svg">alert-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/alert.svg"></TD>
    <TD><a href="icons-svg/alert.svg">alert.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-black.svg"></TD>
    <TD><a href="icons-svg/arrow-d-black.svg">arrow-d-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-l-black.svg"></TD>
    <TD><a href="icons-svg/arrow-d-l-black.svg">arrow-d-l-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-l-white.svg"></TD>
    <TD><a href="icons-svg/arrow-d-l-white.svg">arrow-d-l-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-r-black.svg"></TD>
    <TD><a href="icons-svg/arrow-d-r-black.svg">arrow-d-r-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-r-white.svg"></TD>
    <TD><a href="icons-svg/arrow-d-r-white.svg">arrow-d-r-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-white.svg"></TD>
    <TD><a href="icons-svg/arrow-d-white.svg">arrow-d-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d.svg"></TD>
    <TD><a href="icons-svg/arrow-d.svg">arrow-d.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-l-black.svg"></TD>
    <TD><a href="icons-svg/arrow-l-black.svg">arrow-l-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-l-white.svg"></TD>
    <TD><a href="icons-svg/arrow-l-white.svg">arrow-l-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-l.svg"></TD>
    <TD><a href="icons-svg/arrow-l.svg">arrow-l.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-r-black.svg"></TD>
    <TD><a href="icons-svg/arrow-r-black.svg">arrow-r-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-r-white.svg"></TD>
    <TD><a href="icons-svg/arrow-r-white.svg">arrow-r-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-r.svg"></TD>
    <TD><a href="icons-svg/arrow-r.svg">arrow-r.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-black.svg"></TD>
    <TD><a href="icons-svg/arrow-u-black.svg">arrow-u-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-l-black.svg"></TD>
    <TD><a href="icons-svg/arrow-u-l-black.svg">arrow-u-l-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-l-white.svg"></TD>
    <TD><a href="icons-svg/arrow-u-l-white.svg">arrow-u-l-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-l.svg"></TD>
    <TD><a href="icons-svg/arrow-u-l.svg">arrow-u-l.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-r-black.svg"></TD>
    <TD><a href="icons-svg/arrow-u-r-black.svg">arrow-u-r-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-r-white.svg"></TD>
    <TD><a href="icons-svg/arrow-u-r-white.svg">arrow-u-r-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-r.svg"></TD>
    <TD><a href="icons-svg/arrow-u-r.svg">arrow-u-r.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-white.svg"></TD>
    <TD><a href="icons-svg/arrow-u-white.svg">arrow-u-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u.svg"></TD>
    <TD><a href="icons-svg/arrow-u.svg">arrow-u.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/audio-black.svg"></TD>
    <TD><a href="icons-svg/audio-black.svg">audio-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/audio-white.svg"></TD>
    <TD><a href="icons-svg/audio-white.svg">audio-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/audio.svg"></TD>
    <TD><a href="icons-svg/audio.svg">audio.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bars-black.svg"></TD>
    <TD><a href="icons-svg/bars-black.svg">bars-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bars-white.svg"></TD>
    <TD><a href="icons-svg/bars-white.svg">bars-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bars.svg"></TD>
    <TD><a href="icons-svg/bars.svg">bars.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bullets-black.svg"></TD>
    <TD><a href="icons-svg/bullets-black.svg">bullets-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bullets-white.svg"></TD>
    <TD><a href="icons-svg/bullets-white.svg">bullets-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bullets.svg"></TD>
    <TD><a href="icons-svg/bullets.svg">bullets.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/calendar-black.svg"></TD>
    <TD><a href="icons-svg/calendar-black.svg">calendar-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/calendar-white.svg"></TD>
    <TD><a href="icons-svg/calendar-white.svg">calendar-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/calendar.svg"></TD>
    <TD><a href="icons-svg/calendar.svg">calendar.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/camera-black.svg"></TD>
    <TD><a href="icons-svg/camera-black.svg">camera-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/camera-white.svg"></TD>
    <TD><a href="icons-svg/camera-white.svg">camera-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/camera.svg"></TD>
    <TD><a href="icons-svg/camera.svg">camera.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-d-black.svg"></TD>
    <TD><a href="icons-svg/carat-d-black.svg">carat-d-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-d-white.svg"></TD>
    <TD><a href="icons-svg/carat-d-white.svg">carat-d-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-d.svg"></TD>
    <TD><a href="icons-svg/carat-d.svg">carat-d.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-l-black.svg"></TD>
    <TD><a href="icons-svg/carat-l-black.svg">carat-l-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-l-white.svg"></TD>
    <TD><a href="icons-svg/carat-l-white.svg">carat-l-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-l.svg"></TD>
    <TD><a href="icons-svg/carat-l.svg">carat-l.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-r-black.svg"></TD>
    <TD><a href="icons-svg/carat-r-black.svg">carat-r-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-r-white.svg"></TD>
    <TD><a href="icons-svg/carat-r-white.svg">carat-r-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-r.svg"></TD>
    <TD><a href="icons-svg/carat-r.svg">carat-r.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-u-black.svg"></TD>
    <TD><a href="icons-svg/carat-u-black.svg">carat-u-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-u-white.svg"></TD>
    <TD><a href="icons-svg/carat-u-white.svg">carat-u-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-u.svg"></TD>
    <TD><a href="icons-svg/carat-u.svg">carat-u.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/check-black.svg"></TD>
    <TD><a href="icons-svg/check-black.svg">check-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/check-white.svg"></TD>
    <TD><a href="icons-svg/check-white.svg">check-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/check.svg"></TD>
    <TD><a href="icons-svg/check.svg">check.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/clock-black.svg"></TD>
    <TD><a href="icons-svg/clock-black.svg">clock-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/clock-white.svg"></TD>
    <TD><a href="icons-svg/clock-white.svg">clock-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/clock.svg"></TD>
    <TD><a href="icons-svg/clock.svg">clock.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/cloud-black.svg"></TD>
    <TD><a href="icons-svg/cloud-black.svg">cloud-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/cloud-white.svg"></TD>
    <TD><a href="icons-svg/cloud-white.svg">cloud-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/cloud.svg"></TD>
    <TD><a href="icons-svg/cloud.svg">cloud.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/comment-black.svg"></TD>
    <TD><a href="icons-svg/comment-black.svg">comment-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/comment-white.svg"></TD>
    <TD><a href="icons-svg/comment-white.svg">comment-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/comment.svg"></TD>
    <TD><a href="icons-svg/comment.svg">comment.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/delete-black.svg"></TD>
    <TD><a href="icons-svg/delete-black.svg">delete-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/delete-white.svg"></TD>
    <TD><a href="icons-svg/delete-white.svg">delete-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/delete.svg"></TD>
    <TD><a href="icons-svg/delete.svg">delete.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/edit-black.svg"></TD>
    <TD><a href="icons-svg/edit-black.svg">edit-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/edit-white.svg"></TD>
    <TD><a href="icons-svg/edit-white.svg">edit-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/edit.svg"></TD>
    <TD><a href="icons-svg/edit.svg">edit.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/eye-black.svg"></TD>
    <TD><a href="icons-svg/eye-black.svg">eye-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/eye-white.svg"></TD>
    <TD><a href="icons-svg/eye-white.svg">eye-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/eye.svg"></TD>
    <TD><a href="icons-svg/eye.svg">eye.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-backward-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-backward-black.svg">fa-audio-backward-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-backward-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-backward-white.svg">fa-audio-backward-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-backward.svg"></TD>
    <TD><a href="icons-svg/fa-audio-backward.svg">fa-audio-backward.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-eject-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-eject-black.svg">fa-audio-eject-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-eject-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-eject-white.svg">fa-audio-eject-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-eject.svg"></TD>
    <TD><a href="icons-svg/fa-audio-eject.svg">fa-audio-eject.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-forward-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-forward-black.svg">fa-audio-forward-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-forward-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-forward-white.svg">fa-audio-forward-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-forward.svg"></TD>
    <TD><a href="icons-svg/fa-audio-forward.svg">fa-audio-forward.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-pause-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-pause-black.svg">fa-audio-pause-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-pause-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-pause-white.svg">fa-audio-pause-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-pause.svg"></TD>
    <TD><a href="icons-svg/fa-audio-pause.svg">fa-audio-pause.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-play-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-play-black.svg">fa-audio-play-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-play-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-play-white.svg">fa-audio-play-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-play.svg"></TD>
    <TD><a href="icons-svg/fa-audio-play.svg">fa-audio-play.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-record-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-record-black.svg">fa-audio-record-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-record-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-record-white.svg">fa-audio-record-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-record.svg"></TD>
    <TD><a href="icons-svg/fa-audio-record.svg">fa-audio-record.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-stop-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-stop-black.svg">fa-audio-stop-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-stop-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-stop-white.svg">fa-audio-stop-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-stop.svg"></TD>
    <TD><a href="icons-svg/fa-audio-stop.svg">fa-audio-stop.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-barcode-black.svg"></TD>
    <TD><a href="icons-svg/fa-barcode-black.svg">fa-barcode-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-barcode-white.svg"></TD>
    <TD><a href="icons-svg/fa-barcode-white.svg">fa-barcode-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-barcode.svg"></TD>
    <TD><a href="icons-svg/fa-barcode.svg">fa-barcode.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-book-black.svg"></TD>
    <TD><a href="icons-svg/fa-book-black.svg">fa-book-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-book-white.svg"></TD>
    <TD><a href="icons-svg/fa-book-white.svg">fa-book-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-book.svg"></TD>
    <TD><a href="icons-svg/fa-book.svg">fa-book.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-camera-black.svg"></TD>
    <TD><a href="icons-svg/fa-camera-black.svg">fa-camera-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-camera-white.svg"></TD>
    <TD><a href="icons-svg/fa-camera-white.svg">fa-camera-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-camera.svg"></TD>
    <TD><a href="icons-svg/fa-camera.svg">fa-camera.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-cancel-black.svg"></TD>
    <TD><a href="icons-svg/fa-cancel-black.svg">fa-cancel-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-cancel-red.svg"></TD>
    <TD><a href="icons-svg/fa-cancel-red.svg">fa-cancel-red.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-cancel-white.svg"></TD>
    <TD><a href="icons-svg/fa-cancel-white.svg">fa-cancel-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-cancel.svg"></TD>
    <TD><a href="icons-svg/fa-cancel.svg">fa-cancel.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-chart-pie-black.svg"></TD>
    <TD><a href="icons-svg/fa-chart-pie-black.svg">fa-chart-pie-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-chart-pie-white.svg"></TD>
    <TD><a href="icons-svg/fa-chart-pie-white.svg">fa-chart-pie-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-chart-pie.svg"></TD>
    <TD><a href="icons-svg/fa-chart-pie.svg">fa-chart-pie.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-copy-black.svg"></TD>
    <TD><a href="icons-svg/fa-copy-black.svg">fa-copy-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-copy-white.svg"></TD>
    <TD><a href="icons-svg/fa-copy-white.svg">fa-copy-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-copy.svg"></TD>
    <TD><a href="icons-svg/fa-copy.svg">fa-copy.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-edit-black.svg"></TD>
    <TD><a href="icons-svg/fa-edit-black.svg">fa-edit-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-edit-white.svg"></TD>
    <TD><a href="icons-svg/fa-edit-white.svg">fa-edit-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-edit.svg"></TD>
    <TD><a href="icons-svg/fa-edit.svg">fa-edit.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-enumeration-black.svg"></TD>
    <TD><a href="icons-svg/fa-enumeration-black.svg">fa-enumeration-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-enumeration-white.svg"></TD>
    <TD><a href="icons-svg/fa-enumeration-white.svg">fa-enumeration-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-enumeration.svg"></TD>
    <TD><a href="icons-svg/fa-enumeration.svg">fa-enumeration.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-envelope-black.svg"></TD>
    <TD><a href="icons-svg/fa-envelope-black.svg">fa-envelope-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-envelope-white.svg"></TD>
    <TD><a href="icons-svg/fa-envelope-white.svg">fa-envelope-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-envelope.svg"></TD>
    <TD><a href="icons-svg/fa-envelope.svg">fa-envelope.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-archive-black.svg"></TD>
    <TD><a href="icons-svg/fa-file-archive-black.svg">fa-file-archive-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-archive-white.svg"></TD>
    <TD><a href="icons-svg/fa-file-archive-white.svg">fa-file-archive-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-archive.svg"></TD>
    <TD><a href="icons-svg/fa-file-archive.svg">fa-file-archive.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-save-black.svg"></TD>
    <TD><a href="icons-svg/fa-file-save-black.svg">fa-file-save-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-save-white.svg"></TD>
    <TD><a href="icons-svg/fa-file-save-white.svg">fa-file-save-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-save.svg"></TD>
    <TD><a href="icons-svg/fa-file-save.svg">fa-file-save.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-folder-open-black.svg"></TD>
    <TD><a href="icons-svg/fa-folder-open-black.svg">fa-folder-open-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-folder-open-white.svg"></TD>
    <TD><a href="icons-svg/fa-folder-open-white.svg">fa-folder-open-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-folder-open.svg"></TD>
    <TD><a href="icons-svg/fa-folder-open.svg">fa-folder-open.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-font-black.svg"></TD>
    <TD><a href="icons-svg/fa-font-black.svg">fa-font-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-font-white.svg"></TD>
    <TD><a href="icons-svg/fa-font-white.svg">fa-font-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-font.svg"></TD>
    <TD><a href="icons-svg/fa-font.svg">fa-font.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-globe-black.svg"></TD>
    <TD><a href="icons-svg/fa-globe-black.svg">fa-globe-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-globe-white.svg"></TD>
    <TD><a href="icons-svg/fa-globe-white.svg">fa-globe-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-globe.svg"></TD>
    <TD><a href="icons-svg/fa-globe.svg">fa-globe.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-hamburger-icon-black.svg"></TD>
    <TD><a href="icons-svg/fa-hamburger-icon-black.svg">fa-hamburger-icon-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-hamburger-icon-white.svg"></TD>
    <TD><a href="icons-svg/fa-hamburger-icon-white.svg">fa-hamburger-icon-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-hamburger-icon.svg"></TD>
    <TD><a href="icons-svg/fa-hamburger-icon.svg">fa-hamburger-icon.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-harddisk-black.svg"></TD>
    <TD><a href="icons-svg/fa-harddisk-black.svg">fa-harddisk-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-harddisk-white.svg"></TD>
    <TD><a href="icons-svg/fa-harddisk-white.svg">fa-harddisk-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-harddisk.svg"></TD>
    <TD><a href="icons-svg/fa-harddisk.svg">fa-harddisk.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-key-black.svg"></TD>
    <TD><a href="icons-svg/fa-key-black.svg">fa-key-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-key-white.svg"></TD>
    <TD><a href="icons-svg/fa-key-white.svg">fa-key-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-key.svg"></TD>
    <TD><a href="icons-svg/fa-key.svg">fa-key.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-language-black.svg"></TD>
    <TD><a href="icons-svg/fa-language-black.svg">fa-language-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-language-white.svg"></TD>
    <TD><a href="icons-svg/fa-language-white.svg">fa-language-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-language.svg"></TD>
    <TD><a href="icons-svg/fa-language.svg">fa-language.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-line-chart-black.svg"></TD>
    <TD><a href="icons-svg/fa-line-chart-black.svg">fa-line-chart-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-line-chart-white.svg"></TD>
    <TD><a href="icons-svg/fa-line-chart-white.svg">fa-line-chart-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-line-chart.svg"></TD>
    <TD><a href="icons-svg/fa-line-chart.svg">fa-line-chart.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-list-black.svg"></TD>
    <TD><a href="icons-svg/fa-list-black.svg">fa-list-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-list-white.svg"></TD>
    <TD><a href="icons-svg/fa-list-white.svg">fa-list-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-list.svg"></TD>
    <TD><a href="icons-svg/fa-list.svg">fa-list.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-minus-square-black.svg"></TD>
    <TD><a href="icons-svg/fa-minus-square-black.svg">fa-minus-square-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-minus-square-white.svg"></TD>
    <TD><a href="icons-svg/fa-minus-square-white.svg">fa-minus-square-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-minus-square.svg"></TD>
    <TD><a href="icons-svg/fa-minus-square.svg">fa-minus-square.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-paste-black.svg"></TD>
    <TD><a href="icons-svg/fa-paste-black.svg">fa-paste-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-paste-white.svg"></TD>
    <TD><a href="icons-svg/fa-paste-white.svg">fa-paste-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-paste.svg"></TD>
    <TD><a href="icons-svg/fa-paste.svg">fa-paste.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-picture-black.svg"></TD>
    <TD><a href="icons-svg/fa-picture-black.svg">fa-picture-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-picture-white.svg"></TD>
    <TD><a href="icons-svg/fa-picture-white.svg">fa-picture-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-picture.svg"></TD>
    <TD><a href="icons-svg/fa-picture.svg">fa-picture.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-plus-square-black.svg"></TD>
    <TD><a href="icons-svg/fa-plus-square-black.svg">fa-plus-square-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-plus-square-white.svg"></TD>
    <TD><a href="icons-svg/fa-plus-square-white.svg">fa-plus-square-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-plus-square.svg"></TD>
    <TD><a href="icons-svg/fa-plus-square.svg">fa-plus-square.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-print-black.svg"></TD>
    <TD><a href="icons-svg/fa-print-black.svg">fa-print-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-print-white.svg"></TD>
    <TD><a href="icons-svg/fa-print-white.svg">fa-print-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-print.svg"></TD>
    <TD><a href="icons-svg/fa-print.svg">fa-print.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-qrcode-black.svg"></TD>
    <TD><a href="icons-svg/fa-qrcode-black.svg">fa-qrcode-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-qrcode-white.svg"></TD>
    <TD><a href="icons-svg/fa-qrcode-white.svg">fa-qrcode-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-qrcode.svg"></TD>
    <TD><a href="icons-svg/fa-qrcode.svg">fa-qrcode.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-settings-black.svg"></TD>
    <TD><a href="icons-svg/fa-settings-black.svg">fa-settings-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-settings-white.svg"></TD>
    <TD><a href="icons-svg/fa-settings-white.svg">fa-settings-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-settings.svg"></TD>
    <TD><a href="icons-svg/fa-settings.svg">fa-settings.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signin-black.svg"></TD>
    <TD><a href="icons-svg/fa-signin-black.svg">fa-signin-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signin-white.svg"></TD>
    <TD><a href="icons-svg/fa-signin-white.svg">fa-signin-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signin.svg"></TD>
    <TD><a href="icons-svg/fa-signin.svg">fa-signin.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signout-black.svg"></TD>
    <TD><a href="icons-svg/fa-signout-black.svg">fa-signout-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signout-white.svg"></TD>
    <TD><a href="icons-svg/fa-signout-white.svg">fa-signout-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signout.svg"></TD>
    <TD><a href="icons-svg/fa-signout.svg">fa-signout.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-sort-black.svg"></TD>
    <TD><a href="icons-svg/fa-sort-black.svg">fa-sort-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-sort-white.svg"></TD>
    <TD><a href="icons-svg/fa-sort-white.svg">fa-sort-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-sort.svg"></TD>
    <TD><a href="icons-svg/fa-sort.svg">fa-sort.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-spinner-black.svg"></TD>
    <TD><a href="icons-svg/fa-spinner-black.svg">fa-spinner-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-spinner-white.svg"></TD>
    <TD><a href="icons-svg/fa-spinner-white.svg">fa-spinner-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-spinner.svg"></TD>
    <TD><a href="icons-svg/fa-spinner.svg">fa-spinner.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-tablet-black.svg"></TD>
    <TD><a href="icons-svg/fa-tablet-black.svg">fa-tablet-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-tablet-white.svg"></TD>
    <TD><a href="icons-svg/fa-tablet-white.svg">fa-tablet-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-tablet.svg"></TD>
    <TD><a href="icons-svg/fa-tablet.svg">fa-tablet.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-trash-black.svg"></TD>
    <TD><a href="icons-svg/fa-trash-black.svg">fa-trash-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-trash-white.svg"></TD>
    <TD><a href="icons-svg/fa-trash-white.svg">fa-trash-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-trash.svg"></TD>
    <TD><a href="icons-svg/fa-trash.svg">fa-trash.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-truck-black.svg"></TD>
    <TD><a href="icons-svg/fa-truck-black.svg">fa-truck-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-truck-white.svg"></TD>
    <TD><a href="icons-svg/fa-truck-white.svg">fa-truck-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-truck.svg"></TD>
    <TD><a href="icons-svg/fa-truck.svg">fa-truck.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-undo-black.svg"></TD>
    <TD><a href="icons-svg/fa-undo-black.svg">fa-undo-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-undo-white.svg"></TD>
    <TD><a href="icons-svg/fa-undo-white.svg">fa-undo-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-undo.svg"></TD>
    <TD><a href="icons-svg/fa-undo.svg">fa-undo.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-vr-headset-black.svg"></TD>
    <TD><a href="icons-svg/fa-vr-headset-black.svg">fa-vr-headset-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-vr-headset-white.svg"></TD>
    <TD><a href="icons-svg/fa-vr-headset-white.svg">fa-vr-headset-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-vr-headset.svg"></TD>
    <TD><a href="icons-svg/fa-vr-headset.svg">fa-vr-headset.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forbidden-black.svg"></TD>
    <TD><a href="icons-svg/forbidden-black.svg">forbidden-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forbidden-white.svg"></TD>
    <TD><a href="icons-svg/forbidden-white.svg">forbidden-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forbidden.svg"></TD>
    <TD><a href="icons-svg/forbidden.svg">forbidden.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forward-black.svg"></TD>
    <TD><a href="icons-svg/forward-black.svg">forward-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forward-white.svg"></TD>
    <TD><a href="icons-svg/forward-white.svg">forward-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forward.svg"></TD>
    <TD><a href="icons-svg/forward.svg">forward.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/gear-black.svg"></TD>
    <TD><a href="icons-svg/gear-black.svg">gear-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/gear-white.svg"></TD>
    <TD><a href="icons-svg/gear-white.svg">gear-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/gear.svg"></TD>
    <TD><a href="icons-svg/gear.svg">gear.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/grid-black.svg"></TD>
    <TD><a href="icons-svg/grid-black.svg">grid-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/grid-white.svg"></TD>
    <TD><a href="icons-svg/grid-white.svg">grid-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/grid.svg"></TD>
    <TD><a href="icons-svg/grid.svg">grid.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/heart-black.svg"></TD>
    <TD><a href="icons-svg/heart-black.svg">heart-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/heart-white.svg"></TD>
    <TD><a href="icons-svg/heart-white.svg">heart-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/heart.svg"></TD>
    <TD><a href="icons-svg/heart.svg">heart.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/home-black.svg"></TD>
    <TD><a href="icons-svg/home-black.svg">home-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/home-white.svg"></TD>
    <TD><a href="icons-svg/home-white.svg">home-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/home.svg"></TD>
    <TD><a href="icons-svg/home.svg">home.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-dd-black.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-dd-black.svg">i4m-carat-dd-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-dd-white.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-dd-white.svg">i4m-carat-dd-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-dd.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-dd.svg">i4m-carat-dd.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-ll-black.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-ll-black.svg">i4m-carat-ll-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-ll-white.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-ll-white.svg">i4m-carat-ll-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-ll.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-ll.svg">i4m-carat-ll.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-rr-black.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-rr-black.svg">i4m-carat-rr-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-rr-white.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-rr-white.svg">i4m-carat-rr-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-rr.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-rr.svg">i4m-carat-rr.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-uu-black.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-uu-black.svg">i4m-carat-uu-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-uu-white.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-uu-white.svg">i4m-carat-uu-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-uu.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-uu.svg">i4m-carat-uu.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal-black.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal-black.svg">i4m-wiki2reveal-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal-frame-black.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal-frame-black.svg">i4m-wiki2reveal-frame-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal-frame-white.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal-frame-white.svg">i4m-wiki2reveal-frame-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal-frame.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal-frame.svg">i4m-wiki2reveal-frame.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal-white.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal-white.svg">i4m-wiki2reveal-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal.svg">i4m-wiki2reveal.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/info-black.svg"></TD>
    <TD><a href="icons-svg/info-black.svg">info-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/info-white.svg"></TD>
    <TD><a href="icons-svg/info-white.svg">info-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/info.svg"></TD>
    <TD><a href="icons-svg/info.svg">info.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/location-black.svg"></TD>
    <TD><a href="icons-svg/location-black.svg">location-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/location-white.svg"></TD>
    <TD><a href="icons-svg/location-white.svg">location-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/location.svg"></TD>
    <TD><a href="icons-svg/location.svg">location.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/lock-black.svg"></TD>
    <TD><a href="icons-svg/lock-black.svg">lock-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/lock-white.svg"></TD>
    <TD><a href="icons-svg/lock-white.svg">lock-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/lock.svg"></TD>
    <TD><a href="icons-svg/lock.svg">lock.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/mail-black.svg"></TD>
    <TD><a href="icons-svg/mail-black.svg">mail-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/mail-white.svg"></TD>
    <TD><a href="icons-svg/mail-white.svg">mail-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/mail.svg"></TD>
    <TD><a href="icons-svg/mail.svg">mail.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/minus-black.svg"></TD>
    <TD><a href="icons-svg/minus-black.svg">minus-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/minus-white.svg"></TD>
    <TD><a href="icons-svg/minus-white.svg">minus-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/minus.svg"></TD>
    <TD><a href="icons-svg/minus.svg">minus.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/nav-back-black.svg"></TD>
    <TD><a href="icons-svg/nav-back-black.svg">nav-back-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/nav-back-white.svg"></TD>
    <TD><a href="icons-svg/nav-back-white.svg">nav-back-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/nav-back.svg"></TD>
    <TD><a href="icons-svg/nav-back.svg">nav-back.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/navigation-black.svg"></TD>
    <TD><a href="icons-svg/navigation-black.svg">navigation-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/navigation-white.svg"></TD>
    <TD><a href="icons-svg/navigation-white.svg">navigation-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/navigation.svg"></TD>
    <TD><a href="icons-svg/navigation.svg">navigation.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/phone-black.svg"></TD>
    <TD><a href="icons-svg/phone-black.svg">phone-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/phone-white.svg"></TD>
    <TD><a href="icons-svg/phone-white.svg">phone-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/phone.svg"></TD>
    <TD><a href="icons-svg/phone.svg">phone.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/plus-black.svg"></TD>
    <TD><a href="icons-svg/plus-black.svg">plus-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/plus-white.svg"></TD>
    <TD><a href="icons-svg/plus-white.svg">plus-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/plus.svg"></TD>
    <TD><a href="icons-svg/plus.svg">plus.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/power-black.svg"></TD>
    <TD><a href="icons-svg/power-black.svg">power-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/power-white.svg"></TD>
    <TD><a href="icons-svg/power-white.svg">power-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/power.svg"></TD>
    <TD><a href="icons-svg/power.svg">power.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/recycle-black.svg"></TD>
    <TD><a href="icons-svg/recycle-black.svg">recycle-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/recycle-white.svg"></TD>
    <TD><a href="icons-svg/recycle-white.svg">recycle-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/recycle.svg"></TD>
    <TD><a href="icons-svg/recycle.svg">recycle.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/refresh-black.svg"></TD>
    <TD><a href="icons-svg/refresh-black.svg">refresh-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/refresh-white.svg"></TD>
    <TD><a href="icons-svg/refresh-white.svg">refresh-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/refresh.svg"></TD>
    <TD><a href="icons-svg/refresh.svg">refresh.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/search-black.svg"></TD>
    <TD><a href="icons-svg/search-black.svg">search-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/search-white.svg"></TD>
    <TD><a href="icons-svg/search-white.svg">search-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/search.svg"></TD>
    <TD><a href="icons-svg/search.svg">search.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/shop-black.svg"></TD>
    <TD><a href="icons-svg/shop-black.svg">shop-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/shop-white.svg"></TD>
    <TD><a href="icons-svg/shop-white.svg">shop-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/shop.svg"></TD>
    <TD><a href="icons-svg/shop.svg">shop.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/star-black.svg"></TD>
    <TD><a href="icons-svg/star-black.svg">star-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/star-white.svg"></TD>
    <TD><a href="icons-svg/star-white.svg">star-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/star.svg"></TD>
    <TD><a href="icons-svg/star.svg">star.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/tag-black.svg"></TD>
    <TD><a href="icons-svg/tag-black.svg">tag-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/tag-white.svg"></TD>
    <TD><a href="icons-svg/tag-white.svg">tag-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/tag.svg"></TD>
    <TD><a href="icons-svg/tag.svg">tag.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/user-black.svg"></TD>
    <TD><a href="icons-svg/user-black.svg">user-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/user-white.svg"></TD>
    <TD><a href="icons-svg/user-white.svg">user-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/user.svg"></TD>
    <TD><a href="icons-svg/user.svg">user.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/video-black.svg"></TD>
    <TD><a href="icons-svg/video-black.svg">video-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/video-white.svg"></TD>
    <TD><a href="icons-svg/video-white.svg">video-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/video.svg"></TD>
    <TD><a href="icons-svg/video.svg">video.svg</a></TD>
    <TD>icons-svg</TD>
  </TABLE>
  <HR>
  <H3>Icons in Path: icons-png</H3>
  <quote>
  <table border='2' style='background-color:#CACACA;margin-left:40px'>
    <tr>
       <td>
         <b>Icon</b>
       </td>
       <td>
         <b>File</b>
       </td>
       <td>
         <b>Folder</b>
       </td>
    </tr>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/action-black.png"></TD>
    <TD><a href="icons-png/action-black.png">action-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/action-white.png"></TD>
    <TD><a href="icons-png/action-white.png">action-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/alert-black.png"></TD>
    <TD><a href="icons-png/alert-black.png">alert-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/alert-white.png"></TD>
    <TD><a href="icons-png/alert-white.png">alert-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-black.png"></TD>
    <TD><a href="icons-png/arrow-d-black.png">arrow-d-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-l-black.png"></TD>
    <TD><a href="icons-png/arrow-d-l-black.png">arrow-d-l-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-l-white.png"></TD>
    <TD><a href="icons-png/arrow-d-l-white.png">arrow-d-l-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-r-black.png"></TD>
    <TD><a href="icons-png/arrow-d-r-black.png">arrow-d-r-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-r-white.png"></TD>
    <TD><a href="icons-png/arrow-d-r-white.png">arrow-d-r-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-white.png"></TD>
    <TD><a href="icons-png/arrow-d-white.png">arrow-d-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-l-black.png"></TD>
    <TD><a href="icons-png/arrow-l-black.png">arrow-l-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-l-white.png"></TD>
    <TD><a href="icons-png/arrow-l-white.png">arrow-l-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-r-black.png"></TD>
    <TD><a href="icons-png/arrow-r-black.png">arrow-r-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-r-white.png"></TD>
    <TD><a href="icons-png/arrow-r-white.png">arrow-r-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-black.png"></TD>
    <TD><a href="icons-png/arrow-u-black.png">arrow-u-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-l-black.png"></TD>
    <TD><a href="icons-png/arrow-u-l-black.png">arrow-u-l-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-l-white.png"></TD>
    <TD><a href="icons-png/arrow-u-l-white.png">arrow-u-l-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-r-black.png"></TD>
    <TD><a href="icons-png/arrow-u-r-black.png">arrow-u-r-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-r-white.png"></TD>
    <TD><a href="icons-png/arrow-u-r-white.png">arrow-u-r-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-white.png"></TD>
    <TD><a href="icons-png/arrow-u-white.png">arrow-u-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/audio-black.png"></TD>
    <TD><a href="icons-png/audio-black.png">audio-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/audio-white.png"></TD>
    <TD><a href="icons-png/audio-white.png">audio-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/bars-black.png"></TD>
    <TD><a href="icons-png/bars-black.png">bars-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/bars-white.png"></TD>
    <TD><a href="icons-png/bars-white.png">bars-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/bullets-black.png"></TD>
    <TD><a href="icons-png/bullets-black.png">bullets-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/bullets-white.png"></TD>
    <TD><a href="icons-png/bullets-white.png">bullets-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/calendar-black.png"></TD>
    <TD><a href="icons-png/calendar-black.png">calendar-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/calendar-white.png"></TD>
    <TD><a href="icons-png/calendar-white.png">calendar-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/camera-black.png"></TD>
    <TD><a href="icons-png/camera-black.png">camera-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/camera-white.png"></TD>
    <TD><a href="icons-png/camera-white.png">camera-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-d-black.png"></TD>
    <TD><a href="icons-png/carat-d-black.png">carat-d-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-d-white.png"></TD>
    <TD><a href="icons-png/carat-d-white.png">carat-d-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-l-black.png"></TD>
    <TD><a href="icons-png/carat-l-black.png">carat-l-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-l-white.png"></TD>
    <TD><a href="icons-png/carat-l-white.png">carat-l-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-r-black.png"></TD>
    <TD><a href="icons-png/carat-r-black.png">carat-r-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-r-white.png"></TD>
    <TD><a href="icons-png/carat-r-white.png">carat-r-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-u-black.png"></TD>
    <TD><a href="icons-png/carat-u-black.png">carat-u-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-u-white.png"></TD>
    <TD><a href="icons-png/carat-u-white.png">carat-u-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/check-black.png"></TD>
    <TD><a href="icons-png/check-black.png">check-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/check-white.png"></TD>
    <TD><a href="icons-png/check-white.png">check-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/clock-black.png"></TD>
    <TD><a href="icons-png/clock-black.png">clock-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/clock-white.png"></TD>
    <TD><a href="icons-png/clock-white.png">clock-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/cloud-black.png"></TD>
    <TD><a href="icons-png/cloud-black.png">cloud-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/cloud-white.png"></TD>
    <TD><a href="icons-png/cloud-white.png">cloud-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/comment-black.png"></TD>
    <TD><a href="icons-png/comment-black.png">comment-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/comment-white.png"></TD>
    <TD><a href="icons-png/comment-white.png">comment-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/delete-black.png"></TD>
    <TD><a href="icons-png/delete-black.png">delete-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/delete-white.png"></TD>
    <TD><a href="icons-png/delete-white.png">delete-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/edit-black.png"></TD>
    <TD><a href="icons-png/edit-black.png">edit-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/edit-white.png"></TD>
    <TD><a href="icons-png/edit-white.png">edit-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/eye-black.png"></TD>
    <TD><a href="icons-png/eye-black.png">eye-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/eye-white.png"></TD>
    <TD><a href="icons-png/eye-white.png">eye-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/forbidden-black.png"></TD>
    <TD><a href="icons-png/forbidden-black.png">forbidden-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/forbidden-white.png"></TD>
    <TD><a href="icons-png/forbidden-white.png">forbidden-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/forward-black.png"></TD>
    <TD><a href="icons-png/forward-black.png">forward-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/forward-white.png"></TD>
    <TD><a href="icons-png/forward-white.png">forward-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/gear-black.png"></TD>
    <TD><a href="icons-png/gear-black.png">gear-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/gear-white.png"></TD>
    <TD><a href="icons-png/gear-white.png">gear-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/grid-black.png"></TD>
    <TD><a href="icons-png/grid-black.png">grid-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/grid-white.png"></TD>
    <TD><a href="icons-png/grid-white.png">grid-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/heart-black.png"></TD>
    <TD><a href="icons-png/heart-black.png">heart-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/heart-white.png"></TD>
    <TD><a href="icons-png/heart-white.png">heart-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/home-black.png"></TD>
    <TD><a href="icons-png/home-black.png">home-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/home-white.png"></TD>
    <TD><a href="icons-png/home-white.png">home-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/info-black.png"></TD>
    <TD><a href="icons-png/info-black.png">info-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/info-white.png"></TD>
    <TD><a href="icons-png/info-white.png">info-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/location-black.png"></TD>
    <TD><a href="icons-png/location-black.png">location-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/location-white.png"></TD>
    <TD><a href="icons-png/location-white.png">location-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/lock-black.png"></TD>
    <TD><a href="icons-png/lock-black.png">lock-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/lock-white.png"></TD>
    <TD><a href="icons-png/lock-white.png">lock-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/mail-black.png"></TD>
    <TD><a href="icons-png/mail-black.png">mail-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/mail-white.png"></TD>
    <TD><a href="icons-png/mail-white.png">mail-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/minus-black.png"></TD>
    <TD><a href="icons-png/minus-black.png">minus-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/minus-white.png"></TD>
    <TD><a href="icons-png/minus-white.png">minus-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/nav-back-black.png"></TD>
    <TD><a href="icons-png/nav-back-black.png">nav-back-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/nav-back-white.png"></TD>
    <TD><a href="icons-png/nav-back-white.png">nav-back-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/navigation-black.png"></TD>
    <TD><a href="icons-png/navigation-black.png">navigation-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/navigation-white.png"></TD>
    <TD><a href="icons-png/navigation-white.png">navigation-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/phone-black.png"></TD>
    <TD><a href="icons-png/phone-black.png">phone-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/phone-white.png"></TD>
    <TD><a href="icons-png/phone-white.png">phone-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/plus-black.png"></TD>
    <TD><a href="icons-png/plus-black.png">plus-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/plus-white.png"></TD>
    <TD><a href="icons-png/plus-white.png">plus-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/power-black.png"></TD>
    <TD><a href="icons-png/power-black.png">power-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/power-white.png"></TD>
    <TD><a href="icons-png/power-white.png">power-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/recycle-black.png"></TD>
    <TD><a href="icons-png/recycle-black.png">recycle-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/recycle-white.png"></TD>
    <TD><a href="icons-png/recycle-white.png">recycle-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/refresh-black.png"></TD>
    <TD><a href="icons-png/refresh-black.png">refresh-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/refresh-white.png"></TD>
    <TD><a href="icons-png/refresh-white.png">refresh-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/search-black.png"></TD>
    <TD><a href="icons-png/search-black.png">search-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/search-white.png"></TD>
    <TD><a href="icons-png/search-white.png">search-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/shop-black.png"></TD>
    <TD><a href="icons-png/shop-black.png">shop-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/shop-white.png"></TD>
    <TD><a href="icons-png/shop-white.png">shop-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/star-black.png"></TD>
    <TD><a href="icons-png/star-black.png">star-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/star-white.png"></TD>
    <TD><a href="icons-png/star-white.png">star-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/tag-black.png"></TD>
    <TD><a href="icons-png/tag-black.png">tag-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/tag-white.png"></TD>
    <TD><a href="icons-png/tag-white.png">tag-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/user-black.png"></TD>
    <TD><a href="icons-png/user-black.png">user-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/user-white.png"></TD>
    <TD><a href="icons-png/user-white.png">user-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/video-black.png"></TD>
    <TD><a href="icons-png/video-black.png">video-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/video-white.png"></TD>
    <TD><a href="icons-png/video-white.png">video-white.png</a></TD>
    <TD>icons-png</TD>
  </TABLE>
  <HR>
  <H3>Icons in Path: icons-svg</H3>
  <quote>
  <table border='2' style='background-color:#CACACA;margin-left:40px'>
    <tr>
       <td>
         <b>Icon</b>
       </td>
       <td>
         <b>File</b>
       </td>
       <td>
         <b>Folder</b>
       </td>
    </tr>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/action-black.svg"></TD>
    <TD><a href="icons-svg/action-black.svg">action-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/action-white.svg"></TD>
    <TD><a href="icons-svg/action-white.svg">action-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/action.svg"></TD>
    <TD><a href="icons-svg/action.svg">action.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/alert-black.svg"></TD>
    <TD><a href="icons-svg/alert-black.svg">alert-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/alert-white.svg"></TD>
    <TD><a href="icons-svg/alert-white.svg">alert-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/alert.svg"></TD>
    <TD><a href="icons-svg/alert.svg">alert.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-black.svg"></TD>
    <TD><a href="icons-svg/arrow-d-black.svg">arrow-d-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-l-black.svg"></TD>
    <TD><a href="icons-svg/arrow-d-l-black.svg">arrow-d-l-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-l-white.svg"></TD>
    <TD><a href="icons-svg/arrow-d-l-white.svg">arrow-d-l-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-r-black.svg"></TD>
    <TD><a href="icons-svg/arrow-d-r-black.svg">arrow-d-r-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-r-white.svg"></TD>
    <TD><a href="icons-svg/arrow-d-r-white.svg">arrow-d-r-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-white.svg"></TD>
    <TD><a href="icons-svg/arrow-d-white.svg">arrow-d-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d.svg"></TD>
    <TD><a href="icons-svg/arrow-d.svg">arrow-d.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-l-black.svg"></TD>
    <TD><a href="icons-svg/arrow-l-black.svg">arrow-l-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-l-white.svg"></TD>
    <TD><a href="icons-svg/arrow-l-white.svg">arrow-l-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-l.svg"></TD>
    <TD><a href="icons-svg/arrow-l.svg">arrow-l.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-r-black.svg"></TD>
    <TD><a href="icons-svg/arrow-r-black.svg">arrow-r-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-r-white.svg"></TD>
    <TD><a href="icons-svg/arrow-r-white.svg">arrow-r-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-r.svg"></TD>
    <TD><a href="icons-svg/arrow-r.svg">arrow-r.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-black.svg"></TD>
    <TD><a href="icons-svg/arrow-u-black.svg">arrow-u-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-l-black.svg"></TD>
    <TD><a href="icons-svg/arrow-u-l-black.svg">arrow-u-l-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-l-white.svg"></TD>
    <TD><a href="icons-svg/arrow-u-l-white.svg">arrow-u-l-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-l.svg"></TD>
    <TD><a href="icons-svg/arrow-u-l.svg">arrow-u-l.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-r-black.svg"></TD>
    <TD><a href="icons-svg/arrow-u-r-black.svg">arrow-u-r-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-r-white.svg"></TD>
    <TD><a href="icons-svg/arrow-u-r-white.svg">arrow-u-r-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-r.svg"></TD>
    <TD><a href="icons-svg/arrow-u-r.svg">arrow-u-r.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-white.svg"></TD>
    <TD><a href="icons-svg/arrow-u-white.svg">arrow-u-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u.svg"></TD>
    <TD><a href="icons-svg/arrow-u.svg">arrow-u.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/audio-black.svg"></TD>
    <TD><a href="icons-svg/audio-black.svg">audio-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/audio-white.svg"></TD>
    <TD><a href="icons-svg/audio-white.svg">audio-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/audio.svg"></TD>
    <TD><a href="icons-svg/audio.svg">audio.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bars-black.svg"></TD>
    <TD><a href="icons-svg/bars-black.svg">bars-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bars-white.svg"></TD>
    <TD><a href="icons-svg/bars-white.svg">bars-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bars.svg"></TD>
    <TD><a href="icons-svg/bars.svg">bars.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bullets-black.svg"></TD>
    <TD><a href="icons-svg/bullets-black.svg">bullets-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bullets-white.svg"></TD>
    <TD><a href="icons-svg/bullets-white.svg">bullets-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bullets.svg"></TD>
    <TD><a href="icons-svg/bullets.svg">bullets.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/calendar-black.svg"></TD>
    <TD><a href="icons-svg/calendar-black.svg">calendar-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/calendar-white.svg"></TD>
    <TD><a href="icons-svg/calendar-white.svg">calendar-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/calendar.svg"></TD>
    <TD><a href="icons-svg/calendar.svg">calendar.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/camera-black.svg"></TD>
    <TD><a href="icons-svg/camera-black.svg">camera-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/camera-white.svg"></TD>
    <TD><a href="icons-svg/camera-white.svg">camera-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/camera.svg"></TD>
    <TD><a href="icons-svg/camera.svg">camera.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-d-black.svg"></TD>
    <TD><a href="icons-svg/carat-d-black.svg">carat-d-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-d-white.svg"></TD>
    <TD><a href="icons-svg/carat-d-white.svg">carat-d-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-d.svg"></TD>
    <TD><a href="icons-svg/carat-d.svg">carat-d.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-l-black.svg"></TD>
    <TD><a href="icons-svg/carat-l-black.svg">carat-l-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-l-white.svg"></TD>
    <TD><a href="icons-svg/carat-l-white.svg">carat-l-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-l.svg"></TD>
    <TD><a href="icons-svg/carat-l.svg">carat-l.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-r-black.svg"></TD>
    <TD><a href="icons-svg/carat-r-black.svg">carat-r-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-r-white.svg"></TD>
    <TD><a href="icons-svg/carat-r-white.svg">carat-r-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-r.svg"></TD>
    <TD><a href="icons-svg/carat-r.svg">carat-r.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-u-black.svg"></TD>
    <TD><a href="icons-svg/carat-u-black.svg">carat-u-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-u-white.svg"></TD>
    <TD><a href="icons-svg/carat-u-white.svg">carat-u-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-u.svg"></TD>
    <TD><a href="icons-svg/carat-u.svg">carat-u.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/check-black.svg"></TD>
    <TD><a href="icons-svg/check-black.svg">check-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/check-white.svg"></TD>
    <TD><a href="icons-svg/check-white.svg">check-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/check.svg"></TD>
    <TD><a href="icons-svg/check.svg">check.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/clock-black.svg"></TD>
    <TD><a href="icons-svg/clock-black.svg">clock-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/clock-white.svg"></TD>
    <TD><a href="icons-svg/clock-white.svg">clock-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/clock.svg"></TD>
    <TD><a href="icons-svg/clock.svg">clock.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/cloud-black.svg"></TD>
    <TD><a href="icons-svg/cloud-black.svg">cloud-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/cloud-white.svg"></TD>
    <TD><a href="icons-svg/cloud-white.svg">cloud-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/cloud.svg"></TD>
    <TD><a href="icons-svg/cloud.svg">cloud.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/comment-black.svg"></TD>
    <TD><a href="icons-svg/comment-black.svg">comment-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/comment-white.svg"></TD>
    <TD><a href="icons-svg/comment-white.svg">comment-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/comment.svg"></TD>
    <TD><a href="icons-svg/comment.svg">comment.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/delete-black.svg"></TD>
    <TD><a href="icons-svg/delete-black.svg">delete-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/delete-white.svg"></TD>
    <TD><a href="icons-svg/delete-white.svg">delete-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/delete.svg"></TD>
    <TD><a href="icons-svg/delete.svg">delete.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/edit-black.svg"></TD>
    <TD><a href="icons-svg/edit-black.svg">edit-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/edit-white.svg"></TD>
    <TD><a href="icons-svg/edit-white.svg">edit-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/edit.svg"></TD>
    <TD><a href="icons-svg/edit.svg">edit.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/eye-black.svg"></TD>
    <TD><a href="icons-svg/eye-black.svg">eye-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/eye-white.svg"></TD>
    <TD><a href="icons-svg/eye-white.svg">eye-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/eye.svg"></TD>
    <TD><a href="icons-svg/eye.svg">eye.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-backward-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-backward-black.svg">fa-audio-backward-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-backward-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-backward-white.svg">fa-audio-backward-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-backward.svg"></TD>
    <TD><a href="icons-svg/fa-audio-backward.svg">fa-audio-backward.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-eject-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-eject-black.svg">fa-audio-eject-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-eject-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-eject-white.svg">fa-audio-eject-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-eject.svg"></TD>
    <TD><a href="icons-svg/fa-audio-eject.svg">fa-audio-eject.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-forward-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-forward-black.svg">fa-audio-forward-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-forward-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-forward-white.svg">fa-audio-forward-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-forward.svg"></TD>
    <TD><a href="icons-svg/fa-audio-forward.svg">fa-audio-forward.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-pause-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-pause-black.svg">fa-audio-pause-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-pause-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-pause-white.svg">fa-audio-pause-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-pause.svg"></TD>
    <TD><a href="icons-svg/fa-audio-pause.svg">fa-audio-pause.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-play-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-play-black.svg">fa-audio-play-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-play-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-play-white.svg">fa-audio-play-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-play.svg"></TD>
    <TD><a href="icons-svg/fa-audio-play.svg">fa-audio-play.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-record-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-record-black.svg">fa-audio-record-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-record-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-record-white.svg">fa-audio-record-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-record.svg"></TD>
    <TD><a href="icons-svg/fa-audio-record.svg">fa-audio-record.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-stop-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-stop-black.svg">fa-audio-stop-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-stop-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-stop-white.svg">fa-audio-stop-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-stop.svg"></TD>
    <TD><a href="icons-svg/fa-audio-stop.svg">fa-audio-stop.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-barcode-black.svg"></TD>
    <TD><a href="icons-svg/fa-barcode-black.svg">fa-barcode-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-barcode-white.svg"></TD>
    <TD><a href="icons-svg/fa-barcode-white.svg">fa-barcode-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-barcode.svg"></TD>
    <TD><a href="icons-svg/fa-barcode.svg">fa-barcode.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-book-black.svg"></TD>
    <TD><a href="icons-svg/fa-book-black.svg">fa-book-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-book-white.svg"></TD>
    <TD><a href="icons-svg/fa-book-white.svg">fa-book-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-book.svg"></TD>
    <TD><a href="icons-svg/fa-book.svg">fa-book.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-camera-black.svg"></TD>
    <TD><a href="icons-svg/fa-camera-black.svg">fa-camera-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-camera-white.svg"></TD>
    <TD><a href="icons-svg/fa-camera-white.svg">fa-camera-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-camera.svg"></TD>
    <TD><a href="icons-svg/fa-camera.svg">fa-camera.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-cancel-black.svg"></TD>
    <TD><a href="icons-svg/fa-cancel-black.svg">fa-cancel-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-cancel-red.svg"></TD>
    <TD><a href="icons-svg/fa-cancel-red.svg">fa-cancel-red.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-cancel-white.svg"></TD>
    <TD><a href="icons-svg/fa-cancel-white.svg">fa-cancel-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-cancel.svg"></TD>
    <TD><a href="icons-svg/fa-cancel.svg">fa-cancel.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-chart-pie-black.svg"></TD>
    <TD><a href="icons-svg/fa-chart-pie-black.svg">fa-chart-pie-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-chart-pie-white.svg"></TD>
    <TD><a href="icons-svg/fa-chart-pie-white.svg">fa-chart-pie-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-chart-pie.svg"></TD>
    <TD><a href="icons-svg/fa-chart-pie.svg">fa-chart-pie.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-copy-black.svg"></TD>
    <TD><a href="icons-svg/fa-copy-black.svg">fa-copy-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-copy-white.svg"></TD>
    <TD><a href="icons-svg/fa-copy-white.svg">fa-copy-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-copy.svg"></TD>
    <TD><a href="icons-svg/fa-copy.svg">fa-copy.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-edit-black.svg"></TD>
    <TD><a href="icons-svg/fa-edit-black.svg">fa-edit-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-edit-white.svg"></TD>
    <TD><a href="icons-svg/fa-edit-white.svg">fa-edit-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-edit.svg"></TD>
    <TD><a href="icons-svg/fa-edit.svg">fa-edit.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-enumeration-black.svg"></TD>
    <TD><a href="icons-svg/fa-enumeration-black.svg">fa-enumeration-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-enumeration-white.svg"></TD>
    <TD><a href="icons-svg/fa-enumeration-white.svg">fa-enumeration-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-enumeration.svg"></TD>
    <TD><a href="icons-svg/fa-enumeration.svg">fa-enumeration.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-envelope-black.svg"></TD>
    <TD><a href="icons-svg/fa-envelope-black.svg">fa-envelope-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-envelope-white.svg"></TD>
    <TD><a href="icons-svg/fa-envelope-white.svg">fa-envelope-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-envelope.svg"></TD>
    <TD><a href="icons-svg/fa-envelope.svg">fa-envelope.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-archive-black.svg"></TD>
    <TD><a href="icons-svg/fa-file-archive-black.svg">fa-file-archive-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-archive-white.svg"></TD>
    <TD><a href="icons-svg/fa-file-archive-white.svg">fa-file-archive-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-archive.svg"></TD>
    <TD><a href="icons-svg/fa-file-archive.svg">fa-file-archive.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-save-black.svg"></TD>
    <TD><a href="icons-svg/fa-file-save-black.svg">fa-file-save-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-save-white.svg"></TD>
    <TD><a href="icons-svg/fa-file-save-white.svg">fa-file-save-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-save.svg"></TD>
    <TD><a href="icons-svg/fa-file-save.svg">fa-file-save.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-folder-open-black.svg"></TD>
    <TD><a href="icons-svg/fa-folder-open-black.svg">fa-folder-open-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-folder-open-white.svg"></TD>
    <TD><a href="icons-svg/fa-folder-open-white.svg">fa-folder-open-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-folder-open.svg"></TD>
    <TD><a href="icons-svg/fa-folder-open.svg">fa-folder-open.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-font-black.svg"></TD>
    <TD><a href="icons-svg/fa-font-black.svg">fa-font-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-font-white.svg"></TD>
    <TD><a href="icons-svg/fa-font-white.svg">fa-font-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-font.svg"></TD>
    <TD><a href="icons-svg/fa-font.svg">fa-font.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-globe-black.svg"></TD>
    <TD><a href="icons-svg/fa-globe-black.svg">fa-globe-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-globe-white.svg"></TD>
    <TD><a href="icons-svg/fa-globe-white.svg">fa-globe-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-globe.svg"></TD>
    <TD><a href="icons-svg/fa-globe.svg">fa-globe.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-hamburger-icon-black.svg"></TD>
    <TD><a href="icons-svg/fa-hamburger-icon-black.svg">fa-hamburger-icon-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-hamburger-icon-white.svg"></TD>
    <TD><a href="icons-svg/fa-hamburger-icon-white.svg">fa-hamburger-icon-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-hamburger-icon.svg"></TD>
    <TD><a href="icons-svg/fa-hamburger-icon.svg">fa-hamburger-icon.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-harddisk-black.svg"></TD>
    <TD><a href="icons-svg/fa-harddisk-black.svg">fa-harddisk-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-harddisk-white.svg"></TD>
    <TD><a href="icons-svg/fa-harddisk-white.svg">fa-harddisk-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-harddisk.svg"></TD>
    <TD><a href="icons-svg/fa-harddisk.svg">fa-harddisk.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-key-black.svg"></TD>
    <TD><a href="icons-svg/fa-key-black.svg">fa-key-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-key-white.svg"></TD>
    <TD><a href="icons-svg/fa-key-white.svg">fa-key-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-key.svg"></TD>
    <TD><a href="icons-svg/fa-key.svg">fa-key.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-language-black.svg"></TD>
    <TD><a href="icons-svg/fa-language-black.svg">fa-language-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-language-white.svg"></TD>
    <TD><a href="icons-svg/fa-language-white.svg">fa-language-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-language.svg"></TD>
    <TD><a href="icons-svg/fa-language.svg">fa-language.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-line-chart-black.svg"></TD>
    <TD><a href="icons-svg/fa-line-chart-black.svg">fa-line-chart-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-line-chart-white.svg"></TD>
    <TD><a href="icons-svg/fa-line-chart-white.svg">fa-line-chart-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-line-chart.svg"></TD>
    <TD><a href="icons-svg/fa-line-chart.svg">fa-line-chart.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-list-black.svg"></TD>
    <TD><a href="icons-svg/fa-list-black.svg">fa-list-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-list-white.svg"></TD>
    <TD><a href="icons-svg/fa-list-white.svg">fa-list-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-list.svg"></TD>
    <TD><a href="icons-svg/fa-list.svg">fa-list.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-minus-square-black.svg"></TD>
    <TD><a href="icons-svg/fa-minus-square-black.svg">fa-minus-square-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-minus-square-white.svg"></TD>
    <TD><a href="icons-svg/fa-minus-square-white.svg">fa-minus-square-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-minus-square.svg"></TD>
    <TD><a href="icons-svg/fa-minus-square.svg">fa-minus-square.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-paste-black.svg"></TD>
    <TD><a href="icons-svg/fa-paste-black.svg">fa-paste-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-paste-white.svg"></TD>
    <TD><a href="icons-svg/fa-paste-white.svg">fa-paste-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-paste.svg"></TD>
    <TD><a href="icons-svg/fa-paste.svg">fa-paste.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-picture-black.svg"></TD>
    <TD><a href="icons-svg/fa-picture-black.svg">fa-picture-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-picture-white.svg"></TD>
    <TD><a href="icons-svg/fa-picture-white.svg">fa-picture-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-picture.svg"></TD>
    <TD><a href="icons-svg/fa-picture.svg">fa-picture.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-plus-square-black.svg"></TD>
    <TD><a href="icons-svg/fa-plus-square-black.svg">fa-plus-square-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-plus-square-white.svg"></TD>
    <TD><a href="icons-svg/fa-plus-square-white.svg">fa-plus-square-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-plus-square.svg"></TD>
    <TD><a href="icons-svg/fa-plus-square.svg">fa-plus-square.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-print-black.svg"></TD>
    <TD><a href="icons-svg/fa-print-black.svg">fa-print-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-print-white.svg"></TD>
    <TD><a href="icons-svg/fa-print-white.svg">fa-print-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-print.svg"></TD>
    <TD><a href="icons-svg/fa-print.svg">fa-print.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-qrcode-black.svg"></TD>
    <TD><a href="icons-svg/fa-qrcode-black.svg">fa-qrcode-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-qrcode-white.svg"></TD>
    <TD><a href="icons-svg/fa-qrcode-white.svg">fa-qrcode-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-qrcode.svg"></TD>
    <TD><a href="icons-svg/fa-qrcode.svg">fa-qrcode.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-settings-black.svg"></TD>
    <TD><a href="icons-svg/fa-settings-black.svg">fa-settings-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-settings-white.svg"></TD>
    <TD><a href="icons-svg/fa-settings-white.svg">fa-settings-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-settings.svg"></TD>
    <TD><a href="icons-svg/fa-settings.svg">fa-settings.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signin-black.svg"></TD>
    <TD><a href="icons-svg/fa-signin-black.svg">fa-signin-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signin-white.svg"></TD>
    <TD><a href="icons-svg/fa-signin-white.svg">fa-signin-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signin.svg"></TD>
    <TD><a href="icons-svg/fa-signin.svg">fa-signin.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signout-black.svg"></TD>
    <TD><a href="icons-svg/fa-signout-black.svg">fa-signout-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signout-white.svg"></TD>
    <TD><a href="icons-svg/fa-signout-white.svg">fa-signout-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signout.svg"></TD>
    <TD><a href="icons-svg/fa-signout.svg">fa-signout.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-sort-black.svg"></TD>
    <TD><a href="icons-svg/fa-sort-black.svg">fa-sort-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-sort-white.svg"></TD>
    <TD><a href="icons-svg/fa-sort-white.svg">fa-sort-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-sort.svg"></TD>
    <TD><a href="icons-svg/fa-sort.svg">fa-sort.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-spinner-black.svg"></TD>
    <TD><a href="icons-svg/fa-spinner-black.svg">fa-spinner-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-spinner-white.svg"></TD>
    <TD><a href="icons-svg/fa-spinner-white.svg">fa-spinner-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-spinner.svg"></TD>
    <TD><a href="icons-svg/fa-spinner.svg">fa-spinner.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-tablet-black.svg"></TD>
    <TD><a href="icons-svg/fa-tablet-black.svg">fa-tablet-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-tablet-white.svg"></TD>
    <TD><a href="icons-svg/fa-tablet-white.svg">fa-tablet-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-tablet.svg"></TD>
    <TD><a href="icons-svg/fa-tablet.svg">fa-tablet.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-trash-black.svg"></TD>
    <TD><a href="icons-svg/fa-trash-black.svg">fa-trash-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-trash-white.svg"></TD>
    <TD><a href="icons-svg/fa-trash-white.svg">fa-trash-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-trash.svg"></TD>
    <TD><a href="icons-svg/fa-trash.svg">fa-trash.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-truck-black.svg"></TD>
    <TD><a href="icons-svg/fa-truck-black.svg">fa-truck-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-truck-white.svg"></TD>
    <TD><a href="icons-svg/fa-truck-white.svg">fa-truck-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-truck.svg"></TD>
    <TD><a href="icons-svg/fa-truck.svg">fa-truck.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-undo-black.svg"></TD>
    <TD><a href="icons-svg/fa-undo-black.svg">fa-undo-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-undo-white.svg"></TD>
    <TD><a href="icons-svg/fa-undo-white.svg">fa-undo-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-undo.svg"></TD>
    <TD><a href="icons-svg/fa-undo.svg">fa-undo.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-vr-headset-black.svg"></TD>
    <TD><a href="icons-svg/fa-vr-headset-black.svg">fa-vr-headset-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-vr-headset-white.svg"></TD>
    <TD><a href="icons-svg/fa-vr-headset-white.svg">fa-vr-headset-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-vr-headset.svg"></TD>
    <TD><a href="icons-svg/fa-vr-headset.svg">fa-vr-headset.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forbidden-black.svg"></TD>
    <TD><a href="icons-svg/forbidden-black.svg">forbidden-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forbidden-white.svg"></TD>
    <TD><a href="icons-svg/forbidden-white.svg">forbidden-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forbidden.svg"></TD>
    <TD><a href="icons-svg/forbidden.svg">forbidden.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forward-black.svg"></TD>
    <TD><a href="icons-svg/forward-black.svg">forward-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forward-white.svg"></TD>
    <TD><a href="icons-svg/forward-white.svg">forward-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forward.svg"></TD>
    <TD><a href="icons-svg/forward.svg">forward.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/gear-black.svg"></TD>
    <TD><a href="icons-svg/gear-black.svg">gear-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/gear-white.svg"></TD>
    <TD><a href="icons-svg/gear-white.svg">gear-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/gear.svg"></TD>
    <TD><a href="icons-svg/gear.svg">gear.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/grid-black.svg"></TD>
    <TD><a href="icons-svg/grid-black.svg">grid-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/grid-white.svg"></TD>
    <TD><a href="icons-svg/grid-white.svg">grid-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/grid.svg"></TD>
    <TD><a href="icons-svg/grid.svg">grid.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/heart-black.svg"></TD>
    <TD><a href="icons-svg/heart-black.svg">heart-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/heart-white.svg"></TD>
    <TD><a href="icons-svg/heart-white.svg">heart-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/heart.svg"></TD>
    <TD><a href="icons-svg/heart.svg">heart.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/home-black.svg"></TD>
    <TD><a href="icons-svg/home-black.svg">home-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/home-white.svg"></TD>
    <TD><a href="icons-svg/home-white.svg">home-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/home.svg"></TD>
    <TD><a href="icons-svg/home.svg">home.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-dd-black.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-dd-black.svg">i4m-carat-dd-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-dd-white.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-dd-white.svg">i4m-carat-dd-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-dd.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-dd.svg">i4m-carat-dd.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-ll-black.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-ll-black.svg">i4m-carat-ll-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-ll-white.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-ll-white.svg">i4m-carat-ll-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-ll.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-ll.svg">i4m-carat-ll.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-rr-black.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-rr-black.svg">i4m-carat-rr-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-rr-white.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-rr-white.svg">i4m-carat-rr-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-rr.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-rr.svg">i4m-carat-rr.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-uu-black.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-uu-black.svg">i4m-carat-uu-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-uu-white.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-uu-white.svg">i4m-carat-uu-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-uu.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-uu.svg">i4m-carat-uu.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal-black.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal-black.svg">i4m-wiki2reveal-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal-frame-black.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal-frame-black.svg">i4m-wiki2reveal-frame-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal-frame-white.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal-frame-white.svg">i4m-wiki2reveal-frame-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal-frame.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal-frame.svg">i4m-wiki2reveal-frame.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal-white.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal-white.svg">i4m-wiki2reveal-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal.svg">i4m-wiki2reveal.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/info-black.svg"></TD>
    <TD><a href="icons-svg/info-black.svg">info-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/info-white.svg"></TD>
    <TD><a href="icons-svg/info-white.svg">info-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/info.svg"></TD>
    <TD><a href="icons-svg/info.svg">info.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/location-black.svg"></TD>
    <TD><a href="icons-svg/location-black.svg">location-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/location-white.svg"></TD>
    <TD><a href="icons-svg/location-white.svg">location-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/location.svg"></TD>
    <TD><a href="icons-svg/location.svg">location.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/lock-black.svg"></TD>
    <TD><a href="icons-svg/lock-black.svg">lock-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/lock-white.svg"></TD>
    <TD><a href="icons-svg/lock-white.svg">lock-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/lock.svg"></TD>
    <TD><a href="icons-svg/lock.svg">lock.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/mail-black.svg"></TD>
    <TD><a href="icons-svg/mail-black.svg">mail-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/mail-white.svg"></TD>
    <TD><a href="icons-svg/mail-white.svg">mail-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/mail.svg"></TD>
    <TD><a href="icons-svg/mail.svg">mail.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/minus-black.svg"></TD>
    <TD><a href="icons-svg/minus-black.svg">minus-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/minus-white.svg"></TD>
    <TD><a href="icons-svg/minus-white.svg">minus-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/minus.svg"></TD>
    <TD><a href="icons-svg/minus.svg">minus.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/nav-back-black.svg"></TD>
    <TD><a href="icons-svg/nav-back-black.svg">nav-back-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/nav-back-white.svg"></TD>
    <TD><a href="icons-svg/nav-back-white.svg">nav-back-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/nav-back.svg"></TD>
    <TD><a href="icons-svg/nav-back.svg">nav-back.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/navigation-black.svg"></TD>
    <TD><a href="icons-svg/navigation-black.svg">navigation-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/navigation-white.svg"></TD>
    <TD><a href="icons-svg/navigation-white.svg">navigation-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/navigation.svg"></TD>
    <TD><a href="icons-svg/navigation.svg">navigation.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/phone-black.svg"></TD>
    <TD><a href="icons-svg/phone-black.svg">phone-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/phone-white.svg"></TD>
    <TD><a href="icons-svg/phone-white.svg">phone-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/phone.svg"></TD>
    <TD><a href="icons-svg/phone.svg">phone.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/plus-black.svg"></TD>
    <TD><a href="icons-svg/plus-black.svg">plus-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/plus-white.svg"></TD>
    <TD><a href="icons-svg/plus-white.svg">plus-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/plus.svg"></TD>
    <TD><a href="icons-svg/plus.svg">plus.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/power-black.svg"></TD>
    <TD><a href="icons-svg/power-black.svg">power-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/power-white.svg"></TD>
    <TD><a href="icons-svg/power-white.svg">power-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/power.svg"></TD>
    <TD><a href="icons-svg/power.svg">power.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/recycle-black.svg"></TD>
    <TD><a href="icons-svg/recycle-black.svg">recycle-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/recycle-white.svg"></TD>
    <TD><a href="icons-svg/recycle-white.svg">recycle-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/recycle.svg"></TD>
    <TD><a href="icons-svg/recycle.svg">recycle.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/refresh-black.svg"></TD>
    <TD><a href="icons-svg/refresh-black.svg">refresh-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/refresh-white.svg"></TD>
    <TD><a href="icons-svg/refresh-white.svg">refresh-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/refresh.svg"></TD>
    <TD><a href="icons-svg/refresh.svg">refresh.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/search-black.svg"></TD>
    <TD><a href="icons-svg/search-black.svg">search-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/search-white.svg"></TD>
    <TD><a href="icons-svg/search-white.svg">search-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/search.svg"></TD>
    <TD><a href="icons-svg/search.svg">search.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/shop-black.svg"></TD>
    <TD><a href="icons-svg/shop-black.svg">shop-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/shop-white.svg"></TD>
    <TD><a href="icons-svg/shop-white.svg">shop-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/shop.svg"></TD>
    <TD><a href="icons-svg/shop.svg">shop.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/star-black.svg"></TD>
    <TD><a href="icons-svg/star-black.svg">star-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/star-white.svg"></TD>
    <TD><a href="icons-svg/star-white.svg">star-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/star.svg"></TD>
    <TD><a href="icons-svg/star.svg">star.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/tag-black.svg"></TD>
    <TD><a href="icons-svg/tag-black.svg">tag-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/tag-white.svg"></TD>
    <TD><a href="icons-svg/tag-white.svg">tag-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/tag.svg"></TD>
    <TD><a href="icons-svg/tag.svg">tag.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/user-black.svg"></TD>
    <TD><a href="icons-svg/user-black.svg">user-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/user-white.svg"></TD>
    <TD><a href="icons-svg/user-white.svg">user-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/user.svg"></TD>
    <TD><a href="icons-svg/user.svg">user.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/video-black.svg"></TD>
    <TD><a href="icons-svg/video-black.svg">video-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/video-white.svg"></TD>
    <TD><a href="icons-svg/video-white.svg">video-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/video.svg"></TD>
    <TD><a href="icons-svg/video.svg">video.svg</a></TD>
    <TD>icons-svg</TD>
  </TABLE>
  <HR>
  <H3>Icons in Path: icons-png</H3>
  <quote>
  <table border='2' style='background-color:#CACACA;margin-left:40px'>
    <tr>
       <td>
         <b>Icon</b>
       </td>
       <td>
         <b>File</b>
       </td>
       <td>
         <b>Folder</b>
       </td>
    </tr>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/action-black.png"></TD>
    <TD><a href="icons-png/action-black.png">action-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/action-white.png"></TD>
    <TD><a href="icons-png/action-white.png">action-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/alert-black.png"></TD>
    <TD><a href="icons-png/alert-black.png">alert-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/alert-white.png"></TD>
    <TD><a href="icons-png/alert-white.png">alert-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-black.png"></TD>
    <TD><a href="icons-png/arrow-d-black.png">arrow-d-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-l-black.png"></TD>
    <TD><a href="icons-png/arrow-d-l-black.png">arrow-d-l-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-l-white.png"></TD>
    <TD><a href="icons-png/arrow-d-l-white.png">arrow-d-l-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-r-black.png"></TD>
    <TD><a href="icons-png/arrow-d-r-black.png">arrow-d-r-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-r-white.png"></TD>
    <TD><a href="icons-png/arrow-d-r-white.png">arrow-d-r-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-white.png"></TD>
    <TD><a href="icons-png/arrow-d-white.png">arrow-d-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-l-black.png"></TD>
    <TD><a href="icons-png/arrow-l-black.png">arrow-l-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-l-white.png"></TD>
    <TD><a href="icons-png/arrow-l-white.png">arrow-l-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-r-black.png"></TD>
    <TD><a href="icons-png/arrow-r-black.png">arrow-r-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-r-white.png"></TD>
    <TD><a href="icons-png/arrow-r-white.png">arrow-r-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-black.png"></TD>
    <TD><a href="icons-png/arrow-u-black.png">arrow-u-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-l-black.png"></TD>
    <TD><a href="icons-png/arrow-u-l-black.png">arrow-u-l-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-l-white.png"></TD>
    <TD><a href="icons-png/arrow-u-l-white.png">arrow-u-l-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-r-black.png"></TD>
    <TD><a href="icons-png/arrow-u-r-black.png">arrow-u-r-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-r-white.png"></TD>
    <TD><a href="icons-png/arrow-u-r-white.png">arrow-u-r-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-white.png"></TD>
    <TD><a href="icons-png/arrow-u-white.png">arrow-u-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/audio-black.png"></TD>
    <TD><a href="icons-png/audio-black.png">audio-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/audio-white.png"></TD>
    <TD><a href="icons-png/audio-white.png">audio-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/bars-black.png"></TD>
    <TD><a href="icons-png/bars-black.png">bars-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/bars-white.png"></TD>
    <TD><a href="icons-png/bars-white.png">bars-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/bullets-black.png"></TD>
    <TD><a href="icons-png/bullets-black.png">bullets-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/bullets-white.png"></TD>
    <TD><a href="icons-png/bullets-white.png">bullets-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/calendar-black.png"></TD>
    <TD><a href="icons-png/calendar-black.png">calendar-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/calendar-white.png"></TD>
    <TD><a href="icons-png/calendar-white.png">calendar-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/camera-black.png"></TD>
    <TD><a href="icons-png/camera-black.png">camera-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/camera-white.png"></TD>
    <TD><a href="icons-png/camera-white.png">camera-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-d-black.png"></TD>
    <TD><a href="icons-png/carat-d-black.png">carat-d-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-d-white.png"></TD>
    <TD><a href="icons-png/carat-d-white.png">carat-d-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-l-black.png"></TD>
    <TD><a href="icons-png/carat-l-black.png">carat-l-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-l-white.png"></TD>
    <TD><a href="icons-png/carat-l-white.png">carat-l-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-r-black.png"></TD>
    <TD><a href="icons-png/carat-r-black.png">carat-r-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-r-white.png"></TD>
    <TD><a href="icons-png/carat-r-white.png">carat-r-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-u-black.png"></TD>
    <TD><a href="icons-png/carat-u-black.png">carat-u-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-u-white.png"></TD>
    <TD><a href="icons-png/carat-u-white.png">carat-u-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/check-black.png"></TD>
    <TD><a href="icons-png/check-black.png">check-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/check-white.png"></TD>
    <TD><a href="icons-png/check-white.png">check-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/clock-black.png"></TD>
    <TD><a href="icons-png/clock-black.png">clock-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/clock-white.png"></TD>
    <TD><a href="icons-png/clock-white.png">clock-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/cloud-black.png"></TD>
    <TD><a href="icons-png/cloud-black.png">cloud-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/cloud-white.png"></TD>
    <TD><a href="icons-png/cloud-white.png">cloud-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/comment-black.png"></TD>
    <TD><a href="icons-png/comment-black.png">comment-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/comment-white.png"></TD>
    <TD><a href="icons-png/comment-white.png">comment-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/delete-black.png"></TD>
    <TD><a href="icons-png/delete-black.png">delete-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/delete-white.png"></TD>
    <TD><a href="icons-png/delete-white.png">delete-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/edit-black.png"></TD>
    <TD><a href="icons-png/edit-black.png">edit-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/edit-white.png"></TD>
    <TD><a href="icons-png/edit-white.png">edit-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/eye-black.png"></TD>
    <TD><a href="icons-png/eye-black.png">eye-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/eye-white.png"></TD>
    <TD><a href="icons-png/eye-white.png">eye-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/forbidden-black.png"></TD>
    <TD><a href="icons-png/forbidden-black.png">forbidden-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/forbidden-white.png"></TD>
    <TD><a href="icons-png/forbidden-white.png">forbidden-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/forward-black.png"></TD>
    <TD><a href="icons-png/forward-black.png">forward-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/forward-white.png"></TD>
    <TD><a href="icons-png/forward-white.png">forward-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/gear-black.png"></TD>
    <TD><a href="icons-png/gear-black.png">gear-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/gear-white.png"></TD>
    <TD><a href="icons-png/gear-white.png">gear-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/grid-black.png"></TD>
    <TD><a href="icons-png/grid-black.png">grid-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/grid-white.png"></TD>
    <TD><a href="icons-png/grid-white.png">grid-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/heart-black.png"></TD>
    <TD><a href="icons-png/heart-black.png">heart-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/heart-white.png"></TD>
    <TD><a href="icons-png/heart-white.png">heart-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/home-black.png"></TD>
    <TD><a href="icons-png/home-black.png">home-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/home-white.png"></TD>
    <TD><a href="icons-png/home-white.png">home-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/info-black.png"></TD>
    <TD><a href="icons-png/info-black.png">info-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/info-white.png"></TD>
    <TD><a href="icons-png/info-white.png">info-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/location-black.png"></TD>
    <TD><a href="icons-png/location-black.png">location-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/location-white.png"></TD>
    <TD><a href="icons-png/location-white.png">location-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/lock-black.png"></TD>
    <TD><a href="icons-png/lock-black.png">lock-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/lock-white.png"></TD>
    <TD><a href="icons-png/lock-white.png">lock-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/mail-black.png"></TD>
    <TD><a href="icons-png/mail-black.png">mail-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/mail-white.png"></TD>
    <TD><a href="icons-png/mail-white.png">mail-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/minus-black.png"></TD>
    <TD><a href="icons-png/minus-black.png">minus-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/minus-white.png"></TD>
    <TD><a href="icons-png/minus-white.png">minus-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/nav-back-black.png"></TD>
    <TD><a href="icons-png/nav-back-black.png">nav-back-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/nav-back-white.png"></TD>
    <TD><a href="icons-png/nav-back-white.png">nav-back-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/navigation-black.png"></TD>
    <TD><a href="icons-png/navigation-black.png">navigation-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/navigation-white.png"></TD>
    <TD><a href="icons-png/navigation-white.png">navigation-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/phone-black.png"></TD>
    <TD><a href="icons-png/phone-black.png">phone-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/phone-white.png"></TD>
    <TD><a href="icons-png/phone-white.png">phone-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/plus-black.png"></TD>
    <TD><a href="icons-png/plus-black.png">plus-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/plus-white.png"></TD>
    <TD><a href="icons-png/plus-white.png">plus-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/power-black.png"></TD>
    <TD><a href="icons-png/power-black.png">power-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/power-white.png"></TD>
    <TD><a href="icons-png/power-white.png">power-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/recycle-black.png"></TD>
    <TD><a href="icons-png/recycle-black.png">recycle-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/recycle-white.png"></TD>
    <TD><a href="icons-png/recycle-white.png">recycle-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/refresh-black.png"></TD>
    <TD><a href="icons-png/refresh-black.png">refresh-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/refresh-white.png"></TD>
    <TD><a href="icons-png/refresh-white.png">refresh-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/search-black.png"></TD>
    <TD><a href="icons-png/search-black.png">search-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/search-white.png"></TD>
    <TD><a href="icons-png/search-white.png">search-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/shop-black.png"></TD>
    <TD><a href="icons-png/shop-black.png">shop-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/shop-white.png"></TD>
    <TD><a href="icons-png/shop-white.png">shop-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/star-black.png"></TD>
    <TD><a href="icons-png/star-black.png">star-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/star-white.png"></TD>
    <TD><a href="icons-png/star-white.png">star-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/tag-black.png"></TD>
    <TD><a href="icons-png/tag-black.png">tag-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/tag-white.png"></TD>
    <TD><a href="icons-png/tag-white.png">tag-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/user-black.png"></TD>
    <TD><a href="icons-png/user-black.png">user-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/user-white.png"></TD>
    <TD><a href="icons-png/user-white.png">user-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/video-black.png"></TD>
    <TD><a href="icons-png/video-black.png">video-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/video-white.png"></TD>
    <TD><a href="icons-png/video-white.png">video-white.png</a></TD>
    <TD>icons-png</TD>
  </TABLE>
  <HR>
  <H3>Icons in Path: icons-svg</H3>
  <quote>
  <table border='2' style='background-color:#CACACA;margin-left:40px'>
    <tr>
       <td>
         <b>Icon</b>
       </td>
       <td>
         <b>File</b>
       </td>
       <td>
         <b>Folder</b>
       </td>
    </tr>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/action-black.svg"></TD>
    <TD><a href="icons-svg/action-black.svg">action-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/action-white.svg"></TD>
    <TD><a href="icons-svg/action-white.svg">action-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/action.svg"></TD>
    <TD><a href="icons-svg/action.svg">action.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/alert-black.svg"></TD>
    <TD><a href="icons-svg/alert-black.svg">alert-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/alert-white.svg"></TD>
    <TD><a href="icons-svg/alert-white.svg">alert-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/alert.svg"></TD>
    <TD><a href="icons-svg/alert.svg">alert.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-black.svg"></TD>
    <TD><a href="icons-svg/arrow-d-black.svg">arrow-d-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-l-black.svg"></TD>
    <TD><a href="icons-svg/arrow-d-l-black.svg">arrow-d-l-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-l-white.svg"></TD>
    <TD><a href="icons-svg/arrow-d-l-white.svg">arrow-d-l-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-r-black.svg"></TD>
    <TD><a href="icons-svg/arrow-d-r-black.svg">arrow-d-r-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-r-white.svg"></TD>
    <TD><a href="icons-svg/arrow-d-r-white.svg">arrow-d-r-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-white.svg"></TD>
    <TD><a href="icons-svg/arrow-d-white.svg">arrow-d-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d.svg"></TD>
    <TD><a href="icons-svg/arrow-d.svg">arrow-d.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-l-black.svg"></TD>
    <TD><a href="icons-svg/arrow-l-black.svg">arrow-l-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-l-white.svg"></TD>
    <TD><a href="icons-svg/arrow-l-white.svg">arrow-l-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-l.svg"></TD>
    <TD><a href="icons-svg/arrow-l.svg">arrow-l.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-r-black.svg"></TD>
    <TD><a href="icons-svg/arrow-r-black.svg">arrow-r-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-r-white.svg"></TD>
    <TD><a href="icons-svg/arrow-r-white.svg">arrow-r-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-r.svg"></TD>
    <TD><a href="icons-svg/arrow-r.svg">arrow-r.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-black.svg"></TD>
    <TD><a href="icons-svg/arrow-u-black.svg">arrow-u-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-l-black.svg"></TD>
    <TD><a href="icons-svg/arrow-u-l-black.svg">arrow-u-l-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-l-white.svg"></TD>
    <TD><a href="icons-svg/arrow-u-l-white.svg">arrow-u-l-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-l.svg"></TD>
    <TD><a href="icons-svg/arrow-u-l.svg">arrow-u-l.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-r-black.svg"></TD>
    <TD><a href="icons-svg/arrow-u-r-black.svg">arrow-u-r-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-r-white.svg"></TD>
    <TD><a href="icons-svg/arrow-u-r-white.svg">arrow-u-r-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-r.svg"></TD>
    <TD><a href="icons-svg/arrow-u-r.svg">arrow-u-r.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-white.svg"></TD>
    <TD><a href="icons-svg/arrow-u-white.svg">arrow-u-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u.svg"></TD>
    <TD><a href="icons-svg/arrow-u.svg">arrow-u.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/audio-black.svg"></TD>
    <TD><a href="icons-svg/audio-black.svg">audio-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/audio-white.svg"></TD>
    <TD><a href="icons-svg/audio-white.svg">audio-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/audio.svg"></TD>
    <TD><a href="icons-svg/audio.svg">audio.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bars-black.svg"></TD>
    <TD><a href="icons-svg/bars-black.svg">bars-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bars-white.svg"></TD>
    <TD><a href="icons-svg/bars-white.svg">bars-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bars.svg"></TD>
    <TD><a href="icons-svg/bars.svg">bars.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bullets-black.svg"></TD>
    <TD><a href="icons-svg/bullets-black.svg">bullets-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bullets-white.svg"></TD>
    <TD><a href="icons-svg/bullets-white.svg">bullets-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bullets.svg"></TD>
    <TD><a href="icons-svg/bullets.svg">bullets.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/calendar-black.svg"></TD>
    <TD><a href="icons-svg/calendar-black.svg">calendar-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/calendar-white.svg"></TD>
    <TD><a href="icons-svg/calendar-white.svg">calendar-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/calendar.svg"></TD>
    <TD><a href="icons-svg/calendar.svg">calendar.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/camera-black.svg"></TD>
    <TD><a href="icons-svg/camera-black.svg">camera-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/camera-white.svg"></TD>
    <TD><a href="icons-svg/camera-white.svg">camera-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/camera.svg"></TD>
    <TD><a href="icons-svg/camera.svg">camera.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-d-black.svg"></TD>
    <TD><a href="icons-svg/carat-d-black.svg">carat-d-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-d-white.svg"></TD>
    <TD><a href="icons-svg/carat-d-white.svg">carat-d-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-d.svg"></TD>
    <TD><a href="icons-svg/carat-d.svg">carat-d.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-l-black.svg"></TD>
    <TD><a href="icons-svg/carat-l-black.svg">carat-l-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-l-white.svg"></TD>
    <TD><a href="icons-svg/carat-l-white.svg">carat-l-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-l.svg"></TD>
    <TD><a href="icons-svg/carat-l.svg">carat-l.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-r-black.svg"></TD>
    <TD><a href="icons-svg/carat-r-black.svg">carat-r-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-r-white.svg"></TD>
    <TD><a href="icons-svg/carat-r-white.svg">carat-r-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-r.svg"></TD>
    <TD><a href="icons-svg/carat-r.svg">carat-r.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-u-black.svg"></TD>
    <TD><a href="icons-svg/carat-u-black.svg">carat-u-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-u-white.svg"></TD>
    <TD><a href="icons-svg/carat-u-white.svg">carat-u-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-u.svg"></TD>
    <TD><a href="icons-svg/carat-u.svg">carat-u.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/check-black.svg"></TD>
    <TD><a href="icons-svg/check-black.svg">check-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/check-white.svg"></TD>
    <TD><a href="icons-svg/check-white.svg">check-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/check.svg"></TD>
    <TD><a href="icons-svg/check.svg">check.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/clock-black.svg"></TD>
    <TD><a href="icons-svg/clock-black.svg">clock-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/clock-white.svg"></TD>
    <TD><a href="icons-svg/clock-white.svg">clock-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/clock.svg"></TD>
    <TD><a href="icons-svg/clock.svg">clock.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/cloud-black.svg"></TD>
    <TD><a href="icons-svg/cloud-black.svg">cloud-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/cloud-white.svg"></TD>
    <TD><a href="icons-svg/cloud-white.svg">cloud-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/cloud.svg"></TD>
    <TD><a href="icons-svg/cloud.svg">cloud.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/comment-black.svg"></TD>
    <TD><a href="icons-svg/comment-black.svg">comment-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/comment-white.svg"></TD>
    <TD><a href="icons-svg/comment-white.svg">comment-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/comment.svg"></TD>
    <TD><a href="icons-svg/comment.svg">comment.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/delete-black.svg"></TD>
    <TD><a href="icons-svg/delete-black.svg">delete-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/delete-white.svg"></TD>
    <TD><a href="icons-svg/delete-white.svg">delete-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/delete.svg"></TD>
    <TD><a href="icons-svg/delete.svg">delete.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/edit-black.svg"></TD>
    <TD><a href="icons-svg/edit-black.svg">edit-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/edit-white.svg"></TD>
    <TD><a href="icons-svg/edit-white.svg">edit-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/edit.svg"></TD>
    <TD><a href="icons-svg/edit.svg">edit.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/eye-black.svg"></TD>
    <TD><a href="icons-svg/eye-black.svg">eye-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/eye-white.svg"></TD>
    <TD><a href="icons-svg/eye-white.svg">eye-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/eye.svg"></TD>
    <TD><a href="icons-svg/eye.svg">eye.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-backward-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-backward-black.svg">fa-audio-backward-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-backward-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-backward-white.svg">fa-audio-backward-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-backward.svg"></TD>
    <TD><a href="icons-svg/fa-audio-backward.svg">fa-audio-backward.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-eject-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-eject-black.svg">fa-audio-eject-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-eject-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-eject-white.svg">fa-audio-eject-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-eject.svg"></TD>
    <TD><a href="icons-svg/fa-audio-eject.svg">fa-audio-eject.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-forward-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-forward-black.svg">fa-audio-forward-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-forward-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-forward-white.svg">fa-audio-forward-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-forward.svg"></TD>
    <TD><a href="icons-svg/fa-audio-forward.svg">fa-audio-forward.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-pause-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-pause-black.svg">fa-audio-pause-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-pause-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-pause-white.svg">fa-audio-pause-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-pause.svg"></TD>
    <TD><a href="icons-svg/fa-audio-pause.svg">fa-audio-pause.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-play-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-play-black.svg">fa-audio-play-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-play-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-play-white.svg">fa-audio-play-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-play.svg"></TD>
    <TD><a href="icons-svg/fa-audio-play.svg">fa-audio-play.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-record-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-record-black.svg">fa-audio-record-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-record-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-record-white.svg">fa-audio-record-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-record.svg"></TD>
    <TD><a href="icons-svg/fa-audio-record.svg">fa-audio-record.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-stop-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-stop-black.svg">fa-audio-stop-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-stop-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-stop-white.svg">fa-audio-stop-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-stop.svg"></TD>
    <TD><a href="icons-svg/fa-audio-stop.svg">fa-audio-stop.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-barcode-black.svg"></TD>
    <TD><a href="icons-svg/fa-barcode-black.svg">fa-barcode-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-barcode-white.svg"></TD>
    <TD><a href="icons-svg/fa-barcode-white.svg">fa-barcode-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-barcode.svg"></TD>
    <TD><a href="icons-svg/fa-barcode.svg">fa-barcode.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-book-black.svg"></TD>
    <TD><a href="icons-svg/fa-book-black.svg">fa-book-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-book-white.svg"></TD>
    <TD><a href="icons-svg/fa-book-white.svg">fa-book-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-book.svg"></TD>
    <TD><a href="icons-svg/fa-book.svg">fa-book.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-camera-black.svg"></TD>
    <TD><a href="icons-svg/fa-camera-black.svg">fa-camera-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-camera-white.svg"></TD>
    <TD><a href="icons-svg/fa-camera-white.svg">fa-camera-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-camera.svg"></TD>
    <TD><a href="icons-svg/fa-camera.svg">fa-camera.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-cancel-black.svg"></TD>
    <TD><a href="icons-svg/fa-cancel-black.svg">fa-cancel-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-cancel-red.svg"></TD>
    <TD><a href="icons-svg/fa-cancel-red.svg">fa-cancel-red.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-cancel-white.svg"></TD>
    <TD><a href="icons-svg/fa-cancel-white.svg">fa-cancel-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-cancel.svg"></TD>
    <TD><a href="icons-svg/fa-cancel.svg">fa-cancel.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-chart-pie-black.svg"></TD>
    <TD><a href="icons-svg/fa-chart-pie-black.svg">fa-chart-pie-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-chart-pie-white.svg"></TD>
    <TD><a href="icons-svg/fa-chart-pie-white.svg">fa-chart-pie-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-chart-pie.svg"></TD>
    <TD><a href="icons-svg/fa-chart-pie.svg">fa-chart-pie.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-copy-black.svg"></TD>
    <TD><a href="icons-svg/fa-copy-black.svg">fa-copy-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-copy-white.svg"></TD>
    <TD><a href="icons-svg/fa-copy-white.svg">fa-copy-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-copy.svg"></TD>
    <TD><a href="icons-svg/fa-copy.svg">fa-copy.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-edit-black.svg"></TD>
    <TD><a href="icons-svg/fa-edit-black.svg">fa-edit-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-edit-white.svg"></TD>
    <TD><a href="icons-svg/fa-edit-white.svg">fa-edit-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-edit.svg"></TD>
    <TD><a href="icons-svg/fa-edit.svg">fa-edit.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-enumeration-black.svg"></TD>
    <TD><a href="icons-svg/fa-enumeration-black.svg">fa-enumeration-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-enumeration-white.svg"></TD>
    <TD><a href="icons-svg/fa-enumeration-white.svg">fa-enumeration-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-enumeration.svg"></TD>
    <TD><a href="icons-svg/fa-enumeration.svg">fa-enumeration.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-envelope-black.svg"></TD>
    <TD><a href="icons-svg/fa-envelope-black.svg">fa-envelope-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-envelope-white.svg"></TD>
    <TD><a href="icons-svg/fa-envelope-white.svg">fa-envelope-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-envelope.svg"></TD>
    <TD><a href="icons-svg/fa-envelope.svg">fa-envelope.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-archive-black.svg"></TD>
    <TD><a href="icons-svg/fa-file-archive-black.svg">fa-file-archive-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-archive-white.svg"></TD>
    <TD><a href="icons-svg/fa-file-archive-white.svg">fa-file-archive-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-archive.svg"></TD>
    <TD><a href="icons-svg/fa-file-archive.svg">fa-file-archive.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-save-black.svg"></TD>
    <TD><a href="icons-svg/fa-file-save-black.svg">fa-file-save-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-save-white.svg"></TD>
    <TD><a href="icons-svg/fa-file-save-white.svg">fa-file-save-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-save.svg"></TD>
    <TD><a href="icons-svg/fa-file-save.svg">fa-file-save.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-folder-open-black.svg"></TD>
    <TD><a href="icons-svg/fa-folder-open-black.svg">fa-folder-open-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-folder-open-white.svg"></TD>
    <TD><a href="icons-svg/fa-folder-open-white.svg">fa-folder-open-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-folder-open.svg"></TD>
    <TD><a href="icons-svg/fa-folder-open.svg">fa-folder-open.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-font-black.svg"></TD>
    <TD><a href="icons-svg/fa-font-black.svg">fa-font-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-font-white.svg"></TD>
    <TD><a href="icons-svg/fa-font-white.svg">fa-font-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-font.svg"></TD>
    <TD><a href="icons-svg/fa-font.svg">fa-font.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-globe-black.svg"></TD>
    <TD><a href="icons-svg/fa-globe-black.svg">fa-globe-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-globe-white.svg"></TD>
    <TD><a href="icons-svg/fa-globe-white.svg">fa-globe-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-globe.svg"></TD>
    <TD><a href="icons-svg/fa-globe.svg">fa-globe.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-hamburger-icon-black.svg"></TD>
    <TD><a href="icons-svg/fa-hamburger-icon-black.svg">fa-hamburger-icon-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-hamburger-icon-white.svg"></TD>
    <TD><a href="icons-svg/fa-hamburger-icon-white.svg">fa-hamburger-icon-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-hamburger-icon.svg"></TD>
    <TD><a href="icons-svg/fa-hamburger-icon.svg">fa-hamburger-icon.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-harddisk-black.svg"></TD>
    <TD><a href="icons-svg/fa-harddisk-black.svg">fa-harddisk-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-harddisk-white.svg"></TD>
    <TD><a href="icons-svg/fa-harddisk-white.svg">fa-harddisk-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-harddisk.svg"></TD>
    <TD><a href="icons-svg/fa-harddisk.svg">fa-harddisk.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-key-black.svg"></TD>
    <TD><a href="icons-svg/fa-key-black.svg">fa-key-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-key-white.svg"></TD>
    <TD><a href="icons-svg/fa-key-white.svg">fa-key-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-key.svg"></TD>
    <TD><a href="icons-svg/fa-key.svg">fa-key.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-language-black.svg"></TD>
    <TD><a href="icons-svg/fa-language-black.svg">fa-language-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-language-white.svg"></TD>
    <TD><a href="icons-svg/fa-language-white.svg">fa-language-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-language.svg"></TD>
    <TD><a href="icons-svg/fa-language.svg">fa-language.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-line-chart-black.svg"></TD>
    <TD><a href="icons-svg/fa-line-chart-black.svg">fa-line-chart-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-line-chart-white.svg"></TD>
    <TD><a href="icons-svg/fa-line-chart-white.svg">fa-line-chart-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-line-chart.svg"></TD>
    <TD><a href="icons-svg/fa-line-chart.svg">fa-line-chart.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-list-black.svg"></TD>
    <TD><a href="icons-svg/fa-list-black.svg">fa-list-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-list-white.svg"></TD>
    <TD><a href="icons-svg/fa-list-white.svg">fa-list-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-list.svg"></TD>
    <TD><a href="icons-svg/fa-list.svg">fa-list.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-minus-square-black.svg"></TD>
    <TD><a href="icons-svg/fa-minus-square-black.svg">fa-minus-square-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-minus-square-white.svg"></TD>
    <TD><a href="icons-svg/fa-minus-square-white.svg">fa-minus-square-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-minus-square.svg"></TD>
    <TD><a href="icons-svg/fa-minus-square.svg">fa-minus-square.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-paste-black.svg"></TD>
    <TD><a href="icons-svg/fa-paste-black.svg">fa-paste-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-paste-white.svg"></TD>
    <TD><a href="icons-svg/fa-paste-white.svg">fa-paste-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-paste.svg"></TD>
    <TD><a href="icons-svg/fa-paste.svg">fa-paste.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-picture-black.svg"></TD>
    <TD><a href="icons-svg/fa-picture-black.svg">fa-picture-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-picture-white.svg"></TD>
    <TD><a href="icons-svg/fa-picture-white.svg">fa-picture-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-picture.svg"></TD>
    <TD><a href="icons-svg/fa-picture.svg">fa-picture.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-plus-square-black.svg"></TD>
    <TD><a href="icons-svg/fa-plus-square-black.svg">fa-plus-square-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-plus-square-white.svg"></TD>
    <TD><a href="icons-svg/fa-plus-square-white.svg">fa-plus-square-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-plus-square.svg"></TD>
    <TD><a href="icons-svg/fa-plus-square.svg">fa-plus-square.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-print-black.svg"></TD>
    <TD><a href="icons-svg/fa-print-black.svg">fa-print-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-print-white.svg"></TD>
    <TD><a href="icons-svg/fa-print-white.svg">fa-print-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-print.svg"></TD>
    <TD><a href="icons-svg/fa-print.svg">fa-print.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-qrcode-black.svg"></TD>
    <TD><a href="icons-svg/fa-qrcode-black.svg">fa-qrcode-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-qrcode-white.svg"></TD>
    <TD><a href="icons-svg/fa-qrcode-white.svg">fa-qrcode-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-qrcode.svg"></TD>
    <TD><a href="icons-svg/fa-qrcode.svg">fa-qrcode.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-settings-black.svg"></TD>
    <TD><a href="icons-svg/fa-settings-black.svg">fa-settings-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-settings-white.svg"></TD>
    <TD><a href="icons-svg/fa-settings-white.svg">fa-settings-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-settings.svg"></TD>
    <TD><a href="icons-svg/fa-settings.svg">fa-settings.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signin-black.svg"></TD>
    <TD><a href="icons-svg/fa-signin-black.svg">fa-signin-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signin-white.svg"></TD>
    <TD><a href="icons-svg/fa-signin-white.svg">fa-signin-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signin.svg"></TD>
    <TD><a href="icons-svg/fa-signin.svg">fa-signin.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signout-black.svg"></TD>
    <TD><a href="icons-svg/fa-signout-black.svg">fa-signout-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signout-white.svg"></TD>
    <TD><a href="icons-svg/fa-signout-white.svg">fa-signout-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signout.svg"></TD>
    <TD><a href="icons-svg/fa-signout.svg">fa-signout.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-sort-black.svg"></TD>
    <TD><a href="icons-svg/fa-sort-black.svg">fa-sort-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-sort-white.svg"></TD>
    <TD><a href="icons-svg/fa-sort-white.svg">fa-sort-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-sort.svg"></TD>
    <TD><a href="icons-svg/fa-sort.svg">fa-sort.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-spinner-black.svg"></TD>
    <TD><a href="icons-svg/fa-spinner-black.svg">fa-spinner-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-spinner-white.svg"></TD>
    <TD><a href="icons-svg/fa-spinner-white.svg">fa-spinner-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-spinner.svg"></TD>
    <TD><a href="icons-svg/fa-spinner.svg">fa-spinner.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-tablet-black.svg"></TD>
    <TD><a href="icons-svg/fa-tablet-black.svg">fa-tablet-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-tablet-white.svg"></TD>
    <TD><a href="icons-svg/fa-tablet-white.svg">fa-tablet-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-tablet.svg"></TD>
    <TD><a href="icons-svg/fa-tablet.svg">fa-tablet.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-trash-black.svg"></TD>
    <TD><a href="icons-svg/fa-trash-black.svg">fa-trash-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-trash-white.svg"></TD>
    <TD><a href="icons-svg/fa-trash-white.svg">fa-trash-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-trash.svg"></TD>
    <TD><a href="icons-svg/fa-trash.svg">fa-trash.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-truck-black.svg"></TD>
    <TD><a href="icons-svg/fa-truck-black.svg">fa-truck-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-truck-white.svg"></TD>
    <TD><a href="icons-svg/fa-truck-white.svg">fa-truck-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-truck.svg"></TD>
    <TD><a href="icons-svg/fa-truck.svg">fa-truck.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-undo-black.svg"></TD>
    <TD><a href="icons-svg/fa-undo-black.svg">fa-undo-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-undo-white.svg"></TD>
    <TD><a href="icons-svg/fa-undo-white.svg">fa-undo-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-undo.svg"></TD>
    <TD><a href="icons-svg/fa-undo.svg">fa-undo.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-vr-headset-black.svg"></TD>
    <TD><a href="icons-svg/fa-vr-headset-black.svg">fa-vr-headset-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-vr-headset-white.svg"></TD>
    <TD><a href="icons-svg/fa-vr-headset-white.svg">fa-vr-headset-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-vr-headset.svg"></TD>
    <TD><a href="icons-svg/fa-vr-headset.svg">fa-vr-headset.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forbidden-black.svg"></TD>
    <TD><a href="icons-svg/forbidden-black.svg">forbidden-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forbidden-white.svg"></TD>
    <TD><a href="icons-svg/forbidden-white.svg">forbidden-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forbidden.svg"></TD>
    <TD><a href="icons-svg/forbidden.svg">forbidden.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forward-black.svg"></TD>
    <TD><a href="icons-svg/forward-black.svg">forward-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forward-white.svg"></TD>
    <TD><a href="icons-svg/forward-white.svg">forward-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forward.svg"></TD>
    <TD><a href="icons-svg/forward.svg">forward.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/gear-black.svg"></TD>
    <TD><a href="icons-svg/gear-black.svg">gear-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/gear-white.svg"></TD>
    <TD><a href="icons-svg/gear-white.svg">gear-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/gear.svg"></TD>
    <TD><a href="icons-svg/gear.svg">gear.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/grid-black.svg"></TD>
    <TD><a href="icons-svg/grid-black.svg">grid-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/grid-white.svg"></TD>
    <TD><a href="icons-svg/grid-white.svg">grid-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/grid.svg"></TD>
    <TD><a href="icons-svg/grid.svg">grid.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/heart-black.svg"></TD>
    <TD><a href="icons-svg/heart-black.svg">heart-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/heart-white.svg"></TD>
    <TD><a href="icons-svg/heart-white.svg">heart-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/heart.svg"></TD>
    <TD><a href="icons-svg/heart.svg">heart.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/home-black.svg"></TD>
    <TD><a href="icons-svg/home-black.svg">home-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/home-white.svg"></TD>
    <TD><a href="icons-svg/home-white.svg">home-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/home.svg"></TD>
    <TD><a href="icons-svg/home.svg">home.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-dd-black.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-dd-black.svg">i4m-carat-dd-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-dd-white.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-dd-white.svg">i4m-carat-dd-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-dd.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-dd.svg">i4m-carat-dd.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-ll-black.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-ll-black.svg">i4m-carat-ll-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-ll-white.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-ll-white.svg">i4m-carat-ll-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-ll.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-ll.svg">i4m-carat-ll.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-rr-black.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-rr-black.svg">i4m-carat-rr-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-rr-white.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-rr-white.svg">i4m-carat-rr-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-rr.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-rr.svg">i4m-carat-rr.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-uu-black.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-uu-black.svg">i4m-carat-uu-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-uu-white.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-uu-white.svg">i4m-carat-uu-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-uu.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-uu.svg">i4m-carat-uu.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal-black.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal-black.svg">i4m-wiki2reveal-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal-frame-black.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal-frame-black.svg">i4m-wiki2reveal-frame-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal-frame-white.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal-frame-white.svg">i4m-wiki2reveal-frame-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal-frame.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal-frame.svg">i4m-wiki2reveal-frame.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal-white.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal-white.svg">i4m-wiki2reveal-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal.svg">i4m-wiki2reveal.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/info-black.svg"></TD>
    <TD><a href="icons-svg/info-black.svg">info-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/info-white.svg"></TD>
    <TD><a href="icons-svg/info-white.svg">info-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/info.svg"></TD>
    <TD><a href="icons-svg/info.svg">info.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/location-black.svg"></TD>
    <TD><a href="icons-svg/location-black.svg">location-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/location-white.svg"></TD>
    <TD><a href="icons-svg/location-white.svg">location-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/location.svg"></TD>
    <TD><a href="icons-svg/location.svg">location.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/lock-black.svg"></TD>
    <TD><a href="icons-svg/lock-black.svg">lock-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/lock-white.svg"></TD>
    <TD><a href="icons-svg/lock-white.svg">lock-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/lock.svg"></TD>
    <TD><a href="icons-svg/lock.svg">lock.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/mail-black.svg"></TD>
    <TD><a href="icons-svg/mail-black.svg">mail-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/mail-white.svg"></TD>
    <TD><a href="icons-svg/mail-white.svg">mail-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/mail.svg"></TD>
    <TD><a href="icons-svg/mail.svg">mail.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/minus-black.svg"></TD>
    <TD><a href="icons-svg/minus-black.svg">minus-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/minus-white.svg"></TD>
    <TD><a href="icons-svg/minus-white.svg">minus-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/minus.svg"></TD>
    <TD><a href="icons-svg/minus.svg">minus.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/nav-back-black.svg"></TD>
    <TD><a href="icons-svg/nav-back-black.svg">nav-back-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/nav-back-white.svg"></TD>
    <TD><a href="icons-svg/nav-back-white.svg">nav-back-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/nav-back.svg"></TD>
    <TD><a href="icons-svg/nav-back.svg">nav-back.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/navigation-black.svg"></TD>
    <TD><a href="icons-svg/navigation-black.svg">navigation-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/navigation-white.svg"></TD>
    <TD><a href="icons-svg/navigation-white.svg">navigation-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/navigation.svg"></TD>
    <TD><a href="icons-svg/navigation.svg">navigation.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/phone-black.svg"></TD>
    <TD><a href="icons-svg/phone-black.svg">phone-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/phone-white.svg"></TD>
    <TD><a href="icons-svg/phone-white.svg">phone-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/phone.svg"></TD>
    <TD><a href="icons-svg/phone.svg">phone.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/plus-black.svg"></TD>
    <TD><a href="icons-svg/plus-black.svg">plus-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/plus-white.svg"></TD>
    <TD><a href="icons-svg/plus-white.svg">plus-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/plus.svg"></TD>
    <TD><a href="icons-svg/plus.svg">plus.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/power-black.svg"></TD>
    <TD><a href="icons-svg/power-black.svg">power-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/power-white.svg"></TD>
    <TD><a href="icons-svg/power-white.svg">power-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/power.svg"></TD>
    <TD><a href="icons-svg/power.svg">power.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/recycle-black.svg"></TD>
    <TD><a href="icons-svg/recycle-black.svg">recycle-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/recycle-white.svg"></TD>
    <TD><a href="icons-svg/recycle-white.svg">recycle-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/recycle.svg"></TD>
    <TD><a href="icons-svg/recycle.svg">recycle.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/refresh-black.svg"></TD>
    <TD><a href="icons-svg/refresh-black.svg">refresh-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/refresh-white.svg"></TD>
    <TD><a href="icons-svg/refresh-white.svg">refresh-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/refresh.svg"></TD>
    <TD><a href="icons-svg/refresh.svg">refresh.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/search-black.svg"></TD>
    <TD><a href="icons-svg/search-black.svg">search-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/search-white.svg"></TD>
    <TD><a href="icons-svg/search-white.svg">search-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/search.svg"></TD>
    <TD><a href="icons-svg/search.svg">search.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/shop-black.svg"></TD>
    <TD><a href="icons-svg/shop-black.svg">shop-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/shop-white.svg"></TD>
    <TD><a href="icons-svg/shop-white.svg">shop-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/shop.svg"></TD>
    <TD><a href="icons-svg/shop.svg">shop.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/star-black.svg"></TD>
    <TD><a href="icons-svg/star-black.svg">star-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/star-white.svg"></TD>
    <TD><a href="icons-svg/star-white.svg">star-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/star.svg"></TD>
    <TD><a href="icons-svg/star.svg">star.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/tag-black.svg"></TD>
    <TD><a href="icons-svg/tag-black.svg">tag-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/tag-white.svg"></TD>
    <TD><a href="icons-svg/tag-white.svg">tag-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/tag.svg"></TD>
    <TD><a href="icons-svg/tag.svg">tag.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/user-black.svg"></TD>
    <TD><a href="icons-svg/user-black.svg">user-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/user-white.svg"></TD>
    <TD><a href="icons-svg/user-white.svg">user-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/user.svg"></TD>
    <TD><a href="icons-svg/user.svg">user.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/video-black.svg"></TD>
    <TD><a href="icons-svg/video-black.svg">video-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/video-white.svg"></TD>
    <TD><a href="icons-svg/video-white.svg">video-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/video.svg"></TD>
    <TD><a href="icons-svg/video.svg">video.svg</a></TD>
    <TD>icons-svg</TD>
  </TABLE>
  <HR>
  <H3>Icons in Path: icons-png</H3>
  <quote>
  <table border='2' style='background-color:#CACACA;margin-left:40px'>
    <tr>
       <td>
         <b>Icon</b>
       </td>
       <td>
         <b>File</b>
       </td>
       <td>
         <b>Folder</b>
       </td>
    </tr>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/action-black.png"></TD>
    <TD><a href="icons-png/action-black.png">action-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/action-white.png"></TD>
    <TD><a href="icons-png/action-white.png">action-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/alert-black.png"></TD>
    <TD><a href="icons-png/alert-black.png">alert-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/alert-white.png"></TD>
    <TD><a href="icons-png/alert-white.png">alert-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-black.png"></TD>
    <TD><a href="icons-png/arrow-d-black.png">arrow-d-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-l-black.png"></TD>
    <TD><a href="icons-png/arrow-d-l-black.png">arrow-d-l-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-l-white.png"></TD>
    <TD><a href="icons-png/arrow-d-l-white.png">arrow-d-l-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-r-black.png"></TD>
    <TD><a href="icons-png/arrow-d-r-black.png">arrow-d-r-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-r-white.png"></TD>
    <TD><a href="icons-png/arrow-d-r-white.png">arrow-d-r-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-d-white.png"></TD>
    <TD><a href="icons-png/arrow-d-white.png">arrow-d-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-l-black.png"></TD>
    <TD><a href="icons-png/arrow-l-black.png">arrow-l-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-l-white.png"></TD>
    <TD><a href="icons-png/arrow-l-white.png">arrow-l-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-r-black.png"></TD>
    <TD><a href="icons-png/arrow-r-black.png">arrow-r-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-r-white.png"></TD>
    <TD><a href="icons-png/arrow-r-white.png">arrow-r-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-black.png"></TD>
    <TD><a href="icons-png/arrow-u-black.png">arrow-u-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-l-black.png"></TD>
    <TD><a href="icons-png/arrow-u-l-black.png">arrow-u-l-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-l-white.png"></TD>
    <TD><a href="icons-png/arrow-u-l-white.png">arrow-u-l-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-r-black.png"></TD>
    <TD><a href="icons-png/arrow-u-r-black.png">arrow-u-r-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-r-white.png"></TD>
    <TD><a href="icons-png/arrow-u-r-white.png">arrow-u-r-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/arrow-u-white.png"></TD>
    <TD><a href="icons-png/arrow-u-white.png">arrow-u-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/audio-black.png"></TD>
    <TD><a href="icons-png/audio-black.png">audio-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/audio-white.png"></TD>
    <TD><a href="icons-png/audio-white.png">audio-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/bars-black.png"></TD>
    <TD><a href="icons-png/bars-black.png">bars-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/bars-white.png"></TD>
    <TD><a href="icons-png/bars-white.png">bars-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/bullets-black.png"></TD>
    <TD><a href="icons-png/bullets-black.png">bullets-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/bullets-white.png"></TD>
    <TD><a href="icons-png/bullets-white.png">bullets-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/calendar-black.png"></TD>
    <TD><a href="icons-png/calendar-black.png">calendar-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/calendar-white.png"></TD>
    <TD><a href="icons-png/calendar-white.png">calendar-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/camera-black.png"></TD>
    <TD><a href="icons-png/camera-black.png">camera-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/camera-white.png"></TD>
    <TD><a href="icons-png/camera-white.png">camera-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-d-black.png"></TD>
    <TD><a href="icons-png/carat-d-black.png">carat-d-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-d-white.png"></TD>
    <TD><a href="icons-png/carat-d-white.png">carat-d-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-l-black.png"></TD>
    <TD><a href="icons-png/carat-l-black.png">carat-l-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-l-white.png"></TD>
    <TD><a href="icons-png/carat-l-white.png">carat-l-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-r-black.png"></TD>
    <TD><a href="icons-png/carat-r-black.png">carat-r-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-r-white.png"></TD>
    <TD><a href="icons-png/carat-r-white.png">carat-r-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-u-black.png"></TD>
    <TD><a href="icons-png/carat-u-black.png">carat-u-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/carat-u-white.png"></TD>
    <TD><a href="icons-png/carat-u-white.png">carat-u-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/check-black.png"></TD>
    <TD><a href="icons-png/check-black.png">check-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/check-white.png"></TD>
    <TD><a href="icons-png/check-white.png">check-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/clock-black.png"></TD>
    <TD><a href="icons-png/clock-black.png">clock-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/clock-white.png"></TD>
    <TD><a href="icons-png/clock-white.png">clock-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/cloud-black.png"></TD>
    <TD><a href="icons-png/cloud-black.png">cloud-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/cloud-white.png"></TD>
    <TD><a href="icons-png/cloud-white.png">cloud-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/comment-black.png"></TD>
    <TD><a href="icons-png/comment-black.png">comment-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/comment-white.png"></TD>
    <TD><a href="icons-png/comment-white.png">comment-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/delete-black.png"></TD>
    <TD><a href="icons-png/delete-black.png">delete-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/delete-white.png"></TD>
    <TD><a href="icons-png/delete-white.png">delete-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/edit-black.png"></TD>
    <TD><a href="icons-png/edit-black.png">edit-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/edit-white.png"></TD>
    <TD><a href="icons-png/edit-white.png">edit-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/eye-black.png"></TD>
    <TD><a href="icons-png/eye-black.png">eye-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/eye-white.png"></TD>
    <TD><a href="icons-png/eye-white.png">eye-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/forbidden-black.png"></TD>
    <TD><a href="icons-png/forbidden-black.png">forbidden-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/forbidden-white.png"></TD>
    <TD><a href="icons-png/forbidden-white.png">forbidden-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/forward-black.png"></TD>
    <TD><a href="icons-png/forward-black.png">forward-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/forward-white.png"></TD>
    <TD><a href="icons-png/forward-white.png">forward-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/gear-black.png"></TD>
    <TD><a href="icons-png/gear-black.png">gear-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/gear-white.png"></TD>
    <TD><a href="icons-png/gear-white.png">gear-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/grid-black.png"></TD>
    <TD><a href="icons-png/grid-black.png">grid-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/grid-white.png"></TD>
    <TD><a href="icons-png/grid-white.png">grid-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/heart-black.png"></TD>
    <TD><a href="icons-png/heart-black.png">heart-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/heart-white.png"></TD>
    <TD><a href="icons-png/heart-white.png">heart-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/home-black.png"></TD>
    <TD><a href="icons-png/home-black.png">home-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/home-white.png"></TD>
    <TD><a href="icons-png/home-white.png">home-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/info-black.png"></TD>
    <TD><a href="icons-png/info-black.png">info-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/info-white.png"></TD>
    <TD><a href="icons-png/info-white.png">info-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/location-black.png"></TD>
    <TD><a href="icons-png/location-black.png">location-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/location-white.png"></TD>
    <TD><a href="icons-png/location-white.png">location-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/lock-black.png"></TD>
    <TD><a href="icons-png/lock-black.png">lock-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/lock-white.png"></TD>
    <TD><a href="icons-png/lock-white.png">lock-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/mail-black.png"></TD>
    <TD><a href="icons-png/mail-black.png">mail-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/mail-white.png"></TD>
    <TD><a href="icons-png/mail-white.png">mail-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/minus-black.png"></TD>
    <TD><a href="icons-png/minus-black.png">minus-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/minus-white.png"></TD>
    <TD><a href="icons-png/minus-white.png">minus-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/nav-back-black.png"></TD>
    <TD><a href="icons-png/nav-back-black.png">nav-back-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/nav-back-white.png"></TD>
    <TD><a href="icons-png/nav-back-white.png">nav-back-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/navigation-black.png"></TD>
    <TD><a href="icons-png/navigation-black.png">navigation-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/navigation-white.png"></TD>
    <TD><a href="icons-png/navigation-white.png">navigation-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/phone-black.png"></TD>
    <TD><a href="icons-png/phone-black.png">phone-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/phone-white.png"></TD>
    <TD><a href="icons-png/phone-white.png">phone-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/plus-black.png"></TD>
    <TD><a href="icons-png/plus-black.png">plus-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/plus-white.png"></TD>
    <TD><a href="icons-png/plus-white.png">plus-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/power-black.png"></TD>
    <TD><a href="icons-png/power-black.png">power-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/power-white.png"></TD>
    <TD><a href="icons-png/power-white.png">power-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/recycle-black.png"></TD>
    <TD><a href="icons-png/recycle-black.png">recycle-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/recycle-white.png"></TD>
    <TD><a href="icons-png/recycle-white.png">recycle-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/refresh-black.png"></TD>
    <TD><a href="icons-png/refresh-black.png">refresh-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/refresh-white.png"></TD>
    <TD><a href="icons-png/refresh-white.png">refresh-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/search-black.png"></TD>
    <TD><a href="icons-png/search-black.png">search-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/search-white.png"></TD>
    <TD><a href="icons-png/search-white.png">search-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/shop-black.png"></TD>
    <TD><a href="icons-png/shop-black.png">shop-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/shop-white.png"></TD>
    <TD><a href="icons-png/shop-white.png">shop-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/star-black.png"></TD>
    <TD><a href="icons-png/star-black.png">star-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/star-white.png"></TD>
    <TD><a href="icons-png/star-white.png">star-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/tag-black.png"></TD>
    <TD><a href="icons-png/tag-black.png">tag-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/tag-white.png"></TD>
    <TD><a href="icons-png/tag-white.png">tag-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/user-black.png"></TD>
    <TD><a href="icons-png/user-black.png">user-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/user-white.png"></TD>
    <TD><a href="icons-png/user-white.png">user-white.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/video-black.png"></TD>
    <TD><a href="icons-png/video-black.png">video-black.png</a></TD>
    <TD>icons-png</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-png/video-white.png"></TD>
    <TD><a href="icons-png/video-white.png">video-white.png</a></TD>
    <TD>icons-png</TD>
  </TABLE>
  <HR>
  <H3>Icons in Path: icons-svg</H3>
  <quote>
  <table border='2' style='background-color:#CACACA;margin-left:40px'>
    <tr>
       <td>
         <b>Icon</b>
       </td>
       <td>
         <b>File</b>
       </td>
       <td>
         <b>Folder</b>
       </td>
    </tr>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/action-black.svg"></TD>
    <TD><a href="icons-svg/action-black.svg">action-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/action-white.svg"></TD>
    <TD><a href="icons-svg/action-white.svg">action-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/action.svg"></TD>
    <TD><a href="icons-svg/action.svg">action.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/alert-black.svg"></TD>
    <TD><a href="icons-svg/alert-black.svg">alert-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/alert-white.svg"></TD>
    <TD><a href="icons-svg/alert-white.svg">alert-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/alert.svg"></TD>
    <TD><a href="icons-svg/alert.svg">alert.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-black.svg"></TD>
    <TD><a href="icons-svg/arrow-d-black.svg">arrow-d-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-l-black.svg"></TD>
    <TD><a href="icons-svg/arrow-d-l-black.svg">arrow-d-l-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-l-white.svg"></TD>
    <TD><a href="icons-svg/arrow-d-l-white.svg">arrow-d-l-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-r-black.svg"></TD>
    <TD><a href="icons-svg/arrow-d-r-black.svg">arrow-d-r-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-r-white.svg"></TD>
    <TD><a href="icons-svg/arrow-d-r-white.svg">arrow-d-r-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d-white.svg"></TD>
    <TD><a href="icons-svg/arrow-d-white.svg">arrow-d-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-d.svg"></TD>
    <TD><a href="icons-svg/arrow-d.svg">arrow-d.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-l-black.svg"></TD>
    <TD><a href="icons-svg/arrow-l-black.svg">arrow-l-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-l-white.svg"></TD>
    <TD><a href="icons-svg/arrow-l-white.svg">arrow-l-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-l.svg"></TD>
    <TD><a href="icons-svg/arrow-l.svg">arrow-l.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-r-black.svg"></TD>
    <TD><a href="icons-svg/arrow-r-black.svg">arrow-r-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-r-white.svg"></TD>
    <TD><a href="icons-svg/arrow-r-white.svg">arrow-r-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-r.svg"></TD>
    <TD><a href="icons-svg/arrow-r.svg">arrow-r.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-black.svg"></TD>
    <TD><a href="icons-svg/arrow-u-black.svg">arrow-u-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-l-black.svg"></TD>
    <TD><a href="icons-svg/arrow-u-l-black.svg">arrow-u-l-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-l-white.svg"></TD>
    <TD><a href="icons-svg/arrow-u-l-white.svg">arrow-u-l-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-l.svg"></TD>
    <TD><a href="icons-svg/arrow-u-l.svg">arrow-u-l.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-r-black.svg"></TD>
    <TD><a href="icons-svg/arrow-u-r-black.svg">arrow-u-r-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-r-white.svg"></TD>
    <TD><a href="icons-svg/arrow-u-r-white.svg">arrow-u-r-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-r.svg"></TD>
    <TD><a href="icons-svg/arrow-u-r.svg">arrow-u-r.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u-white.svg"></TD>
    <TD><a href="icons-svg/arrow-u-white.svg">arrow-u-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/arrow-u.svg"></TD>
    <TD><a href="icons-svg/arrow-u.svg">arrow-u.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/audio-black.svg"></TD>
    <TD><a href="icons-svg/audio-black.svg">audio-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/audio-white.svg"></TD>
    <TD><a href="icons-svg/audio-white.svg">audio-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/audio.svg"></TD>
    <TD><a href="icons-svg/audio.svg">audio.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bars-black.svg"></TD>
    <TD><a href="icons-svg/bars-black.svg">bars-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bars-white.svg"></TD>
    <TD><a href="icons-svg/bars-white.svg">bars-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bars.svg"></TD>
    <TD><a href="icons-svg/bars.svg">bars.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bullets-black.svg"></TD>
    <TD><a href="icons-svg/bullets-black.svg">bullets-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bullets-white.svg"></TD>
    <TD><a href="icons-svg/bullets-white.svg">bullets-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/bullets.svg"></TD>
    <TD><a href="icons-svg/bullets.svg">bullets.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/calendar-black.svg"></TD>
    <TD><a href="icons-svg/calendar-black.svg">calendar-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/calendar-white.svg"></TD>
    <TD><a href="icons-svg/calendar-white.svg">calendar-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/calendar.svg"></TD>
    <TD><a href="icons-svg/calendar.svg">calendar.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/camera-black.svg"></TD>
    <TD><a href="icons-svg/camera-black.svg">camera-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/camera-white.svg"></TD>
    <TD><a href="icons-svg/camera-white.svg">camera-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/camera.svg"></TD>
    <TD><a href="icons-svg/camera.svg">camera.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-d-black.svg"></TD>
    <TD><a href="icons-svg/carat-d-black.svg">carat-d-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-d-white.svg"></TD>
    <TD><a href="icons-svg/carat-d-white.svg">carat-d-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-d.svg"></TD>
    <TD><a href="icons-svg/carat-d.svg">carat-d.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-l-black.svg"></TD>
    <TD><a href="icons-svg/carat-l-black.svg">carat-l-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-l-white.svg"></TD>
    <TD><a href="icons-svg/carat-l-white.svg">carat-l-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-l.svg"></TD>
    <TD><a href="icons-svg/carat-l.svg">carat-l.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-r-black.svg"></TD>
    <TD><a href="icons-svg/carat-r-black.svg">carat-r-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-r-white.svg"></TD>
    <TD><a href="icons-svg/carat-r-white.svg">carat-r-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-r.svg"></TD>
    <TD><a href="icons-svg/carat-r.svg">carat-r.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-u-black.svg"></TD>
    <TD><a href="icons-svg/carat-u-black.svg">carat-u-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-u-white.svg"></TD>
    <TD><a href="icons-svg/carat-u-white.svg">carat-u-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/carat-u.svg"></TD>
    <TD><a href="icons-svg/carat-u.svg">carat-u.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/check-black.svg"></TD>
    <TD><a href="icons-svg/check-black.svg">check-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/check-white.svg"></TD>
    <TD><a href="icons-svg/check-white.svg">check-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/check.svg"></TD>
    <TD><a href="icons-svg/check.svg">check.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/clock-black.svg"></TD>
    <TD><a href="icons-svg/clock-black.svg">clock-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/clock-white.svg"></TD>
    <TD><a href="icons-svg/clock-white.svg">clock-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/clock.svg"></TD>
    <TD><a href="icons-svg/clock.svg">clock.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/cloud-black.svg"></TD>
    <TD><a href="icons-svg/cloud-black.svg">cloud-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/cloud-white.svg"></TD>
    <TD><a href="icons-svg/cloud-white.svg">cloud-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/cloud.svg"></TD>
    <TD><a href="icons-svg/cloud.svg">cloud.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/comment-black.svg"></TD>
    <TD><a href="icons-svg/comment-black.svg">comment-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/comment-white.svg"></TD>
    <TD><a href="icons-svg/comment-white.svg">comment-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/comment.svg"></TD>
    <TD><a href="icons-svg/comment.svg">comment.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/delete-black.svg"></TD>
    <TD><a href="icons-svg/delete-black.svg">delete-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/delete-white.svg"></TD>
    <TD><a href="icons-svg/delete-white.svg">delete-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/delete.svg"></TD>
    <TD><a href="icons-svg/delete.svg">delete.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/edit-black.svg"></TD>
    <TD><a href="icons-svg/edit-black.svg">edit-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/edit-white.svg"></TD>
    <TD><a href="icons-svg/edit-white.svg">edit-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/edit.svg"></TD>
    <TD><a href="icons-svg/edit.svg">edit.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/eye-black.svg"></TD>
    <TD><a href="icons-svg/eye-black.svg">eye-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/eye-white.svg"></TD>
    <TD><a href="icons-svg/eye-white.svg">eye-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/eye.svg"></TD>
    <TD><a href="icons-svg/eye.svg">eye.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-backward-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-backward-black.svg">fa-audio-backward-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-backward-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-backward-white.svg">fa-audio-backward-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-backward.svg"></TD>
    <TD><a href="icons-svg/fa-audio-backward.svg">fa-audio-backward.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-eject-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-eject-black.svg">fa-audio-eject-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-eject-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-eject-white.svg">fa-audio-eject-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-eject.svg"></TD>
    <TD><a href="icons-svg/fa-audio-eject.svg">fa-audio-eject.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-forward-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-forward-black.svg">fa-audio-forward-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-forward-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-forward-white.svg">fa-audio-forward-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-forward.svg"></TD>
    <TD><a href="icons-svg/fa-audio-forward.svg">fa-audio-forward.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-pause-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-pause-black.svg">fa-audio-pause-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-pause-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-pause-white.svg">fa-audio-pause-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-pause.svg"></TD>
    <TD><a href="icons-svg/fa-audio-pause.svg">fa-audio-pause.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-play-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-play-black.svg">fa-audio-play-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-play-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-play-white.svg">fa-audio-play-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-play.svg"></TD>
    <TD><a href="icons-svg/fa-audio-play.svg">fa-audio-play.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-record-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-record-black.svg">fa-audio-record-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-record-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-record-white.svg">fa-audio-record-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-record.svg"></TD>
    <TD><a href="icons-svg/fa-audio-record.svg">fa-audio-record.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-stop-black.svg"></TD>
    <TD><a href="icons-svg/fa-audio-stop-black.svg">fa-audio-stop-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-stop-white.svg"></TD>
    <TD><a href="icons-svg/fa-audio-stop-white.svg">fa-audio-stop-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-audio-stop.svg"></TD>
    <TD><a href="icons-svg/fa-audio-stop.svg">fa-audio-stop.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-barcode-black.svg"></TD>
    <TD><a href="icons-svg/fa-barcode-black.svg">fa-barcode-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-barcode-white.svg"></TD>
    <TD><a href="icons-svg/fa-barcode-white.svg">fa-barcode-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-barcode.svg"></TD>
    <TD><a href="icons-svg/fa-barcode.svg">fa-barcode.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-book-black.svg"></TD>
    <TD><a href="icons-svg/fa-book-black.svg">fa-book-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-book-white.svg"></TD>
    <TD><a href="icons-svg/fa-book-white.svg">fa-book-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-book.svg"></TD>
    <TD><a href="icons-svg/fa-book.svg">fa-book.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-camera-black.svg"></TD>
    <TD><a href="icons-svg/fa-camera-black.svg">fa-camera-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-camera-white.svg"></TD>
    <TD><a href="icons-svg/fa-camera-white.svg">fa-camera-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-camera.svg"></TD>
    <TD><a href="icons-svg/fa-camera.svg">fa-camera.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-cancel-black.svg"></TD>
    <TD><a href="icons-svg/fa-cancel-black.svg">fa-cancel-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-cancel-red.svg"></TD>
    <TD><a href="icons-svg/fa-cancel-red.svg">fa-cancel-red.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-cancel-white.svg"></TD>
    <TD><a href="icons-svg/fa-cancel-white.svg">fa-cancel-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-cancel.svg"></TD>
    <TD><a href="icons-svg/fa-cancel.svg">fa-cancel.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-chart-pie-black.svg"></TD>
    <TD><a href="icons-svg/fa-chart-pie-black.svg">fa-chart-pie-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-chart-pie-white.svg"></TD>
    <TD><a href="icons-svg/fa-chart-pie-white.svg">fa-chart-pie-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-chart-pie.svg"></TD>
    <TD><a href="icons-svg/fa-chart-pie.svg">fa-chart-pie.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-copy-black.svg"></TD>
    <TD><a href="icons-svg/fa-copy-black.svg">fa-copy-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-copy-white.svg"></TD>
    <TD><a href="icons-svg/fa-copy-white.svg">fa-copy-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-copy.svg"></TD>
    <TD><a href="icons-svg/fa-copy.svg">fa-copy.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-edit-black.svg"></TD>
    <TD><a href="icons-svg/fa-edit-black.svg">fa-edit-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-edit-white.svg"></TD>
    <TD><a href="icons-svg/fa-edit-white.svg">fa-edit-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-edit.svg"></TD>
    <TD><a href="icons-svg/fa-edit.svg">fa-edit.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-enumeration-black.svg"></TD>
    <TD><a href="icons-svg/fa-enumeration-black.svg">fa-enumeration-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-enumeration-white.svg"></TD>
    <TD><a href="icons-svg/fa-enumeration-white.svg">fa-enumeration-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-enumeration.svg"></TD>
    <TD><a href="icons-svg/fa-enumeration.svg">fa-enumeration.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-envelope-black.svg"></TD>
    <TD><a href="icons-svg/fa-envelope-black.svg">fa-envelope-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-envelope-white.svg"></TD>
    <TD><a href="icons-svg/fa-envelope-white.svg">fa-envelope-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-envelope.svg"></TD>
    <TD><a href="icons-svg/fa-envelope.svg">fa-envelope.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-archive-black.svg"></TD>
    <TD><a href="icons-svg/fa-file-archive-black.svg">fa-file-archive-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-archive-white.svg"></TD>
    <TD><a href="icons-svg/fa-file-archive-white.svg">fa-file-archive-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-archive.svg"></TD>
    <TD><a href="icons-svg/fa-file-archive.svg">fa-file-archive.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-save-black.svg"></TD>
    <TD><a href="icons-svg/fa-file-save-black.svg">fa-file-save-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-save-white.svg"></TD>
    <TD><a href="icons-svg/fa-file-save-white.svg">fa-file-save-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-file-save.svg"></TD>
    <TD><a href="icons-svg/fa-file-save.svg">fa-file-save.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-folder-open-black.svg"></TD>
    <TD><a href="icons-svg/fa-folder-open-black.svg">fa-folder-open-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-folder-open-white.svg"></TD>
    <TD><a href="icons-svg/fa-folder-open-white.svg">fa-folder-open-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-folder-open.svg"></TD>
    <TD><a href="icons-svg/fa-folder-open.svg">fa-folder-open.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-font-black.svg"></TD>
    <TD><a href="icons-svg/fa-font-black.svg">fa-font-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-font-white.svg"></TD>
    <TD><a href="icons-svg/fa-font-white.svg">fa-font-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-font.svg"></TD>
    <TD><a href="icons-svg/fa-font.svg">fa-font.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-globe-black.svg"></TD>
    <TD><a href="icons-svg/fa-globe-black.svg">fa-globe-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-globe-white.svg"></TD>
    <TD><a href="icons-svg/fa-globe-white.svg">fa-globe-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-globe.svg"></TD>
    <TD><a href="icons-svg/fa-globe.svg">fa-globe.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-hamburger-icon-black.svg"></TD>
    <TD><a href="icons-svg/fa-hamburger-icon-black.svg">fa-hamburger-icon-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-hamburger-icon-white.svg"></TD>
    <TD><a href="icons-svg/fa-hamburger-icon-white.svg">fa-hamburger-icon-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-hamburger-icon.svg"></TD>
    <TD><a href="icons-svg/fa-hamburger-icon.svg">fa-hamburger-icon.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-harddisk-black.svg"></TD>
    <TD><a href="icons-svg/fa-harddisk-black.svg">fa-harddisk-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-harddisk-white.svg"></TD>
    <TD><a href="icons-svg/fa-harddisk-white.svg">fa-harddisk-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-harddisk.svg"></TD>
    <TD><a href="icons-svg/fa-harddisk.svg">fa-harddisk.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-key-black.svg"></TD>
    <TD><a href="icons-svg/fa-key-black.svg">fa-key-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-key-white.svg"></TD>
    <TD><a href="icons-svg/fa-key-white.svg">fa-key-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-key.svg"></TD>
    <TD><a href="icons-svg/fa-key.svg">fa-key.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-language-black.svg"></TD>
    <TD><a href="icons-svg/fa-language-black.svg">fa-language-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-language-white.svg"></TD>
    <TD><a href="icons-svg/fa-language-white.svg">fa-language-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-language.svg"></TD>
    <TD><a href="icons-svg/fa-language.svg">fa-language.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-line-chart-black.svg"></TD>
    <TD><a href="icons-svg/fa-line-chart-black.svg">fa-line-chart-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-line-chart-white.svg"></TD>
    <TD><a href="icons-svg/fa-line-chart-white.svg">fa-line-chart-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-line-chart.svg"></TD>
    <TD><a href="icons-svg/fa-line-chart.svg">fa-line-chart.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-list-black.svg"></TD>
    <TD><a href="icons-svg/fa-list-black.svg">fa-list-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-list-white.svg"></TD>
    <TD><a href="icons-svg/fa-list-white.svg">fa-list-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-list.svg"></TD>
    <TD><a href="icons-svg/fa-list.svg">fa-list.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-minus-square-black.svg"></TD>
    <TD><a href="icons-svg/fa-minus-square-black.svg">fa-minus-square-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-minus-square-white.svg"></TD>
    <TD><a href="icons-svg/fa-minus-square-white.svg">fa-minus-square-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-minus-square.svg"></TD>
    <TD><a href="icons-svg/fa-minus-square.svg">fa-minus-square.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-paste-black.svg"></TD>
    <TD><a href="icons-svg/fa-paste-black.svg">fa-paste-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-paste-white.svg"></TD>
    <TD><a href="icons-svg/fa-paste-white.svg">fa-paste-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-paste.svg"></TD>
    <TD><a href="icons-svg/fa-paste.svg">fa-paste.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-picture-black.svg"></TD>
    <TD><a href="icons-svg/fa-picture-black.svg">fa-picture-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-picture-white.svg"></TD>
    <TD><a href="icons-svg/fa-picture-white.svg">fa-picture-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-picture.svg"></TD>
    <TD><a href="icons-svg/fa-picture.svg">fa-picture.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-plus-square-black.svg"></TD>
    <TD><a href="icons-svg/fa-plus-square-black.svg">fa-plus-square-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-plus-square-white.svg"></TD>
    <TD><a href="icons-svg/fa-plus-square-white.svg">fa-plus-square-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-plus-square.svg"></TD>
    <TD><a href="icons-svg/fa-plus-square.svg">fa-plus-square.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-print-black.svg"></TD>
    <TD><a href="icons-svg/fa-print-black.svg">fa-print-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-print-white.svg"></TD>
    <TD><a href="icons-svg/fa-print-white.svg">fa-print-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-print.svg"></TD>
    <TD><a href="icons-svg/fa-print.svg">fa-print.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-qrcode-black.svg"></TD>
    <TD><a href="icons-svg/fa-qrcode-black.svg">fa-qrcode-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-qrcode-white.svg"></TD>
    <TD><a href="icons-svg/fa-qrcode-white.svg">fa-qrcode-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-qrcode.svg"></TD>
    <TD><a href="icons-svg/fa-qrcode.svg">fa-qrcode.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-settings-black.svg"></TD>
    <TD><a href="icons-svg/fa-settings-black.svg">fa-settings-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-settings-white.svg"></TD>
    <TD><a href="icons-svg/fa-settings-white.svg">fa-settings-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-settings.svg"></TD>
    <TD><a href="icons-svg/fa-settings.svg">fa-settings.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signin-black.svg"></TD>
    <TD><a href="icons-svg/fa-signin-black.svg">fa-signin-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signin-white.svg"></TD>
    <TD><a href="icons-svg/fa-signin-white.svg">fa-signin-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signin.svg"></TD>
    <TD><a href="icons-svg/fa-signin.svg">fa-signin.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signout-black.svg"></TD>
    <TD><a href="icons-svg/fa-signout-black.svg">fa-signout-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signout-white.svg"></TD>
    <TD><a href="icons-svg/fa-signout-white.svg">fa-signout-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-signout.svg"></TD>
    <TD><a href="icons-svg/fa-signout.svg">fa-signout.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-sort-black.svg"></TD>
    <TD><a href="icons-svg/fa-sort-black.svg">fa-sort-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-sort-white.svg"></TD>
    <TD><a href="icons-svg/fa-sort-white.svg">fa-sort-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-sort.svg"></TD>
    <TD><a href="icons-svg/fa-sort.svg">fa-sort.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-spinner-black.svg"></TD>
    <TD><a href="icons-svg/fa-spinner-black.svg">fa-spinner-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-spinner-white.svg"></TD>
    <TD><a href="icons-svg/fa-spinner-white.svg">fa-spinner-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-spinner.svg"></TD>
    <TD><a href="icons-svg/fa-spinner.svg">fa-spinner.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-tablet-black.svg"></TD>
    <TD><a href="icons-svg/fa-tablet-black.svg">fa-tablet-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-tablet-white.svg"></TD>
    <TD><a href="icons-svg/fa-tablet-white.svg">fa-tablet-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-tablet.svg"></TD>
    <TD><a href="icons-svg/fa-tablet.svg">fa-tablet.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-trash-black.svg"></TD>
    <TD><a href="icons-svg/fa-trash-black.svg">fa-trash-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-trash-white.svg"></TD>
    <TD><a href="icons-svg/fa-trash-white.svg">fa-trash-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-trash.svg"></TD>
    <TD><a href="icons-svg/fa-trash.svg">fa-trash.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-truck-black.svg"></TD>
    <TD><a href="icons-svg/fa-truck-black.svg">fa-truck-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-truck-white.svg"></TD>
    <TD><a href="icons-svg/fa-truck-white.svg">fa-truck-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-truck.svg"></TD>
    <TD><a href="icons-svg/fa-truck.svg">fa-truck.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-undo-black.svg"></TD>
    <TD><a href="icons-svg/fa-undo-black.svg">fa-undo-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-undo-white.svg"></TD>
    <TD><a href="icons-svg/fa-undo-white.svg">fa-undo-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-undo.svg"></TD>
    <TD><a href="icons-svg/fa-undo.svg">fa-undo.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-vr-headset-black.svg"></TD>
    <TD><a href="icons-svg/fa-vr-headset-black.svg">fa-vr-headset-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-vr-headset-white.svg"></TD>
    <TD><a href="icons-svg/fa-vr-headset-white.svg">fa-vr-headset-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/fa-vr-headset.svg"></TD>
    <TD><a href="icons-svg/fa-vr-headset.svg">fa-vr-headset.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forbidden-black.svg"></TD>
    <TD><a href="icons-svg/forbidden-black.svg">forbidden-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forbidden-white.svg"></TD>
    <TD><a href="icons-svg/forbidden-white.svg">forbidden-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forbidden.svg"></TD>
    <TD><a href="icons-svg/forbidden.svg">forbidden.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forward-black.svg"></TD>
    <TD><a href="icons-svg/forward-black.svg">forward-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forward-white.svg"></TD>
    <TD><a href="icons-svg/forward-white.svg">forward-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/forward.svg"></TD>
    <TD><a href="icons-svg/forward.svg">forward.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/gear-black.svg"></TD>
    <TD><a href="icons-svg/gear-black.svg">gear-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/gear-white.svg"></TD>
    <TD><a href="icons-svg/gear-white.svg">gear-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/gear.svg"></TD>
    <TD><a href="icons-svg/gear.svg">gear.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/grid-black.svg"></TD>
    <TD><a href="icons-svg/grid-black.svg">grid-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/grid-white.svg"></TD>
    <TD><a href="icons-svg/grid-white.svg">grid-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/grid.svg"></TD>
    <TD><a href="icons-svg/grid.svg">grid.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/heart-black.svg"></TD>
    <TD><a href="icons-svg/heart-black.svg">heart-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/heart-white.svg"></TD>
    <TD><a href="icons-svg/heart-white.svg">heart-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/heart.svg"></TD>
    <TD><a href="icons-svg/heart.svg">heart.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/home-black.svg"></TD>
    <TD><a href="icons-svg/home-black.svg">home-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/home-white.svg"></TD>
    <TD><a href="icons-svg/home-white.svg">home-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/home.svg"></TD>
    <TD><a href="icons-svg/home.svg">home.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-dd-black.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-dd-black.svg">i4m-carat-dd-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-dd-white.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-dd-white.svg">i4m-carat-dd-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-dd.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-dd.svg">i4m-carat-dd.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-ll-black.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-ll-black.svg">i4m-carat-ll-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-ll-white.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-ll-white.svg">i4m-carat-ll-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-ll.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-ll.svg">i4m-carat-ll.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-rr-black.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-rr-black.svg">i4m-carat-rr-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-rr-white.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-rr-white.svg">i4m-carat-rr-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-rr.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-rr.svg">i4m-carat-rr.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-uu-black.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-uu-black.svg">i4m-carat-uu-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-uu-white.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-uu-white.svg">i4m-carat-uu-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-carat-uu.svg"></TD>
    <TD><a href="icons-svg/i4m-carat-uu.svg">i4m-carat-uu.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal-black.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal-black.svg">i4m-wiki2reveal-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal-frame-black.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal-frame-black.svg">i4m-wiki2reveal-frame-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal-frame-white.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal-frame-white.svg">i4m-wiki2reveal-frame-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal-frame.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal-frame.svg">i4m-wiki2reveal-frame.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal-white.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal-white.svg">i4m-wiki2reveal-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/i4m-wiki2reveal.svg"></TD>
    <TD><a href="icons-svg/i4m-wiki2reveal.svg">i4m-wiki2reveal.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/info-black.svg"></TD>
    <TD><a href="icons-svg/info-black.svg">info-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/info-white.svg"></TD>
    <TD><a href="icons-svg/info-white.svg">info-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/info.svg"></TD>
    <TD><a href="icons-svg/info.svg">info.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/location-black.svg"></TD>
    <TD><a href="icons-svg/location-black.svg">location-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/location-white.svg"></TD>
    <TD><a href="icons-svg/location-white.svg">location-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/location.svg"></TD>
    <TD><a href="icons-svg/location.svg">location.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/lock-black.svg"></TD>
    <TD><a href="icons-svg/lock-black.svg">lock-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/lock-white.svg"></TD>
    <TD><a href="icons-svg/lock-white.svg">lock-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/lock.svg"></TD>
    <TD><a href="icons-svg/lock.svg">lock.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/mail-black.svg"></TD>
    <TD><a href="icons-svg/mail-black.svg">mail-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/mail-white.svg"></TD>
    <TD><a href="icons-svg/mail-white.svg">mail-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/mail.svg"></TD>
    <TD><a href="icons-svg/mail.svg">mail.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/minus-black.svg"></TD>
    <TD><a href="icons-svg/minus-black.svg">minus-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/minus-white.svg"></TD>
    <TD><a href="icons-svg/minus-white.svg">minus-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/minus.svg"></TD>
    <TD><a href="icons-svg/minus.svg">minus.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/nav-back-black.svg"></TD>
    <TD><a href="icons-svg/nav-back-black.svg">nav-back-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/nav-back-white.svg"></TD>
    <TD><a href="icons-svg/nav-back-white.svg">nav-back-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/nav-back.svg"></TD>
    <TD><a href="icons-svg/nav-back.svg">nav-back.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/navigation-black.svg"></TD>
    <TD><a href="icons-svg/navigation-black.svg">navigation-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/navigation-white.svg"></TD>
    <TD><a href="icons-svg/navigation-white.svg">navigation-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/navigation.svg"></TD>
    <TD><a href="icons-svg/navigation.svg">navigation.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/phone-black.svg"></TD>
    <TD><a href="icons-svg/phone-black.svg">phone-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/phone-white.svg"></TD>
    <TD><a href="icons-svg/phone-white.svg">phone-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/phone.svg"></TD>
    <TD><a href="icons-svg/phone.svg">phone.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/plus-black.svg"></TD>
    <TD><a href="icons-svg/plus-black.svg">plus-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/plus-white.svg"></TD>
    <TD><a href="icons-svg/plus-white.svg">plus-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/plus.svg"></TD>
    <TD><a href="icons-svg/plus.svg">plus.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/power-black.svg"></TD>
    <TD><a href="icons-svg/power-black.svg">power-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/power-white.svg"></TD>
    <TD><a href="icons-svg/power-white.svg">power-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/power.svg"></TD>
    <TD><a href="icons-svg/power.svg">power.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/recycle-black.svg"></TD>
    <TD><a href="icons-svg/recycle-black.svg">recycle-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/recycle-white.svg"></TD>
    <TD><a href="icons-svg/recycle-white.svg">recycle-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/recycle.svg"></TD>
    <TD><a href="icons-svg/recycle.svg">recycle.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/refresh-black.svg"></TD>
    <TD><a href="icons-svg/refresh-black.svg">refresh-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/refresh-white.svg"></TD>
    <TD><a href="icons-svg/refresh-white.svg">refresh-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/refresh.svg"></TD>
    <TD><a href="icons-svg/refresh.svg">refresh.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/search-black.svg"></TD>
    <TD><a href="icons-svg/search-black.svg">search-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/search-white.svg"></TD>
    <TD><a href="icons-svg/search-white.svg">search-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/search.svg"></TD>
    <TD><a href="icons-svg/search.svg">search.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/shop-black.svg"></TD>
    <TD><a href="icons-svg/shop-black.svg">shop-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/shop-white.svg"></TD>
    <TD><a href="icons-svg/shop-white.svg">shop-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/shop.svg"></TD>
    <TD><a href="icons-svg/shop.svg">shop.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/star-black.svg"></TD>
    <TD><a href="icons-svg/star-black.svg">star-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/star-white.svg"></TD>
    <TD><a href="icons-svg/star-white.svg">star-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/star.svg"></TD>
    <TD><a href="icons-svg/star.svg">star.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/tag-black.svg"></TD>
    <TD><a href="icons-svg/tag-black.svg">tag-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/tag-white.svg"></TD>
    <TD><a href="icons-svg/tag-white.svg">tag-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/tag.svg"></TD>
    <TD><a href="icons-svg/tag.svg">tag.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/user-black.svg"></TD>
    <TD><a href="icons-svg/user-black.svg">user-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/user-white.svg"></TD>
    <TD><a href="icons-svg/user-white.svg">user-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/user.svg"></TD>
    <TD><a href="icons-svg/user.svg">user.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/video-black.svg"></TD>
    <TD><a href="icons-svg/video-black.svg">video-black.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/video-white.svg"></TD>
    <TD><a href="icons-svg/video-white.svg">video-white.svg</a></TD>
    <TD>icons-svg</TD>
    <tr>
    <TD bgcolor="#888888"><img src="icons-svg/video.svg"></TD>
    <TD><a href="icons-svg/video.svg">video.svg</a></TD>
    <TD>icons-svg</TD>
  </TABLE>
  <HR>

## Create your own Icons
If you want to create your own items you can use
* **([InkScape](https://en.wikipedia.org/wiki/Inkscape))** the [open source software InkScape](https://en.wikipedia.org/wiki/Inkscape) - Download: [InkScape](https://inkscape.org/download ).
* **([LibreOffice Draw](https://en.wikipedia.org/wiki/LibreOffice_Draw)** Alternatively you can also use [LibreOffice-Draw](https://en.wikipedia.org/wiki/LibreOffice_Draw) and load the example  icons `icons-odg/` or the icon templates
   * `icons-odg/icon-empty.odg` or
   * `icons-odg/icon-frame.odg` or
If you want to export the new icon please use the SVG file format. The Scalable Vector Graphics (SVG) defines the image with the Extensible Markup Language as (XML)-based vector image for two-dimensional graphics.
The format has the advantage, that increasing the size of the icon does not create pixel effects, because the icon is defined by geometric shapes and not a raster of pixels.

Save the icon with 14x14 pixel for width and height, so that the icon has a standard size for a menu if not additional size attributes are used in CSS or the `img`-tag itself.


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
