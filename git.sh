node createREADME.js
git add .
read -p "Enter your commit: " COMMIT
git commit -m "${COMMIT}"
git push
rm -rf *vsix
vsce package