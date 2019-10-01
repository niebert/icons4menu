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


### Load, Save, Print, Trash, Settings
| Icon | File  | Folder  |  Source File | Licence  | Add Date |
|---|---|---|---|---|---|
| <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Folder_open_alt_font_awesome.svg"> | [`fa-folder-open.svg`](https://commons.wikimedia.org/wiki/File:Folder_open_alt_font_awesome.svg)  | `img/icons-svg`  |  [`Folder_open_alt_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/3/3a/Folder_open_alt_font_awesome.svg) | CC BY-SA 3.0 | 2019/09/12  |
| <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Save_font_awesome.svg"> | [`fa-save-file.svg`](https://commons.wikimedia.org/wiki/File:Save_font_awesome.svg)  | `img/icons-svg`  | [`Folder_open_alt_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/2/20/Save_font_awesome.svg) | CC BY-SA 3.0 | 2019/09/12  |
| <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Trash_font_awesome.svg"> | [`fa-trash.svg`](https://commons.wikimedia.org/wiki/File:Trash_font_awesome.svg)  | `img/icons-svg`  | [`Trash_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/7/7d/Trash_font_awesome.svg) | CC BY-SA 3.0 | 2019/09/12  |
| <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Print_font_awesome.svg"> | [`fa-print.svg`](https://upload.wikimedia.org/wikipedia/commons/e/e4/Print_font_awesome.svg)  | `img/icons-svg`  | [`Print_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/e/e4/Print_font_awesome.svg) | CC BY-SA 3.0 | 2019/09/12  |
| <img width="42" src="./img/icons-svg/gear-black.svg"> | [`gear.svg`](https://commons.wikimedia.org/wiki/File:Save_font_awesome.svg)  | `img/icons-svg`  | [`gear-black.svg`](https://github.com/niebert/icons4menu/blob/master/img/icons-svg/gear-black.svg) | [CC0](http://creativecommons.org/publicdomain/zero/1.0/) - JQuery | 2019/09/12  |
| <img width="42" src="https://upload.wikimedia.org/wikipedia/commons/9/92/Cog_font_awesome.svg"> | [`fa-settings.svg`](https://commons.wikimedia.org/wiki/File:Cog_font_awesome.svg)  | `img/icons-svg`  | [`Cog_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/9/92/Cog_font_awesome.svg) |  CC BY-SA 3.0 | 2019/10/01  |



### Navigation
| Icon | File  | Folder  |  Source File | Licence  | Add Date |
|---|---|---|---|---|---|
| <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Reorder_font_awesome.svg"> | [`fa-hamburger-icon.svg`](https://commons.wikimedia.org/wiki/File:Reorder_font_awesome.svg)  | `img/icons-svg`  |  [`Folder_open_alt_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/0/04/Reorder_font_awesome.svg) | CC BY-SA 3.0 | 2019/09/12  |



### Editor
| Icon | File  | Folder  |  Source File | Licence  | Add Date |
|---|---|---|---|---|---|
| <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Edit_font_awesome.svg"> | [`fa-edit.svg`](https://commons.wikimedia.org/wiki/File:Edit_font_awesome.svg)  | `img/icons-svg`  | [`Edit_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/4/4c/Edit_font_awesome.svg) | CC BY-SA 3.0 | 2019/09/12  |
| <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Font_font_awesome.svg"> | [`fa-font.svg`](https://commons.wikimedia.org/wiki/File:Font_font_awesome.svg)  | `img/icons-svg`  | [`Font_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/0/0b/Font_font_awesome.svg) | CC BY-SA 3.0 | 2019/09/12  |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/List_font_awesome.svg"> | [`fa-list.svg`](https://commons.wikimedia.org/wiki/File:List_font_awesome.svg)  | `img/icons-svg`  | [`List_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/1/1b/List_font_awesome.svg) | CC BY-SA 3.0 | 2019/09/12  |
| <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Ol_font_awesome.svg"> | [`fa-enumeration.svg`](https://commons.wikimedia.org/wiki/File:Ol_font_awesome.svg)  | `img/icons-svg`  | [`Ol_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/3/31/Ol_font_awesome.svg) | CC BY-SA 3.0 | 2019/09/12  |
| <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Copy_font_awesome.svg"> | [`fa-copy.svg`](https://commons.wikimedia.org/wiki/File:Copy_font_awesome.svg)  | `img/icons-svg`  | [`Copy_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/0/04/Copy_font_awesome.svg) | CC BY-SA 3.0 | 2019/09/12  |
| <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Paste_font_awesome.svg"> | [`fa-paste.svg`](https://commons.wikimedia.org/wiki/File:Paste_font_awesome.svg)  | `img/icons-svg`  | [`Paste_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/4/46/Paste_font_awesome.svg) | CC BY-SA 3.0 | 2019/09/12  |



### Action and Processes
| Icon | File  | Folder  |  Source File | Licence  | Add Date |
|---|---|---|---|---|---|
| <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Envelope_font_awesome.svg"> | [`fa-envelope.svg`](https://commons.wikimedia.org/wiki/File:Envelope_font_awesome.svg)  | `img/icons-svg`  | [`Envelope_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/6/6b/Envelope_font_awesome.svg) | CC BY-SA 3.0 | 2019/10/01  |
| <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Spinner_font_awesome.svg"> | [`fa-spinner.svg`](https://commons.wikimedia.org/wiki/File:Spinner_font_awesome.svg)  | `img/icons-svg`  | [`Spinner_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/d/d4/Spinner_font_awesome.svg) | CC BY-SA 3.0 | 2019/09/12  |
| <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Barcode_font_awesome.svg"> | [`fa-barcode.svg`](https://commons.wikimedia.org/wiki/File:Barcode_font_awesome.svg)  | `img/icons-svg`  | [`Barcode_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/6/6b/Barcode_font_awesome.svg) | CC BY-SA 3.0 | 2019/09/12  |
| <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Undo_font_awesome.svg"> | [`fa-undo.svg`](https://commons.wikimedia.org/wiki/File:Undo_font_awesome.svg)  | `img/icons-svg`  | [`Undo_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/6/6b/Barcode_font_awesome.svg) | CC BY-SA 3.0 | 2019/10/01  |




### Products and Objects
| Icon | File  | Folder  |  Source File | Licence  | Add Date |
|---|---|---|---|---|---|
| <img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Book_font_awesome.svg"> | [`fa-book.svg`](https://commons.wikimedia.org/wiki/File:Book_font_awesome.svg)  | `img/icons-svg`  | [`Book_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/b/b3/Book_font_awesome.svg) | CC BY-SA 3.0 | 2019/10/01  |
| <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Picture_font_awesome.svg"> | [`fa-picture.svg`](https://commons.wikimedia.org/wiki/File:Book_font_awesome.svg)  | `img/icons-svg`  | [`Picture_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/8/84/Picture_font_awesome.svg) | CC BY-SA 3.0 | 2019/10/01  |


### File Types
| Icon | File  | Folder  |  Source File | Licence  | Add Date |
|---|---|---|---|---|---|
| ZIP <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Font_Awesome_5_regular_file-archive.svg"> | [`fa-file-archive.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_regular_file-archive.sv)  | `img/icons-svg`  | [`Font_Awesome_5_regular_file-archive.svg`](https://upload.wikimedia.org/wikipedia/commons/5/5d/Font_Awesome_5_regular_file-archive.svg) | CC BY-SA 3.0 | 2019/10/01  |



### Vehicle
| Icon | File  | Folder  |  Source File | Licence  | Add Date |
|---|---|---|---|---|---|
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Truck_font_awesome.svg"> | [`fa-truck.svg`](https://upload.wikimedia.org/wikipedia/commons/1/1c/Truck_font_awesome.svg)  | `img/icons-svg`  | [`Truck_font_awesome.svg`](https://commons.wikimedia.org/wiki/File:Truck_font_awesome.svg) | CC BY-SA 3.0 | 2019/10/01  |
| <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Plane_font_awesome.svg"> | [`fa-truck.svg`](https://commons.wikimedia.org/wiki/File:Plane_font_awesome.svg)  | `img/icons-svg`  | [`Plane_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/6/64/Plane_font_awesome.svg) | CC BY-SA 3.0 | 2019/10/01  |




### Audio Player
| Icon | File  | Folder  |  Source File | Licence  | Add Date |
|---|---|---|---|---|---|
| <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Play_font_awesome.svg"> | [`fa-audio-play.svg`](https://commons.wikimedia.org/wiki/File:Play_font_awesome.svg)  | `img/icons-svg`  | [`Play_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/d/d3/Play_font_awesome.svg) | CC BY-SA 3.0 | 2019/09/12  |
| <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Font_Awesome_5_solid_square.svg"> | [`fa-audio-stop.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_square.svg)  | `img/icons-svg`  | [`Font_Awesome_5_solid_square.svg`](https://upload.wikimedia.org/wikipedia/commons/b/b9/Font_Awesome_5_solid_square.svg) | CC BY-SA 3.0 | 2019/09/12  |
| <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Pause_font_awesome.svg"> | [`fa-audio-pause.svg`](https://commons.wikimedia.org/wiki/File:Pause_font_awesome.svg)  | `img/icons-svg`  | [`Pause_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/a/af/Pause_font_awesome.svg) | CC BY-SA 3.0 | 2019/09/12  |
| <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Font_Awesome_5_solid_eject.svg"> | [`fa-audio-eject.svg`](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_eject.svg)  | `img/icons-svg`  | [`Font_Awesome_5_solid_eject.svg`](https://upload.wikimedia.org/wikipedia/commons/1/14/Font_Awesome_5_solid_eject.svg) | CC BY-SA 3.0 | 2019/09/12  |
| <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Circle_font_awesome.svg"> | [`fa-audio-record.svg`](https://commons.wikimedia.org/wiki/File:Circle_font_awesome.svg)  | `img/icons-svg`  | [`Circle_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/a/a0/Circle_font_awesome.svg) | CC BY-SA 3.0 | 2019/09/12  |
| <img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Backward_font_awesome.svg"> | [`fa-audio-backward.svg`](https://commons.wikimedia.org/wiki/File:Backward_font_awesome.svg)  | `img/icons-svg`  | [`Backward_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/c/c8/Backward_font_awesome.svg) | CC BY-SA 3.0 | 2019/09/12  |
| <img src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Forward_font_awesome.svg"> | [`fa-audio-forward.svg`](https://commons.wikimedia.org/wiki/File:Forward_font_awesome.svg)  | `img/icons-svg`  | [`Forward_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/7/7f/Forward_font_awesome.svg) | CC BY-SA 3.0 | 2019/09/12  |


### Devices
| Icon | File  | Folder  |  Source File | Licence  | Add Date |
|---|---|---|---|---|---|
| <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Camera_font_awesome.svg"> | [`fa-camera.svg`](https://commons.wikimedia.org/wiki/File:Camera_font_awesome.svg)  | `img/icons-svg`  | [`Play_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/d/d1/Camera_font_awesome.svg) | CC BY-SA 3.0 | 2019/10/01  |
| <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Tablet_font_awesome.svg"> | [`fa-tablet.svg`](https://commons.wikimedia.org/wiki/File:Tablet_font_awesome.svg)  | `img/icons-svg`  | [`Play_font_awesome.svg`](https://upload.wikimedia.org/wikipedia/commons/3/30/Tablet_font_awesome.svg) | CC BY-SA 3.0 | 2019/09/12  |





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
