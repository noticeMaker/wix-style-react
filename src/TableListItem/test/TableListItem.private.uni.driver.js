import { tableListItemDriverFactory as publicDriverFactory } from '../TableListItem.uni.driver';

export const tableListItemPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
