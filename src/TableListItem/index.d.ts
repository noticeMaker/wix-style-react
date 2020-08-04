import * as React from 'react';

export interface TableListItemProps {
  dataHook?: string;
  className?: string;
  buttonText?: string;
}

export default class TableListItem extends React.PureComponent<
  TableListItemProps
> {}
