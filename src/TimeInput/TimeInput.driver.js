import { tickerTestkitFactory } from '../Input/Ticker/testkit/Ticker';
import ReactTestUtils from 'react-dom/test-utils';
import styles from './TimeInput.scss';
import { testkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import inputDriverFactory from '../Input/Input.driver';
import { dataHooks } from './constants';

const inputTestkitFactory = testkitFactoryCreator(inputDriverFactory);

const timeInputDriverFactory = ({ element }) => {
  const input = () =>
    inputTestkitFactory({ wrapper: element, dataHook: dataHooks.input });
  const inputTicker = () => tickerTestkitFactory({ wrapper: element });
  const amPmIndicator = () =>
    element.querySelector(`[data-hook="${dataHooks.amPmIndicator}"]`);

  return {
    exists: () => !!element,
    getValue: () => input().getValue(),
    isDisabled: () => input().isDisabled(),
    clickTickerUp: () => inputTicker().clickUp(),
    clickTickerDown: () => inputTicker().clickDown(),
    isAmPmIndicatorExist: () => !!amPmIndicator(),
    toggleAmPmIndicator: () => ReactTestUtils.Simulate.click(amPmIndicator()),
    getAmPmIndicatorText: () => amPmIndicator().innerHTML,
    getCustomSuffix: () => {
      const customSuffix = element.querySelector(
        `[data-hook="${dataHooks.customSuffix}"]`,
      );
      if (customSuffix) {
        return customSuffix.innerHTML;
      }
    },
    isRtl: () => !!element.querySelector(`.${styles.rtl}`),
    setValue: value => input().enterText(value),
    blur: () => input().blur(),
    hasStatus: status => input().hasStatus(status),
    getStatusMessage: () => input().getStatusMessage(),
  };
};
export default timeInputDriverFactory;
