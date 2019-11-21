const checkUserLogin = require('./checkUserLogin');

test('loginTest', () => {
  expect(checkUserLogin('adam', 'anjum')).toBe({ isLoggedIn: true });
  // expect(checkUserLogin('adam', 'anjum')).toBe('adamanjum');
});
