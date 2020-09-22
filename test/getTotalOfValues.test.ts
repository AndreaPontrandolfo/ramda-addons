import { getTotalOfValues } from '../src/getTotalOfValues';

it('should return the total amount of values in a object, including the values nested in arrays', () => {
  const validObj = { fooKey: 'foo', barKey: 'bar', bazKey: ['baz1', 'baz2', 'baz3'] };
  const emptyObj = {};

  expect(getTotalOfValues(validObj)).toBe(5);
  expect(getTotalOfValues(emptyObj)).toBe(0);
});
