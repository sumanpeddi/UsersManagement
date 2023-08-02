import {useState,useEffect,Fragment} from 'react';
import {NavBar,Container,Row,Col,Card, InputGroup,Button,Form,Table} from 'react-bootstrap';
import AddUser from './AddUser';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EditUser from './EditUser';
import { useContext } from 'react';
import { context } from '../Context/Context';

const fetchUsers = async()=>{
    return await axios.get("https://localhost:8082/api/Users");
}

function ViewUsers(){

    const {data,setData} = useContext(context);
    const [edituser,setEditUser] = useState(false);
    const [adduser,setAddUser] = useState(false);
    const [selecteduser,setSelectedUser] = useState({});

    const navigate = useNavigate();

    const UpdateUser = ()=>{

    }

    const getUsers = async () => {
        let jwttoken = sessionStorage.getItem('jwttoken');
        const response = await axios.get("https://localhost:8082/api/Users",{
            headers:{
                'Authorization':'Bearer '+jwttoken
            }
        });
        if(response.status){
            setData(response.data) ;
         }
      };

    const handleDelete = async(user)=>{
        let jwttoken = sessionStorage.getItem('jwttoken');
        const response = await axios.delete(`https://localhost:8082/api/Users/${user.userId}`,{
            headers:{
                'Authorization':'Bearer '+jwttoken
            }
        });
        if(response.status===200){
            getUsers();
        }


    }

    

    useEffect(()=>{

        let username = sessionStorage.getItem('username');
        if(username === '' || username === null){
            navigate('/')
        }
        
          getUsers();


    },[])

    return(
        <div>
            <Form.Group controlId="Customer" className='mb-2'>
                <Form.Label>Customer</Form.Label>
                <Form.Control as="select" type="email" placeholder="Select Customer" >
                    <option>Tata</option>
                    <option>IOCL</option>
                </Form.Control>
            </Form.Group>
              <Form.Group style={{display:"flex",justifyContent:"space-between",height:"5%"}}>
                <p style={{cursor:"pointer"}}>
                    Refresh
                </p>
                <p style={{cursor:"pointer"}} onClick={()=>setAddUser(true)}>
                    Add New User

                </p>

              </Form.Group>
              <Form.Group style={{display:"flex",justifyContent:"space-evenly",height:"20%"}}>
                 <Form.Control as="input" type="email" placeholder="Search" />
              </Form.Group>
              <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>User</th>
                        <th>Email Address</th>
                        <th>Customer</th>
                        <th>Roles</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length>0?data.map((user)=>{
                            return (
                                <tr key={"tr-"+user.userId}>
                                    <td>{user.userName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.customerType}</td>
                                    <td>{user.role}</td>
                                    <td>
                                    <Row style={{display:'flex',justifyContent:"space-evenly"}}>
                                            <Button onClick={()=>{
                                                setEditUser(true)
                                                setSelectedUser(user)}} >
                                                Edit
                                            </Button>
                                            <br/>
                                            <Button onClick={()=>handleDelete(user)}>
                                                Delete
                                            </Button>
                                        </Row>
                                    </td>
                                </tr>
                            )
                        }):[]}
                    </tbody>
            </Table>

            
            <AddUser
            show={adduser}
            onHide={() => setAddUser(false)}
            getUsers={getUsers}
            selecteduser={selecteduser}
            />

            <EditUser
            show={edituser}
            onHide={() => setEditUser(false)}
            getUsers={getUsers}
            selecteduser={selecteduser}
            />

            
        </div>
    )
}

export default ViewUsers;