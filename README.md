## Setup

```bash
npm install
```

## Deploy

In order to deploy the endpoint simply run

```bash
serverless deploy
```

## Usage

You can create, retrieve, update, or delete pets with the following commands:

### Create a Pet

```bash
curl -X POST https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/pets --data '{ "name": "Larry", "type": "Bird", "breed": "Parrot", "owner": "Default" }'
```

Example Result:
```bash
{"name": "Larry", "type": "Bird", "breed": "Parrot", "owner": "Default","id":"ee6490d0-aa81-11e6-9ede-afdfa051af86","createdAt":1479138570824,"updatedAt":1479138570824}%
```

### List all Pets

```bash
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/pets
```

Example output:
```bash
[{"name": "Larry", "type": "Bird", "breed": "Parrot", "owner": "Default","id":"ac90fe80-aa83-11e6-9ede-afdfa051af86","updatedAt":1479139961304},{"text":"Learn Serverless","id":"20679390-aa85-11e6-9ede-afdfa051af86","createdAt":1479139943241,"checked":false,"updatedAt":1479139943241}]%
```

### Get one pet

```bash
# Replace the <id> part with a real id from your pet table
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/pets/<id>
```

Example Result:
```bash
{"name": "Larry", "type": "Bird", "breed": "Parrot", "owner": "Default","id":"ee6490d0-aa81-11e6-9ede-afdfa051af86","createdAt":1479138570824,"checked":false,"updatedAt":1479138570824}%
```

### Update a Todo

```bash
# Replace the <id> part with a real id from your pets table
curl -X PUT https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/pets/<id> --data '{ "name": "Shawn", "type": "Bird", "breed": "Not A Parrot", "owner": "Default" }'
```

Example Result:
```bash
{"name": "Shawn", "type": "Bird", "breed": "Not A Parrot", "owner": "Default","id":"ee6490d0-aa81-11e6-9ede-afdfa051af86","createdAt":1479138570824,"updatedAt":1479138570824}%
```

### Delete a Todo

```bash
# Replace the <id> part with a real id from your pets table
curl -X DELETE https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/pets/<id>
```

No output