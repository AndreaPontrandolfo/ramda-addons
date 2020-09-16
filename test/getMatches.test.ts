import { getMatches } from '../src/getMatches';

it('should match some items in the list', () => {
  const list = ['primoMatch', 'secondoMatch', 'terzoMatch', 'sec2'];
  const matcher = 'sec';
  expect(getMatches(list, matcher)).toStrictEqual(['secondoMatch', 'sec2']);
});
