import { For, JSX, Match, Switch, createSignal } from 'solid-js';
import { Box, HStack, VStack } from '../styled-system/jsx';
import { css } from '../styled-system/css';
import { Icon, Task } from './recipes/build';
import { A } from '@solidjs/router';

function App(props: {
  children:
    | number
    | boolean
    | Node
    | JSX.ArrayElement
    | (string & {})
    | null
    | undefined;
}) {
  return (
    <>
      {' '}
      <Box w='100%' h='100%' position='relative'>
        <img
          src='https://wallpaperaccess.com/full/220742.jpg'
          class={css({
            position: 'absolute',
            zIndex: -1,
            width: '100vw',
            height: '100vh',
            objectFit: 'center',
          })}
        ></img>
        <A href='/NewReport'>
          <Icon label='Report Tool' icon='search'></Icon>
        </A>

        <Task></Task>
      </Box>
      <VStack
        h='100vh'
        w='100vw'
        justifyContent={'center'}
        alignItems={'center'}
      >
        {props.children}
      </VStack>
    </>
  );
}

export default App;
