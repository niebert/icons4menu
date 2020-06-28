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
