import { onCleanup } from 'solid-js';

export default function clickOutside(
  el: { contains: (arg0: any) => any },
  accessor: () => { (): any; new (): any }
) {
  const onClick = (e) => !el.contains(e.target) && accessor()?.();
  document.body.addEventListener('click', onClick);

  onCleanup(() => document.body.removeEventListener('click', onClick));
}
