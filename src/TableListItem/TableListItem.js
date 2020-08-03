import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { dataHooks } from './constants';
import styles from './TableListItem.st.css';

export const VERTICAL_PADDING = {
  SMALL: 'small',
  MEDIUM: 'medium',
};

const getWidthStyle = options =>
  options.reduce(
    (acc, { width }) =>
      `${acc} ${typeof width === 'number' ? width + 'px' : width}`,
    '',
  );

/** TableListItem */
const TableListItem = ({ options, verticalPadding }) => {
  return (
    <div
      className={classNames(
        styles.root,
        styles[`${verticalPadding}VerticalPadding`],
      )}
      style={{
        gridTemplateColumns: getWidthStyle(options),
      }}
    >
      {options.map(({ value }, index) => (
        <div key={index} data-hook={dataHooks.tableListItemValue}>
          {value}
        </div>
      ))}
    </div>
  );
};

TableListItem.displayName = 'TableListItem';

TableListItem.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.node.isRequired,
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ).isRequired,
  verticalPadding: PropTypes.oneOf([
    VERTICAL_PADDING.SMALL,
    VERTICAL_PADDING.MEDIUM,
  ]),
};

TableListItem.defaultProps = {
  verticalPadding: VERTICAL_PADDING.SMALL,
};

export default TableListItem;
