import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Alert } from "reactstrap";

const Userlogin = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Login || Food Delivery";
    }, []);
    const loginBtn =  () => {
        console.log(email, password);
        let result =  fetch("http://localhost:3001/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result =  result.json();
        console.log(result)
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result))
        navigate("/allcategoery")
    }

    function handleClick() {
        navigate("/Registration")
    }
    return (
        <>
            <h2>User Login</h2>
            <form >
                <label htmlFor="email">Username</label>
                <Input
                    type="text"
                    placeholder="Enter email"
                    name="email"
                    id="email"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />

                <label htmlFor="Password">Password</label>
                <Input
                    type="text"
                    placeholder="Enter Passsword"
                    name="password"
                    id="Password"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <Button type="submit" color="success" onClick={loginBtn}>Login</Button>{' '}
                <Button onClick={handleClick}>Registration</Button>
            </form>
        </>
    );
};



export default Userlogin;