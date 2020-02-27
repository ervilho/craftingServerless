const AWS = require('aws-sdk')
const uuidv4 = require('uuid/v4')

exports.handler = async (event) => {
  console.log(event);
  const eventBody = JSON.parse(event.body);
  console.log(eventBody);

  const receipt = {
    expenseId: uuidv4(),
    issuer: eventBody.issuer,
    expenseDate: eventBody.expenseDate,
    description: eventBody.description,
    amount: eventBody.amount,
    currency: eventBody.currency,
    location: eventBody.location
  };



  const client = new AWS.DynamoDB.DocumentClient();
  const params = {
    TableName: "ExpenseTable",
    Item: receipt
  }
  const result = await client.put(params).promise();
  console.log(result);
  // console.log(receipt);

  const response = {
    statusCode: 200,
    body: receipt.expenseId,
  };

  return response;
};
