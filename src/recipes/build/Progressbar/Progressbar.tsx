import { Component } from 'solid-js';
import {
  ProgressBar as progress,
  type ProgressBarVariantProps,
} from '../../../../styled-system/recipes';
import { JSX } from 'solid-js';
type R = ProgressBarVariantProps &
  JSX.IntrinsicElements['div'] & { value: number };
/**
 * Renders a Progressbar component based on the input props.
 *
 * @param {R} props - The properties for the Progressbar component.
 * @return {JSX.Element} The rendered Progressbar component.
 */
export const Progressbar: Component<R> = (props) => {
  const r = progress({ ...props });
  return (
    <div
      {...props}
      min='0'
      max='100'
      aria-valuemin='0'
      aria-valuemax='100'
      aria-valuenow={props.value}
      class={r}
    >
      <div style={{ width: `${props.value}%` }}></div>
    </div>
  );
};
