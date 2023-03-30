export const Loading = () => {
    return (
        <div className="container d-flex align-items-center justify-content-center">
            <div className="row">
                <div className="col text-center ">
                    <div className="spinner-grow text-danger d-flex justify-content-center align-content-center align-items-center" role="status">
                    <img className="" src="https://i.imgur.com/J4D1HTC.jpg" width={150} height={150} alt="photo"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}