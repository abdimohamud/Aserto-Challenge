import React, {useState, useEffect} from 'react'
import {fetchUserById} from '../methods'
import {useParams} from 'react-router-dom'
const User = () => {
    const {id} = useParams()
    console.log(id)
    const [user,setUser] = useState(null)
    useEffect(() => {
     fetchUserById(id)
     .then(res => setUser(res.data.results))
     .catch(err =>console.log(err))
    }, [id])
    return (
        <div className="container">
        {user?<div className="moreinfo-modal">
        <img src={user.picture} alt={id} style={{width:'50%', marginRight:'auto', marginLeft:'auto'}}/>
        <span>
          <h5>Display Name:</h5><p>{user.display_name}</p> 
        </span>
        <span>
          <h5>id:</h5><p>{id}</p> 
        </span>
        <span>
          <h5>Email:</h5><p>{user.email}</p> 
        </span>
        <h5 style={{textAlign:'center'}}>
        Identities

        </h5>
        {user?Object.entries(user.identities).map(([key, value]) =>(
          
             <span>
         <h5>{value.type} :</h5> <p>{key}</p>
        </span>
        
        ))
        
        :''}
        <h5 style={{textAlign:'center'}}>
        {/* Attributes

        </h5>
        <span>
          <h5>Last Update:</h5><p>{user.metadata.updated_at}</p> 
        </span>
        <span>
          <h5>Last Update:</h5><p>{user.metadata.updated_at}</p> 
        </span>
        <h5 style={{textAlign:'center'}}> */}
        MetaData

        </h5>
        <span>
          <h5>Last Update:</h5><p>{user.metadata.updated_at}</p> 
        </span>
        <span>
          <h5>Created:</h5><p>{user.metadata.created_at}</p> 
        </span>
        </div>
    :<div class="spinner-border" id="spinner"  role="status">
    <span class="sr-only">Loading...</span>
  </div>}
      </div>
    )
}

export default User
