import Fieldset from '../../recipes/build/Fieldset/Fieldset';

import { Button } from '../../recipes/build/Button/Button';

import {
  Body,
  Footer,
  StatusBar,
  StatusBarChild,
  TitleBar,
  TitleBarControls,
  TitleBarText,
  Windows,
} from '../../recipes/build/Window/Windows';
import { Component, createSignal, For, JSX } from 'solid-js';
import {
  Article,
  Item,
  Menu,
  MenuBar,
  MenuItem,
  MenuRoot,
  Tabs,
} from '../../recipes/build';

import ModalInfo from './inner/ModalInfo';
import NewReportModal from './inner/NewReportModal';
import { Portal } from 'solid-js/web';
import ReportTab from './inner/ReportTab';
import CreateReportTab from './inner/CreateReportTab';

const UserSearch: Component<{
  children?: JSX.Element;
  onClose?: () => void;
}> = (props) => {
  const [openModal, setOpenModal] = createSignal(false);
  const [openReport, setOpenReport] = createSignal(false);

  const [modalInfo, setmodalInfo] = createSignal({});

  return (
    <>
      <Portal target={document.body} mount={document.body}>
        <NewReportModal
          open={openReport()}
          onClose={() => setOpenReport(false)}
        ></NewReportModal>
      </Portal>
      <Windows w='40vw' maxH='75vh'>
        <TitleBar>
          <TitleBarText>Report Tool</TitleBarText>
          <TitleBarControls>
            <Button onClick={props.onClose} aria-label='Close'></Button>
          </TitleBarControls>
        </TitleBar>

        <MenuBar>
          <MenuItem popup>
            File
            <MenuRoot>
              <MenuItem>
                <a onClick={() => setOpenReport(true)}>New Report</a>{' '}
              </MenuItem>
              <MenuItem>
                <a>Search Report</a>{' '}
              </MenuItem>
            </MenuRoot>
          </MenuItem>
          <MenuItem popup>
            User
            <MenuRoot>
              <MenuItem>
                <a onClick={() => setOpenReport(true)}>Search User</a>{' '}
              </MenuItem>
            </MenuRoot>
          </MenuItem>
        </MenuBar>

        <Body maxH='65vh'>
          <Tabs>
            <Menu onChange={(id) => console.log(id)}>
              <Item active id='reports'>
                Create Report
              </Item>
              <Item id='warrants'>Reports</Item>
              <Item id='MyInfo'>My Info</Item>
            </Menu>
            <Article id='reports'>
              <CreateReportTab></CreateReportTab>
            </Article>

            <Article id='warrants'>
              <ReportTab></ReportTab>
            </Article>
          </Tabs>
        </Body>
      </Windows>

      <ModalInfo
        deleteButton
        open={openModal()}
        {...modalInfo()}
        onClick={() => setOpenModal(false)}
      ></ModalInfo>
    </>
  );
};

export default UserSearch;
