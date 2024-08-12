import { Component, createSignal } from 'solid-js';

import {
  DesktopIcon,
  type DesktopIconVariantProps,
} from '../../../../styled-system/recipes';
import { Center, VStack } from '../../../../styled-system/jsx';
import { css } from '../../../../styled-system/css';
import clickOutside from '../../../helper/click-outside';
type R = DesktopIconVariantProps & {
  label: string;
  icon: string;
  class?: string;
  onClick?: () => void;
  onDblClick?: () => void;
};
export const Icon: Component<R> = (props) => {
  const r = DesktopIcon();

  const [checked, setChecked] = createSignal(false);
  return (
    <div
      use:clickOutside={() => setChecked(false)}
      onDblClick={() => setChecked(!checked())}
      class={`${r} ${checked() ? 'checked' : ''}`}
      {...props}
    >
      <VStack
        w='100%'
        h='100%'
        alignContent='start'
        justifyContent={'space-evenly'}
      >
        <img
          class={css({
            w: '40%',
          })}
          src={`./icon/${props.icon}.svg`}
        ></img>
        <span>{props.label}</span>
      </VStack>
    </div>
  );
};
