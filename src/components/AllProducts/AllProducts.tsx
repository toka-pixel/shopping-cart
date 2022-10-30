import React,{useEffect} from "react";
import { getProducts } from "../../services/Product";
import CenterText from "../shared-components/CenterText/CenterText";
export const AllProducts=()=>{

    useEffect(()=>{
        getProducts().then((res:any)=>console.log(res)).catch((e)=>console.log(e))
    },[])

    return(
        <div className="AllProducts">
            <CenterText text='All Products' />
        </div>
    )

}

export default AllProducts