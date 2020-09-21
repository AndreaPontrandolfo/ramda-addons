import { getTotalOfValues } from '../src/getTotalOfValues';

it('should return the total amount ov values in a object, including the values nested in arrays', () => {
  const data = { fooKey: 'foo', barKey: 'bar', bazKey: ['baz1', 'baz2', 'baz3'] };

  expect(getTotalOfValues(data)).toBe(5);
});
