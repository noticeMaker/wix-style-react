import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import TableListItem from '..';
import { VERTICAL_PADDING } from '../TableListItem';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: TableListItem,
  componentPath: '..',

  componentProps: {
    options: [{ value: 'hello', width: 42 }],
    verticalPadding: VERTICAL_PADDING.SMALL,
    checkbox: true,
  },

  exampleProps: {},

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${TableListItem.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text: 'TableListItem component is used to TODO.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'TODO',
            source: '<TableListItem options={[{value: "hello"}]} />',
          }),
          example({
            title: 'more advanced',
            text: 'TODO',
            source: `<div>
                <TableListItem
                  checkbox
                  options={[
                    { value: 'Personal Finance', width: '2fr' },
                    { value: '7 posts', width: '1fr' },
                    { value: '27 April 2020', width: '20%' },
                  ]}
                />
                <TableListItem
                  checkbox
                  options={[
                    { value: 'Banking & Insurance', width: '2fr' },
                    { value: '12 posts', width: '1fr' },
                    { value: '23 April 2020', width: '20%' },
                  ]}
                />
                <TableListItem
                  checkbox
                  options={[
                    { value: 'Investing', width: '2fr' },
                    { value: '4 posts', width: '1fr' },
                    { value: '30 April 2020', width: '20%' },
                  ]}
                />
              </div>`,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
