import React from "react";
import icon from "../../assets/icon.png"
import cart from "../../assets/cart-minus.svg"
import acount from "../../assets/account-circle.svg"
import bars from "../../assets/Group 1.svg"
import { useNavigate } from "react-router-dom";

function Navbar(){
    
    const navigate = useNavigate();

    const goToShop = () => {
        navigate('/shop');
    }

    const goToHome = () => {
        navigate('/');
    }

    return(
        <div className="navbar">
            <div className="logo">
                <img src={icon} alt="" className="icon"/>
                <p className="tituloHome">AROME</p>
            </div>
            <div className="menu">
                <p className="textoHome" href="inicial.jsx" onClick={goToHome}>HOME</p>
                <ap className="textoHome" href="" onClick={goToShop}>SHOP</ap>
                <img src={cart} alt="" />
                <img src={acount} alt="" />
                <img src={bars} alt="" />
            </div>
        </div>
    )
}

export default Navbar