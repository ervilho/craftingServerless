const uuidv4 = require('uuid').v4

const {parser} = require('./parser');
const tableName = process.env.TABLE_NAME;

exports.storage = require('./expenseRepository'); // TODO: same as parse

exports.handler = async (event) => {
  const eventBody = parser.parse(event);
  const receipt = {
    ...eventBody,
    expenseId: uuidv4(),
    // issuer: eventBody.issuer,
    // expenseDate: eventBody.expenseDate,
    // description: eventBody.description,
    // amount: eventBody.amount,
    // currency: eventBody.currency,
    // location: eventBody.location
  };

  try {
    await exports.storage.save(receipt, tableName);
  }
  catch(error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    }
  }

  return {
    statusCode: 200,
    body: receipt.expenseId,
  };
};
