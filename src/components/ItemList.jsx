import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
    
    const primeraLetraMayuscula = `${items[0].category[0].toUpperCase()}${items[0].category.slice(1)}` 
    return (
        <div>
            <div>
                <p className="paraphStyle"><b>{primeraLetraMayuscula}</b></p>
            </div>
            <div className="row mx-5 d-flex align-items-baseline">
                {
                    items.map((item, index) =>
                        <div className="col my-1" key={index}>
                            <Item items={item} />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ItemList;
