import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import { Swiper, SwiperSlide } from 'swiper/react';
import User from '../images/user.png';
import Heart from '../images/heart.png';
import Guitar from '../images/piano.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import firebase from '../config/firebase';

function LoginFormModel(props) {

  const { onClose, open} = props;
  const handleClose = () => {
    onClose();
  };


  const [loginWiEma, setEmaLogin] = useState(false);

  const showEmaLog = () => {
    setEmaLogin(true);
    handleClose()
  };

  const CloseEmaLog = () => {
    setEmaLogin(false);
  };

  const goBack = () =>{
    // setNumLogin(false);
    setEmaLogin(false);
    props.goBackMain();
  }



//
  // const [loginWiNum, setNumLogin] = useState(false);

  // const showNumLog = () => {
  //   setNumLogin(true);
  //   handleClose()
  // };

  // const CloseNumLog = () => {
  //   setNumLogin(false);
  // };

  //

  return (
    <>
    <Dialog className="loginForm" onClose={handleClose} open={open}>
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
             {/* <li onClick={showNumLog}><p> continue Width Number</p></li>
             <li><i className="fa fa-facebook" aria-hidden="true"></i><p>continue Width Facebook</p></li>
             <li><i className="fa fa-google" aria-hidden="true"></i><p>continue Width Google</p></li> */}
             <li onClick={showEmaLog}><p>continue Width Email</p></li>
         </ul>
    </div>
    <div className="loginformBottom">
      <span>We won't share your personal details with anyone</span>
      <p>
        <span>If you continue, you are accepting </span>
        <a href="https://help.olx.com.pk/hc/en-us" target="_blank" rel="noopener noreferrer" >
          <span>OLX Terms and Conditions and Privacy Policy</span>
        </a>
      </p>
      </div>
    </Dialog>
    {/* <LoginwithNum open={loginWiNum} onClose={CloseNumLog} goBack={goBack}/> */}
    <LoginwithEmail checkuser={props.userloggedin} open={loginWiEma} onClose={CloseEmaLog} goBack={goBack}/>
      </>
  );
};

function MainLoginForms(props) {

  const [open, setOpen] = useState(false);

  const openAllloginForm = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <Button className="header-login-btn" onClick={openAllloginForm}>Login</Button>
      <LoginFormModel checklogin={props}  open={open} onClose={handleClose} goBackMain={openAllloginForm}/>
     
    </>
  );
}


function LoginwithEmail(props){

  const { onClose, open } = props;
  const handleClose = () => {
    onClose();
  };

  console.log(props)
  const [loginDetails ,setloginDetails] = useState([{
    email:"",
    password:""
  }]);
  const [loginfields ,setloginfields] = useState({okay:false});
  const [succesmsg ,setsuccesmsg] = useState({showmsg:false});

  function login() {
    
    firebase.auth().signInWithEmailAndPassword(loginDetails.email, loginDetails.password)
    .then(function(result) {
    setloginDetails({email:"",password:""});
    setloginfields({...loginfields,errormsg:""})
    handleClose();
    setsuccesmsg({showmsg:true}); 
    hidemsg();
    showloginuser();
  })
    .catch(function(error) {
    setsuccesmsg({showmsg:false}); 
    setloginfields({...loginfields,errormsg:"Invalid username or password or account not Created."})
    });

    function hidemsg(){
      setTimeout(function () {
        setsuccesmsg({showmsg:false});
       }, 7000) 
    }

    function showloginuser(){
        // firebase.auth().onAuthStateChanged(function(user) {
          var user = firebase.auth().currentUser;
       
          if (user !==  null) {
            // props.checkuser
            
            console.log(props.checkuser)
            // console.log(user.email)
              // var user = firebase.auth().currentUser;
              // setloginuser({
              //     username: user.displayName,
              //     useremail: user.email            
              // })
              // console.log(loginuser);
          } else {
              // No user is signed in.
              console.log("no user logined")
          }
      // });
    }
}
  function setvalue(e){
    setloginDetails({...loginDetails,[e.target.name]:e.target.value});
    if(loginDetails.email !=="" && loginDetails.password !==""){
      setloginfields({okay:true});
    }else{
      setloginfields({okay:false});
    }
 
  }
  // firebase.auth().signOut();
  return(
      <>
  
    <Dialog  className="loginForm"  onClose={handleClose} open={open}>
    <ArrowBackIcon  onClick={props.goBack}  className="loginBackbtn"/>
    <CloseIcon onClick={handleClose} className="loginClosebtn"/>
   
    <div className="loginPhonem">
          <div className="loginMethodLogo">
          <svg width="60px" height="60px" viewBox="0 0 1024 1024" ><path fill="#002f34" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
          <h2>Enter your Email</h2>
          </div>
    <div className="loginField">
    <div className="loginInput">
      <div className="logintextField" style={{width: "100%"}}><input value={loginDetails.email} onChange={(e)=>setvalue(e)} type="email" name="email" autoComplete="off" placeholder="Email"/></div>
    </div>
    <br/>
    <div className="loginInput">
      <div className="logintextField" style={{width: "100%"}}><input value={loginDetails.password} onChange={(e)=> setvalue(e)} type="password" name="password" autoComplete="off" placeholder="password"/></div>
    </div>
  <p className="validationmsg">{loginfields.errormsg}</p>
       <div className="loginSubmitBtn">
         {loginfields.okay ===true ? 
         <button onClick={login}>Next</button>
         : <button className="disabledbtn">Next</button>}
      </div>   
      <p>
        <span>We won't reveal your email to anyone else nor use it to send you spam</span>
      </p>
    </div>
    </div>

    </Dialog>
 
     {succesmsg.showmsg === true ? <SuccessfullMsg showmsg={succesmsg.showmsg} /> : null}
      </>
  )
}
// function LoginwithNum(props){

//   const { onClose, open } = props;
//   const handleClose = () => {
//     onClose();
//   };

//   return(
//       <>
//     <Dialog  className="loginForm"  onClose={handleClose} open={open}>
//     <ArrowBackIcon onClick={props.goBack} className="loginBackbtn"/>
//     <CloseIcon onClick={handleClose} className="loginClosebtn"/>
   
//     <div className="loginPhonem">
//           <div className="loginMethodLogo">
//           <svg width="60px" height="60px" viewBox="0 0 1024 1024" ><path fill="#002f34" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
//           <h2>Enter your phone</h2>
//           </div>
//         <div className="loginField">
//         <div className="loginInput">
//           <div className="ctnCode">+92</div>
//           <div className="logintextField"><input type="number" autoComplete="off"/></div>
//         </div>
//            <div className="loginSubmitBtn">
//              <button>Next</button>
//           </div>   
//           <p>
//             <span>We won't reveal your phone number to anyone else nor use it to send you spam</span>
//           </p>
//         </div>
//     </div>
   
//     </Dialog>
 
//       </>
//   )
// }

function SuccessfullMsg(props){
  const [show ] = useState({show:props.showmsg});
  return(
    <>
    {show.show === true ? <div  className="successmsgbox"><p>Login successfully!</p></div>
   :null}</>
  )
}

export default MainLoginForms;