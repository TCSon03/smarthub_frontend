import React from "react";
import { Link } from "react-router-dom";

const HeaderClient = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default HeaderClient;
