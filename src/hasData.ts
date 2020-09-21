import { isNil, isEmpty } from 'ramda';

/**
 * Check if the object exist and contains some values
 */
export const hasData = (element: any) => (!isNil(element) && !isEmpty(element) ? true : false);
