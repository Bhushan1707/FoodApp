import React,{ Fragment,useEffect,useState } from "react";
import { Button,Container,Form,FormGroup, Input } from "reactstrap";

const IceCreams=()=>{
    useEffect(()=>{
        document.title="IceCreams || Food Delivery";
    },[]);
    return(
        <div>
             <Fragment>
            <h3>Best in Ice Cream</h3>
            
            <h5>Chocobite Ice Cream</h5>
            
            
            <p>Rs.65</p>
            <form>
                <FormGroup>
                   
                    <Input
                        type="text"
                        placeholder="Quantity"
                        name="Quantity"
                        Id="Quantity"
                        />
                         </FormGroup>
                         </form>
            <Button type="submit" color="success" href="/Payment">Order</Button>
            <h5>Anjeer Ice Cream</h5>
           
            
            <p>Rs.65</p>
            <form>
                <FormGroup>
                   
                    <Input
                        type="text"
                        placeholder="Quantity"
                        name="Quantity"
                        Id="Quantity"
                        />
                         </FormGroup>
                         </form>
            <Button type="submit" color="success" href="/Payment">Order</Button>
           
            <h5>Choco cream Ice Cream</h5>
           
           
            <p>Rs.70</p>
            <form>
                <FormGroup>
                   
                    <Input
                        type="text"
                        placeholder="Quantity"
                        name="Quantity"
                        Id="Quantity"
                        />
                         </FormGroup>
                         </form>
            <Button type="submit" color="success" href="/Payment">Order</Button>
            </Fragment>
        </div>


    );
};
export default IceCreams;