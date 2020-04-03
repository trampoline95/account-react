import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OutlinedButtons from './OutlinedButtons';
import CustomizedInputs from './CustomizedInputs';
import Box from '@material-ui/core/Box';
import { Divider } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#F9F9F9',
    alignItems: 'flex-start'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(8),
  
  },
  boxer: {
    backgroundColor: '#F8F8F8',
  }

}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify = "center">
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Box className={classes.boxer} m={1} p={1} color="#102B45" fontWeight="fontWeightBold">
              ACCOUNT DETAILS CHANGE
            </Box>
            <Typography variant="h5"><Box m={1} p={1} color="#102B45" fontWeight="fontWeightBold">Rishabh Shukla</Box></Typography>
            <OutlinedButtons/>
            <Divider/>
            <CustomizedInputs/>
          </Paper>
        </Grid>
       
      </Grid>
    </div>
  );
}
