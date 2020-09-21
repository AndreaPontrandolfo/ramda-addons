import { filter } from 'ramda';
import { normalizeString } from './normalizeString';

/**
 * Return all found matches in the list
 */
export const getMatches = (sourceData: string[], searchedValue: string) => {
  // @ts-ignore
  return filter((element: any) => {
    const normalizedString: string = normalizeString(element);

    return normalizedString.match(searchedValue);
  }, sourceData);
};
