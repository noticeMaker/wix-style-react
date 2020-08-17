import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  code as baseCode,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

import TableToolbar from '..';
import API from '!raw-loader!./README.md';
import Box from '../../Box';
import SectionHelper from '../../SectionHelper';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: TableToolbar,
  componentPath: '..',

  sections: [
    header({
      // sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${TableToolbar.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              "TableToolbar is a (dumb) layout component for creating the Table's Toolbar.\n" +
              ' It supports one line of items, divided into 2 groups according to alignment.',
          }),

          <Box marginBottom="50px">
            <SectionHelper
              appearance="danger"
              title="Note"
              children="The white background is not part of the Toolbar, it is coming from tha `<Card/>` which the Table sits in."
            />
          </Box>,

          importExample("import { TableToolbar } from 'wix-style-react';"),

          divider(),

          title('Examples'),

          code({
            title: 'Simple Usage',
            compact: true,
            source: examples.simpleExample,
          }),

          description({
            title: 'Typical BulkActions Toolbar',
            text:
              'The BulkActions Toolbar typically includes actions which act on the current selected rows.\n' +
              '            It may include (by convention) the following UI component:\n' +
              '- A selection count (`<TableToolbar.SelectedCount> 2 Selected </TableToolbar.SelectedCount>`)\t\n' +
              '- Action Buttons (`<Button/>`). All Buttons should have `theme="light"`.\t\n' +
              '   - Icon Button\t\n' +
              '   - Text only Button\t\n' +
              '   - Button with Prefix\t\n' +
              '- A collapsed Search input box (`<Search expandable/>`)',
          }),

          code({
            compact: true,
            source: examples.bulkActionsToolbarExample,
          }),
        ],
      }),

      ...[
        {
          title: 'API',
          sections: [
            description({
              text: API,
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
