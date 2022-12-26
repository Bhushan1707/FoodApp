import React,{ Fragment,useEffect,useState } from "react";
import { Button,Container,Form,FormGroup, Input } from "reactstrap";
import fi from "../Component/images/rest1.jpg";
import pi from "../Component/images/bb.jpg";
import bi from "../Component/images/bb1.jpg";
import ci from "../Component/images/bb.jpg";
const Burger=()=>{
    useEffect(()=>{
        document.title="Burger || Food Delivery";
    },[]);
    return(
        <div>
             <Fragment>
            <h3>Best in Burger</h3>
            
            <h5>Crispy Veg Burger</h5>
             
            <p>Our Best-selling Burger With Crispy Chicken Patty,Onoion And Our Signature Sause</p>
            <img src={fi} alt="" className="food" width="150px" height="100px"/>
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
            <h5>Crispy Chicken Burger</h5>
            <p>Our Best-selling Burger With Crispy Chicken Patty,Onoion And Classic Mayo Sause</p>
            <img src={pi} alt="" className="food" width="150px" height="100px"/>
            <p>Rs.90</p>
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
            <h5>Chicken Burger + Crispy Fries</h5>
            
            <p>Chicken Burger + french fries(990 Calories each)</p>
            <img src={bi} alt="" className="food" width="150px" height="100px"/>
            <p>Rs.279</p>
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
            <h5>Veggie Burger + Crispy Fries</h5>
           
            <p>Veggie Burger + Crispy Fries(850 Calories each)</p>
            <img src={ci} alt="" className="food" width="150px" height="100px"/>
            <p>Rs.239</p>
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
export default Burger;