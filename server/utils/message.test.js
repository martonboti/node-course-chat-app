var expect = require('expect');

var {generateMessage} = require('./message');

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
