'use strict'
const AWS = require('aws-sdk')

module.exports = {
  save: async function put(receipt) {
    const client = new AWS.DynamoDB.DocumentClient()
  
    const params = {
      TableName: "ExpenseTable",
      Item: receipt
    }
  
    return await client.put(params).promise();
  }
}

