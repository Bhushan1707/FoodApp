// import react from "react";
import { ToastContainer } from 'react-toastify';
import { Button,Container,Row,Col, Alert } from "reactstrap";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import './App.css';
import AddFood from './Component/AddFood';
import AllFoods from './Component/AllFoods';
import Header from './Component/Header';
import Home from './Component/Home';
import Menus from "./Component/Menus";
import Contact from "./Component/Contact";
import gallery4 from "./Component/gallery4.jpg";
import Userlogin from "./Component/Userlogin";
import Registration from "./Component/Registration";
import Veg from "./Component/Veg";
import AllCategoery from "./Component/AllCategoery";
import Burger from "./Component/Burger";
import Pizza from "./Component/Pizza";
import Biryani from "./Component/Biryani";
import IceCreams from "./Component/IceCreams";
import Payment from "./Component/Payment";
import About from "./Component/About";
import AdminLogin from "./Component/AdminLogin";
import FoodItems from "./Component/Foodtems";
import Alertmsg from "./Component/Alertmsg";
import UpdateFood from "./Component/UpdateFood";
import Privatec from "./Component/Privatec";

function App() {
  return (
    <div>
    <ToastContainer/>
     <Header/>
      <div className="my-1-gallery4">
        <img src={"https://foodbankiowa.org/app/uploads/2022/09/Meat-the-need-website-header.png"} width="100%" height="350px" />
      </div>
     <Container>
      <div className="row">
        <div className="col-4 col-md-4"><Menus/></div>
        <div className="col-8 col-md-8">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} exact/>
              <Route path="/user-login" element={<Userlogin />} exact/>
              <Route path="/admin-login" element={<AdminLogin />} exact/>
              <Route path="/add-food" element={<AddFood />} exact/>
              <Route path="/view-food" element={<AllFoods />} exact/>
              <Route path="/contact" element={<Contact />} exact/>
             
              <Route path="/allcategoery" element={<AllCategoery />} exact/>
              <Route path="/veg" element={<Veg />} exact/>
              <Route path="/burger" element={<Burger />} exact/>
              <Route path="/pizza" element={<Pizza />} exact/>
              <Route path="/biryani" element={<Biryani />} exact/>
              <Route path="/ice-creams" element={<IceCreams />} exact/>
              <Route path="/Payment" element={<Payment />} exact/>
              <Route path="/about" element={<About />} exact/>
              <Route path="/fooditems" element={<FoodItems />} exact/>
              <Route path="/alert" element={<Alertmsg />} exact/>
              <Route path="/update-course" element={<UpdateFood />} exact/> 
              <Route path="/Registration" element={<Registration />} exact/>
            </Routes>
          </Router>
        </div>
      </div>
     </Container>
 </div>   
  );
}

export default App;
