import React from 'react';
import Header from './Header';
import Header2 from './Header2';
import Banner from './Banner';
import SliderAd from './SliderAds';
import {Ads} from './ads';
import Ourad from './OlxAd';
import Footer from './Footer';




function Home(){
  
     
    return(
        <>
        <Header/>
        <Header2/>
        <Banner/>
        <SliderAd/> 
        <Ads/> 
        <Ourad/>
        <Footer/>
        </>
    )
}
export default Home;