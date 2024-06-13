import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2' ; 
function  Products()
{
    const  [products ,  set_products] = useState([]) ; 
    const getAllProduct = () => {
        fetch('http://localhost:9000/products').then((res)=>res.json()).then((data)=> set_products(data)) ; 
    } ; 
    useEffect(()=> {
        getAllProduct() ;  
    } , []) ;
    
    const  delete_product = (product) =>{

        Swal.fire({
            title : `Are You Sure To Delete ${product.title} ?` , 
            showCancelButton: true 
        }).then((data) =>{
            if(data.isConfirmed)
            {
                fetch(`http://localhost:9000/products/${product.id}`,{method : "DELETE"}).then((res)=>res.json()).then(()=>{getAllProduct() ;} ) ; 
                //  window.location.reload(true);
                Swal.fire({
                    title: "Done :)",
                    text: "You clicked the button!",
                    icon: "success"
                }); 
            }
        })      
    };

    return(
        <>
            <Link to= {`/products/add`}  className="btn btn-success mt-5 mb-3"> Add Now Product </Link>
            <table className="table table-striped  mx-5 mt-5">
                <thead  className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody >
                    {products.map((p) => {
                        return(
                            <tr   key={p.id} >
                                <td className="text-danger">{p.id}</td>
                                <td className="w-50">{p.title}</td>
                                <td>{p.price} </td>
                                <td> 
                                    <button className="btn btn-danger btn-sm mx-2" onClick={()=>{
                                        delete_product(p) ; 
                                    }}> Delete </button>
                                    <Link to ={`/products/${p.id}`} className="btn btn-info btn-sm  mx-2"> View </Link>
                                </td>
                            </tr>
                        ) ; 
                    })}
                </tbody>
            </table>
        </>
    ) ; 
}

export default Products  ;  