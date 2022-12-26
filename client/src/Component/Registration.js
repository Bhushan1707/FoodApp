import React, { Fragment, useEffect, useState } from "react";
import { Button,Input } from "reactstrap";
const Registration = () => {

    const [firstname, setFirstname] = useState(" ");
    const [lastname, setLastname] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [mobileno, setMobileNo] = useState(" ");
    const [password, setPassword] = useState(" ");
    const collectData = async() => {
        console.log(firstname, lastname, email, mobileno, password);
          let result= await fetch("http://localhost:3001/register",{
             method:'post',
              body:JSON.stringify({firstname,lastname,email,mobileno,password}),
              headers:{
                  'Content-Type':'application/json'
              }
          });
          result=await result.json();
          console.warn(result);
          localStorage.setItem("user",JSON.stringify(result));
          alert("register successfull")
    }
    useEffect(() => {
        document.title = "Registration || Food Delivery";
    }, []);
    return (
        <>
            <h2>Registration</h2>
            <form>
                <label htmlFor="Firstname">First Name</label>
                <Input
                    type="text"
                    placeholder="Enter First Name"
                    name="firstname"
                    id="FirstName"
                    onChange={(e) => {
                        setFirstname(e.target.value)
                    }}
                />
                <label htmlFor="Lastname">Last Name</label>
                <Input
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastname"
                    id="LastName"
                    onChange={(e) => {
                        setLastname(e.target.value)
                    }}
                />
                <label htmlFor="Email">Email</label>
                <Input
                    type="text"
                    placeholder="Email Address"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <label htmlFor="Mobileno">Mobile No</label>
                <Input
                    type="text"
                    placeholder="Enter Mobile No"
                    onChange={(e) => {
                        setMobileNo(e.target.value)
                    }}
                />
                <label htmlFor="Password">Password</label>
                <Input
                    type="text"
                    placeholder="Enter Passsword"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <Button onClick={collectData} color="success" >Register</Button>
            </form>
        </>
    );
};



export default Registration;