import { Link } from "react-router-dom";

function  Sidebar()
{
    return(
        <>
            <ul className="list-unstyled">
                <li>
                    <Link  to="products"> Get all products </Link>
                </li>
                <hr></hr>
                <li>
                    <Link to="category"> Get all Categories </Link>
                </li>
            </ul>

        </>
    ) ; 
}

export default Sidebar  ;  