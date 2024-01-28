import React from "react";

const Header = () => {
    const nav_toggle = () => {
        const nav = document.querySelector(".nav");
       nav.style.transform = "translateY(0)"
    }
    return (
        <div className="flex header">
            <div className="left_nav">
                <div className="logo"></div>
            </div>
            <div className="nav" >
                <ul className="grid">
                    <li>
                        <a href=""><i className="ri-home-5-line"></i> <span>Home</span> </a>
                    </li>
                    <li>
                        <a href=""><i className="ri-store-2-line"></i> <span>Momos</span> </a>
                    </li>
                    <li>
                        <a href=""> <i className="ri-information-line"></i> <span>About</span></a>
                    </li>
                    <li>
                        <a href=""> <i className="ri-customer-service-line"></i> <span>Contact</span></a>
                    </li>
                </ul>
            </div>
            <div className="right_nav">
                <ul className="flex">
                    <li>
                        <a href=""><i className="ri-shopping-cart-line"></i></a>
                    </li>
                    <li>
                        <a href=""><i className="ri-user-3-line"></i></a>
                    </li>
                    {/* <li>
                        <button onClick={nav_toggle}><i className="ri-menu-4-line"></i></button>
                    </li> */}
                </ul>
            </div>
        </div>
    )
};

export default Header;