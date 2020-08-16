import React from 'react';
import { storiesOf } from '@storybook/react';
import TestimonialList from '../TestimonialList';
import { RTLWrapper } from '../../../stories/utils/RTLWrapper';
import Avatar from '../../Avatar';

const commonProps = {
  testimonials: [
    {
      id: '0001',
      avatar: <Avatar name="Guy in glasses" size="size60" />,
      text: 'I love it! This product is exactly what I needed.',
      authorName: 'Guy in glasses',
    },
    {
      id: '0002',
      avatar: <Avatar name="Person with a hat" size="size60" />,
      text: 'Amazing! It helped me to solve my problems.',
      authorName: 'Person with a hat',
    },
    {
      id: '0003',
      avatar: <Avatar name="Smiling lady" size="size60" />,
      text: 'A perfect tool for my every day tasks.',
      authorName: 'Smiling lady',
    },
  ],
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
        it: 'no avatar',
        props: {
          testimonials: [
            {
              id: '0001',
              text: 'I love it! This product is exactly what I needed.',
              authorName: 'Guy in glasses',
            },
            {
              id: '0002',
              text: 'Amazing! It helped me to solve my problems.',
              authorName: 'Person with a hat',
            },
            {
              id: '0003',
              text: 'A perfect tool for my every day tasks.',
              authorName: 'Smiling lady',
            },
          ],
        },
      },
      {
        it: 'no text',
        props: {
          testimonials: [
            {
              id: '0001',
              avatar: <Avatar name="Guy in glasses" size="size60" />,
              authorName: 'Guy in glasses',
            },
            {
              id: '0002',
              avatar: <Avatar name="Person with a hat" size="size60" />,
              authorName: 'Person with a hat',
            },
            {
              id: '0003',
              avatar: <Avatar name="Smiling lady" size="size60" />,
              authorName: 'Smiling lady',
            },
          ],
        },
      },
      {
        it: 'no authorName',
        props: {
          testimonials: [
            {
              id: '0001',
              avatar: <Avatar name="Guy in glasses" size="size60" />,
              text: 'I love it! This product is exactly what I needed.',
            },
            {
              id: '0002',
              avatar: <Avatar name="Person with a hat" size="size60" />,
              text: 'Amazing! It helped me to solve my problems.',
            },
            {
              id: '0003',
              avatar: <Avatar name="Smiling lady" size="size60" />,
              text: 'A perfect tool for my every day tasks.',
            },
          ],
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
        it: 'rtl',
        props: {},
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${TestimonialList.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <TestimonialList {...commonProps} {...props} />);
  });
});

rtlTests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${TestimonialList.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => (
      <RTLWrapper rtl>
        <TestimonialList {...commonProps} {...props} />
      </RTLWrapper>
    ));
  });
});
