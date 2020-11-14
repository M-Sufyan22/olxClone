import React from "react";
import AdImg from "../images/phone-app.png";
import Playstore from "../images/playstore.png";
import Appstore from "../images/appstore.png";


function Ourad(){
    return(
        <div className="ad-container">
            <div className="my_row">
                <div className="my_col">
                    <div className="ad_img">
                        <img src={AdImg} alt="Olx"/>
                    </div>
                    <div className="ad_text">
                        <h2>TRY THE OLX APP</h2>
                        <p>Buy, sell and find just about anything using the app on your mobile.</p>
                    </div>
                    <div className="hr"><span></span></div>
                    <div className="download_app">
                        <h4>GET YOUR APP TODAY</h4>
                        <span className="down_btn">
                            <img src={Playstore} alt="PlayStore"/>
                            <img src={Appstore} alt="AppStore"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Ourad;