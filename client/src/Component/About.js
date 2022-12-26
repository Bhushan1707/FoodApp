import React from "react";
import { Button,Card,CardBody, CardTitle,Container } from "reactstrap";
const About=()=>{
    return(
        <div>
            <Card className="text-center" border="success">
                <CardBody>
                    <CardTitle><h4>ABOUT</h4></CardTitle>
                    <p>"At The Foodie Express,the world feels like a bubbling Indian Restaturant.With 
                        an infinite strand of pasta connecting everything and everyone."
                    </p>
                </CardBody>
            </Card>
        </div>
    );

};
export default About;