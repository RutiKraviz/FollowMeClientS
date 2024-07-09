import React from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigationAction, Tooltip } from '@mui/material';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ListIcon from '@mui/icons-material/List';
import SubwayIcon from '@mui/icons-material/Subway';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Logo from './Logo';

function NavigationBar() {
    return (
        <>
            <Tooltip title="Logo">
                <BottomNavigationAction 
                    color='primary'   
                    icon={<Logo />}
                />
            </Tooltip>
            <Tooltip title="Home">
                <BottomNavigationAction
                    color='primary'
                    label="Home"
                    value="/"
                    icon={<HomeOutlinedIcon color='secondary' />}
                    component={Link}
                    to="/Home"
                />
            </Tooltip>
            <Tooltip title="Login">
                <BottomNavigationAction
                    color='primary'
                    label="Login"
                    value="Login"
                    icon={<PersonAddAltOutlinedIcon color='secondary' />}
                    component={Link}
                    to="/Login"
                />
            </Tooltip>
            <Tooltip title="Update Details">
                <BottomNavigationAction
                    color='primary'
                    label="Update Details"
                    value="UpUser"
                    icon={<PersonOutlineOutlinedIcon color='secondary' />}
                    component={Link}
                    to="/UserProfile"
                />
            </Tooltip>
            <Tooltip title="Google Map">
                <BottomNavigationAction
                    color='primary'
                    label="Google Map"
                    value="Map"
                    icon={<SubwayIcon color='secondary' />}
                    component={Link}
                    to="/Map"
                />
            </Tooltip>
            <Tooltip title="Driver">
                <BottomNavigationAction
                    color='primary'
                    label="Driver"
                    value="Driver"
                    icon={<ListIcon color='secondary' />}
                    component={Link}
                    to="/Driver"
                />
            </Tooltip>
            <Tooltip title="About">
                <BottomNavigationAction
                    color='primary'
                    label="About"
                    value="About"
                    icon={<InfoOutlinedIcon color='secondary' />}
                    component={Link}
                    to="/About"
                />
            </Tooltip>
        </>
    );
};

export default NavigationBar;
