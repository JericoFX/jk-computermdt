import { Component, splitProps, createSignal, Show } from 'solid-js';
import {
  Body,
  Button,
  SearchBox,
  TitleBar,
  TitleBarControls,
  TitleBarText,
  Windows,
} from '../../../recipes/build';
import FieldRow from '../../../recipes/build/FieldRow/FieldRow';
import { RadioButton } from '../../../recipes/build/RadioButton/RadioButton';

const NewReportModal: Component<{
  onClose?: () => void;
  open: boolean;
}> = (props) => {
  const [local, other] = splitProps(props, ['onClose', 'open']);
  const [modalInfo, setModalInfo] = createSignal(false);
  return (
    <>
      <Show when={local.open}>
        <Windows role='dialog' maxW='40vw' maxH='70vh'>
          <TitleBar>
            <TitleBarText>New Report Window</TitleBarText>
            <TitleBarControls>
              <Button onClick={local.onClose} aria-label='Close'></Button>
            </TitleBarControls>
          </TitleBar>

          <Body>
            <FieldRow>
              <SearchBox placeholder='Search By' search></SearchBox>
            </FieldRow>
            <RadioButton checked name='search' label='Name'></RadioButton>
            <RadioButton name='search' label='CitizenID'></RadioButton>
          </Body>
        </Windows>
      </Show>
    </>
  );
};

export default NewReportModal;
