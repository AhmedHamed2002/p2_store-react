import  '../App.css' ;  
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProducts()
{
    const [title , setTitle] = useState("") ; 
    const [description ,setDescription] =useState("") ; 
    const [price , setPrice] = useState(0) ; 
    let  navigate  = useNavigate() ;  

    const  formSubmit = (e) =>  {
        e.preventDefault() ; 
        fetch("http://localhost:9000/products",
        {
            method : "POST", 
            headers: {
                "Content-Type" : "Application/json",
            },
            body : JSON.stringify({
                title,description , price 
            })
        }).then((res) => res.json()).then((data) => {navigate('/products') ; })
    }; 

    return(
        <>
            <h1 className="mt-5 text-danger"> Add Product </h1>
            <form onSubmit={formSubmit}>
                <div className="mb-3 mt-5">
                    <label htmlFor="productTitle" className="form-label h3 mb-5">Title</label>
                    <input type="text" className="form-control" id="productTitle"
                        placeholder="product title" aria-describedby="product title"
                        onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="mb-3 mt-5">
                    <label htmlFor="productDescription" className="form-label h3 mb-5">description</label>
                    <input type="text" className="form-control" id="productDescription"
                        placeholder="product title" aria-describedby="product description"
                        onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className="mb-3 mt-5">
                    <label htmlFor="productPrice" className="form-label h3 mb-5">Price</label>
                    <input type="number" className="form-control" id="productPrice" 
                        placeholder="product price" aria-describedby="product title"
                        onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-danger">Add Product </button>
            </form>
        </>
    ) ; 
}

export  default  AddProducts ;  