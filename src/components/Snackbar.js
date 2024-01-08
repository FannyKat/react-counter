import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function FibonacciAlert (props) {
  return (
    <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={props.isOpen} autoHideDuration={500}>
      <Alert severity="success" open={props.isOpen}>This is a Fibonacci number!</Alert>
    </Snackbar>
  );
}