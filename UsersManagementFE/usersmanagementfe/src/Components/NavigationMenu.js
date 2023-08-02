import {useState,useEffect} from 'react';
import {NavBar,Container,Row,Col,Card, InputGroup,Button,Form} from 'react-bootstrap';


function NavigationMenu({username,setMenuFilter}){

    return(
        <div className="filters">
            <span id="heading" className="title">{username.toUpperCase()}</span>
            <span id="dashbd">
               <p style={{cursor:"pointer"}} onClick={()=>{setMenuFilter("DashboardAnalytics")}}>
                    Dashboard 
               </p>
                              

            </span>
            <span id="app">
                <p style={{cursor:"pointer"}} onClick={()=>{setMenuFilter("App")}}>
                    Applications  
                </p>             

            </span>
            <span id="users" >
                <p style={{cursor:"pointer"}} onClick={()=>{setMenuFilter("Users")}}>
                    UserManagement   
                </p>            

            </span>
            
        </div>

    );


}

export default NavigationMenu;