import { Field } from '../../../../styled-system/recipes';

import { Component, JSX, Show } from 'solid-js';

type F = JSX.IntrinsicElements['fieldset'] &
  JSX.IntrinsicElements['legend'] & {
    legend?: string;
    children?: JSX.Element;
  };

/**
 * Renders a Fieldset component with a legend and children.
 *
 * @param {F} props - Props for the Fieldset component
 * @return {JSX.Element} The rendered Fieldset component
 */
const Fieldset: Component<F> = (props) => {
  const r = Field();
  return (
    <fieldset class={r}>
      <Show when={props.legend} fallback={props.children}>
        <legend> {props.legend}</legend>
        {props.children}
      </Show>
    </fieldset>
  );
};

export default Fieldset;
