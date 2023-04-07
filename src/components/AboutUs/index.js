import React from 'react';
import { Row, Col } from 'antd';
import { IoCheckmarkDone } from 'react-icons/io5';

import bgAbout from '../../assets/img/about-bg.png';

import { Animate } from '../AnimateIn';

export default function AboutUs() {
  return (
    <section className="about-container container-space">
      <div className="container-fluid">
        <Row className="about-content">
          <Col className="left" xs={24} sm={24} md={12} lg={12} xl={12}>
            <Animate.FadeInLeft>
              <img src={bgAbout} alt="about background" className="image" />
            </Animate.FadeInLeft>
          </Col>
          <Col className="right" xs={24} sm={24} md={12} lg={12} xl={12}>
            <Animate.FadeInDown>
              <h4 className="heading">About Us</h4>
              <h3 className="title">
                Connect to Call a Doctor by Video or Audio During the COVID-19
                Pandemic
              </h3>
              <p className="description">
                Many healthcare systems around the world together with
                government agencies and startup companies are building and
                delivering Telehealth solutions the future of non-emergency and
                routine healthcare delivery
              </p>
            </Animate.FadeInDown>
            <ul className="about-features">
              <Animate.FadeInUp>
                <li className="about-item">
                  <div className="content">
                    <IoCheckmarkDone className="icon" />
                    <span className="text"> Cold, Cough, Flu</span>
                  </div>
                </li>
              </Animate.FadeInUp>
              <Animate.FadeInUp>
                <li className="about-item">
                  <div className="content">
                    <IoCheckmarkDone className="icon" />
                    <span className="text">Chronic Disease</span>
                  </div>
                </li>
              </Animate.FadeInUp>
              <Animate.FadeInUp>
                <li className="about-item">
                  <div className="content">
                    <IoCheckmarkDone className="icon" />
                    <span className="text">Allergies</span>
                  </div>
                </li>
              </Animate.FadeInUp>
              <Animate.FadeInUp>
                <li className="about-item">
                  <div className="content">
                    <IoCheckmarkDone className="icon" />
                    <span className="text">Pain</span>
                  </div>
                </li>
              </Animate.FadeInUp>
              <Animate.FadeInUp>
                <li className="about-item">
                  <div className="content">
                    <IoCheckmarkDone className="icon" />
                    <span className="text">Women's Health issues</span>
                  </div>
                </li>
              </Animate.FadeInUp>
              <Animate.FadeInUp>
                <li className="about-item">
                  <div className="content">
                    <IoCheckmarkDone className="icon" />
                    <span className="text">Medication Questions</span>
                  </div>
                </li>
              </Animate.FadeInUp>
            </ul>
          </Col>
        </Row>
      </div>
    </section>
  );
}
