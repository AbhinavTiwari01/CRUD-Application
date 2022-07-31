import React, { useEffect, useState } from 'react'
import {Table, TableHead, TableRow, TableBody, TableCell, Button, styled} from '@mui/material';
import { getUsers , deleteUser} from '../services/api';
import { Link } from 'react-router-dom';

const StyledTable= styled(Table)`
width : 90%;
margin :  50px auto 0 auto;

`;

const THead= styled(TableRow)`
background : #000000;
& > th {
  color : #fff;
  font-size : 20px;
}

`;

const AllUser = () => {

  const [users, setUsers]= useState([]);

  useEffect(() => {

    getAllUsers();

  }, []);

  const deleteUserData =  async (id) => {
    await deleteUser(id);
    getAllUsers();

  }

  const getAllUsers = async() => {

    let response= await getUsers();
    setUsers(response.data);
  }
  
  return (
    <div>
      <StyledTable>
        <TableHead>
          <THead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Operation</TableCell>

          </THead>

        </TableHead>
        <TableBody>
          {
            users.map((user, id) => (
              <TableRow key={user._id}>
                <TableCell>{ id+1 }</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Button variant='contained' style={{marginRight : 10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                  <Button variant='contained' onClick={() => deleteUserData(user._id)}>Delete</Button>
                </TableCell>
              </TableRow>
            )) 
          }

        </TableBody>
      </StyledTable>
    </div>
  )
}

export default AllUser;