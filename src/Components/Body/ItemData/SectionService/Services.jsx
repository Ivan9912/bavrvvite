
import ServiceJson from "../../../../BBDD/services.json"

const Services = () => {
    console.log(ServiceJson);
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <h5 className="card-title"> {ServiceJson.img} </h5>
            </div>
        </div>

    )
}

