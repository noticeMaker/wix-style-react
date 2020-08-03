import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const tableListItemDriverFactory = (base, body) => {
  const getOptionAt = index =>
    base.$$(`[data-hook="${dataHooks.tableListItemValue}"]`).get(index);

  return {
    ...baseUniDriverFactory(base, body),
    getOptionAt,
    getStyle: () => base.attr('style'),
  };
};
