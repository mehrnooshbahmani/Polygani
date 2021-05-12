import React from "react";
import '../App.css';
function Header() {
  return (
    <div className="header">
      <header class="py-1 bg-light">
       <div  class="header-container">
            <div class="header-left"> 
                <figure >
                    <img src="../icons/menu.png"></img>
                </figure>
                <span class='header-title'>Shop</span>
            </div>
            <div class="header-right">
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
      </header>
    </div>
  );
}

export default Header;