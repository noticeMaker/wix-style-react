import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import CustomModalLayout from '../CustomModalLayout';
import Text from '../../Text/Text';
import Checkbox from '../../Checkbox';

const LONG_CONTENT = (
  <Text>
    {new Array(100)
      .fill(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do`)
      .join(' ')}
  </Text>
);

const SHORT_CONTENT = (
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Venenatis urna cursus.
  </Text>
);

const commonProps = {
  primaryButtonText: 'Confirm',
  secondaryButtonText: 'Cancel',
  title: 'Title',
  subtitle: 'Subtitle',
  children: SHORT_CONTENT,
  onCloseButtonClick: () => {},
  onHelpButtonClick: () => {},
};

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'default',
        props: {},
      },
    ],
  },
  {
    describe: 'scroll',
    its: [
      {
        it: 'long text should be scrollable. title and footer should be sticky',
        props: {
          children: LONG_CONTENT,
          wait: 500,
        },
      },
    ],
  },
  {
    describe: 'header',
    its: [
      {
        it: 'should show a permanent divider below the header',
        props: {
          showHeaderDivider: true,
        },
      },
    ],
  },
  {
    describe: 'footer',
    its: [
      {
        it: 'empty footer',
        props: {
          primaryButtonText: false,
          secondaryButtonText: false,
        },
      },
      {
        it: 'with sideActions',
        props: {
          sideActions: <Checkbox>Check</Checkbox>,
        },
      },
    ],
  },
  {
    describe: 'footnote',
    its: [
      {
        it: 'basic',
        props: {
          footnote: <span>Footnote text goes here</span>,
        },
      },
    ],
  },
  {
    describe: 'removeContentPadding',
    its: [
      {
        it: 'true',
        props: {
          removeContentPadding: true,
        },
      },
    ],
  },
  {
    describe: 'width',
    its: [
      {
        it: '800px',
        props: {
          width: '800px',
        },
      },
    ],
  },
  {
    describe: 'layout',
    its: [
      {
        it: 'without title',
        props: {
          title: false,
        },
      },
      {
        it: 'without subtitle',
        props: {
          subtitle: false,
        },
      },
      {
        it: 'without title & subtitle',
        props: {
          title: false,
          subtitle: false,
        },
      },
      {
        it: 'without content',
        props: {
          content: false,
        },
      },
      {
        it: 'without actions',
        props: {
          primaryButtonText: false,
          secondaryButtonText: false,
        },
      },
    ],
  },
];

const InteractiveCustomModalLayout = ({ wait, ...props }) => {
  const [testReady, setTestReady] = useState(false);
  useEffect(() => {
    if (wait) {
      setTimeout(() => setTestReady(true), wait);
    } else {
      setTestReady(true);
    }
  }, [wait]);
  return (
    <div data-test-ready={testReady}>
      <CustomModalLayout {...props} />
    </div>
  );
};

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    storiesOf(
      `CustomModalLayout${describe ? '/' + describe : ''}`,
      module,
    ).add(
      it,
      () => <InteractiveCustomModalLayout {...commonProps} {...props} />,
      { eyes: { waitBeforeScreenshot: `[data-test-ready="true"]` } },
    );
  });
});
