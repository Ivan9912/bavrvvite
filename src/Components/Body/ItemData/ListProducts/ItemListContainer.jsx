import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import dataItemsJSON from "../../../../BBDD/dataItems.json";
import { Loading } from "../../../Loading";
import Services from "./Services";


export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams()
    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? dataItemsJSON.filter(item => item.category === id) : dataItemsJSON);
            }, 1000);
        });
        promesa.then((data) => {
            setItems(data);
            setLoading(false);
        })
    }, [id])

    const DesvioService = loading ? <Loading /> : <Services /> 
    const DesvioItemlist = loading ? <Loading /> : <ItemList items={items} />

    return (

        <div className="container">

            {dataItemsJSON.filter(item => item.category == "service") ?  DesvioItemlist : DesvioService}
             
        </div>

    )
};