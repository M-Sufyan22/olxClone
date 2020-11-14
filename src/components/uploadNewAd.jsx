import React, { useState } from 'react';
import firebase from '../config/firebase';
import {Link} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ClearIcon from '@material-ui/icons/Clear';
import '../css/style.css';

function UploadNewAd(){
    //State
    const [adData,setData] = useState({
        name: "",
        phone: "",
        title:"",
        description:"",
        price:"",
        img:"",
        condition:"",
        brand: "",
        state:"",
        area:"",
        city:"",
        userID: "",
        userAccountDate: "",
        userprofileimg: "",
        useremail: ""
    });
    //
    var ImgName ,reader ,files=[];
    
    function selectImg(e){
        var input = document.createElement('input');
        input.type="file";
      
        input.onchange = (e)=>{
       
            files = e.target.files;
            setData({...adData,img:files[0]})
        
            reader = new FileReader();
            reader.onload = function(){
                document.getElementById('productImg').src=reader.result;
            }
            reader.readAsDataURL(files[0]); 
        }
        input.click();
    };

    function removeImg(){
        document.getElementById('productImg').src="";
        setData({...adData,img:null});
    }

    // New Ad post function with Image
    function uploadOnDatabase(){
      
        let r = Math.random().toString(36).substring(7);
        ImgName = r;
        var uploadTask = firebase.storage().ref('ProductsImages/' + ImgName).put(adData.img);
        uploadTask.on('state_changed',function(snapshot){
            var progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes *100));
            document.getElementById('Upprogress').innerHTML = progress +"%";
        },
        function(error){
            alert(error.message)
                alert("Ad Posting failed try Agai Later !")
        },
        function(){
            //getting currenty data
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
            month[8] = "Sepr";
            month[9] = "Oct";
            month[10] = "Nov";
            month[11] = "Dec";
            var n = month[d.getMonth()];
            var todayDate = d.getDate();
            var currentYear = d.getFullYear();
            var postdate=todayDate +" "+ n +" "+currentYear;

            //uploading to Database
            uploadTask.snapshot.ref.getDownloadURL().then(function(url){
                setData({...adData,img:url});
            let key = firebase.database().ref('All_Ads').push().key;
            let userid=firebase.auth().currentUser.uid;
            let userprofileimg=firebase.auth().currentUser.photoURL;
            let useremail=firebase.auth().currentUser.email;
            let userAccountdate=firebase.auth().currentUser.metadata.creationTime;
            let newAd = {
                key: key,
                name: adData.name,
                phone: adData.phone,
                title: adData.title,
                description: adData.description, 
                price: adData.price,
                img: url,
                postdate:postdate,
                condition: adData.condition,
                brand: adData.brand,
                state: adData.state,
                area: adData.area,
                city: adData.city,
                userAccountDate:  userAccountdate,
                userID: userid,
                userprofileimg: userprofileimg,
                useremail: useremail
            }
           
            firebase.database().ref('All_Ads').child(key).set({newAd});
            setData({
                name: "",
                phone: "",
                title:"",
                description:"",
                price:"",
                img:"",
                condition:"",
                brand: "",
                state:"",
                area:"",
                city:"",
                userAccountDate:  "",
                userID: "",
                userprofileimg: "",
                useremail: ""
            });
            alert("Ad Posted successfully!");
        });
        });
}

    return(
        <>
    <PostHeader/>
        <br></br><br></br><br></br>
        <div className="">
            <div className="my_row">
                <div className="post_container">
                    <div className="post_top"><h2>POST YOUR AD</h2></div>
                    <div className="post_body">
                    <div className="post_detailBox"><br></br><h3>INCLUDE SOME DETAILS</h3></div>
                    <div className="post_detailBox">  
                <label htmlFor="title">Ad title *</label>
                <input name="title" value={adData.title} onChange={(e)=> setData({...adData,title:e.target.value})} type="text" placeholder="Enter Title"/>
                <span>Mention the key features of your item (e.g. brand, model, age, type)7 / 70</span>
                    </div>
                    <div className="post_detailBox ">
                        <label htmlFor="description">Description *</label>
                        <textarea name='description' value={adData.description} onChange={(e)=> setData({...adData,description:e.target.value})}  type="text" placeholder="Enter Short Description"/>
                    </div>
                    <div className="post_detailBox">
                        <label htmlFor="brand">Make (comapny or Brand name)</label>
                        <input name="brand" value={adData.brand} onChange={(e)=> setData({...adData,brand:e.target.value})} type="text" placeholder="Enter products company "/>
                    </div>
                    <div className="post_detailBox postsecDivider">
                        <label htmlFor="condition">Condition * (New or Used)</label>
                        <input name="condition" value={adData.condition} onChange={(e)=> setData({...adData,condition:e.target.value})} type="text" placeholder="Enter condition"/>
                    </div>
                    <div className="post_detailBox"><h3>SET A PRICE</h3></div>
                    <div className="post_detailBox postsecDivider" >
                    <label htmlFor="price">Price*</label>
                    <input name="price" value={adData.price} onChange={(e)=> setData({...adData,price:e.target.value})}  type="number" placeholder="RS"/>
                    </div>
                    <div className="post_detailBox"><h3>UPLOAD A PHOTO (Only One)</h3></div>
                    <div className="post_detailBox postsecDivider" >
                    <button id="imgSelbtn" onClick={(e)=> selectImg(e)}>
                    {adData.img ?   <img id="productImg" alt="product img"/> : <>
                    <svg width="36px" height="36px" viewBox="0 0 1024 1024" data-aut-id="icon" fill="#002f34"><path d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z"></path></svg>
                    <span>Add Photo</span></> }
                    </button> 
                    {adData.img ? <ClearIcon onClick={removeImg} id="removeimg"/>:null}
                    </div>
                    <div className="post_detailBox"><h3>CONFIRM YOUR LOCATION</h3></div>
                    <div className="post_detailBox">
                    <label htmlFor="state">State*</label>
                    <input name="state" value={adData.state} onChange={(e)=> setData({...adData,state:e.target.value})}  type="text" placeholder="Enter your State or province"/>
                    </div>
                    <div className="post_detailBox">
                    <label htmlFor="city">City*</label>
                    <input name="city" value={adData.city} onChange={(e)=> setData({...adData,city:e.target.value})}  type="text" placeholder="Enter you City"/>
                    </div>
                    <div className="post_detailBox postsecDivider">
                    <label htmlFor="area">Neighbourhood (Area name)*</label>
                    <input name="area" value={adData.area} onChange={(e)=> setData({...adData,area:e.target.value})}  type="text" placeholder="Enter your Area name"/>
                    </div>
                    <div className="post_detailBox"><h3>REVIEW YOUR DETAILS</h3></div>
                    <div className="post_detailBox">
                    <label htmlFor="name">Name *</label>
                    <input name="name" value={adData.name} onChange={(e)=> setData({...adData,name:e.target.value})}  type="text" placeholder="Enter you Proper name"/>
                    </div>
                    <div className="post_detailBox"><h3>Let's verify your account</h3></div>
                    <div className="post_detailBox">
                        <p>We will send you a confirmation code by sms on the next step.</p>
                        
                    </div>
                    <div className="post_detailBox postsecDivider">
                        <label htmlFor="phone">Mobile Phone Number *</label>
                        <input name="phone" value={adData.phone} onChange={(e)=> setData({...adData,phone:e.target.value})}  type="number" placeholder=""/>
                    </div>
                    <div className="post_detailBox postsecDivider">
                    {adData.name.length>=3  && adData.phone.length===11 && adData.price && adData.state && adData.area && adData.city  && adData.description && adData.title && adData.img  ?
                    <button id="postBtn" onClick={uploadOnDatabase} >Post Now  <span id="Upprogress"></span></button>
                     :  <button id="postBtnnot">Post Now </button>}  
                    </div>
                    </div>
                </div>
            </div> 
        </div>
    <PostFooter/>
    </>
    );
};



