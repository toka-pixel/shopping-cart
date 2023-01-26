import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/index';
import './CenterText.scss';

type IProps={
    text:string
}

const CenterText=(props:IProps)=>{

    const {text}=props;

    const { isDarK } = useAppSelector((state) => state.theme);

    return(
        <div className='centerText'>
         <p className={`text ${isDarK  ? 'dark' :'light'}`}>{text}</p>
         <p className='line'></p>
        </div>
    )
}

export default CenterText