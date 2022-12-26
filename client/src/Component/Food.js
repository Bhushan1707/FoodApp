import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardSubtitle, Container, CardText,CardTitle } from "reactstrap";
import base_url from "../api/bootapi";
const Food=({food,update})=>{
    const deleteFood=(id)=>{
        axios.delete(`${base_url}/product/${id}`).then(
            (response)=>{
                toast.success("Product deleted successfully");
                update(id);
            },
            (error)=>{
                toast.error("Product not deleted");
            }
        )
    }
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
                toast.success("Product deleted successfully",{position:"bottom-center"});
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong",{position:"bottom-center"});
            }
        );
    };
    return (
        <Card className="text-center">
            <CardBody>
               <h4> <CardTitle className="font-weight-bold">{food.categoery}</CardTitle></h4>
                <h5><CardSubtitle>{food.title}</CardSubtitle></h5>
                <CardText>{food.description}</CardText>
               <h5> <CardText>{food.price}</CardText></h5>
                <Container className="text-center">
                    
                    <Button color="danger" onClick={()=>{
                        deleteFood(food.id);

                    }} >Delete</Button>{' '}
                    <Button color="warning ml-5" href="/update-course" >Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
};
export default Food;