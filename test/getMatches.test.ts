import { getMatches } from '../src/getMatches';

it('should return all found matches in the list', () => {
  const list = ['foo', 'bar', 'baz', 'baz2'];
  const matcher = 'baz';

  expect(getMatches(list, matcher)).toStrictEqual(['baz', 'baz2']);
});
