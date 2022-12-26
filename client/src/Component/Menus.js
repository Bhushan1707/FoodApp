import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";


const Menus=()=>{
    return(
        <ListGroup>
            <ListGroupItem tag="a" href="/">Home</ListGroupItem>
            <ListGroupItem tag="a" href="/user-login">Userlogin</ListGroupItem>
            <ListGroupItem tag="a" href="/admin-login">Adminlogin</ListGroupItem>
            
            <ListGroupItem tag="a" href="/about">About</ListGroupItem>
            <ListGroupItem tag="a" href="/contact">Contact</ListGroupItem>
            {/*<ListGroupItem tag="a" href="/update-course">UpdateFood</ListGroupItem>*/}
            
        </ListGroup>
    );
}
export default Menus;