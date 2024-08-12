import { Portal } from 'solid-js/web';
import {
  tooltip,
  type TooltipVariantProps,
} from '../../../../styled-system/recipes';
import { Component, JSX, Show } from 'solid-js';

const Tooltips: Component<
  TooltipVariantProps & {
    content: string;
    id?: string;
  } & JSX.IntrinsicElements['div']
> = (props) => {
  const r = tooltip({ ...props });
  return (
    <Show when={true}>
      <div class={r} {...props}>
        {props.content}
      </div>
    </Show>
  );
};

export default Tooltips;
