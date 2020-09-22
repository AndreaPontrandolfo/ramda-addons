import { normalizeString } from '../src/normalizeString';

it('should lower the string and remove whitespaces', () => {
  const dirtyString = '     FoO    ';

  expect(normalizeString(dirtyString)).toBe('foo');
});
