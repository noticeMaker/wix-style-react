import React from 'react';
import sinon from 'sinon';
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

      expect(await driver.getStyle()).toContain(
        'grid-template-columns: 20px 30% 1fr 20px',
      );
    });

    it('should align content horizontally', async () => {
      const { driver } = render(
        <TableListItem
          options={[
            { value: 'left', align: 'left' },
            { value: 'center', align: 'center' },
            { value: 'right', align: 'right' },
          ]}
        />,
      );

      expect(await driver.getOptionAt(0).attr('class')).toContain('leftAlign');
      expect(await driver.getOptionAt(1).attr('class')).toContain(
        'centerAlign',
      );
      expect(await driver.getOptionAt(2).attr('class')).toContain('rightAlign');
    });
  });

  describe('verticalPadding prop', () => {
    it('should render small item', async () => {
      const { driver } = render(<TableListItem options={[{ value: 'Hi' }]} />);
      expect(await driver.isVerticalPaddingSmall()).toBe(true);
    });

    it('should render medium item', async () => {
      const { driver } = render(
        <TableListItem options={[{ value: 'Hi' }]} verticalPadding="medium" />,
      );
      expect(await driver.isVerticalPaddingMedium()).toBe(true);
    });
  });

  describe('checkbox props', () => {
    it('should display checkbox', async () => {
      const { driver } = render(
        <TableListItem options={[{ value: 'Hi' }]} checkbox />,
      );
      expect(await driver.doesCheckboxExist()).toBe(true);
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
});
