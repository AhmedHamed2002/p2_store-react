import'../App.css' ;  
import { Link } from 'react-router-dom';
import { useState , useEffect } from "react";
function Categories()
{
    const  [products ,  set_products] = useState([]) ;  
    useEffect(()=> {
        fetch("http://localhost:9000/products")
        .then((res)=>res.json())
        .then((data)=> {set_products(data);}) ; 
    } , []) ; 
    return(
        <>
            <div className="row">
                {products.map((p)=>{
                    return(
                        <>
                            <div className="card-control col-4 mt-5">
                            <div key={p.id} className="card">
                            <img src={p.image} className="card-img-top" alt="Not found image" />
                            <div className="card-body">
                                <h5 className="card-title">{p.title}</h5>
                                <p className="card-text">{p.description}</p>
                                <p className="card-price">{p.price} $</p>
                                <Link to ={`/products/${p.id}`} className="btn btn-dark btn-sm  mx-2"> View </Link>
                            </div>
                            </div>
                        </div>
                        </>
                    ) ; 
                })}
            </div>
        </>
    ); 
}

export  default  Categories  ; 