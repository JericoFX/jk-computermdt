import { Component, JSX } from 'solid-js';
import {
  Table as tb,
  type TableVariantProps,
} from '../../../../styled-system/recipes';

type R = TableVariantProps &
  JSX.IntrinsicElements['table'] &
  JSX.IntrinsicElements['tr'] &
  JSX.IntrinsicElements['th'] &
  JSX.IntrinsicElements['td'] & {
    children: JSX.Element;
    onDblClick?: () => void;
    onClick?: () => void;
    height?: string;
  };
/**
 * Renders the root table component.
 *
 * @param {R} props - The properties for the component.
 * @return {JSX.Element} The root table component.
 */
export const Table: Component<R> = (props: R): JSX.Element => {
  const r = tb();
  return (
    <div
      style={{
        'max-width': '100%',
        'min-width': '80%',
        overflow: 'auto',
        'max-height': props.height || '13vh',
      }}
    >
      <table class={r}>{props.children}</table>
    </div>
  );
};

/**
 * Renders a table header element with the given props.
 *
 * @param {R} props - The properties for the component.
 * @return {JSX.Element} The table header element.
 */
export const TableThread: Component<R> = (props: R): JSX.Element => {
  return <thead>{props.children}</thead>;
};

/**
 * Renders a table body element with the given props.
 *
 * @param {R} props - The properties for the component.
 * @return {JSX.Element} The table body element.
 */
export const TableBody: Component<R> = (props: R): JSX.Element => {
  return <tbody>{props.children}</tbody>;
};

/**
 * Renders a table row element with the given props.
 *
 * @param {R} props - The properties for the component.
 * @return {JSX.Element} The table row element.
 */
export const TableRow: Component<R> = (props: R): JSX.Element => {
  return (
    <tr onClick={props.onClick} onDblClick={props.onDblClick}>
      {props.children}
    </tr>
  );
};

/**
 * A description of the entire function.
 *
 * @param {R} props - props object containing children
 * @return {Component} JSX element representing a table header cell
 */
export const TableHeader: Component<R> = (props: R): JSX.Element => {
  return (
    <th onClick={props.onClick} onDblClick={props.onDblClick}>
      {props.children}
    </th>
  );
};

/**
 * Renders a table data cell element with the given props.
 *
 * @param {R} props - The properties for the component.
 * @return {JSX.Element} The table data cell element.
 */
export const TableCell: Component<R> = (props: R): JSX.Element => {
  return (
    <td onClick={props.onClick} onDblClick={props.onDblClick}>
      {props.children}
    </td>
  );
};
