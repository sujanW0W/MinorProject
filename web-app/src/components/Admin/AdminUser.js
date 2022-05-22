import axios from 'axios';
import React from 'react'
import TableComp from '../TableComp'

function AdminUser() {

	const [users,setUsers] = React.useState([]);

	const getUsers = () => {
		axios.get(`http://localhost:8080/api/user/getAllUser`)
		.then(
			(response) => {
				setUsers(response.data)
			}
		)
	}

	React.useEffect(
		() => {
			getUsers();
		},[]
	)

	const handleUsers = (event,userId) => {
        setUsers(users.filter(
            (user) => {
                return userId !== user.userId
            }
        )
        )
        axios.delete(`http://localhost:8080/api/user/removeUser/${userId}`)
        .then(
            (response) => {
                console.log(response)
            }
        )
        
    }
	
  return (
    <div className='tableContainer'>
        <h1 className='product-category' style={{margin:'10px'}}>
                    Users
        </h1>
        <div style={{display:'flex', justifyContent:'center'}}>
                <TableComp 
                name = 'users'
                users = {users}
				handleUsers = {handleUsers}
                />
        </div>

		<br />        
    </div>
  )
}

export default AdminUser