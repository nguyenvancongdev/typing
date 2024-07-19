cd dist
echo typing.cocode.pro > CNAME
git init
git add -A
git commit -m "deploy"
git push -f https://github.com/nguyenvancongdev/typing.git master:gh-pages
pause
echo .