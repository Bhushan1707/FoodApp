import React from "react";
import { Card,CardBody } from "reactstrap";

function Header({name,title}){
    return(
        <Card>
            <CardBody className=" bg-warning" >
                <h1 className="text-center my-2">THE FOODIE EXPRESS</h1>
            </CardBody>
        </Card>
    );

}
export default Header;