import {useState,useEffect} from 'react';
import {NavBar,Container,Row,Card, InputGroup,Button,Form,Col, Tabs,Modal} from 'react-bootstrap';
import axios from 'axios';


function EditUser(props) {

    const [curruser,setCurrUser] = useState({"role": "",
    "customerType": "",
    "userName": "",
    "email": "",
    "password": "",
    "firstName": "",
    "lastName": "",});

    useEffect(()=>{
       window.axios=axios;
       setCurrUser(props.selecteduser)
    },[props.selecteduser])

    const UpdateUser=async()=>{
        let jwttoken = sessionStorage.getItem('jwttoken');

        const headers={'Authorization':'Bearer '+jwttoken}

        await axios.interceptors.request.use(
          config => {
            config.headers['Authorization'] = `Bearer ${jwttoken}`;
                return config;
            },
            error => {
                console.log("error",error);
                return Promise.reject(error);
            }
        );

        // fetch(`https://localhost:8082/api/Users/${props.selecteduser.userId}`,{
        // headers:headers,
        // method:"put",
        // body:JSON.stringify(curruser)
        // }).then((response)=>{
        //   if(response.status===200){
        //     console.log(response.json());
        //     props.getUsers();

        // }

        // })

        // const response = await axios({
        //   method: 'put',
        //   url: `https://localhost:8082/api/Users/${props.selecteduser.userId}`,
        //   data: curruser,
          
        // });
        const response = await axios.put(`https://localhost:8082/api/Users/${props.selecteduser.userId}`,curruser);
        if(response.status===200){
            props.getUsers();

        }
    }

    

    const ResetUser =async()=>{
        let jwttoken = sessionStorage.getItem('jwttoken');

        const headers={'Authorization':'Bearer '+jwttoken}

        
        const response = await axios.get(`https://localhost:8082/api/Users/${props.selecteduser.userId}`,{
          headers
        });
        if(response.status===200){
            //console.log(response.json());
            setCurrUser(response.data);

        }
    }
    return (
      <Modal
        show={props.show}
        onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{}}>
          <Row className='mb-2'>
            <Col>
            <Form.Control as="select"  value={curruser.customerType} placeholder="Select Customer" onChange={
                (e)=>{setCurrUser({...curruser,customerType:e.target.value})}}>
              <option>Tata</option>
              <option>IOCL</option>
              <option selected></option>
            </Form.Control>
            </Col>
            <Col>
            <Form.Control value={curruser.userName} onChange={(e)=>{
                setCurrUser({...curruser,userName:e.target.value})
            }
            } placeholder="Enter Username" />
            </Col>
          
          </Row>
          <Row>
            <Col>
            <Form.Control value={curruser.email} onChange={(e)=>{setCurrUser({...curruser,email:e.target.value})}} className="mb-2" placeholder="Enter Email" />
            <Form.Control value={curruser.firstName} onChange={(e)=>{setCurrUser({...curruser,firstName:e.target.value})}} 
            className="mb-2" placeholder="Enter First Name" />
            <Form.Control value={curruser.lastName} onChange={(e)=>{setCurrUser({...curruser,lastName:e.target.value})}} 
            className="mb-2" placeholder="Enter Last Name" />
            <Form.Control value={curruser.password} onChange={(e)=>{setCurrUser({...curruser,password:e.target.value})}} 
            className="mb-2" placeholder="Enter Password" />
            </Col>
            <Col>
            <Form.Label className='mb-2'>Roles</Form.Label>
            <Form.Check
                type="radio"
                label="Global Gleason Admin"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
            />
            <Form.Check
                type="radio"
                label="User"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
            />
            <Form.Check
                type="radio"
                label="Customer Admin"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
            />

            </Col>
          
          </Row>

          
          
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Trial User" />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>{
            UpdateUser()
          }}>Update</Button>
          <Button onClick={ResetUser}>Reset</Button>
        </Modal.Footer>
      </Modal>
    );
}
  

  export default EditUser;