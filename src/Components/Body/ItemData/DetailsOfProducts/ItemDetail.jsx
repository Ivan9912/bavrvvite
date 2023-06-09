import { Images } from "../Images";
import { TreeId } from "./TreeId/TreeId";
import dataItemsJson from "../../../../BBDD/dataItems.json"
import { Error404 } from "../../Error/Error404";



export const ItemDetail = ({ items }) => {
    if (items.status === "ERROR") {
        return <Error404 />
    }

    return (
        <div className="card mb-3 pt-xl-5 w-100 containerBody">
            <div className="row g-0 d-flex flex-column align-content-center">
                <div className="cardquery col-md-8 d-flex text-center justify-content-center align-items-center">
                    <div className="card-body">
                        <h5 className="card-title">{items.title}</h5>
                        <div className="d-flex text-center justify-content-center">
                            <p className="card-text w-100 text-start">{items.slogan}</p>
                        </div>
                        <ul>
                            {
                                items.details ? items.details.map((item, index) =>
                                    <li className="text-start" key={index}>{item}</li>) : ""
                            }
                        </ul>
                        <div className="d-flex justify-content-center">
                            {
                                items.catalog ? <button onClick={() => { window.open(items.catalog, '_blank') }} className="btn mt-5">Descargar Catálogo</button> : ""
                            }
                        </div>
                    </div>
                    <div className="col-md-4 mb-5 d-flex w-50 flex-column">
                        <img src={items.img[0]} className="img-fluid rounded-start mb-3" alt={items.titulo} />
                    </div>
                </div>
            </div>
            <div className="col-md-4 d-flex w-75">
                <Images itemImg={items} />
            </div>
            <div>

                {
                    dataItemsJson.map((dataitem, index) =>
                        dataitem.subId === items.id ? <div className="text-decoration-none" key={index}><TreeId identification={dataitem} /></div> : ""
                    )
                }
            </div>
        </div>
    )
};
