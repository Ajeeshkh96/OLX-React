import React, { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { AuthContext } from "../../store/firebaseContext";
function Header() {
  const navigate = useNavigate();
  const auth = getAuth();
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <span onClick={() => navigate("/")}><OlxLogo></OlxLogo></span>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {user ? (
            <span>Welcome {user.displayName}</span>
          ) : (
            <span onClick={() => navigate("/login")}>login</span>
          )}
          <hr />
          {user && (
            <span
              onClick={() => {
                signOut(auth).then(() => {
                  navigate("/login");
                });
              }}
            >
              logout
            </span>
          )}
        </div>

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={() => navigate("/create")}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;