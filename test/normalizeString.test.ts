import { normalizeString } from '../src/normalizeString';

it('should ...', () => {
  const dirtyString = '     FoO    ';

  expect(normalizeString(dirtyString)).toBe('foo');
});
