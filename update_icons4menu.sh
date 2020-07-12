echo "UPDATE: WGET Script to download Icons4Menu"
echo "------------------------------------------"
echo "This file 'update_wget_icons.sh' is usually stored in the '/img' folder!"
echo "This script downloads: https://niebert.github.io/icons4menu/wget_icons.sh"
echo "and stores the script in the parent directory. Check the script if it does the expected job for you!"
wget https://niebert.github.io/icons4menu/wget_icons.sh -O ../wget_icons.sh
echo 
cd ..
sh ./wget_icons.sh svg