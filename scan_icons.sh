#!/bin/bash
SED_CMD="sed"
SUBDIR="img"
ROOT="./${SUBDIR}/" # ROOT = "./img/"
MODULE="Icons4Menu"
DOMAIN="https://niebert.github.io/icons4menu"
REPO="https://github.com/niebert/icons4menu"
WIKIVERSITY="https://en.wikiversity.org/wiki/AppLSAC"
OUTPUT="${ROOT}index.html"
WGETFILE="wget_icons.sh"
JSONFILENAME="json4icons.json"
JSONFILE="${ROOT}${JSONFILENAME}"
READMEFILE="README.md"
### TABLE4ICONS is an markdown table that is concatenated as part of the README.md
### the markdown for TABLE4ICONS is generated with the first step
TABLE4ICONS="./src/html/table4icons.html";
SEP="\""
NOW=$(date +"%Y/%m/%d")
### sed command - sed differs on OSX
### if you want to use this script on OSX install GNU sed with "brew install gsed"
### OSX
SED_CMD="gsed"
### JSONFILE ###
echo "{" > $JSONFILE
echo "  ${SEP}repository${SEP}: ${SEP}${REPO}${SEP}, " >> $JSONFILE
echo "  ${SEP}webroot${SEP}: ${SEP}${DOMAIN}${SEP}, " >> $JSONFILE
echo "  ${SEP}date${SEP}:       ${SEP}$NOW${SEP}," >> $JSONFILE
echo "  ${SEP}icons${SEP}: [" >> $JSONFILE

### WGETFILE ###
echo "#!/bin/sh" > $WGETFILE
echo "echo \"WGET Script to download ${MODULE}\"" >> $WGETFILE
echo "echo \"----------------------------------\"" >> $WGETFILE
echo "echo \"CALL Download all SVG Icons:   \$0 svg \"" >> $WGETFILE
echo "echo \"CALL Download all PNG Icons:   \$0 png \"" >> $WGETFILE
echo "echo \"CALL Download single SVG Icon: \$0 svg video-white.svg \"" >> $WGETFILE
echo "echo \"CALL Download single PNG Icon: \$0 png video-white.png \"" >> $WGETFILE
echo "echo \"Source: https://niebert.github.io/icons4menu/wget_icons.sh\"" >> $WGETFILE
echo "echo \"Check if current folder name is 'img' - then script started from folder 'img'.\"" >> $WGETFILE
echo "currentfolder=\${PWD##*/}" >> $WGETFILE
echo "if [ \"\$currentfolder\" = \"img\" ]; then"  >> $WGETFILE
echo "    echo \"Started in 'img' - change to parent directory\""   >> $WGETFILE
echo "    cd .."  >> $WGETFILE
echo "else"  >> $WGETFILE
echo "    echo \"Not started in directory 'img' - start script directly!\""   >> $WGETFILE
echo "fi;"  >> $WGETFILE
echo " "  >> $WGETFILE
echo "DOWNLOAD_FOLDER=\"icons-svg\""  >> $WGETFILE
echo " " >> $WGETFILE
echo "if [ \"\$1\" = \"svg\" ]; then" >> $WGETFILE
echo "  echo \"Download SVG\"" >> $WGETFILE
echo "  DOWNLOAD_FOLDER=\"icons-svg\"" >> $WGETFILE
echo "fi" >> $WGETFILE
echo " " >> $WGETFILE
echo "if [ \"\$1\" = \"png\" ]; then" >> $WGETFILE
echo "  echo \"Download PNG Icons\"" >> $WGETFILE
echo "  DOWNLOAD_FOLDER=\"icons-png\"" >> $WGETFILE
echo "fi" >> $WGETFILE
echo " " >> $WGETFILE
echo "ICON_SELECT=\"all\""
echo "if [ \$# -lt 2 ]" >> $WGETFILE
echo "then" >> $WGETFILE
echo "    ICON_SELECT=\"\$2\""
echo "    echo \"Single Icon Download of Icon '\$ICON_SELECT' \"" >> $WGETFILE
echo "    wget ${DOMAIN}/$SUBDIR/icons-\$1/\$2 -O $SUBDIR/icons-\$1/\$2" >> $WGETFILE
echo "    DOWNLOAD_FOLDER=\"NONE\"" >> $WGETFILE
echo "fi" >> $WGETFILE
echo " " >> $WGETFILE
echo "mkdir ${SUBDIR} " >> $WGETFILE
echo "wget ${DOMAIN}/README.html -O ${SUBDIR}/README_${MODULE}.html" >> $WGETFILE
echo "wget ${DOMAIN}/LICENSE_Jquery_Mobile.txt -O ${SUBDIR}/LICENSE_Jquery_Mobile.txt" >> $WGETFILE
echo "wget ${DOMAIN}/${SUBDIR}/${JSONFILENAME} -O ${SUBDIR}/${JSONFILENAME}" >> $WGETFILE
echo "wget ${DOMAIN}/update_wget_icons.sh -O ${SUBDIR}/update_wget_icons.sh" >> $WGETFILE
# echo "wget ${DOMAIN}/wget_icons.sh -O ${SUBDIR}/wget_icons.sh" >> $WGETFILE

