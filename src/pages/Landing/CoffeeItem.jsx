import React, { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import style from './landing.module.scss';

function CoffeeItem({ coffee }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [priceCoefficient, setPriceCoefficient] = useState(1);

  const cofePrace = [
    { size: 'S', count: '1s', coefficient: 1 },
    { size: 'M', count: '2s', coefficient: 1.5 },
    { size: 'L', count: '3s', coefficient: 2 },
    { size: 'XL', count: '4s', coefficient: 2.5 },
  ];

  const handleOrderClick = () => {
    document.body.style = `overflow: hidden`;
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    document.body.style = ``;
    setIsModalOpen(false);
  };

  const changeCoefficient = coefficient => {
    setPriceCoefficient(coefficient);
  };

  return (
    <div className={style.item}>
      <div>
        <img src={coffee.img} alt="coffee" />
      </div>
      <div className={style.itemInfo}>
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
        <p>{coffee.price}</p>
        <button className={style.button} onClick={handleOrderClick}>
          Order Now
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>{coffee.title}</h2>
        <p>{coffee.description}</p>

        <div className={style.itemsSize}>
          {cofePrace.map(elem => (
            <button className={style.count_button} key={elem.size} onClick={() => changeCoefficient(elem.coefficient)}>
              <p className={style.size}>{elem.size}</p>
              <p className={style.count}>{elem.count}</p>
            </button>
          ))}
        </div>

        <p>Total price: {`$${+coffee.price.slice(1) * priceCoefficient}`}</p>
        <button className={style.button}>Confirm Order</button>
      </Modal>
    </div>
  );
}

export default CoffeeItem;
