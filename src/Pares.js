import React from "react";
import AddToCart from "./AddToCart";

function Pares(props) {
    const item = {
        name: props.name,
        description: props.description,
        price: props.price,
        location: props.location,
        serving: props.serving
    };

    return (
        <div className="pares-card">
            <h1>Pares Name: {props.name}</h1>
            <h3>Description: {props.description}</h3>
            <h3>Price: {props.price}</h3>
            <h3>Location: {props.location}</h3>
            <h3>Serving: {props.serving} people</h3>
            <AddToCart item={item} addToCart={props.addToCart} />
        </div>
    );
}

export default Pares;
