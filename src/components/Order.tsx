import React, { useState } from 'react';

const Order: React.FC = () => {

    const [totalPrice, setTotalPrice] = useState(0.00)
    const [order, setOrder] = useState([])

    return (
        <section className='recap'>
            <div className='recap__header'>
                <h3 className='title--order'>Votre commande</h3>
                <h4 className='title--price'>Total: {totalPrice}€</h4>
            </div>
            <div className='recap__order'>
                {order.length === 0 ? <p className='text-big'>Votre commande est vide.</p> : <p>J'ai plein de chose</p>}
            </div>
            <ul className='recap__validation'>
                <li><button className='actif btn btn--annulation'>Abandonner la commande</button></li>
                <li><button className='btn actif'>Valider la commande</button></li>
            </ul>
        </section>
    );
};

export default Order;