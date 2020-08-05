import React from 'react';
import PropTypes from 'prop-types';
import { dataHooks } from './constants';
import styles from './TableListItem.st.css';
import Checkbox from '../Checkbox';
import Box from '../Box';
import DragHandle from 'wix-ui-icons-common/system/DragAndDropLarge';
import DragHandleDisabled from 'wix-ui-icons-common/system/DragAndDropLockedLarge';

export const VERTICAL_PADDING = {
  SMALL: 'small',
  MEDIUM: 'medium',
};

const ALIGN = {
  left: 'left',
  center: 'center',
  right: 'right',
};

const getWidthStyle = options =>
  options.reduce(
    (acc, { width }) =>
      `${acc} ${typeof width === 'number' ? width + 'px' : width}`,
    '',
  );

const getAlignment = alignment => ({
  [ALIGN[alignment] || ALIGN.left]: true,
});

/** TableListItem */
const TableListItem = ({
  options,
  verticalPadding,
  checkbox,
  checked,
  onCheckboxChange,
  draggable,
  dragDisabled,
  showDivider,
}) => {
  const DragHandleIcon = dragDisabled ? DragHandleDisabled : DragHandle;
  return (
    <div
      {...styles('root', {
        checked: checkbox && checked,
        showDivider,
        ...{ [`${verticalPadding}VerticalPadding`]: true },
      })}
    >
      <Box>
        {draggable && (
          <div
            {...styles(styles.dragHandle, {
              disabled: dragDisabled,
            })}
            data-hook={dataHooks.tableListItemDragHandle}
          >
            <DragHandleIcon />
          </div>
        )}
        {checkbox && (
          <Checkbox
            className={styles.checkbox}
            checked={checked}
            onChange={onCheckboxChange}
            dataHook={dataHooks.tableListItemCheckbox}
          />
        )}
        <Box
          className={styles.optionsContainer}
          style={{
            gridTemplateColumns: getWidthStyle(options),
          }}
          verticalAlign="middle"
          dataHook={dataHooks.tableListItemOptionsContainer}
        >
          {options.map(({ value, align }, index) => (
            <div
              {...styles(styles.align, getAlignment(align))}
              key={index}
              data-hook={dataHooks.tableListItemValue}
            >
              {value}
            </div>
          ))}
        </Box>
      </Box>
    </div>
  );
};

TableListItem.displayName = 'TableListItem';

TableListItem.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.node.isRequired,
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      align: PropTypes.oneOf(Object.keys(ALIGN)),
    }),
  ).isRequired,
  verticalPadding: PropTypes.oneOf([
    VERTICAL_PADDING.SMALL,
    VERTICAL_PADDING.MEDIUM,
  ]),
  checkbox: PropTypes.bool,
  checked: PropTypes.bool,
  onCheckboxChange: PropTypes.func,
  draggable: PropTypes.bool,
  dragDisabled: PropTypes.bool,
  showDivider: PropTypes.bool,
};

TableListItem.defaultProps = {
  verticalPadding: VERTICAL_PADDING.SMALL,
  checkbox: false,
  draggable: false,
  showDivider: false,
};

export default TableListItem;
