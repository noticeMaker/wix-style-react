import React from 'react';
import {
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/react/index';
import { tableListItemDriverFactory } from '../TableListItem.uni.driver';
import TableListItem from '../index';

describe('TableListItem', () => {
  const render = createRendererWithUniDriver(tableListItemDriverFactory);

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<TableListItem options={[]} />);

    expect(await driver.exists()).toBe(true);
  });

  describe('options prop', () => {
    it('should render options', async () => {
      const values = ['Hi', 'Hello'];
      const { driver } = render(
        <TableListItem
          options={values.map(value => ({
            value,
          }))}
        />,
      );

      expect(await driver.getOptionAt(0).text()).toContain(values[0]);
      expect(await driver.getOptionAt(1).text()).toContain(values[1]);
    });

    it('should display px, fr and % types correctly', async () => {
      const options = [
        { value: 'Hi', width: 20 },
        { value: 'Hello', width: '30%' },
        { value: 'Dzień dobry', width: '1fr' },
        { value: 'Guten tag', width: '20px' },
      ];
      const { driver } = render(<TableListItem options={options} />);

      expect(await driver.getStyle(0)).toContain(
        'grid-template-columns: 20px 30% 1fr 20px',
      );
    });
  });
});
