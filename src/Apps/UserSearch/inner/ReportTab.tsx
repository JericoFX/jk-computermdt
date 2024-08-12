import { Table } from '../../../recipes/build';
import FieldRow from '../../../recipes/build/FieldRow/FieldRow';
import Fieldset from '../../../recipes/build/Fieldset/Fieldset';
import Input from '../../../recipes/build/Input/Input';
import {
  TableThread,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from '../../../recipes/build/Table/Table';
import { Component, For } from 'solid-js';
import { Grid, GridItem } from '../../../../styled-system/jsx';

const ReportTab: Component<{}> = (props) => {
  const Data = [
    {
      id: 1,
      type: 'Warrant',
      createdBy: 'JericoFX',
      message: 'The guy wrote a report about it',
      info: '123 Main St.',
    },
    {
      id: 2,
      type: 'Warrant',
      createdBy: 'Johann Kraus',
      message: 'Stolen car',
      info: 'Red one 123 Main St.',
    },
    {
      id: 3,
      type: 'Report',
      createdBy: 'MonkeyWisper',
      message: 'Created an awesome log system',
      info: 'fivemrr',
    },
    {
      id: 4,
      type: 'Report',
      createdBy: 'MoneSuper',
      message: 'Awesome Guy',
      info: '123 Main St.',
    },
  ];
  return (
    <>
      <Fieldset legend='Mi Info'>
        <FieldRow>
          <Grid gridTemplateColumns={8} gap={5} columnGap={5}>
            <GridItem colSpan={4}>
              <FieldRow>
                <Input readOnly type='text' label='First Name'></Input>
              </FieldRow>
            </GridItem>
            <GridItem colSpan={4}>
              <FieldRow>
                <Input readOnly type='text' label='Last Name'></Input>
              </FieldRow>
            </GridItem>
            <GridItem colSpan={4}>
              <FieldRow>
                <Input readOnly type='text' label='Job...............'></Input>
              </FieldRow>
            </GridItem>
            <GridItem colSpan={4}>
              <FieldRow>
                <Input readOnly type='text' label='Grade.........'></Input>
              </FieldRow>
            </GridItem>
            <GridItem colSpan={4}>
              <FieldRow>
                <Input readOnly type='text' label='Callsign......'></Input>
              </FieldRow>
            </GridItem>
            <GridItem colSpan={4}>
              <FieldRow>
                <Input
                  readOnly
                  type='text'
                  placeholder='On Duty'
                  label='OnDuty......'
                ></Input>
              </FieldRow>
            </GridItem>
          </Grid>
        </FieldRow>
      </Fieldset>
      <Fieldset legend='Active Polices'>
        <Table onHover>
          <TableThread>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Last Name</TableHeader>
              <TableHeader>Call ID</TableHeader>
              <TableHeader>Active</TableHeader>
              <TableHeader>On Duty</TableHeader>
            </TableRow>
          </TableThread>
          <TableBody>
            <TableRow>
              <TableCell>Johann</TableCell>
              <TableCell>Krauss</TableCell>
              <TableCell>12345</TableCell>
              <TableCell>Yes</TableCell>
              <TableCell>Yes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jerico</TableCell>
              <TableCell>FX</TableCell>
              <TableCell>12343</TableCell>
              <TableCell>Yes</TableCell>
              <TableCell>Yes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jerico</TableCell>
              <TableCell>FX</TableCell>
              <TableCell>12343</TableCell>
              <TableCell>Yes</TableCell>
              <TableCell>Yes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jerico</TableCell>
              <TableCell>FX</TableCell>
              <TableCell>12343</TableCell>
              <TableCell>Yes</TableCell>
              <TableCell>Yes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jerico</TableCell>
              <TableCell>FX</TableCell>
              <TableCell>12343</TableCell>
              <TableCell>Yes</TableCell>
              <TableCell>Yes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jerico</TableCell>
              <TableCell>FX</TableCell>
              <TableCell>12343</TableCell>
              <TableCell>Yes</TableCell>
              <TableCell>Yes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jerico</TableCell>
              <TableCell>FX</TableCell>
              <TableCell>12343</TableCell>
              <TableCell>Yes</TableCell>
              <TableCell>Yes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jerico</TableCell>
              <TableCell>FX</TableCell>
              <TableCell>12343</TableCell>
              <TableCell>Yes</TableCell>
              <TableCell>Yes</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Fieldset>
      <Fieldset legend='Reportes'>
        <Table onHover>
          <TableThread>
            <TableRow>
              <TableHeader>ID</TableHeader>
              <TableHeader>Type</TableHeader>
              <TableHeader>Created By</TableHeader>
              <TableHeader>Message</TableHeader>
              <TableHeader>Info</TableHeader>
            </TableRow>
          </TableThread>
          <TableBody>
            <For each={Data}>
              {(item) => (
                <TableRow>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.duty}</TableCell>
                  <TableCell>{item.adress}</TableCell>
                  <TableCell>{item.message}</TableCell>
                  <TableCell>{item.info}</TableCell>
                </TableRow>
              )}
            </For>
          </TableBody>
        </Table>
      </Fieldset>
    </>
  );
};

export default ReportTab;
