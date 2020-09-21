import { pipe, values, flatten, length } from 'ramda';

/**
 * Return the total amount of values in a object, including the values nested in arrays
 */
export const getTotalOfValues = pipe(values, flatten, length);
