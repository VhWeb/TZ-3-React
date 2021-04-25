import React from 'react';
import mp4 from '.././assets/videos/6000e1c35d6106da401cdc94_Einweihungsparty-2-transcode.mp4';
import webm from '.././assets/videos/6000e1c35d6106da401cdc94_Einweihungsparty-2-transcode.webm';
import logo from ".././assets/img/logo.svg";

function PageOne() {
  return (
    <div>
      <div className="container">
        <div className="ps-header">
          <a href="" className="logo"><img src={logo}></img></a>
          <span>Menu</span>
        </div>
        <div className="circle">
          <div className="circle-content" id="video-bg">
            <video width="100%" height="auto" muted autoPlay loop>
              <source src={mp4} type="video/mp4" />
              <source src={webm} type="video/webm" />
            </video>
          </div>
          <div className="title-circle"></div>
          <div className="title">
            <span>VKV Agency</span>
            <div className="title-content">Take your time - use our services</div>
            <div className="arrow"><a href="#header">&#8595;</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageOne;