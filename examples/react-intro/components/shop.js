import React from "react";

let items = [
    {
        name: "Sleep",
        price: "Priceless"
    },
    {
        name: "Antman",
        price: "priceless"
    },
    {
        name: "RPGs",
        price: "$1000"
    }
]

class Shop extends React.Component {
    render () {
        let shopItems = items.map(item => (
            <div>
                <h1>{item.name}</h1>
                <h3>{item.price}</h3>
            </div>
        ));
        return (
            <div>
                <p>These are the items in our shop</p>
                <ul>
                    {shopItems}
                </ul>
            </div>
        );
    }
}

export default Shop;