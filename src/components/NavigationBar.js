import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useSelector } from 'react-redux';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

import ListIcon from '@mui/icons-material/List';
import SubwayIcon from '@mui/icons-material/Subway';
import Logo from './Logo';

function NavigationBar() {

    return (
        <>
         <BottomNavigationAction color='primary'   
                    icon   ={ <Logo/>}
                />
              <BottomNavigationAction
                    color='primary'
                    label="Home"
                    value="/"
                    icon={<HomeOutlinedIcon color='secondary' />}
                    component={Link}
                    to="/Home"
                />
                <BottomNavigationAction
                    color='primary'
                    label="Login"
                    value="Login"
                    icon={<PersonAddAltOutlinedIcon color='secondary' />}
                    component={Link}
                    to="/Login"
                />
                <BottomNavigationAction
                    color='primary'
                    label="update details"
                    value="UpUser"
                    icon={<PersonOutlineOutlinedIcon color='secondary' />}
                    component={Link}
                    to="/UserProfile"
                />
                  <BottomNavigationAction
                    color='primary'
                    label="update details"
                    value="UpUser"
                    icon={<SubwayIcon color='secondary' />}
                    component={Link}
                    to="/Map"
                />
                  <BottomNavigationAction
                    color='primary'
                    label="update details"
                    value="UpUser"
                    icon={<ListIcon color='secondary' />}
                    component={Link}
                    to="/Driver"
                />
        </>);
};

export default NavigationBar;