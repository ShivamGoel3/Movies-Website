import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import MovieIcon from '@mui/icons-material/Movie';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';
const useStyles=makeStyles({
root:{
    width:"100%",
    position:'fixed',
    bottom:0,
    backgroundColor:"white",
    zIndex:100,
},

}
);

export default function SimpleBottomNavigation() {
    const classes=useStyles();
  const [value, setValue] = React.useState(0);
  const history=useNavigate();
  useEffect(() => {
   
    if(value === 0) history("/home");
    else if (value === 1) history("/home/movies");
    else if (value === 2) history("/home/series");
    else if (value === 3) history("/home/search");
  },[value,history]);
  return (
    
      <BottomNavigation
       
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction 
        style={{color:"black"}}
        label="Trending" icon={<TrendingUpOutlinedIcon />} />

        <BottomNavigationAction 
        style={{color:"black"}}
        label="Movies" icon={<LiveTvIcon />} />

        <BottomNavigationAction  style={{color:"black"}} label="Series" icon={<MovieIcon />} />
        <BottomNavigationAction 
        style={{color:"black"}}
        label="Search" icon={<SearchOutlinedIcon />} />
      </BottomNavigation>
    
  );
}
