import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import SingleItem from './components/singleItem';
import UploadNewAd from './components/uploadNewAd';

ReactDOM.render(
    <>
   {/* <React.StrictMode> */}
    <Router>
        <Switch>
        <Route path="/"  exact component={Home}/>
        <Route path="/shop"  exact component={Shop}/>
        <Route path="/shop/item/"  component={SingleItem}/>
        <Route path="/post"  exact component={UploadNewAd}/>
        </Switch>
    </Router>
    {/* </React.StrictMode> */}
    </>
,
document.getElementById('root'));