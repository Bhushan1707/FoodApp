import React,{ Fragment,useEffect,useState } from "react";
import { Button,Container,form,FormGroup, Input } from "reactstrap";

const Payment=()=>{
    // useEffect(()=>{
    //     document.title="Registration || Food Delivery";
    // },[]);
    
    return(
        <div>
            <h3>Payment</h3>
            <input type="radio" name="payment" value="upi" />UPI<br/>
            <input type="radio" name="payment" value="wallet"/>Wallet/Postpaid<br/>
            <input type="radio" name="payment" value="cash" />Cash on Delivery<br/>
            <input type="radio" name="payment" value="netbanking" />Net Banking<br/><br/>

            <Button type="submit" color="success" href="alert">Place Order</Button>
            
        </div>

    );
};
export default Payment;