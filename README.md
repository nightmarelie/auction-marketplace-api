# Auction Marketplace(API)

## Presets
1. Create a `.env` file in the root directory of project and add environment variables on new lines in the form of:
#### All are required
PORT=\d{3,}
NODE_ENV=[`'development' | 'production'`]
PROCESS_TYPE=[`'web' | 'lots-postprocessor'`]
MONGODB_URI

## Processes
### Web
```shell
$ npm start
```
#### Environment variables
  - `NODE_ENV` (`'development' | 'production'`)
  - `PORT`
  - `MONGODB_URI`

### Lots postprocessor
```shell
$ npm run start:prod:lot-postprocessor
```
#### Environment variables
  - `NODE_ENV` (`'development' | 'production'`)
  - `PORT`

## Run tests
```shell
$ npm test
```