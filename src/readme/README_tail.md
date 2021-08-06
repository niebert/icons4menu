

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

* [Creative Commons `CC Zero`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) - [https://creativecommons.org/publicdomain/zero/1.0/deed.en](https://creativecommons.org/publicdomain/zero/1.0/deed.en)
* [Creative Commons `CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/)  - see [https://creativecommons.org/licenses/by-sa/3.0/](https://creativecommons.org/licenses/by-sa/3.0/)  with the `fa-` as file attribution prefix.

### Attribution for Files - File Prefix
If we consider the `CC BY-SA 3.0` license provides the freedom to:

* **Share** — copy and redistribute the material in any medium or format
* **Adapt** — remix, transform, and build upon the material for any purpose, even commercially.
These two freedoms are also provided for the license `CC Zero`. Furthermore for all `CC BY-SA 3.0` licensed icons an `attribution` and a `share alike` requirement is defined (see https://creativecommons.org/licenses/by-sa/3.0/)
* **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
* **ShareAlike** — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.

The JQuery Mobile 1.4.5 PNG and SVG icons in this repository (i.e. icons without `fa-` prefix) do not require the "attribution",  but it is recommended to provide attribution also to JQuery Mobile 1.4.5 with the [CC Zero](https://creativecommons.org/publicdomain/zero/1.0/deed.en) license for icons without the `fa-` prefix. Especially for adding more icons in forks of the repository `icons4menu` the prefix `fa-` should also be used to distinguish  `CC Zero` licensed icons without `fa-` prefix from `CC BY-SA 3.0` licensed icon that need a `file attribution` by adding the prefix `fa-` in the filename.

### More than 2 Licenses in Forks of `icons4menu` with license prefix
If you have more than 2 licenses in your fork of `icons4menu` you could add a license prefix for all icons, e.g.:

* `cc0-recycle.svg` for [`CC Zero`](https://creativecommons.org/publicdomain/zero/1.0/deed.en) licensed icons from JQuery Mobile 1.4.5,
* `cc3bysa-recycle.svg` for [`CC BY-SA 3.0`](https://creativecommons.org/licenses/by-sa/3.0/) licensed icons from [Wiki Commons](https://commons.wikimedia.org/w/index.php?title=Special:Search&limit=500&offset=0&profile=default&search=FontAwesome.com&advancedSearch-current=%7B%7D&ns0=1&ns6=1&ns12=1&ns14=1&ns100=1&ns106=1),
* `cc4by-recycle.svg` for [`CC BY 4.0`]( https://creativecommons.org/licenses/by/4.0/) licensed icons e.g. from an additional source used in the fork of `icons4menu`.

This allows users to identify the license of the file directly from the filename.
