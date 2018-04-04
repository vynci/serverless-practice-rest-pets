'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.update = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  // validation
  if (typeof data.name !== 'string') {
    console.error('Validation Failed');
    callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t update the item.',
    });
    return;
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id,
    },
    ExpressionAttributeNames: {
      '#pet_name': 'name',
      '#pet_type': 'type',
      '#pet_breed': 'breed',
      '#pet_owner': 'owner',
    },
    ExpressionAttributeValues: {
      ':name': data.name,
      ':type': data.type,
      ':breed': data.breed,
      ':owner': data.owner,
      ':updatedAt': timestamp,
    },
    UpdateExpression: 'SET #pet_name = :name, #pet_type = :type, #pet_breed = :breed, #pet_owner = :owner, updatedAt = :updatedAt',
    ReturnValues: 'ALL_NEW',
  };

  // update the item in the database
  dynamoDb.update(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t fetch the item.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": '*'
      },
      body: JSON.stringify(result.Attributes),
    };
    callback(null, response);
  });
};
