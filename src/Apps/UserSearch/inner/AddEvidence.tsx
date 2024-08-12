import { Dropwdown } from '../../../recipes/build/Dropdown/Dropdown';
import FieldRow from '../../../recipes/build/FieldRow/FieldRow';
import Fieldset from '../../../recipes/build/Fieldset/Fieldset';
import Input from '../../../recipes/build/Input/Input';
import Modal from '../../../recipes/build/Modal/Modal';
import Textarea from '../../../recipes/build/Textarea/Textarea';
import { Component, createSignal, Show, splitProps } from 'solid-js';
import { Portal } from 'solid-js/web';

const AddEvidence: Component<{
  open: boolean;
  type?: string;
  createdBy?: string;
  message?: string;
  info?: string;
  onClick?: () => void;
  onClickDelete?: () => void;
  deleteButton?: boolean;
}> = (props) => {
  const [local, others] = splitProps(props, [
    'open',
    'type',
    'createdBy',
    'message',
    'info',
    'onClick',
    'onClickDelete',
    'deleteButton',
  ]);
  const [evidence, setEvidence] = createSignal('none');
  return (
    <Portal mount={document.body}>
      <Modal
        label='Add Report Window'
        open={local.open}
        onClose={props.onClick}
        title='Report Summary'
        onClickDelete={props.onClickDelete}
        deleteButton={props.deleteButton}
      >
        <Fieldset>
          <p>Evidence Type</p>
          <Dropwdown
            onChange={(e) => {
              setEvidence(e.target.value);
            }}
            my='3'
          >
            <option value='none'></option>
            <option value='evidence'>Evidence</option>
            <option value='police'>Police</option>
          </Dropwdown>
          <Show
            when={evidence() === 'evidence'}
            fallback={
              <>
                <FieldRow>
                  <Input type='text' label='Name'></Input>
                  <Input type='text' label='Adress'></Input>
                  <Input type='text' label='Duty'></Input>
                </FieldRow>
              </>
            }
          >
            <Textarea></Textarea>
          </Show>
        </Fieldset>
      </Modal>
    </Portal>
  );
};

export default AddEvidence;
