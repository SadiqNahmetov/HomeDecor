import React,{useState, useEffect} from 'react';
import './footer.scss';
import FooterService from '../../APIs/services/FooterService';


const Footer = () => {

    const [footer, setFooter] = React.useState([]);

  const getAllFooter = async ()=>{
    setFooter(await FooterService.GetAll());
  }

  useEffect(()=>{
    getAllFooter();
    },[])
    return (
        <div className='container'>
            <div className="footer">
                <div className="footer__left">
                    <p className="footer__left--title">HomeDecor</p>
                    <p className="footer__left--copyright">©2022 All Right Reserved. Developed by Webcoder Agency</p>
                </div>
                <div className="footer__right">
                    <p className="footer__right--desc">{footer.description}</p>
                    <p className="footer__right--phone">{footer.phone}</p>
                    <p className="footer__right--email">{footer.email}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
