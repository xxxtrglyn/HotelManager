import React from 'react';
import './Overview.css'
import DisplayImage from './DisplayImage'

function Overview() {
  return(
      <div>
          <section className="contact">
      <div className="content">
          <h2>Tên khách sạn</h2>
          <p>Gi do gi do gi do tui k biet</p>
      </div>
      <div className="container">
          <div className="contactInfo">
              <div className="box">
                  <div className="icon">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </div>
                  <div className="text">
                      <h3> Address </h3>
                      <p>Loc son phu xuan phu vang tth</p>
                  </div>
              </div>
              <div className="box">
                <div className="icon">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </div>
                <div className="text">
                    <h3> Phone </h3>
                    <p>+84379931731</p>
                </div>
            </div>
              <div className="box">
                <div className="icon">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <div className="text">
                    <h3> Email </h3>
                    <p>xxxtrglyn@gmail.com</p>
                </div>
            </div>
          </div>
        <div className="contactform">
        </div>
      </div>
    </section>
      </div>
  ) 
}

export default Overview;
