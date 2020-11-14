import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import { Swiper, SwiperSlide } from 'swiper/react';
import User from '../images/user.png';
import Heart from '../images/heart.png';
import Guitar from '../images/piano.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import firebase from '../config/firebase';

function Loginform(props){
  useEffect(()=>{
    firebase.auth().onAuthStateChanged(function(user) {
      if(user){
        props.loginuser();
      }
    });
  })
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

    // firebase.auth().signOut();
  const handleClose = () => {
    setOpen(false);
  };
  
    return(
    <>
   <Button className={props.cs} onClick={handleClickOpen}>{props.sp ? <span>{props.sp}</span>:null} {props.name}</Button>
    <LoginFormModel open={open} onClose={handleClose} againopen={handleClickOpen} showmsg={props.showmsg} closemsg={props.closemsg}/>
    </>
    );
}


function LoginFormModel(props) {

    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
      };
    
    //   

    const [loginWiEma,setloginWiEma] = useState(false);

    const CloseEmaLog=()=>{
       setloginWiEma(false);
    }

    const openEmailbox = () =>{
        handleClose();
        setloginWiEma(true);
    }

    const goBack = () =>{
        CloseEmaLog();
        CloseSignupForm();
        props.againopen();
    }
    //   

    const [signupForm,setsignupForm] = useState(false);

    const CloseSignupForm=()=>{
      setsignupForm(false);
     
    }

    const openSignupForm = () =>{
        setsignupForm(true);
        handleClose();
      
    }

    return (
      <>
      <Dialog className="loginForm"  onClose={handleClose} open={open}>
 
        <CloseIcon onClick={handleClose} className="loginClosebtn"/>
        <div className="loginSlider">
          <Swiper slidesPerView={1} navigation pagination>
            <SwiperSlide><img src={Guitar} alt="OLX"/> 
            <br/>
            <p>Help make OLX safer place to buy and sell</p>
            </SwiperSlide>
            <SwiperSlide><img src={Heart}  alt="OLX"/>
            <br/>
            <p>Contact and close deals faster</p>
            </SwiperSlide>
            <SwiperSlide><img src={User}  alt="OLX"/>
            <br/>
            <p>Save all your favorite items in one place</p>
            </SwiperSlide>
        </Swiper>
      </div>
      <div className="loginMethods">
          <ul>
               <li onClick={openEmailbox}><p>continue Width Email</p></li>
           </ul>
      </div>
      <div className="loginformBottom">
        <p>Not haven't an account?<Button size="small" onClick={openSignupForm}>Create Now!</Button></p>
        <span>We won't share your personal details with anyone</span>
        <p>
          <span>If you continue, you are accepting </span>
          <a href="https://help.olx.com.pk/hc/en-us" target="_blank" rel="noopener noreferrer" >
            <span>OLX Terms and Conditions and Privacy Policy</span>
          </a>
        </p>
        </div>
      </Dialog>
      <LoginwithEmail showmsg={props.showmsg} closemsg={props.closemsg}  open={loginWiEma} onClose={CloseEmaLog} goBack={goBack}/>
        <SignupForm  showmsg={props.showmsg}  closemsg={props.closemsg} open={signupForm} onClose={CloseSignupForm}    goBack={goBack}/>
        </>
    );
  };


//

