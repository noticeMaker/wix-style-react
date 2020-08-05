import React from 'react';
import sinon from 'sinon';
import {
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/react/index';
import { tableListItemPrivateDriverFactory } from './TableListItem.private.uni.driver';
import TableListItem from '../index';

describe('TableListItem', () => {
  const render = createRendererWithUniDriver(tableListItemPrivateDriverFactory);

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

      expect(await driver.getStyle()).toContain(
        'grid-template-columns: 20px 30% 1fr 20px',
      );
    });
  });

  describe('checkbox props', () => {
    it('should display checkbox', async () => {
      const { driver } = render(
        <TableListItem options={[{ value: 'Hi' }]} checkbox />,
      );
      expect(await driver.checkboxDriver().exists()).toBe(true);
      expect(await driver.checkboxDriver().isChecked()).toBe(false);
    });

    it('should display checked checkbox', async () => {
      const { driver } = render(
        <TableListItem options={[{ value: 'Hi' }]} checkbox checked />,
      );
      expect(await driver.checkboxDriver().isChecked()).toBe(true);
    });

    it('should call onCheckboxChange', async () => {
      const stub = sinon.stub();
      const { driver } = render(
        <TableListItem
          options={[{ value: 'Hi' }]}
          checkbox
          onCheckboxChange={stub}
        />,
      );
      await driver.checkboxDriver().click();
      expect(stub.calledOnce).toBe(true);
    });
  });

  describe('drag props', () => {
    it('should show drag handle', async () => {
      const { driver } = render(<TableListItem options={[]} draggable />);

      expect(await driver.isDragHandleExists()).toBe(true);
    });
  });
});
