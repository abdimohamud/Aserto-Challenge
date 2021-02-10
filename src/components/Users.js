import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom'
import {fetchNamesId} from '../methods';
const Users = () => {
    const [users, setUsers] = useState(null)
    useEffect(() => {
      fetchNamesId()
      .then(res=>setUsers(res.data))
    }, [])
    console.log(users)
    return (
        <div class="container">
      <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">DisplayName</th>
     
    </tr>
  </thead>

  <tbody>
      {
          users?
          users.results.map((user, index) => (
               <tr key={index}>
      <th scope="row">{user.id}</th>
     <NavLink to={`/user/${user.id}`}> <td>{user.display_name}</td> </NavLink>

    </tr>
          )):  <div class="spinner-border" id="spinner"  role="status">
          <span class="sr-only">Loading...</span>
        </div>}
      
   
  
  </tbody>
</table>
      </div>
    )
}

export default Users
