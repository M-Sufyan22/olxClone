import React,{useState,useEffect} from 'react';
import '../css/ads.css';
import{Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Navigation,Pagination} from 'swiper';
// import 'swiper/swiper.css';
import 'swiper/swiper-bundle.css';
import firebase from '../config/firebase';


SwiperCore.use([Navigation,Pagination]);

function SliderAd(){

    const [allitems, setallitems]  = useState([]);
    useEffect(function(){
        getdata();
        },[]);
        
    function getdata(){
        let dataList = [];
        firebase.database().ref('All_Ads').on('value',function(snapshot){ 
            snapshot.forEach(snap => {
            dataList.push(snap.val());
            }); 
            setallitems(dataList)
        });
    };

    function gotop(){
         window.scrollTo(0,0);
    }
    
    return(
   
        <section id="ad_sec">
            {allitems.length  >= 6 ? 
        <div className="slidercontainer">
            <div className="slidertop">
                <span>Browse your Favourite &amp; Searched</span>
                <button type="button"className="sliderViewmore">
                    <Link to="/shop">View more</Link>
                </button>
            </div> 
        <Swiper
            spaceBetween={0}
            slidesPerView={4}
            navigation
        >
          
        {allitems !== [] ? allitems.map((items,i) =>
        <SwiperSlide  key={i}>
           <div className="adCard">
        <label htmlFor="Featured" className="featureLabel">Featured</label>
        <span className="favad">
            <button  type="button" id="favItem"  title="Favourite">
                <svg width="24px" height="24px" viewBox="0 0 1024 1024" fill="#002f34">
                    <path d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"></path>
                </svg>
            </button>
        </span>

        <Link onClick={gotop} to={{pathname: `/shop/item/${items.newAd.key}`}}>
        <img src={items.newAd.img} alt={items.newAd.title}/>
        <div className="adBottom featureborder" >
            <div className="adDetails ">
        <span className="adPrice">{items.newAd.price}</span>
        <span className="adTitle">{items.newAd.title}</span>
                <span className="adLocat">{items.newAd.state} <span className="adDate">{items.newAd.postdate}</span></span>
            </div>
        </div>
    </Link>  
    </div>
        </SwiperSlide>): <h3>No Items Found! Some May be Some Errors occurred</h3>}
        </Swiper>
        </div>
        : null}
        </section>
    );
};
export default SliderAd;