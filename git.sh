node createREADME.js
git fetch
clear 
git add .
git status
read -p "Enter commit name: " COMMIT
git commit -m "${COMMIT}"
git pull
git push 
rm -rf *vsix
vsce package