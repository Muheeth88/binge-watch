import React, { useEffect } from 'react'
import style from "./Navbar.module.css"
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom"

const Navbar = () => {

    const [value, setValue] = React.useState(0);
    const navigate = useNavigate()
    
    useEffect(() => {
        if (value === 0) navigate("/")
        else if (value === 1) navigate("/movies")
        else if (value === 2) navigate("/series")
        else if (value === 3) navigate("/search")
    }, [value])
    

  return (
    <div className={style.navbar} >
        <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }} >
            <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
            <BottomNavigationAction label="Movies" icon={<MovieCreationIcon />} />
            <BottomNavigationAction label="TV Show" icon={<OndemandVideoIcon />} />
            <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        </BottomNavigation>
    </Box>
  </div>
  )
}

export default Navbar