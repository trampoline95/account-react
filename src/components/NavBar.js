import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppsIcon from '@material-ui/icons/Apps';
import Box from '@material-ui/core/Box';


const NavBar = ()=> {
    return(
        <div>
        <AppBar position = "static" color = "#FFFFFF">
            <Toolbar>
                <Typography variant="title" color="#000000">
                    LectureNotes 
                </Typography>
                <Box m={2} ><AppsIcon/></Box>
                <Box >Explore</Box>
            </Toolbar>
        </AppBar> 
    </div>
    )
    }
export default NavBar;
      