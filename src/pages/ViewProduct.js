import '../App.css'
import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";

function ViewProduct()
{
    let params = useParams() ; 
    const  [product ,  set_product] = useState([]) ;  
    useEffect(()=> {
        fetch(`http://localhost:9000/products/${params.productID}`)
        .then((res)=>res.json())
        .then((data)=> {set_product(data);}) ; 
    } , []) ; 
    return(
            <>
            <div className="card" key={params.id}>
                <img src={product.image}className="card-img-top" alt="Not found image" />
                <div className="card-body">
                    <h5 className="card-title"> {product.title}</h5>
                    <p className='card-price'>{product.price} $ </p>
                    <p className="card-text"> {product.description}</p>
                </div>
                </div>
            </>
        
    ) ;  
}

export  default  ViewProduct ; 