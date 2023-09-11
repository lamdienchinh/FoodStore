import "./Sidebar.css"
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const SidebarData = [
    {
        title: "Home",
        path: "/",
        cName: "nav-text",
    },
    {
        title: "Menu",
        path: "/menu",
        cName: "nav-text",
    },
    {
        title: "Blogs",
        path: "/",
        cName: "nav-text",
    },
    {
        title: "Pages",
        path: "/",
        cName: "nav-text",
    },
    {
        title: "About",
        path: "/",
        cName: "nav-text",
    },
    {
        title: "Shop",
        path: "/shoplist",
        cName: "nav-text",
    },
    {
        title: "Contact",
        path: "/",
        cName: "nav-text",
    },
];


function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className="relative z-[100] bg-transparent">
            <IconContext.Provider value={{ color: "undefined" }}>
                <div className="navbar flex flex-row justify-between items-center">
                    <div className="header__logo font-['Helvetica'] flex items-center justify-center">
                        <Link className="" to="/">
                            <span className="text-primary-orange text-sm" >Food</span>
                            <span className="text-white text-sm">tuck</span>
                        </Link>
                    </div>
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars className="text-[#FFF]" onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <div className={sidebar ? "menu-overlay" : ""}>
                    </div>
                    <div className="lg:w-[50%] min-[320px]:w-[70%] nav-main-menu">
                        <ul className="nav-menu-items">
                            <li className="navbar-toggle">
                                <Link to="#" className="menu-bars" onClick={showSidebar}>
                                    <AiIcons.AiOutlineClose />
                                </Link>
                            </li>
                            <div className="header__logo font-['Helvetica'] flex items-center pl-[32px]">
                                <span className="text-primary-orange text-sm" >Food</span>
                                <span className="text-white text-sm">tuck</span>
                            </div>
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="min-[320px]:w-[30%] lg:w-[50%] nav-other-menu" onClick={showSidebar}>
                    </div>
                </nav>
            </IconContext.Provider >
        </div >
    );
}

export default Sidebar;