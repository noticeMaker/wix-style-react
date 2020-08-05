import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';
import { checkboxUniDriverFactory } from '../Checkbox/Checkbox.uni.driver';

export const tableListItemDriverFactory = (base, body) => {
  const getOptionAt = index =>
    base.$$(`[data-hook="${dataHooks.tableListItemValue}"]`).get(index);
  const getOptionsContainer = () =>
    base.$(`[data-hook="${dataHooks.tableListItemOptionsContainer}"]`);
  const getCheckboxDriver = () =>
    checkboxUniDriverFactory(
      base.$(`[data-hook="${dataHooks.tableListItemCheckbox}"]`),
      body,
    );
  const getDragHandle = () =>
    base.$(`[data-hook="${dataHooks.tableListItemDragHandle}"]`);

  return {
    ...baseUniDriverFactory(base, body),
    getOptionAt,
    getStyle: () => getOptionsContainer().attr('style'),
    isCheckboxExist: () => getCheckboxDriver().exists(),
    checkboxDriver: getCheckboxDriver,
    doesDragHandleExist: () => getDragHandle().exists(),
  };
};
