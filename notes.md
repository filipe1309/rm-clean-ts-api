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

# Section 2: SignUp API - Presentation Layer

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
# Section 8: Log de Erro

# Section 9: Login API - Presentation Layer

# Section 10: Login API - Data Layer

# Section 11: Segurança - Hash/Encrypt/Encode

### Security 
Hash - not reversible
Encrypt - reversible

### Transport
Encoding - Used for transport information
# Section 12: Login API - Infra Layer

## CLASS-37

```
npm i jsonwebtoken
npm i @types/jsonwebtoken -D
```

# Section 13: Login API - Main Layer

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

## CLASS-48

src/main/factories/usecases/add-account/db-add-account-factory.ts

https://github.com/rmanguinho/clean-ts-api/commit/547a1bde6bf9ffe079d913dab1d5e1a53d679ea7

## CLASS-50
```sh
git tag -a "1.2.3" -m"1.2.3"
```

# Section 16: AddSurvey API

# Section 17: Criando Middleware de Autenticação

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

# Section 21: SaveSurveyResult API

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

# Section 24: LoadSurveyResult API

## CLASS-99

```
make up
```

# Section 25: Refactor

## CLASS-100

```
make run cmd="npm i -D faker"
```
## CLASS-101

```
npm i -D copyfiles
```

## CLASS-104

```
git config --edit --global
[alias]
git t "2.5.4"
```
## CLASS-105

```
npm i mongo-round
```

# Section 26: Improving Architecture

## CLASS-115


```sh
npm i -D bson-objectid
```
# Section 27: GraphQL

## CLASS-120

```sh
docker exec -it 0968043e20c1adade18c95cec9a23ed9d18376520d52db74faf141ec561307fa bash 
npm i apollo-server-express graphql
npm i -D @types/graphql
```

http://localhost:5050/graphql

https://studio.apollographql.com/sandbox/explorer
## CLASS-121

## CLASS-122

## CLASS-123

```
npm i graphql-iso-date
npm i -D @types/graphql-iso-date
```
## CLASS-124

https://www.apollographql.com/docs/apollo-server/schema/creating-directives/

https://www.graphql-tools.com/docs/schema-directives#using-schema-directives

```
npm install @graphql-tools/schema @graphql-tools/utils

docker logs --tail 1000 -f api-container
```
## CLASS-125

## CLASS-126

```
npm i -D apollo-server-integration-testing

docker exec -it  api-container sh
```
## CLASS-127

## CLASS-128

## CLASS-129

## CLASS-130

