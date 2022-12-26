import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import base_url from "../api/bootapi";
import React,{ Fragment,useEffect,useState } from "react";
import { Button,Container,Form,FormGroup, Input } from "reactstrap";


const AddFood=()=>{
    useEffect(()=>{
        document.title="ADD Food || Food Delivery";
    },[]);

    const [food,setfood]=useState({});
    //form handler function
    const handleForm=(e)=>{
        console.log(food);
        postDatatoServer(food);
        e.preventDefault();
    }
    //creating function to post data on server
    const postDatatoServer=(data)=>{
        axios.post(`${base_url}/product`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Product added successfully",{position:"bottom-center"});
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong",{position:"bottom-center"});
            }
        );
    };
    return(
        <Fragment>
            <h2 className="text-center my-3">Fill Details Of Food-Items</h2>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="FoodId">Food Id</label>
                    <Input
                        type="text"
                        placeholder="Enter FoodID here"
                        name="FoodId"
                        Id="FoodId"
                        onChange={(e)=>{
                            setfood({...food,id:e.target.value});
                        }}
                        />
                         </FormGroup>
                         <FormGroup>
                    <label for="categoery">Food Categoery</label>
                    <Input
                        type="text"
                        placeholder="Enter Food Categoery here"
                        name="categoery"
                        Id="categoery"
                        onChange={(e)=>{
                            setfood({...food,categoery:e.target.value});
                        }}
                        />
                        
                </FormGroup>
                

               
                <FormGroup>
                    <label for="title">Food Name</label>
                    <Input
                        type="text"
                        placeholder="Enter Food Name here"
                        name="title"
                        Id="title"
                        onChange={(e)=>{
                            setfood({...food,title:e.target.value});
                        }}
                        />
                        
                </FormGroup>
                <FormGroup>
                    <label for="description">Description</label>
                    <Input
                        type="text"
                        placeholder="Enter description here"
                        name="description"
                        Id="description"
                        style={{height:100}}
                        onChange={(e)=>{
                            setfood({...food,description:e.target.value});
                        }}
                        />
                        
                </FormGroup>
                
                
                    <FormGroup>
                    <label for="foodprice">Price</label>
                    <Input
                        type="text"
                        placeholder="Enter Food Price here"
                        name="foodprice"
                        Id="Foodprice"
                        onChange={(e)=>{
                            setfood({...food,price:e.target.value});
                      
                          }}
                        />

                         </FormGroup>  
               
                        
        
                <Container className="text-center">
                    <Button type="submit" color="success">Add Food-Items</Button>{' '}
                    <Button type="reset" color="warning ml-2">clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
};
export default AddFood;