const AWS = require('aws-sdk')

exports.handler = async (event) => {
  console.log(event);

  const client = new AWS.DynamoDB.DocumentClient();
  const result = client.query().promise();
  console.log(result);
  
  const receipts = [{
    issuer : "toto1",
    expenseDate : "date1",
    description : "fromage",
    amount : 24.55,
    currency : "EUR",
    location: "Carrefour"
  },
  {
    issuer : "toto2",
    expenseDate : "date2",
    description : "dragonne",
    amount : 3.43,
    currency : "EUR",
    location: "Larchery"
  }
  ];
  const response = {
      statusCode: 200,
      body: JSON.stringify(receipts),
  };
  return response;
};
