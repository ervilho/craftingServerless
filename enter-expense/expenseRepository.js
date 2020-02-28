'use strict'
const AWS = require('aws-sdk')

module.exports = {
  save: async function put(receipt, tableName) {
    const client = new AWS.DynamoDB.DocumentClient()
  
    const params = {
      TableName: tableName,
      Item: receipt
    }
  
    return await client.put(params).promise();
  }
}

