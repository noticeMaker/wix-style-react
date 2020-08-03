import React from 'react';
import PropTypes from 'prop-types';
import { dataHooks } from './constants';
import styles from './TableListItem.st.css';

const getWidthStyle = options =>
  options.reduce(
    (acc, { width }) =>
      `${acc} ${typeof width === 'number' ? width + 'px' : width}`,
    '',
  );

const TableListItem = ({ options }) => {
  return (
    <div
      className={styles.root}
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

TableListItem.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.node.isRequired,
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ).isRequired,
};

export default TableListItem;
