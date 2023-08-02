import {useState,useEffect, Fragment} from 'react';
import {NavBar,Container,Row,Col,Card, InputGroup,Button,Form, Tabs,Tab} from 'react-bootstrap';
import SingleCard from './SingleCard';
import { useContext } from 'react';
import { context } from '../Context/Context';


function DashBoardAnalytics(){

    const {data} = useContext(context);

    const [sections,setSections] = useState([{title:"Users",total:0},{title:"Applications",total:32},{title:"Modules",total:110},{title:"Packages",total:50}])

    useEffect(()=>{
        let newsections = sections.map((section) => {          
                return section.title === "Users"
                    ? {...section, total: data.length}
                    : section;
           
        })
        setSections(newsections)

    },[data.length])

    return (
        <Fragment>
        <Container style={{display:"flex"}}>
            {sections.map((section)=>(
                <SingleCard title={section.title} total={section.total}/>
            )
            )}

        </Container>

        <Form.Group style={{display:"flex",justifyContent:"space-between !important",height:"5%",gap:"50px"}}>
                <p style={{cursor:"pointer"}}>
                    Applications
                </p>
                <p style={{cursor:"pointer"}} >
                    Terms & Conditions
                </p>

        </Form.Group>

        
        </Fragment>

    );

}

export default DashBoardAnalytics;