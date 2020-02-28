
class Parser {
  parse(event) {
    console.log(event);
    const eventBody = JSON.parse(event.body);
    console.log(eventBody);
    return eventBody;  
  }
}

exports.parser = new Parser();