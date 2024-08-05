import React from 'react'
import './Card.scss';
import { Link } from 'react-router-dom';

export default function Card({ item }) {
    return (
        <div className='card'>
            <Link to={`/${item.id}`} className='imagecontainer'>
                <img src={item.images[0]} alt="" />
            </Link>
            <div className="textcontainer">
                <h2 className='title'>
                    <Link to={`/${item.id}`}>{item.title}</Link>
                </h2>
                <p className='address'>
                    <img src="/pin.png" alt="" />
                    <span>{item.address}</span>
                </p>
                <p className='price'>$ {item.price}</p>
                <div className="bottom">
                    <div className="features">
                        <div className="feature">
                            <img src="/bed.png" alt="" />
                            <span>{item.bedroom} bedrooms</span>
                        </div>
                        <div className="feature">
                            <img src="/bath.png" alt="" />
                            <span>{item.bathroom} bathrooms</span>
                        </div>
                    </div>
                    <div className="icons">
                        <div className="icon">
                            <img src="/save.png" alt="" />
                        </div>
                        <div className="icon">
                            <img src="/chat.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
