exports.handler = async (event) => {
  console.log(event);
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
