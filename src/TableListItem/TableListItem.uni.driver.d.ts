import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';
import { CheckboxUniDriver } from '../Checkbox/Checkbox.uni.driver';

export interface TableListItemUniDriver extends BaseUniDriver {
  getOptionAt(): Promise<BaseUniDriver>;
  getCheckboxDriver(): CheckboxUniDriver;
  isDragHandleExists(): Promise<boolean>;
}
