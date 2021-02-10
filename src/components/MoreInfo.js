import React from 'react';
import Modal from "react-modal";
import {NavLink} from 'react-router-dom'


Modal.setAppElement("#root");
const MoreInfo = ({ user, toggleModal, isOpen, manager }) => {

  
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
       {isOpen? <div className="moreinfo-modal">
          <img src={user.picture} alt={user.id} className="rounded"/>
          <span>
            <h5>Display Name:</h5><p>{user.display_name}</p> 
          </span>
          <span>
            <h5>Id:</h5><p>{user.id}</p> 
          </span>
          <span>
            <h5>Email:</h5><p>{user.email}</p> 
          </span>
          <h5 style={{textAlign:'center'}}>
          Identities

          </h5>
          {user? Object.entries(user.identities).map(([key, value]) =>(
            
               <span>
           <h5>{value.type} :</h5> <p>{key}</p>
          </span>
          
          ))
          
          :null}
         

         
          <span>
            <h5>Manager:</h5><NavLink to={`/user/${manager.id}`}><p>{manager.display_name}</p> </NavLink>
          </span>
       
          <h5 id="title-text">
          MetaData

          </h5>
          <span>
            <h5>Last Update:</h5><p>{user.metadata.updated_at}</p> 
          </span>
          <span>
            <h5>Created:</h5><p>{user.metadata.created_at}</p> 
          </span>

        </div>:''}
      </Modal>
    </>
  );
};

export default MoreInfo;
