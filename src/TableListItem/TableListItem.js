import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { dataHooks } from './constants';
import styles from './TableListItem.st.css';
import Checkbox from '../Checkbox';
import Box from '../Box';

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

const isAlignmentValid = align => align && Object.keys(ALIGN).includes(align);

/** TableListItem */
const TableListItem = ({
  options,
  verticalPadding,
  checkbox,
  checked,
  onCheckboxChange,
}) => {
  return (
    <Box
      className={classNames(
        styles.root,
        styles[`${verticalPadding}VerticalPadding`],
      )}
    >
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
            key={index}
            data-hook={dataHooks.tableListItemValue}
            className={isAlignmentValid(align) && styles[`${align}Align`]}
          >
            {value}
          </div>
        ))}
      </Box>
    </Box>
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
};

TableListItem.defaultProps = {
  verticalPadding: VERTICAL_PADDING.SMALL,
};

export default TableListItem;
