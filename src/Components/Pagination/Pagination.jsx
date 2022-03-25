import React, { useEffect, useState } from 'react';
import Product from '../Product';

const Pagination = () => {
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    let [page, setPage] = useState(0);
    const size = 10;
    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
            setProducts(data.products);
                const count = data.count;
                console.log(count);
                const totalPage = Math.ceil(count / size);
                setPageCount(totalPage);
    })

    },[page])
    return (
        <div>
            {
                products.map(product =><Product product={product}></Product>
                ) 
            }
            <div>
             {
        [...Array(pageCount).keys()].map(number =>
                <button id='pagination-btn' onClick={()=>setPage(number)} className={number===page? 'selected': ''}>{number+1} </button>)
                }
         </div>
        </div>
    );
};

export default Pagination;