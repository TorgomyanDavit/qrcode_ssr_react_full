import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import "../../../assets/styles/header/header.scss"
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constantsVariable/routes';
import { openLanguagePopUp, openSpecFood } from '../../globalSlice/globalSlice';
import { useLocation } from 'react-router-dom'




export default function Header(props) {
  const {siteName,url} = useSelector((state) => state.header);
  const {openSpecFoodKey,} = useSelector((state) => state.globalSlice);
  const {titleLogoUrl} = useSelector((state) => state.home);

  const dispatch = useDispatch()
  const location = useLocation();
  const path = location.pathname === "/order" || false
  const icon = location.pathname === "/" || false

  return (
    <header className='P_header'>
      {
        openSpecFoodKey ? 
        <button onClick={() => {dispatch(openSpecFood({key:null}))}} className='P_header-Close-Button'>
            {icon ? <i className='icon-ic_close'></i> : <i className='icon-ic_back'></i>}
        </button> :
        path ? <Link to={ROUTES.PRODUCT } className='P_header-Close-Button'><i className='icon-ic_back'></i></Link> :
        <Link to={ROUTES.HOME } className='P_header-Close-Button'> {icon ? <i className='icon-ic_close'></i> : <i className='icon-ic_back'></i>}</Link> 
      }
      <img src={titleLogoUrl} alt='logo' title='Logo'/>
      <button onClick={() => dispatch(openLanguagePopUp())}><i className='icon-Ic_settings_48pxf'></i></button>
    </header>
  );
}