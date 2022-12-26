import React,{ Fragment } from "react";

import { Button,Container,FormGroup, Input } from "reactstrap";


const AdminLogin=()=>{
    return(
        <Fragment>
            <h2>User Login</h2>
            <form>
                <FormGroup>
                    <label for="Username">Username</label>
                    <Input
                        type="text"
                        placeholder="Enter Username"
                        name="username"
                        Id="Username"
                        />
                         </FormGroup>
                         <FormGroup>
                    <label for="Password">Password</label>
                    <Input
                        type="text"
                        placeholder="Enter Passsword"
                        name="password"
                        Id="Password"
                        />
                        
                </FormGroup>

               
               
                    <Container className="text-center">
                    <Button type="submit" color="success" href="/fooditems" >Login</Button>
                    
             
                    
                </Container>
            </form>
        </Fragment>
    );
};
export default AdminLogin;