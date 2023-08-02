import {useState,useEffect} from 'react';
import {NavBar,Container,Row,Col,Card, InputGroup,Button,Form, Tabs,Tab} from 'react-bootstrap';
import ViewUsers from './ViewUsers';

function UserManagement(){

    const [activetabId,setActivetabId] = useState("ViewUsers")

    return(
        <Container style={{display:"flex",flexDirection:"column"}}>
            <Form.Group style={{justifyContent:"space-between"}}>
                <Form.Label className='title'>
                    User Management
                </Form.Label>
                
            </Form.Group>
            <Card>
                        <Card.Body>
                            <Tabs
                             activeKey={activetabId}
                             onSelect={(id)=>(id? setActivetabId(id):'')}
                             transition={false}
                             id="usertabs"
                             style={{marginLeft:'0.25rem'}}>
                            <Tab eventKey={"ViewUsers"} title={"View Users"}>
                                <ViewUsers/>
                            

                            </Tab>
                            <Tab eventKey={"GrantPermissions"} title={"Grant Permissions"}>

                            </Tab>

                            </Tabs>
                        </Card.Body>
                    </Card>


        </Container>
    )
}

export default UserManagement;