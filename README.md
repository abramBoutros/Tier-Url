
# Tier Url

A Url shortener as a Tech Task for Tier mobility.(was pretty fun).

## Table of Contents

- [Tech Stack](#stack)
- [How to run the project](#project)
- [API Reference](#API)
- [Installation](#init)
- [Environment Variables](#env)

## [Stack](#stack)

1- Express: I used Express to ease the handling of the http requests.

2- MongoDb: I used A NoSQL database to store the data.

3- I used mongoose to structure and ease the use of MongoDb

4- I used mocha and chai for testing

## [How to run the project (easiest way)](#project)

### Using git

#### 1- download the project from github

#### 2- write in the termininal `npm install`

#### 3- add the `.env` file with your credentials

#### 4- write in the termininal `npm start`


### To rebuild

#### write in the termininal ` npm run build`


### To test

#### write in the termininal ` npm run test`






## API Reference

### base URL is http://localhost:3000

#### shorten a URL

```http
  POST /api/v1/url
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `longUrl` | `string` | **Required**. The original Url in req body |

returns an object that includes the working shortened Url

#### Use shortened Url

```http
  GET /:code
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `code`      | `string` | **Required**. send the code in the Params |




## [Installation](#init)

Install with npm after download at the root directory

```bash
  npm install 
```
    
## [Environment Variables](#env)

To run this project, you will need to add the following environment variables to your .env file

`BASE_URL` the base Url you are working with  ex: http://localhost:3000

`PORT` the port the apps listen to

`ATLAS_URI` your mongodb URI (ex:mongo atlas or mongo compass)

`NODE_ENV` to specify production or development or test
