import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getAllAsync,addAsync,selectProducts,delAsync,updAsync, } from './CRUDSlice'
import Alert from 'react-bootstrap/Alert';
const CRUD = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts);
    const [desc, setdesc] = useState("")
    const [price, setprice] = useState(0)
    useEffect(() => {
        dispatch(getAllAsync())
    }, [])
    
    return (
        <div>
           <h1> CRUD items </h1>
            Description: <input onChange={(e)=>setdesc(e.target.value)}/>            Price: <input onChange={(e)=>setprice(+e.target.value)}/>
            <button onClick={() => dispatch(addAsync({desc,price}))}>add item</button> 
            <h2>Number of items:  {products.length}</h2>
            
            <hr/>
            {products.map((prod,ind) =>  <div key={ind}>Description of item: {prod.desc},  Price: {prod.price} ,  ID: {prod.id} 
            <button onClick={() => dispatch(delAsync(prod.id || 0))}>Delete item </button>
            <button onClick={() => dispatch(updAsync({id:(prod.id || 0),desc,price}))}>Updadte item </button>
              </div> )}
            
        </div>
    )
}

export default CRUD