import React from 'react';
import Edit from 'wix-ui-icons-common/Edit';
import Duplicate from 'wix-ui-icons-common/Duplicate';
import Upload from 'wix-ui-icons-common/Upload';

import {
  SelectionContextPropTypes,
  TableToolbar,
  ItemGroup,
  Item,
  SelectedCount,
  Divider,
  Card,
  Search,
  Button,
} from 'wix-style-react';

export class BulkActionsExample extends React.Component {
  render() {
    return (
      <Card>
        <BulkActionsToolbar selectedCount={12} />
      </Card>
    );
  }
}

const BulkActionsToolbar = props => (
  <TableToolbar>
    <TableToolbar.ItemGroup position="start">
      <TableToolbar.Item>
        <TableToolbar.SelectedCount>{`${props.selectedCount} Selected`}</TableToolbar.SelectedCount>
      </TableToolbar.Item>
    </TableToolbar.ItemGroup>
    <TableToolbar.ItemGroup position="end">
      <TableToolbar.Item layout="button">
        <Button
          skin="light"
          prefixIcon={<Upload />}
          onClick={() =>
            window.alert(`Exporting selectedIds=${props.getSelectedIds()}`)
          }
        >
          Export
        </Button>
      </TableToolbar.Item>
      <TableToolbar.Item layout="button">
        <Button
          skin="light"
          prefixIcon={<Duplicate />}
          onClick={() =>
            window.alert(`Duplicating selectedIds=${props.getSelectedIds()}`)
          }
        >
          Duplicate
        </Button>
      </TableToolbar.Item>
      <TableToolbar.Item layout="button">
        <Button
          theme="whiteblueprimary"
          prefixIcon={<Edit />}
          onClick={() =>
            window.alert(`Editing selectedIds=${props.getSelectedIds()}`)
          }
        >
          Edit
        </Button>
      </TableToolbar.Item>
      <TableToolbar.Divider />
      <TableToolbar.Item>
        <Search expandable />
      </TableToolbar.Item>
    </TableToolbar.ItemGroup>
  </TableToolbar>
);
BulkActionsToolbar.propTypes = SelectionContextPropTypes;
