import { useHistory } from "react-router-dom";
const NotFound = () => {

    let history = useHistory();
    const handleToHome = () => {
        history.push('/')
    }
    return (
        <div className="not-found-container">
            <h5>404 NOT FOUND</h5>
            <h5>Khong Tai Duoc Du Lieu</h5>
            <button className="btn btn-primary" onClick={handleToHome}>Go to Home Page</button>
        </div>
    )
}

export default NotFound;