//// Import from '@mui/styles' for compatibility
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    padding: '0 56px 80px 0',
    [theme.breakpoints.down('sm')]: {
      padding: '0 20px 80px 0',
    },
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& img': {
      objectFit: 'cover',
      marginBottom: theme.spacing(1),
    },
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: theme.spacing(2),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  button: {
    fontFamily: theme.typography.fontFamily,
    borderRadius: theme.shape.borderRadius,
    borderWidth: 2,
    padding: '16px 40px',
    [theme.breakpoints.down('sm')]: {
      padding: '12px 30px',
    },
  },
  paperContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    margin: theme.spacing(2, 0),
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  paperInnerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  typography: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default useStyles;
