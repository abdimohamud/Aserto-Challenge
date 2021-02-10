import React, { useState, useEffect } from "react";
import ReactDataGrid from "react-data-grid";
import {NavLink } from 'react-router-dom'
import { fetchUsers, fetchUserById } from "../methods";
import MoreInfo from "./MoreInfo";

function imagecellRender(data) {
  return <img src={data} style={{width:'50%', marginLeft:'auto', marginRight:'auto'}} alt={data} />;
}

function hyperLinkCellRender(id, display_name) {
  return <NavLink to={`/user/${id}`}>{display_name}</NavLink>
}

const UsersTable = () => {
  const [token, setToken] = useState("");
  const [rows, setRows] = useState([]);
  const [id, setId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [user,setUser] = useState({})
  
  
  
  function toggleModal(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }
  function cellRender(id) {
   
    return <button onClick={(e)=>{ setId(id); toggleModal(e)}}> &#8505;</button>;
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
              info: cellRender(user.id)
            };
          })
        );
      })
      .catch((err) => console.log(err));
  }, [token]);

  useEffect(() => {
    fetchUserById(id)
    .then(res => setUser(res.data.results))
    .catch(err =>console.log(err))
   }, [id])

  const columns = [
    {
      key: "id",
      name: "ID"
    },
    { key: "picture", name: "Avatar" },
    { key: "display_name", name: "Name" },
    { key: "email", name: "Email" },
    {
      key: "info",
      name: "Quick Info",
     
    }
  ];

  return (
    <>
    <div className="container">

    {user.id?<MoreInfo isOpen={isOpen} toggleModal={toggleModal} user={user} />:''}
     {rows.length ? (
        <div style={{height:'100%',}}>

          <ReactDataGrid
            columns={columns}
            rowGetter={(i) => rows[i]}
            rowsCount={rows.length}
            rowHeight={160}
            headerRowHeight={30}
            minHeight={800}
            />
        </div>
       
       ) : (
         <div class="spinner-border" id="spinner"  role="status">
        <span class="sr-only">Loading...</span>
      </div>
      )}
       <span style={{ display: "flex", justifyContent: "space-between" }}>
        <button>Previous</button>
        <button
          onClick={() => {
            setToken(usersData.page.next_token);
          }}
          >
          Next
        </button>
      </span>
      </div>
    </>
  );
};

export default UsersTable;