function PostHeader(){
       
    return(
        <>
        <header>
            <div id="header_container" className="header_container">
                <div className="my_row">
                    <div className="header_top">
                        <div style={{marginRight: '15px'}}>
                            <Link to="/">
                                <ArrowBackIcon style={{color: '#002f34ed'}}/> 
                            </Link>                  
                        </div>
                        <div className="site_logo">                       
                            <Link to="/">
                            <svg width="48px" height="48px" viewBox="0 0 1024 1024">
                            <path fill="#002f34" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                            </svg>
                            </Link>
                        </div> 
                        <div className="header_2nd_sec">

                        </div>
                        <div className="header_3rd_sec"></div>
                    </div>
                </div>
            </div>
        </header>
         </>
    )
}

function PostFooter(){
       let footerstyle={
        display: 'flex',
        justifyContent: 'space-between',
       }
    return(
        <>
        <footer style={{color: '#fff',fontSize: '12px',lineHeight: '18px',backgroundColor: '#002f34',padding: '16px 0'}}>
            <div className="my_row" style={footerstyle}>
          <section  style={{flex: 1,textAlign:'left',paddingLeft: '30px',color: '#fff'}}>
              <span style={{color: '#fff'}}>
                  Sitemap
              </span>
          </section>
          <section  style={{flex: 1,textAlign:'right',paddingRight: '30px'}}>
              <span style={{color: '#fff'}}>Free Classifieds in Pakistan. © 2006-2020 OLX</span>
            </section>
            </div>
        </footer>
         </>
    )
}
export default UploadNewAd;