import React from "react";

import { ListGroup, ListGroupItem } from "reactstrap";


const FoodItems=()=>{
    return(
        <ListGroup>
            <ListGroupItem tag="a" href="/view-food">View Food-Items</ListGroupItem>
            <ListGroupItem tag="a" href="/add-food">Add Food-Items</ListGroupItem>
           
            
            
        </ListGroup>
    );
}
export default FoodItems;