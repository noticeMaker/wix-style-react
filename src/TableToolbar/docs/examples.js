const collectionOptions = [
  { id: 0, value: 'All Products' },
  { id: 1, value: 'Towels' },
  { id: 2, value: 'Slippers' },
];

const filterOptions = [
  { id: 0, value: 'All' },
  { id: 1, value: 'Red' },
  { id: 2, value: 'Cyan' },
];

export const simpleExample = `
    <Card>
      <TableToolbar>
        <TableToolbar.ItemGroup position="start">
          <TableToolbar.Item>
            <TableToolbar.Title>My Table</TableToolbar.Title>
          </TableToolbar.Item>
          <TableToolbar.Item>
            <TableToolbar.Label>
              <FormField labelPlacement="left" label='Collection'>
                  <Dropdown
                    options={${JSON.stringify(collectionOptions)}}
                    selectedId={0}
                    roundInput
                  />
                </FormField>
            </TableToolbar.Label>
          </TableToolbar.Item>
          <TableToolbar.Item>
            <TableToolbar.Label>
              <FormField labelPlacement="left" label='Filter By'>
                <Dropdown options={${JSON.stringify(
                  filterOptions,
                )}} selectedId={0} roundInput />
              </FormField>
            </TableToolbar.Label>
          </TableToolbar.Item>
        </TableToolbar.ItemGroup>
        <TableToolbar.ItemGroup position="end">
          <TableToolbar.Item>
            <Search />
          </TableToolbar.Item>
        </TableToolbar.ItemGroup>
      </TableToolbar>
    </Card>
`;
