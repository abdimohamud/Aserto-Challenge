import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom'
import {fetchNamesId} from '../methods';
const Users = () => {
    const [users, setUsers] = useState(null)
    const [token, setToken] = useState("");
    useEffect(() => {
      fetchNamesId(token)
      .then(res=>setUsers(res.data))
    }, [token])
    
    return (
        <div className="grid-container">
      <table className="table  table-bordered">
  <thead className="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col" id="th-align">DisplayName</th>
     
    </tr>
  </thead>

  <tbody>
      {
          users?
          users.results.map((user, index) => (
               <tr key={index}>
      <th scope="row" >{user.id}</th>
     <NavLink to={`/user/${user.id}`}> <td id="td-align">{user.display_name}</td> </NavLink>

    </tr>
          )):  <div className="d-flex justify-content-center"><div className="spinner-border" id="spinner"  role="status">
          <span className="sr-only">Loading...</span>
        </div></div>}
      
   
  
  </tbody>
</table>
<span >
       <nav  >
  <ul className="pagination" id="next-button">
    

    <li className="page-item"><button className="page-link" onClick={() => ( setToken(users.page['next_token']))}>Next</button></li>
  </ul>
</nav>
      </span>
      </div>
    )
}

export default Users
