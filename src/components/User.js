import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {fetchUserById} from '../methods'
import {useParams} from 'react-router-dom'
const User = () => {
    const {id} = useParams()
    const [user,setUser] = useState(null)
    const[manager, setManager] =useState("")
    const [errors, setErrors] = useState("")

    useEffect(() => {
     fetchUserById(id)
     .then(res => {setUser(res.data.results); fetchUserById(res.data.results.attr.manager).then(res=>setManager(res.data.results))})
     .catch(err =>setErrors(err))
    }, [id])
    return (
        <div className="container">
          {errors?<div class="alert alert-danger" role="alert">
          <span>{errors.message}</span>
</div>:''}
        {user?<div className="moreinfo-modal">
        <img src={user.picture} alt={id} className="rounded" style={{width:'50%', marginRight:'auto', marginLeft:'auto'}}/>
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
      
        <span>
        <h5>Manager:</h5><NavLink to={`/user/${manager.id}`}><p>{manager.display_name}</p> </NavLink> 
        </span>
     
      
        MetaData

        </h5>
        <span>
          <h5>Last Update:</h5><p>{user.metadata.updated_at}</p> 
        </span>
        <span>
          <h5>Created:</h5><p>{user.metadata.created_at}</p> 
        </span>
        </div>
    : <div className="d-flex justify-content-center"><div className="spinner-border" id="spinner"  role="status">
    <span className="sr-only">Loading...</span>
  </div></div>}
      </div>
    )
}

export default User
