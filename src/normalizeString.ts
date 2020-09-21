import { pipe, toLower, trim } from 'ramda';

/**
 * Lower a given string and remove whitespaces
 */
export const normalizeString = pipe(toLower, trim);
