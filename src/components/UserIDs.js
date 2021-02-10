import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom'
import {fetchNamesId} from '../methods';


const UserIDs = () => {
    const [userIds, setUserIds] = useState(null)
    const [token, setToken] = useState("");
    useEffect(() => {
      fetchNamesId(token)
      .then(res=>setUserIds(res.data))
    }, [token])
   
    return (
        <div className="grid-container">
      <table className="table  table-bordered">
  <thead className="thead-dark">
    <tr>
      <th scope="col" id="td-align">IDs</th>
     
    </tr>
  </thead>

  <tbody>
      {
          userIds?
          userIds.results.map((user, index) => (
               <tr key={index}>
     
     <NavLink to={`/user/${user.id}`}>  <th id="td-align" scope="row">{user.id}</th> </NavLink>

    </tr>
          )):  <div className="d-flex justify-content-center"><div className="spinner-border" id="spinner"  role="status">
          <span className="sr-only">Loading...</span>
        </div></div>}
      
   
  
  </tbody>
</table>
<span >
       <nav  >
  <ul className="pagination" id="next-button">
   

    <li className="page-item"><button className="page-link" onClick={() => ( setToken(userIds.page['next_token']))}>Next</button></li>
  </ul>
</nav>
      </span>
      </div>
    )
}

export default UserIDs
