import { Component, JSX, children, createMemo, createSignal } from 'solid-js';
import {
  Tabs as tabs,
  TabsVariantProps,
} from '../../../../styled-system/recipes';
import { TabsProvider, useTabContext } from './TabsProvider';
import { Button } from '../Button/Button';
/**
 * Renders the root component for the tabs.
 *
 * @param {Object} props - The component props.
 * @param {JSX.Element} props.children - The children elements to be rendered inside the tabs.
 * @return {JSX.Element} The rendered root component.
 */

type R = TabsVariantProps &
  JSX.IntrinsicElements['section'] &
  JSX.IntrinsicElements['menu'] &
  JSX.IntrinsicElements['article'] &
  JSX.IntrinsicElements['div'] &
  JSX.IntrinsicElements['button'] & {
    onChange?: (id: string) => void;
    activeTab?: string;
    children: JSX.Element;
  };

export const Root: Component<R> = (props: R): JSX.Element => {
  return (
    <TabsProvider>
      {' '}
      <section class='tabs'>{props.children}</section>
    </TabsProvider>
  );
};
/**
 * Renders a menu component with the provided children.
 *
 * @param {Object} props - The props object.
 * @param {JSX.Element} props.children - The children to be rendered inside the menu.
 * @return {JSX.Element} The rendered menu component.
 */
export const Menu: Component<R> = (props: R): JSX.Element => {
  const r = tabs();
  const { tab } = useTabContext();
  const chil = children(() => props.children);
  const onChan = (id) => {
    props.onChange(id);
  };
  return (
    <menu
      aria-orientation='horizontal'
      onClick={() => onChan(tab())}
      aria-activedescendant={tab()}
      class={r.tablist}
      role='tablist'
    >
      {chil()}
    </menu>
  );
};

export const Item: Component<{
  id: string;
  children: JSX.Element;
  active?: boolean;
  disabled?: boolean;
}> = (props) => {
  const [id, setId] = createSignal('');
  const { tab, setTab } = useTabContext();
  if (props.active) {
    setId(props.id);
    setTab(props.id);
  }
  const actives = createMemo(() => {
    return tab() === id();
  });
  function handlerId(id: string) {
    setId(id);
    setTab(id);
  }
  const chil = children(() => props.children);
  return (
    <Button
      {...props}
      class='button'
      role='tab'
      id={props.id}
      onClick={(e) => handlerId(e.currentTarget.id)}
      aria-controls={props.id}
      aria-selected={actives()}
    >
      {chil()}
    </Button>
  );
};

export const Article: Component<{ id: string; children: JSX.Element }> = (
  props
) => {
  const r = tabs();
  const { tab, setTab } = useTabContext();
  const active = createMemo(() => {
    return tab() === props.id;
  });
  const chil = children(() => props.children);
  return (
    <article
      aria-selected={active()}
      role='tabpanel'
      class={r.tabpanel}
      hidden={!active()}
      id={props.id}
      style={{
        'box-sizing': 'border-box',
      }}
    >
      {chil()}
    </article>
  );
};
