import { definePreset } from '@pandacss/dev';
import { tooltip } from './Baloon/Baloon';
import { Button } from './Button/Button';
import { Checkbox } from './Checkbox/Checkbox';
import { DesktopIcon } from './DesktopIcon/DesktopIcon';
import { Select } from './Dropdown/Dropdown';
import { Field } from './Fieldset/Fieldset';
import { Input } from './Input/Input';
import { Textarea } from './Input/Textarea';
import { Menu } from './Menu/Menu';
import { ProgressBar } from './Progressbar/Progressbar';
import { Radio } from './RadioButton/RadioButton';
import { SearchBar } from './SearchBar/SearchBar';
import { Slider } from './Slider/Slider';
import { Table } from './Table/Table';
import { Tabs } from './Tabs/Tabs';
import { Taskbar } from './Taskbar/Taskbar';
import { Windows } from './Window/Window';
import { FormGroup } from './FormGroup/FormGroup';

export default definePreset({
  theme: {
    extend: {
      keyframes: {
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeout: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'pulse-anim': {
          '0%': { boxShadow: 'inset 0 0 3px 1px #34deffdd' },
          to: { boxShadow: 'inset 0 0 1px 1px #34deffdd' },
        },
        progressbar: {
          '0%': { transform: 'translateX(-40%)' },
          '60%': { transform: 'translateX(100%)' },
          to: { transform: 'translateX(100%)' },
        },
      },
      tokens: {
        assets: {
          minimize: {
            value: { type: 'url', value: '/icon/minimize.png' },
          },
          maximize: {
            value: { type: 'url', value: '/icon/maximize.png' },
          },
          restore: {
            value: { type: 'url', value: '/icon/restore.png' },
          },
          help: {
            value: { type: 'url', value: '/icon/help.png' },
          },
          close: {
            value: { type: 'url', value: '/icon/close.png' },
          },
        },
      },
      recipes: {
        Button,
        tooltip,
        Input,
        Checkbox,
        Radio,
        Field,
        SearchBar,
        Select,
        Table,
        Slider,
        ProgressBar,
        Textarea,
        Taskbar,
        DesktopIcon,
        FormGroup,
      },
      slotRecipes: {
        Windows,
        Tabs,
        Menu,
      },
    },
  },
});
