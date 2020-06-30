import { createMuiTheme } from '@material-ui/core/styles';
import { blue,amber,yellow,indigo } from '@material-ui/core/colors';
import { light,dark } from '@material-ui/core/styles/createPalette';

export const lighttheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: amber,
    //type: light,
  },
  status: {
    danger: 'orange',
  },
});

export const darktheme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: yellow,
    //type: dark,
  },
  status: {
    danger: 'orange',
  },
});

