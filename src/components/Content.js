import React from 'react';
import RightArrow from 'react-icons/lib/fa/chevron-right';

const Content = (props) => {
    return (
        <div className="carousel-content">
            <div className="carousel-content__title">{props.data.title}</div>
            <div className="carousel-content__sub">
                <span>{props.data.desc}</span>
                <a href="#">
                <span className="currency">{props.data.currency}</span>
                <span className="price">{props.data.price}</span>
                    <RightArrow size={14} color="#00a1de" />
                </a>
            </div>

            <div className="carousel-content__options">
                <ul>
                {props.data.options.map((option, index) => <li key={index}>{option}</li>)}
                </ul>
            </div>
        </div>
    ); 
}

export default Content;