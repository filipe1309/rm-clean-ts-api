# Notes

> notes taken during the course

https://github.com/rmanguinho/clean-ts-api

http://fordevs.herokuapp.com/api-docs/

# Section 1: Introdução

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

# Section 2: SignUp API - Presentation Layer

## CLASS-6

## CLASS-7

## CLASS-8

## CLASS-9

## CLASS-10

# Section 3: Jest
## CLASS-11

```sh
npx husky add .husky/pre-push "npm run test:ci"
```

# Section 4: Utils Layer
## CLASS-12

```sh
npm i validator
npm i -D @types/validator
```

# Section 5: SignUp API - Data Layer
## CLASS-13

## CLASS-14

# Section 6: SignUp API - Infra Layer

## CLASS-15

```sh
npm i bcrypt 
npm i -D @types/bcrypt
```
## CLASS-16

https://github.com/shelfio/jest-mongodb

```sh
npm i -D @shelf/jest-mongodb @types/mongodb
npm i mongodb
```

Verify binary version in jest-mongodb-config.js in a real app 
## CLASS-17

# Section 7: SignUp API - Main Layer

## CLASS-18

```sh
npm i express
npm i -D @types/express

npm i -D sucrase

npm start

npm i -D supertest @types/supertest
```
## CLASS-19

```sh
# Looks like the Filesystem lib
 npm i fast-glob
```
## CLASS-20

# Section 8: Log de Erro

## CLASS-21

## CLASS-22

## CLASS-23

## CLASS-24

## CLASS-25

## CLASS-26

