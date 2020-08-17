import React from 'react';
import { storiesOf } from '@storybook/react';
import MarketingPageLayoutContent from '../MarketingPageLayoutContent';
import { RTLWrapper } from '../../../stories/utils/RTLWrapper';

const commonProps = {
  overline: 'overline',
  title: 'Marketing Page Title',
  subtitle: 'Subtitle text',
  content: (
    <div>
      <div>First Feature</div> <div>Second Feature</div>
      <div>Third Feature</div>
    </div>
  ),
  actions: <button>Main Action</button>,
};

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'default',
        props: {},
      },
      {
        it: 'no overline',
        props: {
          overline: '',
          title: 'Marketing Page Title',
          subtitle: 'Subtitle text',
          content: (
            <div>
              <div>First Feature</div> <div>Second Feature</div>
              <div>Third Feature</div>
            </div>
          ),
          actions: <button>Main Action</button>,
        },
      },
      {
        it: 'no title',
        props: {
          overline: 'overline',
          title: '',
          subtitle: 'Subtitle text',
          content: (
            <div>
              <div>First Feature</div> <div>Second Feature</div>
              <div>Third Feature</div>
            </div>
          ),
          actions: <button>Main Action</button>,
        },
      },
      {
        it: 'no subtitle',
        props: {
          overline: 'overline',
          title: 'Marketing Page Title',
          subtitle: '',
          content: (
            <div>
              <div>First Feature</div> <div>Second Feature</div>
              <div>Third Feature</div>
            </div>
          ),
          actions: <button>Main Action</button>,
        },
      },
      {
        it: 'no content',
        props: {
          overline: 'overline',
          title: 'Marketing Page Title',
          subtitle: 'Subtitle text',
          content: '',
          actions: <button>Main Action</button>,
        },
      },
      {
        it: 'no actions',
        props: {
          overline: 'overline',
          title: 'Marketing Page Title',
          subtitle: 'Subtitle text',
          content: (
            <div>
              <div>First Feature</div> <div>Second Feature</div>
              <div>Third Feature</div>
            </div>
          ),
          actions: '',
        },
      },
    ],
  },
  {
    describe: 'size',
    its: [
      {
        it: 'medium',
        props: {
          size: 'medium',
        },
      },
      {
        it: 'large',
        props: {
          size: 'large',
        },
      },
    ],
  },
];

const rtlTests = [
  {
    describe: 'rtl',
    its: [
      {
        it: 'default',
        props: {},
      },
      {
        it: 'no overline',
        props: {
          overline: '',
          title: 'Marketing Page Title',
          subtitle: 'Subtitle text',
          content: (
            <div>
              <div>First Feature</div> <div>Second Feature</div>
              <div>Third Feature</div>
            </div>
          ),
          actions: <button>Main Action</button>,
        },
      },
      {
        it: 'no title',
        props: {
          overline: 'overline',
          title: '',
          subtitle: 'Subtitle text',
          content: (
            <div>
              <div>First Feature</div> <div>Second Feature</div>
              <div>Third Feature</div>
            </div>
          ),
          actions: <button>Main Action</button>,
        },
      },
      {
        it: 'no subtitle',
        props: {
          overline: 'overline',
          title: 'Marketing Page Title',
          subtitle: '',
          content: (
            <div>
              <div>First Feature</div> <div>Second Feature</div>
              <div>Third Feature</div>
            </div>
          ),
          actions: <button>Main Action</button>,
        },
      },
      {
        it: 'no content',
        props: {
          overline: 'overline',
          title: 'Marketing Page Title',
          subtitle: 'Subtitle text',
          content: '',
          actions: <button>Main Action</button>,
        },
      },
      {
        it: 'no actions',
        props: {
          overline: 'overline',
          title: 'Marketing Page Title',
          subtitle: 'Subtitle text',
          content: (
            <div>
              <div>First Feature</div> <div>Second Feature</div>
              <div>Third Feature</div>
            </div>
          ),
          actions: '',
        },
      },
      {
        it: 'size medium',
        props: {
          size: 'medium',
        },
      },
      {
        it: 'size large',
        props: {
          size: 'large',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${MarketingPageLayoutContent.displayName}${
        describe ? '/' + describe : ''
      }`,
      module,
    ).add(it, () => <MarketingPageLayoutContent {...commonProps} {...props} />);
  });
});

rtlTests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${MarketingPageLayoutContent.displayName}${
        describe ? '/' + describe : ''
      }`,
      module,
    ).add(it, () => (
      <RTLWrapper rtl>
        <MarketingPageLayoutContent {...commonProps} {...props} />
      </RTLWrapper>
    ));
  });
});
