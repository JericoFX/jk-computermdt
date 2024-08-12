import {
  Checkbox as check,
  type CheckboxVariantProps,
} from '../../../../styled-system/recipes';
import { Component, JSX, createUniqueId } from 'solid-js';

type Check = Component<
  CheckboxVariantProps &
    JSX.IntrinsicElements['input'] &
    JSX.IntrinsicElements['label'] & { label?: string }
>;
/**
 * Checkbox component
 *
 * @param props - The props to pass to the component
 * @returns The rendered Checkbox component
 */
export const CheckboxImport: Check = (props) => {
  // Get the styled system class for the checkbox
  const r = check();

  // Create a unique id for the checkbox
  const id = createUniqueId();

  // Render the checkbox input and label
  return (
    <>
      {/* Checkbox input */}
      <input {...props} type='checkbox' class={r} id={id}></input>

      {/* Checkbox label */}
      <label for={id}>{props.label}</label>
    </>
  );
};
