import React from 'react';
import './Overview.css'
import DisplayImage from './DisplayImage'

function Overview() {
  return(
      <div>
          <section class="contact">
      <div class="content">
          <h2>Tên khách sạn</h2>
          <p>Gi do gi do gi do tui k biet</p>
      </div>
      <div class="container">
          <div class="contactInfo">
              <div class="box">
                  <div class="icon">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                  </div>
                  <div class="text">
                      <h3> Address </h3>
                      <p>Loc son phu xuan phu vang tth</p>
                  </div>
              </div>
              <div class="box">
                <div class="icon">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </div>
                <div class="text">
                    <h3> Phone </h3>
                    <p>+84379931731</p>
                </div>
            </div>
              <div class="box">
                <div class="icon">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <div class="text">
                    <h3> Email </h3>
                    <p>xxxtrglyn@gmail.com</p>
                </div>
            </div>
          </div>
        <div class="contactform">
          <DisplayImage />
        </div>
      </div>
    </section>
      </div>
  ) 
}

export default Overview;
