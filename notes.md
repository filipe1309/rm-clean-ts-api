# Notes

> notes taken during the course

https://github.com/rmanguinho/clean-ts-api

http://fordevs.herokuapp.com/api-docs/

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

# Husky
npm i -D husky
# 2. Enable Git hooks
npx husky install
# 3. To automatically have Git hooks enabled after install
npm set-script prepare "husky install"
# husky hook
npx husky add .husky/pre-commit "npx lint-staged"
git add .husky/pre-commit


npx husky add .husky/pre-commit "lint-staged"

# To only lint file in git staging area
npm i -D lint-staged

npm i -D jest @types/jest ts-jest

./node_modules/.bin/jest --init
```

https://www.conventionalcommits.org/en/v1.0.0/

https://www.npmjs.com/package/git-commit-msg-linter

https://standardjs.com/

https://github.com/standard/eslint-config-standard-with-typescript

https://www.npmjs.com/package/husky

https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig

```
Would you like to use Jest when running "test" script in "package.json"?
Y

Would you like to use Typescript for the configuration file?
N

Choose the test environment that will be used for testing
Node

Do you want Jest to add coverage reports?
y

Which provider should be used to instrument code for coverage?
v8

Automatically clear mock calls, instances and results before every test?
n
```

```sh
npm test
```
## CLASS-5

## CLASS-6

