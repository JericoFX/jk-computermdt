import { Component, JSX, Show, splitProps } from 'solid-js';
import { css } from '../../../../styled-system/css';
import { Button } from '../Button/Button';
import {
  Windows,
  TitleBar,
  TitleBarText,
  TitleBarControls,
  Body,
} from '../Window/Windows';
import { Box, HStack } from '../../../../styled-system/jsx';
import { createDraggable } from '@neodrag/solid';
/**
 * Renders a modal component.
 *
 * @param {object} props - The props for the modal component.
 * @param {boolean} props.open - Indicates whether the modal is open or not.
 * @param {string} [props.title] - The title of the modal.
 * @param {string} [props.label] - The label for the modal.
 * @param {JSX.Element} props.children - The content of the modal.
 * @param {() => void} props.onClick - The function to be called when the modal is clicked.
 * @return {JSX.Element} The rendered modal component.
 */
const Modal: Component<{
  open: boolean;
  title?: string;
  label?: string;
  children?: JSX.Element;
  onClick?: () => void;
  onClose?: () => void;
  onClickDelete?: () => void;
  deleteButton?: boolean;
}> = (props) => {
  const [local, others] = splitProps(props, [
    'open',
    'title',
    'label',
    'children',
    'onClose',
    'onClickDelete',
    'deleteButton',
  ]);
  return (
    <Show when={local.open}>
      <Box {...props} maxH='100vh' maxW='100vw'>
        <Windows role='dialog' w='inherit' h='inherit'>
          <TitleBar>
            <TitleBarText>{local.title}</TitleBarText>
            <TitleBarControls>
              <Button onClick={local.onClose} aria-label='Close'></Button>
            </TitleBarControls>
          </TitleBar>
          <Body>
            <h2
              class={css({
                fontSize: '12pt',
                color: 'var(--primary-color)',
                fontWeight: 'normal',
                margin: '0 0 20px',
              })}
            >
              {local.label}
            </h2>
            {props.children}
            <HStack mt={2} justifyContent={'space-evenly'} gap={2}>
              <Button onClick={local.onClose}>OK</Button>
              <Show when={local.deleteButton}>
                <Button onClick={local.onClickDelete}>Delete</Button>
              </Show>
              <Button onClick={local.onClose}>Close</Button>
            </HStack>
          </Body>
        </Windows>
      </Box>
    </Show>
  );
};

export default Modal;
