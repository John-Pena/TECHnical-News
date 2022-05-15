const {format_date} = require('../utils/helpers');

test('format_date() returns a date string', () => {
  const date = new Date('2022-05-14 18:33:03');

  expect(format_date(date)).toBe('5/14/2022');
});