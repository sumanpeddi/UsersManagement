import {useState,useEffect} from 'react';
import {NavBar,Container,Row,Col,Card, InputGroup,Button,Form, Tabs,Tab} from 'react-bootstrap';

function SingleCard({title,total}){

    return (
        <div style={{width:"22%",margin:"10px"}}>
            <Card>
                <Card.Header>
                    {title}
                </Card.Header>
                <Card.Body style={{fontSize:"30px"}}>
                    {total}
                </Card.Body>
            </Card>
        </div>

    );

}

export default SingleCard;