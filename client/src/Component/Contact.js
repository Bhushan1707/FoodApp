
import React,{ Fragment,useEffect,useState } from "react";
import { Button,Container,Form,FormGroup, Input } from "reactstrap";
const Contact=()=>{
    useEffect(()=>{
        document.title="Contact || Food Delivery";
    },[]);
    return(
        <Fragment>
            <h2>Contact Us</h2>
            <form>
                <FormGroup>
                    <label for="Name">Name</label>
                    <Input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        Id="Namw"
                        />
                         </FormGroup>
                         <FormGroup>
                    <label for="Email">Email</label>
                    <Input
                        type="text"
                        placeholder="Email Address"
                        name="email"
                        Id="Email"
                        />
                        
                </FormGroup>

               
                <FormGroup>
                    <label for="subject">Subject</label>
                    <Input
                        type="text"
                        placeholder="What's your message about?"
                        name="subject"
                        Id="Subject"
                        />
                        
                </FormGroup>
                <FormGroup>
                    <label for="Message">Message</label>
                    <Input
                        type="textarea"
                        placeholder="Write your message here..."
                        Id="title"
                        style={{height:150}}
                        />
                    
                        
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Send</Button>
                    
                </Container>
            </form>
        </Fragment>
    );
};



export default Contact;