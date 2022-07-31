import React from 'react'
import { AppBar, Toolbar, styled, Button } from '@mui/material';

const Header= styled(AppBar)`
`;

const Tabs=styled(Button)`
font-size: 15px;
margin-right:10px;
text-decoration: none;
color: #FFFFFF;
`;

const NavBar = () => {
    return (
        <div>
            <Header position="static">
                <Toolbar>
                <Tabs href='/'>My Crud Application</Tabs>   
               <Tabs href='/all'>All Users</Tabs>   
               <Tabs href='/add'>Add User</Tabs>   
                </Toolbar>
            </Header>

        </div>
    )
}

export default NavBar