exports.handler = async (event) => {
  console.log(event);
  var eventBody = JSON.parse(event.body);
  console.log(eventBody);

  const receipt = {
    issuer: eventBody.issuer,
    expenseDate: eventBody.expenseDate,
    description: eventBody.description,
    amount: eventBody.amount,
    currency: eventBody.currency,
    location: eventBody.location
  };

  console.log(receipt);

  const response = {
    statusCode: 200,
    body: JSON.stringify(receipt),
  };

  return response;
};
