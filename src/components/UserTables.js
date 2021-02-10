import React, { useState, useEffect } from "react";
import ReactDataGrid from "react-data-grid";
import {NavLink } from 'react-router-dom'
import { fetchUsers, fetchUserById } from "../methods";
import MoreInfo from "./MoreInfo";



const UsersTable = () => {
  const [token, setToken] = useState("");
  const [rows, setRows] = useState([]);
  const [id, setId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [user,setUser] = useState({})
  const[manager, setManager] = useState("")
  const[managerId, setManagerId] = useState({})  
  
  // Modal Toggle
  function toggleModal(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }
  // Custom Cell Renders
  function cellRender(id) {
    return <button type="button" className="btn btn-outline-primary" onClick={(e)=>{ setId(id); toggleModal(e)}}> <i className="fas fa-info-circle"></i></button>;
  }
  function imagecellRender(data) {
    return <img src={data} className="rounded" id="image-cell" alt={data} />;
  }
  
  function hyperLinkCellRender(id, display_name) {
    return <NavLink to={`/user/${id}`}>{display_name}</NavLink>
  }

  useEffect(() => {
    fetchUsers(token)
      .then((res) => {
        setUsersData(res.data);
        setRows(
          res.data.results.map((user, index) => {
            return {
              id: user.id,
              display_name: hyperLinkCellRender(user.id,user.display_name),
              email: user.email,
              picture: imagecellRender(user.picture),
              info: cellRender(user.id),
            };
          })
        );
      })
      .catch((err) => console.log(err));
  }, [token]);

  useEffect(() => {
    if(id){
    fetchUserById(id)
    .then(res => {
      setUser(res.data.results)
      setManagerId(res.data.results.attr.manager)
    })
    .catch(err =>console.log(err))
  }}, [id])

   useEffect(() => {
     if(managerId.length){
    fetchUserById(managerId)
    .then(res => {
      setManager(res.data.results)
    })
    .catch(err =>console.log(err))
  }
   }, [managerId])

  const columns = [
    {
      key: "id",
      name: "ID"
    },
    { key: "picture", name: "Avatar" },
    { key: "display_name", name: "Name" },
    { key: "email", name: "Email" },
    {
      key: "info",name: "Quick Info",
     
    }
  ];

  return (
    <>
    <div className="grid-container" >

    {user.id ?<MoreInfo isOpen={isOpen} toggleModal={toggleModal} user={user} manager={manager} />:''}
     {rows.length ? (
        <div>

          <ReactDataGrid
            columns={columns}
            rowGetter={(i) => rows[i]}
            rowsCount={rows.length}
            rowHeight={160}
            headerRowHeight={30}
            minHeight={800}
            minWidth={1700}
            />
        </div>
       
       ) : (
        <div className="d-flex justify-content-center">
         <div className="spinner-border" id="spinner"  role="status">
        <span className="sr-only">Loading...</span>
      </div>
      </div>
      )}
       <span >
       <nav  >
  <ul className="pagination" id="next-button" >
    

    <li className="page-item"><button className="page-link" onClick={() => ( setToken(usersData.page['next_token']))}>Next</button></li>
  </ul>
</nav>
      </span>
      </div>
    </>
  );
};

export default UsersTable;
 