import { ThemeOptions } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: ThemeOptions) => ({
  container: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  imageList: {
    width: '500',
    height: '500',
  },
  wrapper: {
    textAlign: 'center',
    display: 'flex',
    marginTop: '20px',
    width: '100%',
  },
}));
