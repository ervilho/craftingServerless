const uuidv4 = require('uuid').v4

exports.parser = require('./parser');
exports.storage = require('./expenseRepository');

exports.handler = async (event) => {
  const eventBody = exports.parser(event);
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
    await exports.storage.save(receipt);
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
