import React from "react";
import { Button,Card,CardBody, CardTitle,Container } from "reactstrap";


const Home=()=>{
    return(
        <div>
            <Card className="text-center" border="success">
                <CardBody>
                <CardTitle><h4>FOOD DELIVERY ON TIME</h4></CardTitle>
                    <CardTitle><h6>The Fastest Delivery in Your City </h6></CardTitle>
                    <Container className="text-center">
                        <Button color="primary" outline  href="/user-login">ORDER NOW</Button>
                    </Container>
                </CardBody>
            </Card>
        </div>
    );
};
export default Home;