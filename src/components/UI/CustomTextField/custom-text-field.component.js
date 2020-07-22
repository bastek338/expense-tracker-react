import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const CustomTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#f87e41',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#f87e41',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#000',
        },
        '&:hover fieldset': {
          borderColor: '#a1a1a1',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#f87e41',
        },
        '& p': {
          color: 'red'
        }
      },
    },
  })(TextField);

  export default CustomTextField;