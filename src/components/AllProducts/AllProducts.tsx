import React,{useEffect} from "react";


import CenterText from "../shared-components/CenterText/CenterText";
import {getAllProducts} from '../../store/Product/fetchProducts';
import {useAppDispatch} from '../../hooks/index';

export const AllProducts=()=>{

    const dispatch = useAppDispatch();

    useEffect(()=>{

       dispatch(getAllProducts());

    },[])

    return(
        <div className="AllProducts">
            <CenterText text='All Products' />
        </div>
    )

}


export default AllProducts