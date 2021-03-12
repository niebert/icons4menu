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
| Icon | File | Folder  |  Source File | Licence  | Group |
|---|---|---|---|---|---|
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/action.svg" width="20"> </span> | [`action.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-action.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `main`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-folder-open.svg" width="20"> </span> | [`fa-folder-open.svg`](https://upload.wikimedia.org/wikipedia/commons/3/3a/Folder_open_alt_font_awesome.svg)  | `img/icons-svg`  | [`Folder_open_alt_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Folder_open_alt_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `main`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-hamburger-icon.svg" width="20"> </span> | [`fa-hamburger-icon.svg`](https://upload.wikimedia.org/wikipedia/commons/0/04/Reorder_font_awesome.svg)  | `img/icons-svg`  | [`Reorder_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Reorder_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `main`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-print.svg" width="20"> </span> | [`fa-print.svg`](https://upload.wikimedia.org/wikipedia/commons/e/e4/Print_font_awesome.svg)  | `img/icons-svg`  | [`Print_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Print_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `main`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-settings.svg" width="20"> </span> | [`fa-settings.svg`](https://upload.wikimedia.org/wikipedia/commons/9/92/Cog_font_awesome.svg)  | `img/icons-svg`  | [`Cog_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Cog_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `main`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-trash.svg" width="20"> </span> | [`fa-trash.svg`](https://upload.wikimedia.org/wikipedia/commons/7/7d/Trash_font_awesome.svg)  | `img/icons-svg`  | [`Trash_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Trash_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `main`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/grid.svg" width="20"> </span> | [`grid.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-grid.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `main`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/home.svg" width="20"> </span> | [`home.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-home.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `main`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/info.svg" width="20"> </span> | [`info.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-info.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `main`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/shop.svg" width="20"> </span> | [`shop.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-shop.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `main`  | 

### Miscellaneous Icons
| Icon | File | Folder  |  Source File | Licence  | Group |
|---|---|---|---|---|---|
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/alert.svg" width="20"> </span> | [`alert.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-alert.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/audio.svg" width="20"> </span> | [`audio.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-audio.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/bars.svg" width="20"> </span> | [`bars.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-bars.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/bullets.svg" width="20"> </span> | [`bullets.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-bullets.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/calendar.svg" width="20"> </span> | [`calendar.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-calendar.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/camera.svg" width="20"> </span> | [`camera.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-camera.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/check.svg" width="20"> </span> | [`check.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-check.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/clock.svg" width="20"> </span> | [`clock.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-clock.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/cloud.svg" width="20"> </span> | [`cloud.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-cloud.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/comment.svg" width="20"> </span> | [`comment.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-comment.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/delete.svg" width="20"> </span> | [`delete.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-delete.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/edit.svg" width="20"> </span> | [`edit.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-edit.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/eye.svg" width="20"> </span> | [`eye.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-eye.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-barcode.svg" width="20"> </span> | [`fa-barcode.svg`](https://upload.wikimedia.org/wikipedia/commons/6/6b/Barcode_font_awesome.svg)  | `img/icons-svg`  | [`Barcode_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Barcode_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-edit.svg" width="20"> </span> | [`fa-edit.svg`](https://upload.wikimedia.org/wikipedia/commons/4/4c/Edit_font_awesome.svg)  | `img/icons-svg`  | [`Edit_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Edit_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-envelope.svg" width="20"> </span> | [`fa-envelope.svg`](https://upload.wikimedia.org/wikipedia/commons/3/3d/Envelope_font_awesome.svg)  | `img/icons-svg`  | [`Envelope_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Envelope_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-file-save.svg" width="20"> </span> | [`fa-file-save.svg`](https://upload.wikimedia.org/wikipedia/commons/2/20/Save_font_awesome.svg)  | `img/icons-svg`  | [`Save_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Save_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-globe.svg" width="20"> </span> | [`fa-globe.svg`](https://upload.wikimedia.org/wikipedia/commons/8/8b/Globe_font_awesome.svg)  | `img/icons-svg`  | [`Globe_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Globe_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-harddisk.svg" width="20"> </span> | [`fa-harddisk.svg`](https://upload.wikimedia.org/wikipedia/commons/f/ff/Font_Awesome_5_solid_hdd.svg)  | `img/icons-svg`  | [`Font_Awesome_5_solid_hdd.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_hdd.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-language.svg" width="20"> </span> | [`fa-language.svg`](https://upload.wikimedia.org/wikipedia/commons/3/32/Language_font_awesome_v5.svg)  | `img/icons-svg`  | [`Language_font_awesome_v5.svg`](https://commons.wikimedia.org/wiki/File:Language_font_awesome_v5.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-qrcode.svg" width="20"> </span> | [`fa-qrcode.svg`](https://upload.wikimedia.org/wikipedia/commons/b/bb/Qrcode_font_awesome.svg)  | `img/icons-svg`  | [`Qrcode_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Qrcode_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-sort.svg" width="20"> </span> | [`fa-sort.svg`](https://upload.wikimedia.org/wikipedia/commons/0/07/Sort_font_awesome.svg)  | `img/icons-svg`  | [`Sort_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Sort_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/forward.svg" width="20"> </span> | [`forward.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-forward.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/gear.svg" width="20"> </span> | [`gear.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-gear.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/i4m-wiki2reveal-frame.svg" width="20"> </span> | [`i4m-wiki2reveal-frame.svg`](https://niebert.github.io/img/icons-svg/i4m-wiki2reveal-frame.svg)  | `img/icons-svg`  | [`Icon4Menu-wiki2reveal-frame.svg`](https://commons.wikimedia.org/wiki/File:Icon4Menu-wiki2reveal-frame.svg) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/i4m-wiki2reveal.svg" width="20"> </span> | [`i4m-wiki2reveal.svg`](https://niebert.github.io/img/icons-svg/i4m-wiki2reveal.svg)  | `img/icons-svg`  | [`Icon4Menu-wiki2reveal.svg`](https://commons.wikimedia.org/wiki/File:Icon4Menu-wiki2reveal.svg) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/lock.svg" width="20"> </span> | [`lock.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-lock.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/mail.svg" width="20"> </span> | [`mail.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-mail.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/navigation.svg" width="20"> </span> | [`navigation.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-navigation.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/recycle.svg" width="20"> </span> | [`recycle.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-recycle.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `other`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/video.svg" width="20"> </span> | [`video.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-video.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `other`  | 

### Arrow
| Icon | File | Folder  |  Source File | Licence  | Group |
|---|---|---|---|---|---|
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-d.svg" width="20"> </span> | [`arrow-d.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-arrow-d.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `arrow`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-l.svg" width="20"> </span> | [`arrow-l.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-arrow-l.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `arrow`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-r.svg" width="20"> </span> | [`arrow-r.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-arrow-r.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `arrow`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-u-l.svg" width="20"> </span> | [`arrow-u-l.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-arrow-u-l.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `arrow`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-u-r.svg" width="20"> </span> | [`arrow-u-r.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-arrow-u-r.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `arrow`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/arrow-u.svg" width="20"> </span> | [`arrow-u.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-arrow-u.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `arrow`  | 

### Navigation
| Icon | File | Folder  |  Source File | Licence  | Group |
|---|---|---|---|---|---|
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-d.svg" width="20"> </span> | [`carat-d.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-carat-d.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `navigation`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-l.svg" width="20"> </span> | [`carat-l.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-carat-l.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `navigation`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-r.svg" width="20"> </span> | [`carat-r.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-carat-r.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `navigation`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/carat-u.svg" width="20"> </span> | [`carat-u.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-carat-u.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `navigation`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/i4m-carat-dd.svg" width="20"> </span> | [`i4m-carat-dd.svg`](https://niebert.github.io/img/icons-svg/i4m-carat-dd.svg)  | `img/icons-svg`  | [`Icon4Menu-carat-dd.svg`](https://commons.wikimedia.org/wiki/File:Icon4Menu-carat-dd.svg) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `navigation`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/i4m-carat-ll.svg" width="20"> </span> | [`i4m-carat-ll.svg`](https://niebert.github.io/img/icons-svg/i4m-carat-ll.svg)  | `img/icons-svg`  | [`Icon4Menu-carat-ll.svg`](https://commons.wikimedia.org/wiki/File:Icon4Menu-carat-ll.svg) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `navigation`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/i4m-carat-rr.svg" width="20"> </span> | [`i4m-carat-rr.svg`](https://niebert.github.io/img/icons-svg/i4m-carat-rr.svg)  | `img/icons-svg`  | [`Icon4Menu-carat-rr.svg`](https://commons.wikimedia.org/wiki/File:Icon4Menu-carat-rr.svg) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `navigation`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/i4m-carat-uu.svg" width="20"> </span> | [`i4m-carat-uu.svg`](https://niebert.github.io/img/icons-svg/i4m-carat-uu.svg)  | `img/icons-svg`  | [`Icon4Menu-carat-uu.svg`](https://commons.wikimedia.org/wiki/File:Icon4Menu-carat-uu.svg) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `navigation`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/location.svg" width="20"> </span> | [`location.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-location.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `navigation`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/nav-back.svg" width="20"> </span> | [`nav-back.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-nav-back.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `navigation`  | 

### Audio Player
| Icon | File | Folder  |  Source File | Licence  | Group |
|---|---|---|---|---|---|
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-backward.svg" width="20"> </span> | [`fa-audio-backward.svg`](https://upload.wikimedia.org/wikipedia/commons/c/c8/Backward_font_awesome.svg)  | `img/icons-svg`  | [`Backward_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Backward_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `audio`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-eject.svg" width="20"> </span> | [`fa-audio-eject.svg`](https://upload.wikimedia.org/wikipedia/commons/1/14/Font_Awesome_5_solid_eject.svg)  | `img/icons-svg`  | [`Font_Awesome_5_solid_eject.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_eject.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `audio`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-forward.svg" width="20"> </span> | [`fa-audio-forward.svg`](https://upload.wikimedia.org/wikipedia/commons/7/7f/Forward_font_awesome.svg)  | `img/icons-svg`  | [`Forward_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Forward_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `audio`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-pause.svg" width="20"> </span> | [`fa-audio-pause.svg`](https://upload.wikimedia.org/wikipedia/commons/a/af/Pause_font_awesome.svg)  | `img/icons-svg`  | [`Pause_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Pause_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `audio`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-play.svg" width="20"> </span> | [`fa-audio-play.svg`](https://upload.wikimedia.org/wikipedia/commons/d/d3/Play_font_awesome.svg)  | `img/icons-svg`  | [`Play_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Play_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `audio`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-record.svg" width="20"> </span> | [`fa-audio-record.svg`](https://upload.wikimedia.org/wikipedia/commons/a/a0/Circle_font_awesome.svg)  | `img/icons-svg`  | [`Circle_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Circle_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `audio`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-audio-stop.svg" width="20"> </span> | [`fa-audio-stop.svg`](https://upload.wikimedia.org/wikipedia/commons/b/b9/Font_Awesome_5_solid_square.svg)  | `img/icons-svg`  | [`Font_Awesome_5_solid_square.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_square.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `audio`  | 

### Products and Objects
| Icon | File | Folder  |  Source File | Licence  | Group |
|---|---|---|---|---|---|
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-book.svg" width="20"> </span> | [`fa-book.svg`](https://upload.wikimedia.org/wikipedia/commons/b/b3/Book_font_awesome.svg)  | `img/icons-svg`  | [`Book_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Book_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `product`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-key.svg" width="20"> </span> | [`fa-key.svg`](https://upload.wikimedia.org/wikipedia/commons/d/d5/Font_Awesome_5_solid_key.svg)  | `img/icons-svg`  | [`Font_Awesome_5_solid_key.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_key.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `product`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-picture.svg" width="20"> </span> | [`fa-picture.svg`](https://upload.wikimedia.org/wikipedia/commons/8/84/Picture_font_awesome.svg)  | `img/icons-svg`  | [`Picture_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Picture_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `product`  | 

### Device
| Icon | File | Folder  |  Source File | Licence  | Group |
|---|---|---|---|---|---|
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-camera.svg" width="20"> </span> | [`fa-camera.svg`](https://upload.wikimedia.org/wikipedia/commons/d/d1/Camera_font_awesome.svg)  | `img/icons-svg`  | [`Camera_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Camera_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `device`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-tablet.svg" width="20"> </span> | [`fa-tablet.svg`](https://upload.wikimedia.org/wikipedia/commons/3/30/Tablet_font_awesome.svg)  | `img/icons-svg`  | [`Tablet_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Tablet_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `device`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-vr-headset.svg" width="20"> </span> | [`fa-vr-headset.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_brands_simplybuilt.svg)  | `img/icons-svg`  | [`File:Font_Awesome_5_brands_simplybuilt.svg`](https://commons.wikimedia.org/wiki/File:File:Font_Awesome_5_brands_simplybuilt.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `device`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/phone.svg" width="20"> </span> | [`phone.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-phone.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `device`  | 

### Action and Processes
| Icon | File | Folder  |  Source File | Licence  | Group |
|---|---|---|---|---|---|
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-cancel-red.svg" width="20"> </span> | [`fa-cancel-red.svg`](https://upload.wikimedia.org/wikipedia/commons/d/de/Remove_font_awesome.svg)  | `img/icons-svg`  | [`Remove_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Remove_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `action`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-cancel.svg" width="20"> </span> | [`fa-cancel.svg`](https://upload.wikimedia.org/wikipedia/commons/d/de/Remove_font_awesome.svg)  | `img/icons-svg`  | [`Remove_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Remove_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `action`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-spinner.svg" width="20"> </span> | [`fa-spinner.svg`](https://upload.wikimedia.org/wikipedia/commons/d/d4/Spinner_font_awesome.svg)  | `img/icons-svg`  | [`Spinner_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Spinner_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `action`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-undo.svg" width="20"> </span> | [`fa-undo.svg`](https://upload.wikimedia.org/wikipedia/commons/0/0d/Undo_font_awesome.svg)  | `img/icons-svg`  | [`Undo_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Undo_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `action`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/forbidden.svg" width="20"> </span> | [`forbidden.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-forbidden.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `action`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/minus.svg" width="20"> </span> | [`minus.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-minus.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `action`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/plus.svg" width="20"> </span> | [`plus.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-plus.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `action`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/refresh.svg" width="20"> </span> | [`refresh.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-refresh.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `action`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/star.svg" width="20"> </span> | [`star.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-star.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `action`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/tag.svg" width="20"> </span> | [`tag.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-tag.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `action`  | 

### Media
| Icon | File | Folder  |  Source File | Licence  | Group |
|---|---|---|---|---|---|
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-chart-pie.svg" width="20"> </span> | [`fa-chart-pie.svg`](https://upload.wikimedia.org/wikipedia/commons/5/56/Font_Awesome_5_solid_chart-pie.svg)  | `img/icons-svg`  | [`Font_Awesome_5_solid_chart-pie.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_chart-pie.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `media`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-line-chart.svg" width="20"> </span> | [`fa-line-chart.svg`](https://upload.wikimedia.org/wikipedia/commons/e/ed/Font_Awesome_5_solid_chart-line.svg)  | `img/icons-svg`  | [`Font_Awesome_5_solid_chart-line.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_chart-line.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `media`  | 

### Editor
| Icon | File | Folder  |  Source File | Licence  | Group |
|---|---|---|---|---|---|
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-copy.svg" width="20"> </span> | [`fa-copy.svg`](https://upload.wikimedia.org/wikipedia/commons/0/04/Copy_font_awesome.svg)  | `img/icons-svg`  | [`Copy_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Copy_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `editor`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-enumeration.svg" width="20"> </span> | [`fa-enumeration.svg`](https://upload.wikimedia.org/wikipedia/commons/3/31/Ol_font_awesome.svg)  | `img/icons-svg`  | [`Ol_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Ol_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `editor`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-font.svg" width="20"> </span> | [`fa-font.svg`](https://upload.wikimedia.org/wikipedia/commons/f/f1/Font_Awesome_5_solid_font.svg)  | `img/icons-svg`  | [`Font_Awesome_5_solid_font.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_font.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `editor`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-list.svg" width="20"> </span> | [`fa-list.svg`](https://upload.wikimedia.org/wikipedia/commons/1/1b/List_font_awesome.svg)  | `img/icons-svg`  | [`List_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:List_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `editor`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-minus-square.svg" width="20"> </span> | [`fa-minus-square.svg`](https://upload.wikimedia.org/wikipedia/commons/7/72/Font_Awesome_5_solid_minus-square.svg)  | `img/icons-svg`  | [`Font_Awesome_5_solid_minus-square.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_minus-square.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `editor`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-paste.svg" width="20"> </span> | [`fa-paste.svg`](https://upload.wikimedia.org/wikipedia/commons/4/46/Paste_font_awesome.svg)  | `img/icons-svg`  | [`Paste_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Paste_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `editor`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-plus-square.svg" width="20"> </span> | [`fa-plus-square.svg`](https://upload.wikimedia.org/wikipedia/commons/2/20/Font_Awesome_5_solid_plus-square.svg)  | `img/icons-svg`  | [`Font_Awesome_5_solid_plus-square.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_plus-square.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `editor`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/search.svg" width="20"> </span> | [`search.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-search.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `editor`  | 

### Filetype
| Icon | File | Folder  |  Source File | Licence  | Group |
|---|---|---|---|---|---|
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-file-archive.svg" width="20"> </span> | [`fa-file-archive.svg`](https://upload.wikimedia.org/wikipedia/commons/5/5d/Font_Awesome_5_regular_file-archive.svg)  | `img/icons-svg`  | [`Font_Awesome_5_regular_file-archive.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_regular_file-archive.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `filetype`  | 

### Login
| Icon | File | Folder  |  Source File | Licence  | Group |
|---|---|---|---|---|---|
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-signin.svg" width="20"> </span> | [`fa-signin.svg`](https://upload.wikimedia.org/wikipedia/commons/c/c5/Signin_font_awesome.svg)  | `img/icons-svg`  | [`Signin_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Signin_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `login`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-signout.svg" width="20"> </span> | [`fa-signout.svg`](https://upload.wikimedia.org/wikipedia/commons/d/db/Signout_font_awesome.svg)  | `img/icons-svg`  | [`Signout_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Signout_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `login`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/power.svg" width="20"> </span> | [`power.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-power.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `login`  | 
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/user.svg" width="20"> </span> | [`user.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-user.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `login`  | 

### Vehicle
| Icon | File | Folder  |  Source File | Licence  | Group |
|---|---|---|---|---|---|
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/fa-truck.svg" width="20"> </span> | [`fa-truck.svg`](https://upload.wikimedia.org/wikipedia/commons/1/1c/Truck_font_awesome.svg)  | `img/icons-svg`  | [`Truck_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Truck_font_awesome.svg) | <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>CC BY-SA 3.0</a> | `vehicle`  | 

### Medical
| Icon | File | Folder  |  Source File | Licence  | Group |
|---|---|---|---|---|---|
| <span style='bgcolor:#888888'><img src="https://niebert.github.io/icons4menu/img/icons-svg/heart.svg" width="20"> </span> | [`heart.svg`](https://jquerymobile.com/download/)  | `img/icons-svg`  | [`JQ-heart.svg`](https://jquerymobile.com/download/) | <a href='https://creativecommons.org/publicdomain/zero/1.0/deed.en' target='_blank'>CC0</a> | `medical`  | 
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
