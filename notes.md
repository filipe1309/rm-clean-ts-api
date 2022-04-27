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

# Section 9: Login API - Presentation Layer

## CLASS-27

## CLASS-28

## CLASS-29

## CLASS-30

## CLASS-31

## CLASS-32

# Section 10: Login API - Data Layer

## CLASS-33

## CLASS-34

# Section 11: Segurança - Hash/Encrypt/Encode

## CLASS-35

### Security 
Hash - not reversible
Encrypt - reversible

### Transport
Encoding - Used for transport information
# Section 12: Login API - Infra Layer
## CLASS-36

## CLASS-37

```
npm i jsonwebtoken
npm i @types/jsonwebtoken -D
```
## CLASS-38

# Section 13: Login API - Main Layer

## CLASS-39

## CLASS-40

```sh
 git tag -a "1.1.0" -m"1.1.0"
```

```sh
git config --global --edit
```
```sh
# .gitconfig
# Subir automaticamente tags annotated no push
[push]
  followTags = true
```

# Section 14: Docker
## CLASS-41

```sh
npm run build 
```

```sh
# Clean dist folder
npm i -D rimraf
```

```sh
npm remove fast-glob  
```

### Heroku

```sh
heroku git:remote -a rm-clean-ts-api
git remote rename heroku p
git push p master
```

#### Secrets

Settings > Config Vars, add:
 - `JWT_SECRET` = pH5hm==53
 - `MONGO_URL` = mongodb://...

##### DB

Resources > Free Dynos > mLab MongoDB [DEPRECATED]
 
Use Atlas https://www.mongodb.com/developer/how-to/use-atlas-on-heroku/
## CLASS-42

```sh
# list all containers
docker ps -a

# remove one container
docker container rm 01f

# remove all containers
docker container prune

# remove one image
docker image rm a56

# list all images
docker image -a

# creane a new image
docker build -t clean-node-api .

# run container & execute shell
docker run -it clean-node-api sh

# run container
docker run -p 5050:5050 clean-node-api
```
## CLASS-43

```sh
# list all containers
docker-compose up
```
## CLASS-44

## CLASS-45

```sh
npm i nodemon

tsc -w
npx tsc -w
```
## CLASS-46

```sh
npm update
npm test
npm audit fix
npm audit fix --force
npm test
```

# Section 15: SignUp API - Fixes

## CLASS-47

## CLASS-48

src/main/factories/usecases/add-account/db-add-account-factory.ts

https://github.com/rmanguinho/clean-ts-api/commit/547a1bde6bf9ffe079d913dab1d5e1a53d679ea7
## CLASS-49

## CLASS-50
```sh
git tag -a "1.2.3" -m"1.2.3"
```

# Section 16: AddSurvey API

## CLASS-51

## CLASS-52

## CLASS-53

## CLASS-54

# Section 17: Criando Middleware de Autenticação
## CLASS-55

## CLASS-56

## CLASS-57

## CLASS-58

## CLASS-59

## CLASS-60
```sh
git tag -a "1.3.0" -m"1.3.0"
```

# Section 18: CI/CD

## CLASS-61

```sh
npm i coveralls -D
```

# Section 19: LoadSurveys API

## CLASS-62

```sh
npm i mockdate -D
```
## CLASS-63

## CLASS-64

## CLASS-65

```sh
mongo -u root -p 12345
show dbs
use clean-node-api
show collections
db.accounts.find().pretty()
db.accounts.update({_id: ObjectId("622a9f804c4675be2f859d28")}, {$set: {role: 'admin'}})
```

# Section 20: Paths no Typescript
## CLASS-66

```sh
npm i module-alias
```
## CLASS-67

## CLASS-68

# Section 21: SaveSurveyResult API

## CLASS-69
## CLASS-70

## CLASS-71

## CLASS-72

## CLASS-73

## CLASS-74

## CLASS-75

## CLASS-76

## CLASS-77

# Section 22: Refactor

## CLASS-78

## CLASS-79

## CLASS-80

## CLASS-81

## CLASS-82

Find & Replace with regex in VSCode:
```
Find: new Promise\(resolve => resolve\((.*)\)\)
Replace: Promise.resolve($1)
```

# Section 23: Swagger

## CLASS-83

```sh
npm i swagger-ui-express
npm i @types/swagger-ui-express -D
```

https://swagger.io/docs/specification/basic-structure/

https://github.com/helmetjs/nocache

```
Cache-Control: no-store, no-cache, must-revalidate, proxy-revalidate
Pragma: no-cache
Expires: 0
Surrogate-Control: no-store
```
## CLASS-84

## CLASS-85

## CLASS-86

## CLASS-87

## CLASS-88

## CLASS-89

# Section 24: LoadSurveyResult API

## CLASS-90

## CLASS-91

## CLASS-92

## CLASS-93

