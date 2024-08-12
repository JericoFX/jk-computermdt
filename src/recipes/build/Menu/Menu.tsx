import { Component, JSX } from 'solid-js';
import { Menu, type MenuVariantProps } from '../../../../styled-system/recipes';

type R = MenuVariantProps &
  JSX.IntrinsicElements['ul'] &
  JSX.IntrinsicElements['li'] &
  JSX.IntrinsicElements['button'] &
  JSX.IntrinsicElements['a'] & {
    class?: string;
    popup?: boolean;
    children?: JSX.Element;
    disabled?: boolean;
  };
/**
 * Renders a MenuBar component with a maximum width of 100% and a list of children.
 *
 * @param {R} props - The properties for the MenuBar component.
 * @return {JSX.Element} The rendered MenuBar component.
 */
export const MenuBar: Component<R> = (props) => {
  const r = Menu();
  return (
    <ul data-part='menubar' style={{ 'max-width': '100%' }} class={r.menubar}>
      {props.children}
    </ul>
  );
};
/**
 * Renders a MenuRoot component with a fixed width of 200px and a list of children.
 *
 * @param {R} props - The properties for the MenuRoot component.
 * @return {JSX.Element} The rendered MenuRoot component.
 */
export const MenuRoot: Component<R> = (props) => {
  const r = Menu();
  return (
    <ul data-part='menu' style={{ width: '200px' }} class={r.menu}>
      {props.children}
    </ul>
  );
};
/**
 * Renders a MenuItem component with the provided properties.
 *
 * @param {R} props - The properties for the MenuItem component.
 * @param {boolean} props.popup - Indicates if the item has a popup menu.
 * @param {boolean} props.disabled - Indicates if the item is disabled.
 * @param {string} props.class - Additional CSS class for the item.
 * @return {JSX.Element} The rendered MenuItem component.
 */
export const Item: Component<R> = (props) => {
  const r = Menu({ ...props });
  return (
    <li
      data-part='menuitem'
      aria-haspopup={props.popup}
      aria-disabled={props.disabled}
      class={`${r.menuitem} ${props.class || ''}`}
    >
      {props.children}
    </li>
  );
};
