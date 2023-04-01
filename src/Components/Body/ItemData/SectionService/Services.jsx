
import ServiceJson from "../../../../BBDD/services.json"

const Services = () => {
    console.log(ServiceJson);
    return (
        <div>
            {ServiceJson.map(service => (
                <div className="card mb-3" key={service.index}>
                    <div className="row g-0">
                        <h5 className="card-title">{service.title}</h5>
                        <div className="card-body">
                            <p className="card-text">{service.details}</p>
                            <img src={service.img} alt={service.title} />
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Services