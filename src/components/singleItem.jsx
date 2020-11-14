import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import firebase from '../config/firebase';
import Header from './Header';
import Header2 from './Header2';
import Footer from './Footer';
import '../css/singlePage.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Navigation,Pagination} from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation,Pagination]);


function SingleItem(props){

    const [productDetail, setproductDetail]  = useState([]);
   
    useEffect(()=>{
        let getid = props.location.pathname.split("/shop/item/").pop();
        getsingleAd(getid);
    },[]);

    function getsingleAd (e){

        firebase.database().ref('All_Ads').on('value',function(data){
            if(data.val() !== null){
            let a = data.val();
            let key = Object.keys(a);
            key.forEach(s=>{
                if(s === e){
                    getp(e)
                }
            }) 
        }else{
            alert("No Ads Posted Yet!")
        }
        });
    }

    function getp(key){
    firebase.database().ref('All_Ads').on('value',function(snapshot){ 
        snapshot.forEach(snap => {
            if(snap.val().newAd.key ===key){
                setproductDetail(snap.val())
            }
        }); 
     
    });
    }
    
    function Showrelateditem  (l){
    getsingleAd(l)

    }

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

    var d = new Date();
    var month = [];
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    var n = month[d.getMonth()];
    var todayDate = d.getDate();
    var currentYear = d.getFullYear();
    var postdate=todayDate +" "+ n +" "+currentYear;
    const getYesterday = new Date(d).getDate()-1;
    var yesterDayDate = getYesterday + " " + n +" " + currentYear;

    return(
        <>
        
       <Header/>
       <Header2/>
       {productDetail.newAd ?<>
        <div className="">
            <div className="my_row">
                <br/><br/><br/>
                <div className="breadcumbs_con">
                <ol>
                    <li><Link to="/">Home</Link><span>/</span></li>
                    <li><Link to="/shop">Shop</Link><span>/</span></li>
                    {productDetail.newAd ? <li><Link to={{pathname: `/shop/item/${productDetail.newAd.key}`}}>{productDetail.newAd.title}</Link><span>/</span></li>:"Loading..."}
                </ol>
                </div><br/><br/>
                <div className="single_page_item_cont">
                    
                    <div className="signleMain">
                        <div className="signleleft">
                                <div className="item_slider_container">
                                 {/* <Swiper spaceBetween={0} slidesPerView={1} navigation> */}
                                 <img src={productDetail.newAd.img}  alt="dsfsdf"/>
                                {/* </Swiper> */}
                                </div>
                                <div className="details_about_item">
                                        <h3>Details</h3>
                                        <div className="itemdetailtop">
                                        <div className="itemmake"><span>Make</span><span>{productDetail.newAd.brand}</span></div>
                                        <div className="itemmake"><span>Condition</span><span>{productDetail.newAd.condition}</span></div>
                                        </div>
                                        <h3>Description</h3>
                                        <p className="item_descrip">{productDetail.newAd.description}</p>
                                </div>
                                <br/>
                                <div className="details_about_item">
                                    <h3>Related ads</h3>
                                <Swiper spaceBetween={0} slidesPerView={4}  navigation>     
                                {allitems !== [] ? allitems.map((items,i) =>
                                <SwiperSlide  key={i} >  
                                     <RelatedAds Showrelateditem={()=>Showrelateditem(items.newAd.key)} plink={items.newAd.key} img={items.newAd.img} title={items.newAd.title} price={items.newAd.price} state={items.newAd.state} postdate={items.newAd.postdate} />
                                </SwiperSlide>
                                ) :<><h1>Loading... </h1> <span>Please wait</span></> }
                                </Swiper><br/>
                                </div><br/> <br/>
                        </div>
                        <div className="signleright">
                       <section className="singlerightBox">
                            <div className="singrighttop">
                                <span className="singleprice">{productDetail.newAd.price}</span>
                                <h1 className="singleItemname">{productDetail.newAd.title}</h1>
                                <div className="singleitemlocation">
                                    <div>
                                    <div ><span>{productDetail.newAd.state}</span></div>
                                    </div>
                                    <div>{(productDetail.newAd.postdate ===  postdate) ? <span>Today </span>:
                                    (productDetail.newAd.postdate === yesterDayDate) ? <span>Yesterday </span>:
                                    <span>{productDetail.newAd.postdate}</span>}</div>
                                </div>
                            </div>
                            <div className="single_item_btn_sec">
                                <button type="button" className="sharebtn" title="Share">
                                    <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" fill="#002f34"><path d="M768 853.333c-47.104 0-85.333-38.229-85.333-85.333s38.229-85.333 85.333-85.333c47.104 0 85.333 38.229 85.333 85.333s-38.229 85.333-85.333 85.333zM256 597.333c-47.104 0-85.333-38.229-85.333-85.333s38.229-85.333 85.333-85.333c47.104 0 85.333 38.229 85.333 85.333s-38.229 85.333-85.333 85.333zM768 170.667c47.104 0 85.333 38.229 85.333 85.333s-38.229 85.333-85.333 85.333c-47.104 0-85.333-38.229-85.333-85.333s38.229-85.333 85.333-85.333zM768 597.333c-52.437 0-98.688 24.107-130.005 61.312l-213.675-123.392c1.067-7.637 2.347-15.275 2.347-23.253 0-4.779-1.024-9.259-1.408-13.909l218.283-126.037c31.104 33.408 75.179 54.613 124.459 54.613 94.251 0 170.667-76.416 170.667-170.667s-76.416-170.667-170.667-170.667c-94.251 0-170.667 76.416-170.667 170.667 0 14.208 2.261 27.819 5.504 41.003l-205.867 118.912c-30.763-45.013-82.389-74.581-140.971-74.581-94.251 0-170.667 76.416-170.667 170.667s76.416 170.667 170.667 170.667c55.467 0 104.235-26.88 135.424-67.84l209.195 120.747c-2.048 10.539-3.285 21.333-3.285 32.427 0 94.251 76.416 170.667 170.667 170.667s170.667-76.416 170.667-170.667c0-94.251-76.416-170.667-170.667-170.667z"></path></svg>
                                </button>
                                <button type="button" title="Favourite">
                                    <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fill="#002f34"><path d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"></path></svg>
                                </button>
                            </div>
                        </section>
                        <section className="singlerightBox">
                            <div className="singrighttop">
                                {/* <span className="singleprice"> </span> */}
                                <h1 className="singleItemname" style={{fontSize:' 20px',fontWeight:' 400',color:' #002f34',}}>Seller description</h1>
                                <div className="singleitemlocation">
                                    {productDetail.newAd.userprofileimg !== null && productDetail.newAd.userprofileimg !== undefined ?<img className="single_user_profile_img" src={productDetail.newAd.userprofileimg} alt={productDetail.newAd.name}/>
                                    :<figure className="single_user_profile_img"></figure>}
                                    <div className="single_user_profile">
                                    <span className="single_user_name">{productDetail.newAd.name}</span>
                                    <span className="single_user_joindate">member since {productDetail.newAd.userAccountDate.slice(8, 17)}</span>
                                    </div>                        
                                </div>
                                <button className="single_chat_btn" type="button" value={productDetail.newAd.userid}><span>Chat with seller</span></button>
                            </div>
                            <span className="goto_seller_profile_btn"><svg width="18px" height="18px" viewBox="0 0 1024 1024"  fill="#002f34"><path d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"></path></svg></span>
                        </section>
                        <section className="singlerightBox">
                            <div className="singrighttop">             
                                <h1 className="singleItemname" style={{fontSize:' 20px',fontWeight:' 400',color:' #002f34',}}>Posted in</h1>
                                <span className="single_user_joindate">{productDetail.newAd.area + ", " + productDetail.newAd.city}</span>
                            </div>
                           <div className="mapbox">
                               <figure className="dummyMapimg"></figure>
                           </div>
                        </section>
                        <div style={{display:"flex", justifyContent: "space-between",fontSize: "11px",color: "#002f34",marginTop:"15px",fontWeight:700}}>
                                <strong>AD ID {productDetail.newAd.key}</strong>
                            <p>REPORT THIS AD</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
           </>
           :<h4>Loading... </h4>}
        <Footer/>
        </>
    );
}

function RelatedAds(props){
    function gotop(){
        window.scrollTo(0,0)
    }
    return(
        <>
        <div onClick={gotop}  className="related_ads_cont" >
            <Link  to={{pathname: `/shop/item/${props.plink}`}} onClick={props.Showrelateditem}>
                <div  style={{minHeight: "125px", backgroundColor:"red !important", border:"2px solid #000 !important"}}>
                    <figure><img src={props.img} alt=""/></figure>
                </div>
               <div className="related_card_bottom">
                   <div className="related_card_details">
    <span className="related_card_price">{props.price}</span>
                   <h3 className="related_card_title">{props.title.slice(0, 20)}</h3>
                   </div>
                    <div className="related_card_locat" >
                        <span>{props.state}</span><span>{props.postdate}</span>
                    </div>
                    <span className="favad">
                        <button  type="button" id="favItem"  title="Favourite">
                            <svg width="24px" height="24px" viewBox="0 0 1024 1024" fill="#002f34">
                                <path d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"></path>
                            </svg>
                        </button>
                    </span>
               </div>
            </Link>
        </div>
        </>
    )
}
export default SingleItem;
