# Notes

> notes taken during the course

## CLASS-3

```sh
git config --list
git config --global --edit
git config --globalcore.editor code
```

```
[core]
    editor = code --wait
[alias]
    s = !git status -s
    c = !git add --all && git commit -m
    l = !git log --pretty=format:'%C(blue)%h%C(ref)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'
```
## CLASS-4

```sh
git init
npm init -y

npm i -D git-commit-msg-linter

npm i -D typescript @types/node

npm install --save-dev \
  typescript@\* \
  eslint@^7.12.1 \
  eslint-plugin-promise@^5.0.0 \
  eslint-plugin-import@^2.22.1 \
  eslint-plugin-node@^11.1.0 \
  @typescript-eslint/eslint-plugin@^4.0.1 \
  eslint-config-standard-with-typescript@latest

git commit --amend --no-edit

npm i -D husky
# To only lint file in git staging area
npm i -D lint-staged
```

https://www.conventionalcommits.org/en/v1.0.0/

https://www.npmjs.com/package/git-commit-msg-linter

https://standardjs.com/

https://github.com/standard/eslint-config-standard-with-typescript

https://www.npmjs.com/package/husky

https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
