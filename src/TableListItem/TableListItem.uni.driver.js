import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const tableListItemDriverFactory = (base, body) => {
  const getOptionAt = index =>
    base.$$(`[data-hook="${dataHooks.tableListItemValue}"]`).get(index);
  const getClassList = () => base.attr('class');

  return {
    ...baseUniDriverFactory(base, body),
    getOptionAt,
    getStyle: () => base.attr('style'),
    isVerticalPaddingSmall: async () =>
      (await getClassList()).includes('smallVerticalPadding'),
    isVerticalPaddingMedium: async () =>
      (await getClassList()).includes('mediumVerticalPadding'),
  };
};