### OUTPUT ###
echo "<HTML>\n\t<HEAD>\n\t\t<TITLE>Icons4Menu</TITLE>" > $OUTPUT
# echo "\n<link href=\"css/main.css\" rel=\"stylesheet\">" >> $OUTPUT
echo "\n<STYLE>" >> $OUTPUT
echo "\n body { font-family: Helvetica, Arial, Geneva, sans-serif; }" >> $OUTPUT
echo "\n</STYLE>" >> $OUTPUT
echo "\n\t<BODY>" >> $OUTPUT
echo "<H2>Scan SVG Files for Navigation Menu</H2>" >> $OUTPUT
echo "<H3>Last Update: ${NOW}</H3>" >> $OUTPUT
echo "This <a href=\"${DOMAIN}/${WGETFILE}\" target=\"_blank\">shell script <code>wget_icons.sh</code></a> of the <a href=\"${REPO}\" target=\"_blank\">repository ${MODULE}</a> collects all SVG icons files and generates an index.html for all scanned files." >> $OUTPUT
echo "The Icons can be downloaded with a <a href=\"${DOMAIN}/${WGETFILE}\" target=\"_blank\">wget shell script for Linux and MacOSX</a>." >> $OUTPUT
echo "The <a href=\"${DOMAIN}/${WGETFILE}\" target=\"_blank\">script</a> can be downloaded and modified to select just a specific subset of the icons." >> $OUTPUT
echo "The licenses for the different listed icons can view on the <a href=\"https://www.github.com/niebert/icons4menu\" target=\"_blank\">README.md of the repository <kbd>icons4menue</kbd></a>." >> $OUTPUT
#echo "Click on the file name of the image to load a single icon in your browser." >> $OUTPUT
echo "<HR>" >> $OUTPUT
i=0
COMMA=""
for filepath in `find "$ROOT" -maxdepth 1 -mindepth 1 -type d| sort`; do
  path=`basename "$filepath"`
  if [ "$path" = ".git" ]
	then
	echo "WARNING: Ignore '.git' folder for $OUTPUT"
  else
    ### CONSOLE ###
    echo "DIR: $path"

    ### WGETFILE ###
    echo " " >> $WGETFILE
    echo "if [ \"\$DOWNLOAD_FOLDER\" = \"$path\" ]; then" >> $WGETFILE
    echo "    echo \"Download $path\"" >> $WGETFILE
    echo "    mkdir ${SUBDIR}/${path} " >> $WGETFILE
    echo " " >> $WGETFILE


    ### OUTPUT ###
    # echo "  <LI><b>PATH: <a href='$DOMAIN/$path' target='_blank'>$path</a></b></LI>" >> $OUTPUT
  	echo "  <H3>Icons in Path: $path</H3>" >> $OUTPUT
  	echo "  <quote>" >> $OUTPUT
  	echo "  <table border='2' style='background-color:#CACACA;margin-left:40px'>" >> $OUTPUT
  	echo "    <tr>" >> $OUTPUT
  	echo "       <td>" >> $OUTPUT
  	echo "         <b>Icon</b>" >> $OUTPUT
  	echo "       </td>" >> $OUTPUT
  	echo "       <td>" >> $OUTPUT
  	echo "         <b>File</b>" >> $OUTPUT
  	echo "       </td>" >> $OUTPUT
  	echo "       <td>" >> $OUTPUT
  	echo "         <b>Folder</b>" >> $OUTPUT
  	echo "       </td>" >> $OUTPUT
  	echo "    </tr>" >> $OUTPUT

    ### TABLE4ICONS ###
    # echo "  <LI><b>PATH: <a href='$DOMAIN/$path' target='_blank'>$path</a></b></LI>" >> $OUTPUT
  	echo "  <H3>Icons in Path: $path</H3>" >> $TABLE4ICONS
  	echo "  <quote>" >> $TABLE4ICONS
  	echo "  <table border='2' style='background-color:#CACACA;margin-left:40px'>" >> $TABLE4ICONS
  	echo "    <tr>" >> $TABLE4ICONS
  	echo "       <td>" >> $TABLE4ICONS
  	echo "         <b>Icon</b>" >> $TABLE4ICONS
  	echo "       </td>" >> $TABLE4ICONS
  	echo "       <td>" >> $TABLE4ICONS
  	echo "         <b>File</b>" >> $TABLE4ICONS
  	echo "       </td>" >> $TABLE4ICONS
  	echo "       <td>" >> $TABLE4ICONS
  	echo "         <b>Folder</b>" >> $TABLE4ICONS
  	echo "       </td>" >> $TABLE4ICONS
  	echo "    </tr>" >> $TABLE4ICONS


    echo "Filepath: $filepath"
  	rm "${filepath}/.DS_Store"
  	for i in `find "$filepath" -maxdepth 1 -mindepth 1 -type f| sort`; do
    	file=`basename "$i"`
    	if [ "$file" = "index.html" ]
			then
			echo "- WARNING: Ignore self-reference to 'index.html' file for $OUTPUT"
  		else

        ### CONSOLE ###
        echo "- FILE: $file"

        ### JSONFILE ###
        echo "$COMMA" >> $JSONFILE
        echo "    {" >> $JSONFILE
        echo "       ${SEP}name${SEP}: ${SEP}${file}${SEP}," >> $JSONFILE
        echo "       ${SEP}path${SEP}: ${SEP}$SUBDIR/$path${SEP}," >> $JSONFILE
        echo "       ${SEP}used${SEP}: false" >> $JSONFILE
        echo "    }" >> $JSONFILE
        COMMA="   ,"
        ### WGETFILE ###
        echo "    wget ${DOMAIN}/$SUBDIR/$path/$file -O $SUBDIR/$path/$file" >> $WGETFILE

        ### OUTPUT ###
        echo "    <tr>" >> $OUTPUT
  			echo "    <TD bgcolor=\"#888888\"><img src=\"$path/$file\"></TD>" >> $OUTPUT
  			echo "    <TD><a href=\"$path/$file\">$file</a></TD>" >> $OUTPUT
  			echo "    <TD>$path</TD>" >> $OUTPUT

        ### TABLE4ICONS ###
        echo "    <tr>" >> $TABLE4ICONS
        echo "    <TD bgcolor=\"#888888\"><img src=\"$path/$file\"></TD>" >> $TABLE4ICONS
        echo "    <TD><a href=\"$path/$file\">$file</a></TD>" >> $TABLE4ICONS
        echo "    <TD>$path</TD>" >> $TABLE4ICONS
  		fi
  	done
    ### Set Comma to "," for seperating the attribution in the JSON "JSONFILE"
    COMMA=","
    ### WGET #####
    echo "fi"  >> $WGETFILE

    ### OUTPUT ###
    echo "  </TABLE>" >> $OUTPUT
  	echo "  <HR>" >> $OUTPUT

    ### TABLE4ICONS ###
    echo "  </TABLE>" >> $TABLE4ICONS
  	echo "  <HR>" >> $TABLE4ICONS
  fi
