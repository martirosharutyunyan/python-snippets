cd D:\ \node-js\readme_md_for_snippets\
npm start
cd C:/Users/Martiros/.vscode/extensions/python-snippets
git add .
read -p "Enter your commit: " COMMIT
git commit -m "${COMMIT}"
git push
rm -rf *vsix
vsce package