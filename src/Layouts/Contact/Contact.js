import React from 'react';
import './Contact.scss';

function Contact() {
  return (
    <div className='contact-container' id='contact'>
      <div className='contact-wrapper'>
        <div className='contact-info'>
          <p className='contact-title'>CONTACT</p>
          <p className='contact-hit-me'>Hit me up! 👇 </p>
        </div>
        <div className='contact-icons'>
          <div class="contact__icon-box">
            <span>
              <i class="fa-solid fa-phone"></i>
            </span>
            <div class="contact__info">
              <h3>Mobile No</h3>
              <p>8792214467</p>
            </div>
          </div>
          <div class="contact__icon-box">
            <span>
              <i class="fa-solid fa-map-location-dot"></i>
            </span>
            <div class="contact__info">
              <h3>Location</h3>
              <p>Karnataka, Bengaluru</p>
            </div>
          </div>
          <div class="contact__icon-box">
            <span>
              <i class="fa-solid fa-envelope-open-text"></i>
            </span>
            <div class="contact__info">
              <h3>Email</h3>
              <p>harish.port25@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact