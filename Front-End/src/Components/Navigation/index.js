import React from "react";
// import Router from "../Routing";

function Nav() {
    return (
      <div className="nav-root">
        <div className="nav-container">
            <div className="cafe-thrifty-logo">
                <a href="/home">
                    <img className="logo" alt="Cafe Thrifty Logo"></img>
                </a>
            </div>
            <div className="nav-shop">
                <ul className="nav-goods">
                    <li>
                        <a href="/vintage">vintage</a>
                    </li>
                    <li>
                        <a href="/pottery">pottery</a>
                    </li>
                    <li>
                        <a href="/zerowaste">zero-waste</a>
                    </li>
                    <li>
                        <a href="/dwelling">dwelling</a>
                    </li>
                </ul>
            </div>
            <div className="nav-user">
                <ul className="nav-cart">
                    <li>
                        <a href="/search">search</a>
                    </li>
                    <li>
                        <a href="/cart">cart</a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    )
};

export default Nav;