import React from 'react';
import  Home  from './features/pages/home/Home';
import Product from './features/pages/ProductPage/Product';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from './features/shares/constantsVariable/routes.js';
import './index.scss';
import Order from './features/pages/ProductPage/producOrderPage/Order';
import Language from './features/shares/components/header/language/language';
import { useEffect } from 'react';
import { getQrToken } from './features/Api/User/getApi';
import { useDispatch } from 'react-redux';






function App() {
  const dispatch = useDispatch()
  useEffect(() => {dispatch(getQrToken())},[])
    
  return (
    <div className="App">
      <Switch>
        <Route path={ROUTES.HOME} component={Home} exact />
        <Route path={ROUTES.PRODUCT} component={Product} />
        <Route path={ROUTES.ORDER} component={Order} />
      </Switch>
      <Language/>
    </div>
  );
}

export default App;