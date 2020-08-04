import * as React from 'react';
import TableListItem from '..';
import { tableListItemTestkitFactory } from '../../../testkit';
import { tableListItemTestkitFactory as tableListItemEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { tableListItemTestkitFactory as tableListItemPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function tableListItemWithMandatoryProps() {
  return <TableListItem />;
}

function tableListItemWithAllProps() {
  return (
    <TableListItem
      dataHook="dataHook"
      className="className"
      buttonText="buttonText"
    />
  );
}

async function testkits() {
  const testkit = tableListItemTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = tableListItemEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await tableListItemPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
