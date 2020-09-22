import { getMatches } from '../src/getMatches';

it('should return all found matches in the list', () => {
  const list = ['foo', 'bar', 'bAz', 'baz2'];
  const lowerCasedMatcher = 'baz';
  const mixedCasedMatcher = 'BaZ';
  const emptyMatcher = '';
  const randomLettersMatcher = '    sdvsvsbsbnv    ';

  expect(getMatches(list, lowerCasedMatcher)).toStrictEqual(['bAz', 'baz2']);
  expect(getMatches(list, mixedCasedMatcher)).toStrictEqual(['bAz', 'baz2']);
  expect(getMatches(list, emptyMatcher)).toStrictEqual(list);
  expect(getMatches(list, randomLettersMatcher)).toStrictEqual([]);
});
