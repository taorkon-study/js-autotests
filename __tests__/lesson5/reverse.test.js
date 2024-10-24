import reverse from '../../src/lesson5/reverse.js';

test('reverse string', () => {
  expect(reverse('world')).toEqual('dlrow');
  expect(reverse('')).toEqual('');
});
