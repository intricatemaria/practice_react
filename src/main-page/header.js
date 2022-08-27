import React from "react";

function Header() {
  return (
    <div className="header">
      <img
        src="./main-page/img/farmer-logo.svg"
        width="44"
        height="44"
        alt="farmer"
      />
      <p>
        Фермерские продукты
      </p>   
      <button>Купить</button>   
    </div>
  )
}


export default Header;