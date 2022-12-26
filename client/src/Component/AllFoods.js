import axios from "axios";
import  { ToastContainer, toast } from 'react-toastify';
import base_url from "../api/bootapi";
import React, { useEffect, useState } from "react"
import Food from "./Food";
const AllFoods =() => {

    useEffect(() => {
        document.title="All Foods || Food Delivery App";
    },[]);
      
    const getAllFoodsFromServer=()=>{
        axios.get(`${base_url}/product`).then(
            (response)=>{
                console.log(response.data);
                toast.success("Products has been loaded",{position:"bottom-center"});
                setfoods(response.data);
            },
            (error)=>{
                console.log("Error");
                toast.error("Something went Wrong",{position:"bottom-center"});
            }
        );
    };

    useEffect(()=>{
        getAllFoodsFromServer();

    },[]);
    
    const [foods, setfoods]=useState([]);
    const updateFood=(id)=>{
        setfoods(foods.filter((c)=>c.id!==id));
    };
    //const[foods,setfoods]=useState([
     //   {item:101,title:"Idli Dosa",price:200},
     //   {item:102,title:"Chicken Whopper Burger",price:200},
       // {item:103,title:"Royal Chicken Biryani",price:120},
    //])

    return(
        <div>
            <h2>Food-Items</h2>
            <p>List of food-items as follows</p>
            {foods.length > 0
            ? foods.map((item) => <Food key={item.id} food={item} update={updateFood} />)
            :"No Foods"};
        </div>
    );
};
export default AllFoods;