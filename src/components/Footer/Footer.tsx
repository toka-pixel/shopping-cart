import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import './footer.scss'

const Footer = () => {

  const { isDarK } = useAppSelector((state) => state.theme);

  return (
    <div className={`footer ${isDarK ? 'headerFooterDark' : 'headerFooterLight'}`}>
     @  2022  all rights reserved
    
    </div>
  );
};

export default Footer;
