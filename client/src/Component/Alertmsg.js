import React,{ Fragment } from "react";
import swal from 'sweetalert';
import { Alert, Button,Container,FormGroup, Input } from "reactstrap";


const Alertmsg=()=>{
  swal({
    title: "Order placed successfully",
    text: "Your order has been placed successfully",
    icon: "success",
    button: "OK",
  });
    return(
        <div>
          
        </div>


    );
};
export default Alertmsg;