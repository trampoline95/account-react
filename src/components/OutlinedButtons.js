import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      fontFamily: 'Roboto'
    },
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined">Lorem Ispum</Button>
      <Button variant="outlined">Account setting</Button>
      <Button variant="outlined">Passbook</Button>
      <Button variant="outlined">Dashboard</Button>
   
    </div>
  );
}
