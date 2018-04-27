var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate message', () => {
    var from = 'Boti';
    var text = 'Hello world';
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({
      from,
      text
    });

  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Boti';
    var long = '46.5158087';
    var lat = '25.7533949';

    var message = generateLocationMessage(from, long, lat);
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({
      from,
      url: `https://www.google.com/maps?q=${long},${lat}`
    });

  });
});
