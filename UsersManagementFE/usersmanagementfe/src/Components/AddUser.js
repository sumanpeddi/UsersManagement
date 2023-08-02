import {useState,useEffect} from 'react';
import {NavBar,Container,Row,Card, InputGroup,Button,Form,Col, Tabs,Modal} from 'react-bootstrap';
import axios from 'axios';


function AddUser(props) {

    const [curruser,setCurrUser] = useState({"role": "",
    "customerType": "",
    "userName": "",
    "email": "",
    "password": "",
    "firstName": "",
    "lastName": "",});


    const AddNewUser=async()=>{
        let jwttoken = sessionStorage.getItem('jwttoken');
        
        const response = await axios.post("https://localhost:8082/api/Users",curruser,{
            headers:{
                'Authorization':'Bearer '+jwttoken
            }
        });


        // const headers={'Authorization':'Bearer '+jwttoken}
        
        // const response2 = await axios.get(`https://localhost:8082/api/Users/${props.selecteduser.userId}`,curruser,{
        //   headers
        // });
        if(response.status===200){
            props.getUsers();

        }
    

    }

    const ResetUser =async()=>{   

            setCurrUser({"role": "",
            "customerType": "",
            "userName": "",
            "email": "",
            "password": "",
            "firstName": "",
            "lastName": "",})
        
    }

    const handleRadioInputChange = event => {
      event.persist();
      setCurrUser({ ...curruser, role: event.target.value });
    };

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
            Add User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{}}>
          <Row className='mb-2'>
            <Col>
            <Form.Control as="select"  value={curruser.customerType} onChange={
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
            <Form.Group controlId="kindOfStand">
              <Form.Check
                value="GlobalGleasonAdmin"
                type="radio"
                aria-label="radio 1"
                label="Global Gleason Admin"
                onChange={handleRadioInputChange}
                checked={curruser.role === "GlobalGleasonAdmin"}
              />
              <Form.Check
                value="User"
                type="radio"
                aria-label="radio 2"
                label="User"
                onChange={handleRadioInputChange}
                checked={curruser.role === "User"}
              />
              <Form.Check
                value="CustomerAdmin"
                type="radio"
                aria-label="radio 2"
                label="Customer Admin"
                onChange={handleRadioInputChange}
                checked={curruser.role === "CustomerAdmin"}
              />
            </Form.Group>
            

            </Col>
          
          </Row>

          
          
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Trial User" />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={AddNewUser}>Add</Button>
          <Button onClick={ResetUser}>Reset</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default AddUser;