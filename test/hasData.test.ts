import { hasData } from '../src/hasData';

it('should check if the object exist and contains some values ', () => {
  const filledObj = { fooKey: 'foo', barKey: 'bar' };
  const emptyObj = {};
  const nullObj = null;

  expect(hasData(filledObj)).toBe(true);
  expect(hasData(emptyObj)).toBe(false);
  expect(hasData(nullObj)).toBe(false);
});
