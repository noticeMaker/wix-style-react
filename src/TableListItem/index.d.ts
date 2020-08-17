import * as React from 'react';

export type TableListItemColumn = {
  value: React.ReactNode;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
};

export interface TableListItemProps {
  dataHook?: string;
  className?: string;
  options: TableListItemColumn[];
  verticalPadding?: 'small' | 'medium';
  checkbox?: boolean;
  checkboxDisabled?: boolean;
  checked?: boolean;
  onCheckboxChange?: React.ChangeEventHandler<HTMLInputElement>;
  draggable?: boolean;
  dragDisabled?: boolean;
  showDivider?: boolean;
}

export default class TableListItem extends React.PureComponent<
  TableListItemProps
> {}
