import { Component, createUniqueId } from 'solid-js';
import { Textarea as textarea } from '../../../../styled-system/recipes';
import { JSX } from 'solid-js';
type R = JSX.IntrinsicElements['textarea'] & {
  label?: string;
  rows?: number;
  type?: string;
};
const Textarea: Component<R> = (props) => {
  const r = textarea();
  const id = createUniqueId();
  return (
    <>
      <label for={id}>{props.label}</label>
      <textarea
        rows={props.rows || '4'}
        {...props}
        class={r}
        id={id}
      ></textarea>
    </>
  );
};

export default Textarea;
