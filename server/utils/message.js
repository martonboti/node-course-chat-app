var moment = require('moment');

var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: moment().valueOf()
  }
};

var generateLocationMessage = (from, long, lat) => {
  return {
    from,
    url:   `https://www.google.com/maps?q=${long},${lat}`,
    createdAt: moment().valueOf()
  }
};

module.exports = {generateMessage, generateLocationMessage};
