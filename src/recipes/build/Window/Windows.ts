import { createStyleContext } from '../../../helper/helper';
import { Windows as Win } from '../../../../styled-system/recipes';
import { styled } from '../../../../styled-system/jsx';

const { withProvider, withContext } = createStyleContext(Win);

export const Windows = withProvider(styled('div'), 'window');
export const Body = withContext(styled('div'), 'body');
export const Footer = withContext(styled('footer'), 'footer');
export const TitleBar = withContext(styled('div'), 'titleBar');
export const TitleBarText = withContext(styled('div'), 'titleBarText');
export const TitleBarControls = withContext(styled('div'), 'titleBarControls');
export const StatusBar = withContext(styled('div'), 'statusBar');
export const StatusBarChild = withContext(styled('p'), 'statusBarField');
