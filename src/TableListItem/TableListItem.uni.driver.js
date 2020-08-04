import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';
import { checkboxUniDriverFactory } from '../Checkbox/Checkbox.uni.driver';

export const tableListItemDriverFactory = (base, body) => {
  const getOptionAt = index =>
    base.$$(`[data-hook="${dataHooks.tableListItemValue}"]`).get(index);
  const getOptionsContainer = () =>
    base.$(`[data-hook="${dataHooks.tableListItemOptionsContainer}"]`);
  const getClassList = () => base.attr('class');
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
    isVerticalPaddingSmall: async () =>
      (await getClassList()).includes('smallVerticalPadding'),
    isVerticalPaddingMedium: async () =>
      (await getClassList()).includes('mediumVerticalPadding'),
    isCheckboxExist: () => getCheckboxDriver().exists(),
    checkboxDriver: getCheckboxDriver,
    doesDragHandleExist: () => getDragHandle().exists(),
    isDragHandleDisabled: async () => {
      const classList = await getDragHandle().attr('class');
      return classList.includes('dragHandleDisabled');
    },
  };
};
