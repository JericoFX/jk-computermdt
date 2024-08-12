import FieldRow from '../../../recipes/build/FieldRow/FieldRow';
import {
  Box,
  Divider,
  Grid,
  GridItem,
  HStack,
} from '../../../../styled-system/jsx';
import Fieldset from '../../../recipes/build/Fieldset/Fieldset';
import { Component, For, createSignal } from 'solid-js';
import Input from '../../../recipes/build/Input/Input';
import { css } from '../../../../styled-system/css';
import { Dropwdown } from '../../../recipes/build/Dropdown/Dropdown';
import Textarea from '../../../recipes/build/Textarea/Textarea';
import { Button, Table } from '../../../recipes/build';
import { Checkbox } from '../../../recipes/build';
import {
  TableThread,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from '../../../recipes/build/Table/Table';
import AddEvidence from './AddEvidence';
import { useApp } from '../../../Apps/context';

const CreateReportTab: Component<{}> = (_props) => {
  const [openEvidence, setOpenEvidence] = createSignal(false);
  const {newReport,setNewReport} = useApp()
  return (
    <Box w='100%' h='100%' position='relative'>
      <Box w='30%' float='left' p='3'>
        <Fieldset legend='Profile Image'>
          <div
            class={css({
              width: '100%',
              height: '270px',
              position: 'relative',
              backgroundColor: '#f0f0f0',
              padding: '10px',
              rounded: '4px',
              overflow: 'hidden',
              marginBottom: '10px',
            })}
          ></div>
          <Button w='100%'>Add Image</Button>
        </Fieldset>
      </Box>

      <Box w='70%' p='3' float='right' position='relative'>
        <Fieldset legend='Report Details'>
          <FieldRow>
            <Input type='text' label='Title'></Input>
            <Input type='text' label='First Name'></Input>
            <Input type='text' label='Last Name'></Input>
            <Input type='text' label='CitizenID'></Input>
            <Input type='text' label='Vehicle'></Input>
            <p>Type of Report</p>
            <Dropwdown>
              {' '}
              <option value='none' selected></option>
              <option value='warrant'>Warrant</option>
              <option value='bolo'>B.O.L.O</option>
              <option value='report'>Report</option>
            </Dropwdown>
            <Textarea label='Description:'></Textarea>
          </FieldRow>

          <Button w='100%' onClick={() => setOpenEvidence(!openEvidence())}>
            Add Evidences
          </Button>
        </Fieldset>
      </Box>
      <div style={{ clear: 'both' }}></div>

      <Table>
        <TableThread>
          <TableRow>
            <TableHeader>Type</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Adress</TableHeader>
            <TableHeader>Duty</TableHeader>
          </TableRow>
        </TableThread>
        <TableBody>
          <For fallback={<>No Envidence</>} each={newReport.evidence}> {(item) => (
            <>
                <TableRow>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.createdBy}</TableCell>
                  <TableCell>{item.message}</TableCell>
                  <TableCell>{item.info}</TableCell>
                </TableRow>
                </>
              )}

          </For>
          
        </TableBody>
      </Table>
      <Fieldset legend='Actions'>
        <HStack w='full' justifyContent={'space-between'}>
          <Button>Create</Button>
          <Button>Cancel</Button>
        </HStack>
      </Fieldset>
      <AddEvidence onClick={() => setOpenEvidence(false)} open={openEvidence()}></AddEvidence>
    </Box>
  );
};

export default CreateReportTab;
