import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";


const AllCategoery=()=>{
    return(
        <ListGroup>
            <ListGroupItem tag="a" href="/veg">Veg</ListGroupItem>
            <ListGroupItem tag="a" href="/burger">Burger</ListGroupItem>
            <ListGroupItem tag="a" href="/pizza">Pizza</ListGroupItem>
            <ListGroupItem tag="a" href="/biryani">Biryani</ListGroupItem>
            <ListGroupItem tag="a" href="Ice-creams">Ice-Creams</ListGroupItem>
            
            
        </ListGroup>
    );
}
export default AllCategoery;