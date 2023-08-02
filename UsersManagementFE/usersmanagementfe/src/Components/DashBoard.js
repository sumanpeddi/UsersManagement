import {useState,useEffect} from 'react';
import {NavBar,Container,Row,Col,Card, InputGroup,Button,Form, Tabs} from 'react-bootstrap';

import UserManagement from './UserManagement';
import NavigationMenu from './NavigationMenu';

function DashBoard({username}){

    const [menufilter,setMenuFilter] = useState("Users");



    return(
        <div className='home'>
            <NavigationMenu username={username}/>
            <div className='dashboardContainer'>
                {menufilter==="Users"?(
                    <UserManagement/>
                ):''}
            </div>
        </div>
                
    );
}

export default DashBoard;