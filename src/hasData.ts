import { isNil, isEmpty } from 'ramda';

export const hasData = (element: any) => (!isNil(element) && !isEmpty(element) ? true : false);
