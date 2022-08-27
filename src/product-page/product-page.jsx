import React from "react";
import Price from "./price";
import Title from "./title";
import Image from "./image";

function ProductPage({product}) {
  return (
    <section>
      <Title />
      <div style={{ display: "grid" }}>
        <Image />
        <div>
          <button type="button">Описание</button>
          <button type="button">Характеристики</button>
          <button type="button">Свойства</button>
          <p>
          Филе бедра без кожи и кости. Птица содержится в свободных птичниках, выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса. Филейная часть бедра обладает насыщенным вкусом и мясным ароматом.
          </p>
          <button type="button">
            <Price />
          </button>
          </div>
        </div>

    </section>
  );
}

export default ProductPage;