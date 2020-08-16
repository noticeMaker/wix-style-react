import * as React from 'react';
import Table from '..';
import { tableTestkitFactory } from '../../../testkit';
import { tableTestkitFactory as tableEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { tableTestkitFactory as tablePuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function tableWithMandatoryProps() {
  return <Table columns={[]} />;
}

function tableWithAllProps() {
  return (
    <Table
      allowMultiDetailsExpansion
      data={[]}
      dataHook="hook"
      deselectRowsByDefault
      dynamicRowClass={(_rowData, _rowNum) => ''}
      hasMore
      hideBulkSelectionCheckbox
      hideHeader
      id="id"
      infiniteScroll
      isRowHighlight={(_rowData, _rowNum) => true}
      itemsPerPage={10}
      loadMore={() => {}}
      loader="loading..."
      onMouseEnterRow={(_rowData, _rowNum) => {}}
      onMouseLeaveRow={(_rowData, _rowNum) => {}}
      onRowClick={(_rowData, _rowNum) => {}}
      isRowDisabled={(_rowData) => false}
      onSelectionChanged={(_selectedIds, change) => {}}
      onSortClick={(_colData, colNum) => {}}
      rowClass="class"
      rowDataHook="hook"
      rowDetails={(_rowData, rowNum) => <span />}
      rowVerticalPadding="large"
      scrollElement={document.createElement('div')}
      selectedIds={[1, 2, 3]}
      selectionDisabled
      showHeaderWhenEmpty
      showLastRowDivider
      showSelection
      skin="neutral"
      totalSelectableCount={12}
      useWindow
      virtualized
      virtualizedLineHeight={10}
      virtualizedListRef={_ref => {}}
      virtualizedTableHeight={10}
      horizontalScroll
      stickyColumns={2}
      width="10"
      withWrapper
      columns={[
        {
          align: 'center',
          important: true,
          infoTooltipProps: {},
          render: (_row, _rowNum) => <span />,
          sortDescending: true,
          sortable: true,
          style: { font: '14px' },
          title: <span />,
          width: '10',
          stickyActionCell: true,
        },
      ]}
    />
  );
}

function tableWithRefScrollElement() {
  return <Table scrollElement={new HTMLElement()} columns={[]} />;
}

interface TableRowData {
  name: string;
  age: number;
}

function typedTable() {
  return (
    <Table<TableRowData>
      data={[
        {
          name: 'Joe',
          age: 42,
        },
      ]}
      columns={[
        {
          title: 'name',
          render: row => row.name,
        },
      ]}
    />
  );
}

function testInstanceMethods() {
  const instance = new Table({ columns: [] });
  instance.setSelectedIds([1, 2, 3]);
  instance.setSelectedIds(['row1', 'row2', 'row3']);
}

async function testkits() {
  const testkit = tableTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = tableEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await tablePuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
