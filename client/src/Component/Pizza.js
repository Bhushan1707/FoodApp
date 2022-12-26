import React,{ Fragment,useEffect,useState } from "react";
import { Button,Container,Form,FormGroup, Input } from "reactstrap";
import fi from "../Component/images/pizza1.jpg";
import pi from "../Component/images/pizza2.jpg";
import bi from "../Component/images/pizza1.jpg";
const Pizza=()=>{
    useEffect(()=>{
        document.title="Pizza || Food Delivery";
    },[]);
    return(
        <div>
             <Fragment>
            <h3>Best in Pizza</h3>
            
            <h5>Margherita Pizza</h5>
            
            <p>Classic delight with 100% real mozzarella Cheese</p> 
            <img src={fi} alt="" className="food" width="150px" height="100px"/>
            <p>Rs.109</p>
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
            <h5>Veggie Paradise Pizza</h5>
           
            <p>The awesome foursome! Golden corn,black oloves,capsicum,red paprika</p>
            <img src={pi} alt="" className="food" width="150px" height="100px"/>
            <p>Rs.269</p>
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
           
            <h5>Indi Tandoori paneer Pizza</h5>
           
            <p>It is hot.It is spicy.It is oh-so-Indian.</p>
            <img src={bi} alt="" className="food" width="150px" height="100px"/>
            <p>Rs.310</p>
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
export default Pizza;