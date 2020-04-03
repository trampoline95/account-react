import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  margin: {
    margin: theme.spacing(1),
  },
 
  color: {
     backgroundColor: "#FFB400",
     margin: theme.spacing(2)
  },

 
}));

export default function CustomizedInputs() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
      <Typography variant="subtitle1" >Email ID : <InputBase
        className={classes.margin}
        defaultValue="rishabhsukhla98@gmail.com"
        inputProps={{ 'aria-label': 'naked' }}
      />
      <Button variant = "outlined"><EditIcon/> Edit</Button>
      </Typography>
      <Divider/>
      <Typography variant="subtitle1" >Phone    :<InputBase
        className={classes.margin}
        defaultValue="9873354779"
        inputProps={{ 'aria-label': 'naked' }}
      />
      <Button variant = "outlined"><EditIcon/> Edit</Button>
      </Typography>
      <Divider/>
      <Typography variant="subtitle1" >Prime    :<InputBase
        className={classes.margin}
        inputProps={{ 'aria-label': 'naked' }}
      />
      <Button className={classes.color}  variant = "contained" >Add</Button>
      <Button variant = "contained">Cancel</Button>
      </Typography>
      <Divider/>
      <Typography variant="subtitle1" >Credit : <InputBase
        className={classes.margin}
        inputProps={{ 'aria-label': 'naked' }}
      />

            <form className={classes.subroot} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="₹Amount" variant="outlined" />
                <TextField id="outlined-basic" label="Message" variant="outlined" />
                <TextField id="outlined-basic" label="Copy" variant="outlined" />
            </form>

      </Typography>
     
      
    </form>
  );
}
