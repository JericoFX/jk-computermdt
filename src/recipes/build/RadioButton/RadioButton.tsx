import { Component, JSX, createUniqueId } from 'solid-js';
import {
  Radio,
  type RadioVariantProps,
} from '../../../../styled-system/recipes';
type R = RadioVariantProps &
  JSX.IntrinsicElements['input'] &
  JSX.IntrinsicElements['label'] & {
    label: string;
    name: string;
  };
/**
 * Renders a RadioButton component.
 *
 * @param {R} props - The properties for the RadioButton component.
 * @return {JSX.Element} The rendered RadioButton component.
 */
export const RadioButton: Component<R> = (props: R): JSX.Element => {
  const id = createUniqueId();
  const r = Radio();
  return (
    <>
      <input
        class={r}
        checked={props.checked}
        {...props}
        id={id}
        type='radio'
        name={props.name}
      ></input>
      <label for={id}>{props.label}</label>
    </>
  );
};
