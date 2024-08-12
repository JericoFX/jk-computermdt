import { Button } from '../../../recipes/build';
import FieldRow from '../../../recipes/build/FieldRow/FieldRow';
import Fieldset from '../../../recipes/build/Fieldset/Fieldset';
import Input from '../../../recipes/build/Input/Input';
import Modal from '../../../recipes/build/Modal/Modal';
import Textarea from '../../../recipes/build/Textarea/Textarea';
import { Component, splitProps } from 'solid-js';
import { Portal } from 'solid-js/web';

const ModalInfo: Component<{
  id?: string;
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
    'id',
    'open',
    'type',
    'createdBy',
    'message',
    'info',
    'deleteButton',
    'onClickDelete',
  ]);
  return (
    <Portal mount={document.body}>
      <Modal
        label={`Report ID: ${local.id}`}
        open={local.open}
        onClose={props.onClick}
        title='Report Summary'
        onClickDelete={props.onClickDelete}
        deleteButton={props.deleteButton}
      >
        <Fieldset>
          <FieldRow>
            <Input readOnly value={local.type} label='Type' type='text'></Input>
            <Input
              readOnly
              value={local.createdBy}
              label='Created By'
              type='text'
            ></Input>

            <Textarea
              readOnly
              value={local.message}
              label='Message'
              type='text'
            ></Textarea>
            <Input readOnly value={local.info} label='Info' type='text'></Input>
          </FieldRow>
        </Fieldset>
      </Modal>
    </Portal>
  );
};

export default ModalInfo;
