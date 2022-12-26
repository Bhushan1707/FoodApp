import React,{ Fragment,useEffect,useState } from "react";
import { Button,Container,Form,FormGroup, Input } from "reactstrap";
import fi from "../Component/images/veg1.jpg";
import pi from "../Component/images/veg2.jpg";
import bi from "../Component/images/veg1.jpg";
import ci from "../Component/images/kk.jpg";
const Veg=()=>{
    useEffect(()=>{
        document.title="Veg Food || Food Delivery";
    },[]);
    return(
        <div>
             <Fragment>
            <h3>Food-Items</h3>
            
            <h5>Veg Kolhapuri</h5>
            <img src={fi} alt="" className="food" width="150px" height="100px"/>
            <p>Rs.230</p> 
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
            <h5>Panner Kolhapuri</h5>
            <img src={pi} alt="" className="food" width="150px" height="100px"/>
            <p>Rs.300</p>
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
            <h5>Cheese Butter Masala</h5>
            <img src={bi} alt="" className="food" width="150px" height="100px"/>
            <p>Rs.320</p>
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
            <h5>Kaju  Masala</h5>
            <img src={ci} alt="" className="food" width="150px" height="100px"/>
            <p>Rs.220</p>
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
export default Veg;