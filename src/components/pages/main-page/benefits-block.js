import React from "react";

function BenefitsBlock() {
  return (
    <section className="benefits-block">
      <h2>
        Почему фермерские продукты лучше?
      </h2>   
      <ul>
        <li className="benefits-block__item">
        <h4>
          Еда намного вкуснее
        </h4>
        <p>
          Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники
        </p>
        </li>
        <li className="benefits-block__item">
          <h4>
            Натуральные продукты
          </h4>
          <p>
            Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.
          </p>
        </li>
        <li className="benefits-block__item">
          <h4>
            Просроченные продукты
          </h4>
          <p>
            Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара
          </p>
        </li>
        <li className="benefits-block__item">
          <h4>
            Некачественное мясо
          </h4>
          <p>
          Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов
          </p>
        </li>      
      </ul>

    </section>

  )
}


export default BenefitsBlock;