function SignupForm(props){

  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const [loginDetails ,setloginDetails] = useState([]);

  const [loginfields ,setloginfields] = useState(false);

  function signup() {
    firebase.auth().createUserWithEmailAndPassword(loginDetails.email, loginDetails.password)
      .then(function(result) {
        var user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: loginDetails.username,
        }).then(function() {
            console.log('')
        }).catch(function(error) {
            alert("Signup Failed!")
        });
        setloginDetails([]);
        setloginfields([]);
        handleClose();
        props.showmsg();
        hidemsg();
      })
    .catch(function(error) {
        props.closemsg();
        setloginfields({errormsg:error.message})
    });
  
    function hidemsg(){
      setTimeout(function () {
       props.closemsg();
       }, 7000) 
    }

  }

  

    function setvalue(e){
  
        setloginDetails({...loginDetails,[e.target.name]:e.target.value});
        if(loginDetails.email !==undefined && loginDetails.password !==  undefined && loginDetails.username !== undefined ){
          setloginfields(true);
        }
        else{
          setloginfields(false);
        }
      }
    return(
    <>
    <Dialog className="loginForm" onClose={handleClose} open={open}>
    <ArrowBackIcon  onClick={props.goBack}  className="loginBackbtn"/>
    <CloseIcon onClick={handleClose} className="loginClosebtn"/>
    <div className="loginPhonem">
          <div className="loginMethodLogo">
          <svg width="60px" height="60px" viewBox="0 0 1024 1024" ><path fill="#002f34" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
          <h2>SignUp With  your Email</h2>
          </div>
    <div className="loginField">
    
    <div className="loginInput">
      <div className="logintextField" style={{width: "100%"}}><input onChange={(e)=>setvalue(e)} type="text" name="username" autoComplete="off" placeholder="UserName"/></div>
    </div><br/>
    <div className="loginInput">
      <div className="logintextField" style={{width: "100%"}}><input onChange={(e)=>setvalue(e)} type="email" name="email" autoComplete="off" placeholder="Email"/></div>
    </div>
    <br/>
    <div className="loginInput">
      <div className="logintextField" style={{width: "100%"}}><input onChange={(e)=> setvalue(e)}  type="password" name="password" autoComplete="off" placeholder="Password"/></div>
    </div> 
  <p className="validationmsg">{loginfields.errormsg}</p>
       <div className="loginSubmitBtn">
         {loginfields ===true ? 
         <button onClick={signup}>Sign Up</button>
         : <button className="disabledbtn">Sign Up</button>}
      </div>   
      <p>
        <span>We won't reveal your email to anyone else nor use it to send you spam</span>
      </p>
    </div>
    </div>

    </Dialog>
  
      </>
    );
}  



//
function LoginwithEmail(props){

  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const [loginDetails ,setloginDetails] = useState([]);

  const [loginfields ,setloginfields] = useState(false);

  function login() {
    firebase.auth().signInWithEmailAndPassword(loginDetails.email, loginDetails.password)
      .then(function(result) {
        setloginDetails([]);
        setloginfields([]);
        handleClose();
        props.showmsg();
        hidemsg();
      })
    .catch(function(error) {
        props.closemsg();
        setloginfields({errormsg:error.message})
    });
    
    function hidemsg(){
      setTimeout(function () {
       props.closemsg();
       }, 7000) 
    }
  }

    function setvalue(e){
  
        setloginDetails({...loginDetails,[e.target.name]:e.target.value});
        if(loginDetails.email !==undefined && loginDetails.password !==undefined){
          setloginfields(true);
        }else{
          setloginfields(false);
        }
      }
    return(
    <>
    <Dialog className="loginForm"  onClose={handleClose} open={open}>
    <ArrowBackIcon  onClick={props.goBack}  className="loginBackbtn"/>
    <CloseIcon onClick={handleClose} className="loginClosebtn"/>
    <div className="loginPhonem">
          <div className="loginMethodLogo">
          <svg width="60px" height="60px" viewBox="0 0 1024 1024" ><path fill="#002f34" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
          <h2>Enter your Email</h2>
          </div>
    <div className="loginField">
    <div className="loginInput">
      <div className="logintextField" style={{width: "100%"}}><input onChange={(e)=>setvalue(e)} type="email" name="email" autoComplete="off" placeholder="Email"/></div>
    </div>
    <br/>
    <div className="loginInput">
      <div className="logintextField" style={{width: "100%"}}><input onChange={(e)=> setvalue(e)}  type="password" name="password" autoComplete="off" placeholder="password"/></div>
    </div>
  <p className="validationmsg">{loginfields.errormsg}</p>
       <div className="loginSubmitBtn">
         {loginfields ===true ? 
         <button onClick={login}>Login</button>
         : <button className="disabledbtn">Login</button>}
      </div>   
      <p>
        <span>We won't reveal your email to anyone else nor use it to send you spam</span>
      </p>
    </div>
    </div>
    </Dialog>
  
      </>
    );
}  





export default Loginform;