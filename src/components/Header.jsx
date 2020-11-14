import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../css/header.css';
import Navbars from './Navbars';
import CloseIcon from '@material-ui/icons/Close';
import Loginform from './loginform';
import  firebase from '../config/firebase';
import userimg from  "../images/user.png"
import defaultuserimg from '../images/no-image.jpg';
 
function Header(props){

    const [userlogin, setuserlogin] = useState(false);

    useEffect(function(){
        firebase.auth().onAuthStateChanged(function(user) {
            if(user){
            userisLogedin();
            }});
    })
    const userisLogedin = () =>{
        setuserlogin(true);
    }
    const userislogout = () =>{
        setuserlogin(false);
    }

    const [successMsg, setsuccessMsg] = useState(false);
    
    const showLoginSucces = ()=>{
      setsuccessMsg(true) ;
    }
  
    const closeLoginSucces = ()=>{
      setsuccessMsg(false) ;
    }
 
    function my() {
        var cdd = document.getElementById('city_drop_down');
        var cityInput = document.getElementsByClassName('city_selct');
        cdd.classList.toggle('hide');
        cityInput[0].classList.toggle('bd')
        document.getElementById('location_btn').classList.toggle('rot');
    }
    
    return(
        <>
        
        <header id="deskheader">
       <div id="header_container" className="header_container">
            <div className="my_row">
                <div className="header_top">
                    {/* Site logo */}
                        <div className="site_logo">                       
                            <Link to="/">
                            <svg width="48px" height="48px" viewBox="0 0 1024 1024">
                                <path fill="#002f34" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                            </svg>
                            </Link>
                        </div> 
                        {/* City drop down section  */}
                        <div className="header_2nd_sec">

                        <div className="city_selct">
                            <span onClick={my}>
                                <svg width="25px" height="25px" viewBox="0 0 1024 1024">
                                <path fill="#002f34" d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path>
                                </svg>
                            </span>
                            <input onClick={my} readOnly type="text" value="pakistan" placeholder="Search city, area or locality"/>
                            <button onClick={my} type="button" id="location_btn">
                                <svg width="22px" height="22px" fill="#002f34" viewBox="0 0 1024 1024" data-aut-id="icon"><path  d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path>
                                </svg>
                            </button>
                            <div id="city_drop_down" className="city-dropdown hide">
                                <div className="city_drop_sec1">
                                    <span>
                                    <svg width="48px" height="48px" fill="#3a77ff" viewBox="0 0 1024 1024" data-aut-id="icon"><path d="M640 512c0 70.692-57.308 128-128 128s-128-57.308-128-128c0-70.692 57.308-128 128-128s128 57.308 128 128zM942.933 469.333h-89.6c-17.602-157.359-141.307-281.064-297.136-298.527l-1.531-0.139v-89.6h-85.333v89.6c-157.359 17.602-281.064 141.307-298.527 297.136l-0.139 1.531h-89.6v85.333h89.6c17.602 157.359 141.307 281.064 297.136 298.527l1.531 0.139v89.6h85.333v-89.6c157.359-17.602 281.064-141.307 298.527-297.136l0.139-1.531h89.6zM512 772.267c-143.741 0-260.267-116.525-260.267-260.267s116.525-260.267 260.267-260.267c143.741 0 260.267 116.525 260.267 260.267v0c0 143.741-116.525 260.267-260.267 260.267v0z"></path></svg>
                                    </span>
                                    <div className="current_loc">
                                        <h3>Use current location</h3>
                                        <p>Location blocked. Check browser/phone settings.</p>
                                    </div> 
                                </div>
                                <div className="city_drop_sec2">
                                    <div className="loc_list">
                                        <span>RECENT LOCATIONS</span>
                                        <div className="loc_item">
                                            <span className="loc_icon"><svg width="25px" height="25px" viewBox="0 0 1024 1024" fill="#002f34" data-aut-id="icon" ><path  d="M512 85.333c211.755 0 384 172.267 384 384 0 200.576-214.805 392.341-312.661 469.333v0h-142.656c-97.856-76.992-312.683-268.757-312.683-469.333 0-211.733 172.267-384 384-384zM512 170.667c-164.672 0-298.667 133.973-298.667 298.667 0 160.021 196.885 340.523 298.453 416.597 74.816-56.725 298.88-241.323 298.88-416.597 0-164.693-133.973-298.667-298.667-298.667zM512.006 298.66c94.101 0 170.667 76.565 170.667 170.667s-76.565 170.667-170.667 170.667c-94.101 0-170.667-76.565-170.667-170.667s76.565-170.667 170.667-170.667zM512.006 383.994c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg></span>
                                            <p>Punjab</p>
                                        </div>
                                        <div className="loc_item">
                                            <span className="loc_icon"><svg width="25px" height="25px" viewBox="0 0 1024 1024" fill="#002f34" data-aut-id="icon" ><path  d="M512 85.333c211.755 0 384 172.267 384 384 0 200.576-214.805 392.341-312.661 469.333v0h-142.656c-97.856-76.992-312.683-268.757-312.683-469.333 0-211.733 172.267-384 384-384zM512 170.667c-164.672 0-298.667 133.973-298.667 298.667 0 160.021 196.885 340.523 298.453 416.597 74.816-56.725 298.88-241.323 298.88-416.597 0-164.693-133.973-298.667-298.667-298.667zM512.006 298.66c94.101 0 170.667 76.565 170.667 170.667s-76.565 170.667-170.667 170.667c-94.101 0-170.667-76.565-170.667-170.667s76.565-170.667 170.667-170.667zM512.006 383.994c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg></span>
                                            <p>Sindh</p>
                                        </div>
                                    </div>
                                </div>   
                                <div className="city_drop_sec2">
                                    <div className="loc_list">
                                        <span>POPULAR LOCATIONS</span>
                                        <div className="loc_item">
                                            <span className="loc_icon"><svg width="25px" height="25px" viewBox="0 0 1024 1024" fill="#002f34" data-aut-id="icon" ><path d="M512 85.333c211.755 0 384 172.267 384 384 0 200.576-214.805 392.341-312.661 469.333v0h-142.656c-97.856-76.992-312.683-268.757-312.683-469.333 0-211.733 172.267-384 384-384zM512 170.667c-164.672 0-298.667 133.973-298.667 298.667 0 160.021 196.885 340.523 298.453 416.597 74.816-56.725 298.88-241.323 298.88-416.597 0-164.693-133.973-298.667-298.667-298.667zM512.006 298.66c94.101 0 170.667 76.565 170.667 170.667s-76.565 170.667-170.667 170.667c-94.101 0-170.667-76.565-170.667-170.667s76.565-170.667 170.667-170.667zM512.006 383.994c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg></span>
                                            <p>Punjab</p>
                                        </div>
                                        <div className="loc_item">
                                            <span className="loc_icon"><svg width="25px" height="25px" viewBox="0 0 1024 1024" fill="#002f34" data-aut-id="icon"><path d="M512 85.333c211.755 0 384 172.267 384 384 0 200.576-214.805 392.341-312.661 469.333v0h-142.656c-97.856-76.992-312.683-268.757-312.683-469.333 0-211.733 172.267-384 384-384zM512 170.667c-164.672 0-298.667 133.973-298.667 298.667 0 160.021 196.885 340.523 298.453 416.597 74.816-56.725 298.88-241.323 298.88-416.597 0-164.693-133.973-298.667-298.667-298.667zM512.006 298.66c94.101 0 170.667 76.565 170.667 170.667s-76.565 170.667-170.667 170.667c-94.101 0-170.667-76.565-170.667-170.667s76.565-170.667 170.667-170.667zM512.006 383.994c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg></span>
                                            <p>Islamabad Capital Territory</p>
                                        </div>
                                        <div className="loc_item">
                                            <span className="loc_icon"><svg width="25px" height="25px" viewBox="0 0 1024 1024" fill="#002f34" data-aut-id="icon"><path d="M512 85.333c211.755 0 384 172.267 384 384 0 200.576-214.805 392.341-312.661 469.333v0h-142.656c-97.856-76.992-312.683-268.757-312.683-469.333 0-211.733 172.267-384 384-384zM512 170.667c-164.672 0-298.667 133.973-298.667 298.667 0 160.021 196.885 340.523 298.453 416.597 74.816-56.725 298.88-241.323 298.88-416.597 0-164.693-133.973-298.667-298.667-298.667zM512.006 298.66c94.101 0 170.667 76.565 170.667 170.667s-76.565 170.667-170.667 170.667c-94.101 0-170.667-76.565-170.667-170.667s76.565-170.667 170.667-170.667zM512.006 383.994c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg></span>
                                            <p>Sindh</p>
                                        </div>
                                        <div className="loc_item">
                                            <span className="loc_icon"><svg width="25px" height="25px" viewBox="0 0 1024 1024" fill="#002f34" data-aut-id="icon"><path d="M512 85.333c211.755 0 384 172.267 384 384 0 200.576-214.805 392.341-312.661 469.333v0h-142.656c-97.856-76.992-312.683-268.757-312.683-469.333 0-211.733 172.267-384 384-384zM512 170.667c-164.672 0-298.667 133.973-298.667 298.667 0 160.021 196.885 340.523 298.453 416.597 74.816-56.725 298.88-241.323 298.88-416.597 0-164.693-133.973-298.667-298.667-298.667zM512.006 298.66c94.101 0 170.667 76.565 170.667 170.667s-76.565 170.667-170.667 170.667c-94.101 0-170.667-76.565-170.667-170.667s76.565-170.667 170.667-170.667zM512.006 383.994c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg></span>
                                            <p>Khyber Pakhtunkhwa</p>
                                        </div>
                                    </div>
                                </div>   
                            </div>
                        </div> 
                        <div className="searchbox">        
                            <input type="text" name=""placeholder="Find Cars, Mobile Phones and more..."/>
                         
                                <span>
                                <Link to="/shop">
                                <svg width="24px" height="24px" viewBox="0 0 1024 1024" fill="#fff"><path  d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path>
                                </svg>
                                </Link>      
                                </span>
                              
                        </div>
                        </div>
                        {/* Button section */}
                        {userlogin === true ? 
                        <div className="user_login_header_3rd_sec">
                            <div  className="header_chat_btn">
                                <Link to="/">
                                    <button type="button"  title="chat">
                                    <svg width="24px" height="24px" viewBox="0 0 1024 1024"   fill="#002f34"><path  d="M469.333 171.119c-164.693 0-298.667 134.684-298.667 300.25v359.529l108.907-54.753 19.093-4.525h256c164.693 0 298.667-134.684 298.667-300.25s-133.973-300.25-298.667-300.25h-85.333zM147.093 938.667l-61.76-38.368v-428.929c0-212.856 172.267-386.036 384-386.036h85.333c211.733 0 384 173.18 384 386.036s-172.267 386.036-384 386.036h-245.931l-161.643 81.261z"></path></svg>
                                    </button>
                                </Link>
                            </div>
                            <div className="header_noti_btn">
                               <button type="button"  title="notifications">
                                    <svg width="24px" height="24px" viewBox="0 0 1024 1024" fill="#002f34"><path d="M730.855 763.955h-435.559c-0.833-87.945-2.676-279.627-2.676-289.496 0-119.351 98.911-216.463 220.498-216.463s220.455 97.112 220.455 216.463c0 10-1.843 201.594-2.72 289.496v0zM819.282 748.603c0.92-93.341 2.062-266.38 2.062-274.144 0-141.589-98.692-260.545-231.64-294.319 2.192-7.237 3.684-14.782 3.684-22.765 0-44.345-35.969-80.27-80.27-80.27-44.345 0-80.27 35.923-80.27 80.27 0 7.983 1.491 15.483 3.684 22.765-132.948 33.731-231.64 152.687-231.64 294.319 0 7.721 1.14 182.339 2.019 276.030l-90.27 36.581 0.92 64.609h316.032c3.729 40.881 37.679 73.031 79.523 73.031s75.794-32.151 79.523-73.031h312.962l1.754-64.523-88.078-38.556z"></path></svg>
                                </button>
                            </div>
                            <div  className="header_userpro_btn">
                                <Forlogedinuser userislogout={userislogout}/>
                                {successMsg ===true ? <SuccessfullMsg close={closeLoginSucces}/> : null}
                            </div>

                            <div className="loged_in_sellbtn">
                            <Link to="/post">
                                <button className="header-sell-btn"><span> + </span>Sell</button>
                            </Link>
                            </div>
                        </div>
                        :
                        <div className="header_3rd_sec">
                            <Loginform cs="header-login-btn"  name="Login" loginuser={userisLogedin} showmsg={showLoginSucces} closemsg={closeLoginSucces}/>
                            <Loginform cs="header-sell-btn" sp="+"  name="Sell" loginuser={userisLogedin} showmsg={showLoginSucces} closemsg={closeLoginSucces}/>
                        </div>}
                </div>
            </div>
       </div>
       <Navbars/>
         </header>
         
         </>
    );
    
}

