import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import './FoodItem.css';

const FoodItem = ({ id, name, price, description, image, index }) => {
    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);
    const navigate = useNavigate();

    const handleBuyNow = () => {
        addToCart(id);
        navigate('/order');
    };

    return (
        <div className='food-item' data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="food-item-img-container">
                <img className='food-item-image' src={url + "/images/" + image} alt={name} />
                {!cartItems[id]
                    ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                    : <div className='food-item-counter'>
                        <div className='food-item-removed'>
                            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        </div>
                        <p>{cartItems[id]}</p>
                        <div className='food-item-added'>
                            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                        </div>
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{description}</p>
                <div className="food-item-price-buy">
                    <p className='food-item-price'>₹{price}</p>
                    <button className='buy-now-button' onClick={handleBuyNow}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;