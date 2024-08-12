import { Component, JSX, Show } from 'solid-js';
import {
  SearchBar,
  type SearchBarVariantProps,
} from '../../../../styled-system/recipes';
import { Button } from '../Button/Button';
import { css } from '../../../../styled-system/css';

type R = SearchBarVariantProps &
  JSX.IntrinsicElements['input'] &
  JSX.IntrinsicElements['button'] & {
    placeholder?: string;
    search?: boolean;
    onButtonClick?(): void;
  };
/**
 * Renders the SearchBox component based on the props provided.
 *
 * @param {R} props - The props object containing search information.
 * @return {JSX.Element} The rendered SearchBox component.
 */
export const SearchBox: Component<R> = (props) => {
  const r = SearchBar();
  return (
    <Show
      when={props.search}
      fallback={
        <div class={r}>
          <input
            {...props}
            class={css({
              _placeholder: {
                backgroundImage:
                  "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggc3Ryb2tlPSIjMjA3MGI5IiBkPSJNMTAuNSAxQzguMDIgMSA2IDMuMDIgNiA1LjVhNC40NSA0LjQ1IDAgMCAwIDEgMi43OTNMMi4wMjMgMTMuMjdsLjcwNC43MUw3LjcwNyA5Yy43Ny42MTcgMS43MzQgMSAyLjc5MyAxIDIuNDggMCA0LjUtMi4wMiA0LjUtNC41UzEyLjk4IDEgMTAuNSAxWm0wIDFDMTIuNDM4IDIgMTQgMy41NjMgMTQgNS41IDE0IDcuNDM4IDEyLjQzNyA5IDEwLjUgOUEzLjQ5NCAzLjQ5NCAwIDAgMSA3IDUuNUM3IDMuNTYyIDguNTYzIDIgMTAuNSAyWiIvPjwvc3ZnPg==')",
              },
            })}
            type='search'
            placeholder='Search'
          />
        </div>
      }
    >
      <div class={`${r} ${props.search ? 'searchbox' : ''}`}>
        <input {...props} type='search' placeholder={props.placeholder} />
        <Button onClick={props.onButtonClick} class='button'></Button>
      </div>
    </Show>
  );
};
