import {useState,useEffect, useContext} from 'react';
import {NavBar,Container,Row,Col,Card, InputGroup,Button,Form, Tabs} from 'react-bootstrap';

import UserManagement from './UserManagement';
import NavigationMenu from './NavigationMenu';
import DashBoardAnalytics from './DashBoardAnalytics';
import Context from '../Context/Context';

function DashBoard({username}){

    const [menufilter,setMenuFilter] = useState("Users");

    



    return(
        <div className='home'>
            <Context>
            <NavigationMenu username={username} setMenuFilter={setMenuFilter}/>
            <div className='dashboardContainer'>
                {menufilter==="Users"?(
                    <UserManagement/>
                ):menufilter==="DashboardAnalytics"?(
                    <DashBoardAnalytics/>
                ):''}
            </div>
            </Context>
        </div>
                
    );
}

export default DashBoard;