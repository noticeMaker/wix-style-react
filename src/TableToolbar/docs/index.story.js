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

  componentProps: {
    buttonText: 'Hello World!',
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

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
