import React from "react";
import '../App.css';
function Header(props) {
  return (
    <header className={`header ${props.className}`}>
      <div className="py-1 bg-light">
       <div  className="header-container">
            <div className="header-left"> 
                <figure >
                    <img src="../icons/menu.png"></img>
                </figure>
                <span className='header-title'>Shop</span>
            </div>
            <div className="header-right">
                <figure id='share'>
                    <img src='../icons/share.png'></img>
                </figure>
                <figure>
                    <img src='../icons/search.png'></img>
                </figure>
                <figure>
                    <img src='../icons/userList.png'></img>
                </figure>
            </div>
        </div>
      </div>
    </header>
  );
}

export default Header;