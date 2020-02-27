'use strict'

module.exports = function parseEvent(event) {
  console.log(event);
  const eventBody = JSON.parse(event.body);
  console.log(eventBody);
  return eventBody;
}