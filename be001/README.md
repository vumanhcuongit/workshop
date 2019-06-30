# [BE001] NodeJS Restful API

## Presequisites
You will need:
- NodeJS: https://nodejs.org/en/
- Yarn: https://yarnpkg.com/en/docs/install
- Posgresql: https://www.postgresql.org/download/

## Getting started
- Fork this repo
- Clone your forked repo
- Install node dependencies
```Bash
cd path/to/your/project/be001
yarn
```
- Config database
```Bash
# copy the config file
cp db/config.example.json db/config.json
# Then, open db/config.json and config it
```
- Run database migrations & seeders
```Bash
yarn db db:migrate
yarn db db:seed:all
```
- Start the server
```Bash
yarn dev
```

