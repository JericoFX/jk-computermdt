import { Component, JSX } from 'solid-js';
import { Slider as slider } from '../../../../styled-system/recipes';
import { Box, type BoxProps } from '../../../../styled-system/jsx';
type R = JSX.IntrinsicElements['input'] &
  JSX.IntrinsicElements['div'] &
  BoxProps;
/**
 * Renders a Slider component based on the input props.
 *
 * @param {R} props - The properties for the Slider component.
 * @return {JSX.Element} The rendered Slider component.
 */
export const Slider: Component<R> = (props) => {
  const r = slider();
  return (
    <Box {...props}>
      <input
        class={r}
        type='range'
        value={props.value}
        step={props.step || 1}
        min={props.min || 0}
        max={props.min || 100}
      />
    </Box>
  );
};