function Forlogedinuser(props){

      
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    if(open === false){
        setOpen(true);
    }else{
        setOpen(false);
    }
  };

  var user = firebase.auth().currentUser

    return(
    <>
    <div style={{position:"relative"}}>
    <button onClick={handleClickOpen} className="user_dropdown_profile_btn" >
   {user.photoURL !== null ?  <img src={user.photoURL} title="Upload image"  alt={user.displayName}/>  : <img src={userimg} title="Upload image"  alt="olx"/>  }
    <svg width="20px" height="20px" viewBox="0 0 1024 1024"  fill="#002f34"><path  d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>
    </button>
    {open===true ?<UserprofileDropDown userislogout={props.userislogout}/> : null}
  
    </div>
    </>
    )
}

function UserprofileDropDown(props){

    const [userimg, setuserimg] = useState({saved:false, userimage:"",imgname:""});

    function logout() {
        firebase.auth().signOut();
        props.userislogout();
    }  

    var user = firebase.auth().currentUser;

    const getuserimg = () =>{
        
        var ImgName ,reader ,files=[];
        var input = document.createElement('input');
        input.type="file";

        input.onchange = (e)=>{
            files = e.target.files;
            ImgName = e.target.files[0].name;
            setuserimg({
                saved:true, userimage:files[0],imgname: ImgName
            });
            reader = new FileReader();
            reader.onload = function(){
                document.getElementById('userimg').src=reader.result;
            }
            reader.readAsDataURL(files[0]); 
        }
        input.click();
     
        //
        
}

const saveuserimage = () =>{
  
    var uploadTask = firebase.storage().ref('usersImages/' + userimg.imgname).put(userimg.userimage);
        uploadTask.on('state_changed',function(snapshot){
            var progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes *100));
            document.getElementById('imgupploadingprogress').innerHTML = progress + " %";
        },
        function(error){
            alert("Error occurred while Saving Images!")
        },
        function(){
            //uploading to Database
            setuserimg({saved:false, userimage:"",imgname: ""});
            uploadTask.snapshot.ref.getDownloadURL().then(function(url){
            
                user.updateProfile({photoURL: url }).then(function() {
                    document.getElementById('imgupploadingprogress').innerHTML = "";
                    alert('Image Changed Successfully!')
                }).catch(function(error) {
                        alert('Image Changed Failed!')
                });
        });
    });
        
};
   return(
        <>
        <div className="user_profile_model">
            <span className="notch"></span>
            <div className="user_about_details_popup">
                <figure>
                    {user.photoURL !== null ?<img onClick={getuserimg} title="Upload image"  id='userimg' src={user.photoURL} alt="userimage"/>:
                    <img id='userimg' title="Upload image" onClick={getuserimg} src={defaultuserimg} alt="userimage"/> }
                   {userimg.saved === true ?<span color={"green"} onClick={saveuserimage} style={{display:"block",marginTop:"10px",fontSize:"12px", color:"green", cursor:"pointer"}}>save profile</span>
                   :null}
                   <span  style={{display:"block",marginTop:"10px", fontSize:"12px", color:"green", cursor:"pointer",width:"100%",textAlign:"center"}}  id="imgupploadingprogress"></span>
                </figure>
            
               <Link to="">
                <span>Hello</span>
                <h3>{user.displayName}</h3>
                <span>View and edit profile</span>
               </Link>
            </div>
            <div style={{fontSize: "12px", lineHeight: "18p" ,padding:"10px 12px"}}>
            <span >
            OLX is built on trust. Help other people get to know you. Tell them about the things you like.
            </span>
            </div>
            <div className="logout_btn_sec">
                <button>
                <svg width="23px" height="23px"  viewBox="0 0 1024 1024" fill="#002f34"><path d="M128 85.333l-42.667 42.667v768l42.667 42.667h768l42.667-42.667v-213.333l-42.667-42.667-42.667 42.667v170.667h-682.667v-682.667h682.667v170.667l42.667 42.667 42.667-42.667v-213.333l-42.667-42.667h-768zM494.336 298.667l-183.168 183.168v60.331l183.168 183.168h60.331v-60.331l-110.336-110.336h323.669l42.667-42.667-42.667-42.667h-323.669l110.336-110.336v-60.331h-60.331z"></path></svg>
                <span onClick={logout}>Logout</span>
                </button>
            </div>
       </div>
        </>
    )
}

function SuccessfullMsg(props){

    return(
    <div onClick={props.close} className="successmsgbox"><p>Login successfully!</p><CloseIcon  style={{ marginLeft:"5px",paddingLeft:"5px",cursor:"pointer"}} /></div>
    );
  };

export default Header;