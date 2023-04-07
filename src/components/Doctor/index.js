import React from 'react';
import { FaFacebookF, FaPinterestP, FaInstagram } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';

import doctor1 from '../../assets/img/doctor1.jpeg';
import doctor2 from '../../assets/img/doctor2.jpeg';
import doctor3 from '../../assets/img/doctor3.jpeg';
import doctor4 from '../../assets/img/doctor4.jpeg';
import { Animate } from '../AnimateIn';

export default function Doctor() {
  return (
    <section className="doctor-container container-space">
      <div className="container-fluid">
        <div className="doctor-content">
          <Animate.ScaleInCenter>
            <div className="section-title">
              <h4 className="heading">Our Doctors</h4>
              <h3 className="title">Specialized Doctors</h3>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse
              </p>
            </div>
          </Animate.ScaleInCenter>
          <ul className="doctor-list">
            <Animate.FadeInLeft>
              <li className="doctor-item">
                <img src={doctor1} alt="doctor" className="doctor-avatar" />
                <div className="content">
                  <h3 className="name">Dr. James Adult</h3>
                  <span className="specialized">Cardiologist</span>
                  <ul className="social-list">
                    <li className="social-item facebook">
                      <FaFacebookF className="icon" />
                    </li>
                    <li className="social-item twitter">
                      <AiOutlineTwitter className="icon" />
                    </li>
                    <li className="social-item pinterest">
                      <FaPinterestP className="icon" />
                    </li>
                    <li className="social-item instagram">
                      <FaInstagram className="icon" />
                    </li>
                  </ul>
                </div>
              </li>
            </Animate.FadeInLeft>
            <Animate.FadeInUp>
              <li className="doctor-item">
                <img src={doctor2} alt="doctor" className="doctor-avatar" />
                <div className="content">
                  <h3 className="name">Dr. James Alison</h3>
                  <span className="specialized">Medicine</span>
                  <ul className="social-list">
                    <li className="social-item facebook">
                      <FaFacebookF className="icon" />
                    </li>
                    <li className="social-item twitter">
                      <AiOutlineTwitter className="icon" />
                    </li>
                    <li className="social-item pinterest">
                      <FaPinterestP className="icon" />
                    </li>
                    <li className="social-item instagram">
                      <FaInstagram className="icon" />
                    </li>
                  </ul>
                </div>
              </li>
            </Animate.FadeInUp>
            <Animate.FadeInDown>
              <li className="doctor-item">
                <img src={doctor3} alt="doctor" className="doctor-avatar" />
                <div className="content">
                  <h3 className="name">Dr. Peter Adlock</h3>
                  <span className="specialized">Neurologiest</span>
                  <ul className="social-list">
                    <li className="social-item facebook">
                      <FaFacebookF className="icon" />
                    </li>
                    <li className="social-item twitter">
                      <AiOutlineTwitter className="icon" />
                    </li>
                    <li className="social-item pinterest">
                      <FaPinterestP className="icon" />
                    </li>
                    <li className="social-item instagram">
                      <FaInstagram className="icon" />
                    </li>
                  </ul>
                </div>
              </li>
            </Animate.FadeInDown>
            <Animate.FadeInRight>
              <li className="doctor-item">
                <img src={doctor4} alt="doctor" className="doctor-avatar" />
                <div className="content">
                  <h3 className="name">Dr. Jelin Alis</h3>
                  <span className="specialized">Medicine</span>
                  <ul className="social-list">
                    <li className="social-item facebook">
                      <FaFacebookF className="icon" />
                    </li>
                    <li className="social-item twitter">
                      <AiOutlineTwitter className="icon" />
                    </li>
                    <li className="social-item pinterest">
                      <FaPinterestP className="icon" />
                    </li>
                    <li className="social-item instagram">
                      <FaInstagram className="icon" />
                    </li>
                  </ul>
                </div>
              </li>
            </Animate.FadeInRight>
          </ul>
        </div>
      </div>
    </section>
  );
}
