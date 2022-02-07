# <p align="center">Clean TS API</p>

<p align="center">
    <img src="https://img.shields.io/badge/Tools-Docker-informational?style=flat-square&logo=docker&color=2496ED" alt="Docker" />
    <img src="https://img.shields.io/badge/Code-NodeJS-informational?style=flat-square&logo=node.js&color=339933" alt="NodeJS" />
    <img src="https://img.shields.io/badge/Code-Typescript-informational?style=flat-square&logo=typescript&color=3178C6" alt="Typescript" />
    <img src="https://img.shields.io/badge/Code-JavaScript-informational?style=flat-square&logo=javascript&color=F7DF1E" alt="JavaScript" />
    <img src="https://img.shields.io/badge/DB-MongoDB-informational?style=flat-square&logo=mongodb&color=47A248" alt="MongoDB" />
</p>

## 💬 About

This project was developed following Udemy's "[NodeJs, Typescript, TDD, DDD, Clean Architecture e SOLID](https://www.udemy.com/course/tdd-com-mango/)" class.


### 🏛 Architecture

![](arch.png)

## :computer: Technologies

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Husky](https://typicode.github.io/husky/#/)
- [Express](https://expressjs.com/)
- [Nodemailer](https://nodemailer.com/)
- [MongoDB](https://www.mongodb.com/)
- [Heroku](https://www.heroku.com/)
- [Jest](https://jestjs.io/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## :scroll: Requirements

- [Node.js](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/)
- [MongoDb](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## :cd: Installation

```sh
git clone git@github.com:filipe1309/rm-clean-ts-api.git
```

```sh
cd rm-clean-ts-api
```

## :runner: Running

Up the database:
```sh
docker-compose run --rm --service-ports db
```

Up the api:
```sh
npm run start
```
<!-- # docker-compose up -->

> Access http://localhost:5050/api

### Endpoints

[Access here.](./api.http)

## :white_check_mark: Tests

```sh
npm run test
```
```sh
npn run test:verbose
```
```sh
npn run test:unit
```
```sh
npn run test:integration
```
```sh
npn run test:staged
```
```sh
npn run test:ci
```
```sh
npn run test:clear
```

<!-- 
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate. -->

## License

[MIT](https://choosealicense.com/licenses/mit/)

## About Me

<p align="center">
    <a style="font-weight: bold" href="https://github.com/filipe1309/">
    <img style="border-radius:50%" width="100px; "src="https://github.com/filipe1309.png"/>
    </a>
</p>

---

<p align="center">
    Done with&nbsp;&nbsp;:heart:&nbsp;&nbsp;by <a style="font-weight: bold" href="https://github.com/filipe1309/">Filipe Leuch Bonfim</a> 🖖
</p>

---

> @ Generated with [ShubcoGen Template™](https://github.com/filipe1309/shubcogen-template) v0.3.11  
> ❓ [Docs](./.shub/README.md)
