import React,{ Fragment,useEffect,useState } from "react";
import { Button,Container,Form,FormGroup, Input } from "reactstrap";
import fi from "../Component/images/biryani3.jpg";
import pi from "../Component/images/biryani2.jpg";
import bi from "../Component/images/biryani1.jpg";
const Biryani=()=>{
    useEffect(()=>{
        document.title="Biryani || Food Delivery";
    },[]);
    return(
        <div>
             <Fragment>
            <h3>Best in Biryani</h3>
            
            <h5>Veg Biryani</h5>
            
            <p>Classic delight with 100% real mozzarella Cheese</p> 
            <img src={fi} alt="" className="food" width="150px" height="100px"/>
            <p>Rs.260</p>
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
            <h5>Chicken Biryani</h5>
            <img src={pi} alt="" className="food" width="150px" height="100px"/>
            <p>Aromatic rice layered with marinated chicken and whole spices slow cooked...</p>
            <p>Rs.280</p>
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
           
            <h5>Egg Biryani</h5>
           
            <p>It is hot.It is spicy.</p>
            <img src={bi} alt="" className="food" width="150px" height="100px"/>
            <p>Rs.260</p>
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
export default Biryani;