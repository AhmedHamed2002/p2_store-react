import '../App.css'
import { Link } from "react-router-dom";
function Navbar()
{
    return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container ">
        <Link className="logo navbar-brand text-danger" to="/"> <h1>Logo</h1></Link>
        <button 
        className="navbar-toggler text-danger" 
        type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation ">
        <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
        </ul>
        </div>
    </div>
    </nav>
        </>
    );  
}

export default Navbar ;  