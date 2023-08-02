import {useState,useEffect} from 'react';
import {NavBar,Container,Row,Col,Card, InputGroup,Button,Form} from 'react-bootstrap';


function NavigationMenu({username}){

    return(
        <div className="filters">
            <span className="title">{username.toUpperCase()}</span>
            <span >
               <p style={{cursor:"pointer"}}>
                    Dashboard 
               </p>
                              

            </span>
            <span >
                <p style={{cursor:"pointer"}}>
                    Applications  
                </p>             

            </span>
            <span id="users" onClick={()=>{}}>
                <p style={{cursor:"pointer"}}>
                    UserManagement   
                </p>            

            </span>
            
        </div>

    );


}

export default NavigationMenu;