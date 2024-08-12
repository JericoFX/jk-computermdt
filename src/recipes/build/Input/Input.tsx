import { Input as int } from '../../../../styled-system/recipes';
import { Component, createUniqueId, JSX } from 'solid-js';
type R = JSX.IntrinsicElements['input'] & {
  type: 'text' | 'password' | 'email';
  label: string;
  value?: string;

  disabled?: boolean;
};
const Input: Component<R> = (props) => {
  if (!props.type) {
    throw new Error('Input component requires a "type" prop');
  }
  if (!props.label) {
    throw new Error('Input component requires a "label" prop');
  }
  const r = int();
  const id = createUniqueId();
  return (
    <>
      <label for={id}>{props.label}: </label>
      <input
        id={id}
        {...props}
        type={props.type}
        value={props.value}
        class={r}
      ></input>
    </>
  );
};

export default Input;
