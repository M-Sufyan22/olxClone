import React,{useState,useEffect} from 'react';
import '../css/ads.css';
import {Link } from 'react-router-dom';
import firebase from '../config/firebase';

function AddItems(props){

    return(
    <>
    <div id={props.plink} className="adCard"  onClick={props.gotop} id={props.id}>
        <label htmlFor="Featured" className="featureLabel">Featured</label>
        <span className="favad">
            <button  type="button" id="favItem"  title="Favourite">
                <svg width="24px" height="24px" viewBox="0 0 1024 1024" fill="#002f34">
                    <path d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"></path>
                </svg>
            </button>
        </span>

    <Link to={{pathname: `/shop/item/${props.plink}` }}>
        <img  src={props.img} alt={props.title}/>
        <div className="adBottom featureborder" >
            <div className="adDetails ">
        <span className="adPrice">{props.price}</span>
        <span className="adTitle">{props.title}</span>
            <span className="adLocat">{props.state} <span className="adDate">{props.postdate}</span></span>
            </div>
        </div>
    </Link>  
    </div>
    </>
    );
}



function Ads(){

    const [products, setProducts]  = useState([]);
    useEffect(function(){
        getdata();
        },[]);

        function gotop(){
            window.scrollTo(0,0);
        }
        
    function getdata(){
        let dataList = [];
        firebase.database().ref('All_Ads').on('value',function(snapshot){ 
            snapshot.forEach(snap => {
            dataList.push(snap.val());
            }); 
            setProducts(dataList)
        });
    };
    return(
        <>
        <section id="ad_sec">
            <div className="adcontainer">
            {products.length ===0 ? <h3>Loading...</h3> :products.map((items,i)=>    
               <AddItems gotop={gotop}  key={i} plink={items.newAd.key} state={items.newAd.state}
               title={items.newAd.title} price={items.newAd.price} img={items.newAd.img} postdate={items.newAd.postdate}
               />
            )}  
            </div>
        </section>
    
    </>
    );
};


export {Ads,AddItems};