done
### OUTPUT ###
echo "</BODY>" >> $OUTPUT
echo "</HTML>" >> $OUTPUT

### JSONFILE ###
echo "  ]" >> $JSONFILE
echo "}" >> $JSONFILE
echo "CALL PanDoc for README.md and generate README.html"
node ./build.js
node ./build_readme.js

echo "-------------------"
echo "Create README.md"
echo "-------------------"
cat ./src/readme/README_header.md > $READMEFILE
cat ./src/readme/table4icons.md  >> $READMEFILE
cat ./src/readme/README_create_icons.md  >> $READMEFILE
cat ./src/readme/README_tail.md  >> $READMEFILE

echo "Create README.html"
echo "-------------------"
pandoc -s -f markdown -t html5 README.md -o README.html
cp wget_icons.sh img
echo "-----------------------"
echo " npm run build -- DONE"
echo "-----------------------"
# title=`cat $i | $SED_CMD -n 's/<title>\(.*\)<\/title>/\1/Ip' | $SED_CMD -e 's/^[ \t]*//'`
        	## GNU: cat docs/index.html | sed -n 's/<title>\(.*\)<\/title>/\1/Ip'`
        	## OSX: cat docs/index.html | gsed -n 's/<title>\(.*\)<\/title>/\1/Ip'`
