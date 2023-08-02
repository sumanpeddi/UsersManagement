import {useState,useEffect} from 'react';
import {NavBar,Container,Row,Col,Card, InputGroup,Button,Form} from 'react-bootstrap';

import { BrowserRouter,useNavigate  } from "react-router-dom";
import axios from 'axios';


const authenticate=async(values)=>{
    return await axios.post("https://localhost:8082/api/Token",values)
}


function LoginPage({username,setUsername}){

    

    const [password,setPassword] = useState("");

    const history = useNavigate();

    const handleSubmit=()=>{

        authenticate({userName:username,password:password}).then((response)=>{
            //response.headers("Access-Control-Allow-Origin","http://localhost:5090")
            if(response.status===200){
                sessionStorage.setItem('username',username);
                sessionStorage.setItem('jwttoken',response.data);
                history('/DashBoard');
            }

        })

    }



    return(
        <Container style={{display:"flex",justifyContent:"space-evenly",alignItems:"space-evenly",}}>

            
            
                    <Card style={{width:"50%",top:"120px"}}>
                        <Card.Header style={{width:"100%",textAlign:"center"}}>
                            GEMS Cloud Web Application
                        </Card.Header>
                        <Card.Body style={{width:"100%"}}>
                            <Form.Group className='mb-2'>
                              <Form.Control value={username} placeholder='UserName' onChange={(e)=>{setUsername(e.target.value)}}/>
                            </Form.Group>
                            <Form.Group className='mb-2'>
                              <Form.Control value={password} placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
                            </Form.Group>
                        </Card.Body>
                        <Card.Footer style={{width:"100%",textAlign:"center"}}>
                            <Button onClick={handleSubmit}>
                                Sign In
                            </Button>
                        </Card.Footer>
                        <small>
                            <p
                             style={{cursor:"pointer",textAlign:"center"}}
                             onClick={()=>{}}
                             >
                                Forgot password?
                            </p>
                        </small>

                    </Card>

                    


               

        </Container>

    );
}

export default LoginPage;