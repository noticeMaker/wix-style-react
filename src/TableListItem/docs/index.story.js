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
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import TableListItem from '..';

import { VERTICAL_PADDING } from '../TableListItem';
import Button from '../../Button';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: TableListItem,
  componentPath: '..',

  componentProps: {
    options: [{ value: 'hello', width: 42 }],
    verticalPadding: VERTICAL_PADDING.small,
    checkbox: true,
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${TableListItem.displayName}/`,
      component: (
        <TableListItem
          options={[
            { value: 'TableListItem' },
            { value: <Button>Click me</Button>, width: '30%', align: 'right' },
          ]}
        />
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'List item is a container used to organise and display data efficiently. It can contain any kind of content. It supports drag & drop functionality and nested layout when wrapped into Sortable List (can be parent or child item). Use it to replicate table layout in primary content, such as cards.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            source: `<div>
                <TableListItem
                  showDivider
                  checkbox
                  draggable
                  options={[
                    { value: 'Personal Finance', width: '2fr', align: 'right' },
                    { value: '7 posts', width: '1fr', align: 'center' },
                    { value: '27 April 2020', width: '20%', align: 'left' },
                  ]}
                />
                <TableListItem
                  showDivider
                  checkbox
                  checked
                  draggable
                  dragDisabled
                  options={[
                    { value: 'Banking & Insurance', width: '2fr', align: 'right' },
                    { value: '12 posts', width: '1fr', align: 'center' },
                    { value: '23 April 2020', width: '20%', align: 'left' },
                  ]}
                />
                <TableListItem
                  showDivider
                  checkbox
                  draggable
                  options={[
                    { value: 'Investing', width: '2fr', align: 'right' },
                    { value: '4 posts', width: '1fr', align: 'center' },
                    { value: '30 April 2020', width: '20%', align: 'left' },
                  ]}
                />
                <TableListItem
                  checkbox
                  draggable
                  options={[
                    { value: 'Investing', align: 'right' },
                    { value: '4 posts', align: 'center', width: '80px' },
                    { value: '30 April 2020', align: 'left' },
                  ]}
                />
              </div>`,
          }),

          code({
            title: 'Full Interactive Preview',
            description: 'A non compact version of same code example as above',
            source: `<div>
                <TableListItem
                  showDivider
                  checkbox
                  draggable
                  options={[
                    { value: 'Personal Finance', width: '2fr', align: 'right' },
                    { value: '7 posts', width: '1fr', align: 'center' },
                    { value: '27 April 2020', width: '20%', align: 'left' },
                  ]}
                />
                <TableListItem
                  showDivider
                  checkbox
                  checked
                  draggable
                  dragDisabled
                  options={[
                    { value: 'Banking & Insurance', width: '2fr', align: 'right' },
                    { value: '12 posts', width: '1fr', align: 'center' },
                    { value: '23 April 2020', width: '20%', align: 'left' },
                  ]}
                />
                <TableListItem
                  showDivider
                  checkbox
                  draggable
                  options={[
                    { value: 'Investing', width: '2fr', align: 'right' },
                    { value: '4 posts', width: '1fr', align: 'center' },
                    { value: '30 April 2020', width: '20%', align: 'left' },
                  ]}
                />
                <TableListItem
                  checkbox
                  draggable
                  options={[
                    { value: 'Investing', align: 'right' },
                    { value: '4 posts', align: 'center', width: '80px' },
                    { value: '30 April 2020', align: 'left' },
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
