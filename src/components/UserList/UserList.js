import React, {useState,useEffect} from 'react'
import axios from 'axios'
import CardUser from '../CardUser/CardUser'
import Loading from '../Loading/Loading'
import './UserList.css'
const UserList = () => {
    const [users, setUsers] = useState([])
    
    const getUsers=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.data)
        .then(el=>setUsers(el))
        .catch(error=>`this is ${error}`)
    }
    useEffect(() => {
        getUsers()
    }, [])
    //console.log(users)
    return (
        <div className="container">
            <h1> Listes Of Users</h1>
            {
            <div className="users-list">
                { users?
                    users.map(user => 
                    <CardUser user={user} key={user.id}/>
                    ): <Loading />
                    }
                    
            </div>
            }   
        </div>
    )
}

export default UserList
