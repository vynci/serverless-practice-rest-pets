# Serverless Backend (Sample project)

![alt text](https://lh3.googleusercontent.com/svwsbW5y6Scd0S8-s7XTV2WJwT8JJXrV1kjypgU5VfXmrJCW80MdNWvsGZ9pZ6jeeI4ehcHDuX3F_reZui-d_s-G6YYoSUSte0f7R0osFyfQyYWket_919MpwjymeskXdVezz0jQRnsW30VD71dCifL7LwL-aOl6vxIex_O3CVZiH9_pWjYwCw3Zs-VAOvuo5SHLuYL8hJlPwxetTNj5MpKto84tU7JplCgdiVTIJt3qtBUlK9EI6w64seXh8iMPS9FN8lhCdC2M-PwnF7p5mKkHpO7hoJtI3iG5DKztVSAne96B_1OKI0ubzp_WsrifCg3ZlgQ6HWL930MyjgRA_W_4L37V00PsFWdTwRKmbyQ-ZE_Qxe5WzdwVJ_ry0CVu9AARNwYu51jXYUQRxWJCLU-fntUAQstIkB_v-za3Dz0ApiH77Vmb2U_7TNWKxs5Tmm-vjYeKZpfs5GbO5wi1c1Hmwq36kDrES8gV1lVC-GdvtqC8ZbHuXB3diEwvJfLtcSAP2ySDDjmt2PrX1eiBHbM5OdHdS1NZATyWTxN6Zi0ZVI9BahBsS8H51AtMzb4JXHgmV5n5XzrWBv5M8lOo1CYF5-B7B9P9lHcWZJxF8A3mTEKJsJUwrPANDgZz3z8aPwSarxZV_5cC9tL225OhS40jSzSCLBE=w1280-h720-no)

## Setup

```bash
npm install
```

## Deploy

In order to deploy the endpoint simply run

```bash
serverless deploy
```

The expected result should be similar to:

```bash
Serverless: Packaging service…
Serverless: Uploading CloudFormation file to S3…
Serverless: Uploading service .zip file to S3…
Serverless: Updating Stack…
Serverless: Checking Stack update progress…
Serverless: Stack update finished…

Service Information
service: serverless-rest-api-with-dynamodb
stage: dev
region: us-east-1
api keys:
  None
endpoints:
  POST - https://5m718e0hf5.execute-api.us-east-1.amazonaws.com/dev/pets
  GET - https://5m718e0hf5.execute-api.us-east-1.amazonaws.com/dev/pets
  GET - https://5m718e0hf5.execute-api.us-east-1.amazonaws.com/dev/pets/{id}
  PUT - https://5m718e0hf5.execute-api.us-east-1.amazonaws.com/dev/pets/{id}
  DELETE - https://5m718e0hf5.execute-api.us-east-1.amazonaws.com/dev/pets/{id}
functions:
  serverless-rest-api-with-dynamodb-dev-update: arn:aws:lambda:us-east-1:488110005556:function:serverless-rest-api-with-dynamodb-dev-update
  serverless-rest-api-with-dynamodb-dev-get: arn:aws:lambda:us-east-1:488110005556:function:serverless-rest-api-with-dynamodb-dev-get
  serverless-rest-api-with-dynamodb-dev-list: arn:aws:lambda:us-east-1:488110005556:function:serverless-rest-api-with-dynamodb-dev-list
  serverless-rest-api-with-dynamodb-dev-create: arn:aws:lambda:us-east-1:488110005556:function:serverless-rest-api-with-dynamodb-dev-create
  serverless-rest-api-with-dynamodb-dev-delete: arn:aws:lambda:us-east-1:488110005556:function:serverless-rest-api-with-dynamodb-dev-delete
```

## Usage

You can create, retrieve, update, or delete pets with the following commands:

### Create a Pet

```bash
curl -X POST https://5m718e0hf5.execute-api.us-east-1.amazonaws.com/dev/pets --data '{ "name": "Larry", "type": "bird", "breed":"parrot", "owner":{"name":"Vince Elizaga", "id":"e2645060-ba81-15e6-aede-afefa25fff8x"} }'
```

Example Result:
```bash
{"name": "Larry", "type": "bird", "breed":"parrot", "owner":{"name":"Vince Elizaga", "id":"e2645060-ba81-15e6-aede-afefa25fff8x"}, "id":"ee6490d0-aa81-11e6-9ede-afdfa051af86","createdAt":1479138570824,"updatedAt":1479138570824}%
```

### List all pets

```bash
curl https://5m718e0hf5.execute-api.us-east-1.amazonaws.com/dev/pets
```

### Get one Pet

```bash
# Replace the <id> part with a real id from your pets table
curl https://5m718e0hf5.execute-api.us-east-1.amazonaws.com/dev/pets/<id>
```

Example Result:
```bash
{"name": "Larry", "type": "bird", "breed":"parrot", "owner":{"name":"Vince Elizaga", "id":"e2645060-ba81-15e6-aede-afefa25fff8x"}, "id":"ee6490d0-aa81-11e6-9ede-afdfa051af86","createdAt":1479138570824,"updatedAt":1479138570824}%
```

### Update a Pet

```bash
# Replace the <id> part with a real id from your pets table
curl -X PUT https://5m718e0hf5.execute-api.us-east-1.amazonaws.com/dev/pets/<id> --data '{ "name": "Larry", "type": "dog", "breed":"Pug", "owner":{"name":"Vince Elizaga", "id":"e2645060-ba81-15e6-aede-afefa25fff8x"} }'
```

### Delete a Pet

```bash
# Replace the <id> part with a real id from your pets table
curl -X DELETE https://5m718e0hf5.execute-api.us-east-1.amazonaws.com/dev/pets/<id>
```

No output
