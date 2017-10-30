import React from 'react';
import Content from './Content';

const  Slide = (props) => {
    return (
        <li
        key={props.itemNo}
        className={props.active ? "carousel-slides__slide active" : "carousel-slides__slide"}
        >
        {props.data.link ? <a href={props.data.link} target="_blank" className="link"></a> : null}
            <span className="img" style={{ backgroundImage: "url("+ props.data.imageUrl + ")" }}>
                {props.data.content !== undefined ? <Content data={props.data.content}/> : null}
            </span>
        </li>
    );
}

export default Slide;