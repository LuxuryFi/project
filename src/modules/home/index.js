import React, { useEffect } from 'react';
import { Col, Form, Row, Input } from 'antd';
import { BsSearch, BsSquareFill } from 'react-icons/bs';
import { BiNotepad } from 'react-icons/bi';
import { GiReceiveMoney } from 'react-icons/gi';
import { FaRegHospital, FaGlassCheers, FaRegCalendarAlt } from 'react-icons/fa';
import { IoEarth } from 'react-icons/io5';
import { FaBacteria } from 'react-icons/fa';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { MdOutlineFaceUnlock } from 'react-icons/md';
import {
  RiMentalHealthLine,
  RiAppsLine,
  RiNurseFill,
  RiLiveLine,
} from 'react-icons/ri';
import moment from 'moment';
import Typewriter from 'typewriter-effect';
import ScrollToTop from 'react-scroll-to-top';

import bgDoctor from '../../assets/img/banner-bg-doctor.png';
import bgApp from '../../assets/img/app-bg.png';
import solutions from '../../assets/img/solutions.png';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import { Animate } from '../../components/AnimateIn';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchArticlesLatest,
  selectArticlesLatest,
} from '../../store/slices/articlesSlice';
import Doctor from '../../components/Doctor';
import Appointment from '../../components/Appointment';
import AboutUs from '../../components/AboutUs';

export default function HomePage() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  // const [appointmentForm] = Form.useForm();
  const articlesLatest = useSelector(selectArticlesLatest);

  useEffect(() => {
    dispatch(fetchArticlesLatest());
  }, [dispatch]);

  const handleSubmitSearch = () => {};

  return (
    <div className="app-container">
      <Header />
      {/* Banner */}
      <section className="banner-container">
        <ScrollToTop smooth color="#6f00ff" />
        <Navigation />
        <Row className="container-fluid banner-content">
          <Col className="left" xs={0} sm={0} md={12} lg={12} xl={12}>
            <div className="content">
              <Typewriter
                options={{
                  strings: [
                    'TeleHealth Services Rapid Response To Coronavirus Pandemic ',
                    'The world’s most advanced equipment',
                  ],
                  autoStart: true,
                  loop: true,
                  pauseFor: 3000,
                }}
              />
              <p className="sub-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse.
              </p>
              <Form
                className="search-article-form"
                form={form}
                onFinish={handleSubmitSearch}
                name="searchForm"
                scrollToFirstError
              >
                <Form.Item name="article_name" className="input-name-container">
                  <Input
                    className="input"
                    placeholder="Enter your article name!"
                  />
                </Form.Item>

                <Form.Item>
                  <Button className="button square button--blue--dark">
                    <span>Search</span>
                    <BsSearch className="icon" />
                  </Button>
                </Form.Item>
              </Form>
              <div className="make-appointment-container">
                <Button className="button button--blue--light">
                  Make an appointment
                </Button>
              </div>
            </div>
          </Col>
          <Col className="right" xs={0} sm={0} md={12} lg={12} xl={12}>
            <img alt="banner background doctor" src={bgDoctor} />
          </Col>
        </Row>
      </section>

      {/* Service */}
      <section className="service-container container-space">
        <div className="container-fluid">
          <div className="service-list">
            <Animate.FadeInLeft>
              <div className="service-item">
                <div className="icon-container">
                  <GiReceiveMoney className="icon" />
                </div>
                <h3 className="title">Reduce Helth Care Cost</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </Animate.FadeInLeft>
            <Animate.FadeInUp>
              <div className="service-item">
                <div className="icon-container">
                  <BiNotepad className="icon" />
                </div>
                <h3 className="title">Reduce Pressure On Medical Staff</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </Animate.FadeInUp>
            <Animate.FadeInRight>
              <div className="service-item">
                <div className="icon-container">
                  <FaRegHospital className="icon" />
                </div>
                <h3 className="title">Continuum Of Care</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </Animate.FadeInRight>
          </div>
        </div>
      </section>

      {/* About */}
      <AboutUs />

      {/* Features */}
      <section className="feature-container container-space">
        <div className="container-fluid feature-content">
          <div className="title">
            <Animate.FadeInDown>
              <span>Our Services</span>
            </Animate.FadeInDown>
            <Animate.FadeInLeft>
              <h2>Our Healthcare Services</h2>
            </Animate.FadeInLeft>
            <Animate.FadeInRight>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse
              </p>
            </Animate.FadeInRight>
          </div>
          <div className="feature-list">
            <Animate.FadeInDown>
              <div className="feature-item">
                <div className="icon-container">
                  <div className="icon-content">
                    <FaBacteria className="icon" />
                  </div>
                </div>
                <h3 className="title">COVID-19 Consulting</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <Button className="button button--text--blue">
                  <span>Read more</span>
                  <span className="icon">&#43;</span>
                </Button>
              </div>
            </Animate.FadeInDown>
            <Animate.FadeInDown>
              <div className="feature-item">
                <div className="icon-container">
                  <div className="icon-content">
                    <HiOutlineShieldCheck className="icon" />
                  </div>
                </div>
                <h3 className="title">COVID-19 Consulting</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <Button className="button button--text--blue">
                  <span>Read more</span>
                  <span className="icon">&#43;</span>
                </Button>
              </div>
            </Animate.FadeInDown>
            <Animate.FadeInDown>
              <div className="feature-item">
                <div className="icon-container">
                  <div className="icon-content">
                    <MdOutlineFaceUnlock className="icon" />
                  </div>
                </div>
                <h3 className="title">Demartology</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <Button className="button button--text--blue">
                  <span>Read more</span>
                  <span className="icon">&#43;</span>
                </Button>
              </div>
            </Animate.FadeInDown>
            <Animate.FadeInUp>
              <div className="feature-item">
                <div className="icon-container">
                  <div className="icon-content">
                    <RiMentalHealthLine className="icon" />
                  </div>
                </div>
                <h3 className="title">Mental Health</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <Button className="button button--text--blue">
                  <span>Read more</span>
                  <span className="icon">&#43;</span>
                </Button>
              </div>
            </Animate.FadeInUp>
            <Animate.FadeInUp>
              <div className="feature-item">
                <div className="icon-container">
                  <div className="icon-content">
                    <FaGlassCheers className="icon" />
                  </div>
                </div>
                <h3 className="title">Orthopedics</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <Button className="button button--text--blue">
                  <span>Read more</span>
                  <span className="icon">&#43;</span>
                </Button>
              </div>
            </Animate.FadeInUp>
            <Animate.FadeInUp>
              <div className="feature-item">
                <div className="icon-container">
                  <div className="icon-content">
                    <IoEarth className="icon" />
                  </div>
                </div>
                <h3 className="title">Gynecological</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <Button className="button button--text--blue">
                  <span>Read more</span>
                  <span className="icon">&#43;</span>
                </Button>
              </div>
            </Animate.FadeInUp>
          </div>
        </div>
      </section>

      {/* App */}
      <section className="app-container container-space">
        {/* <div className="container-fluid"> */}
        <Row className="app-content">
          <Col className="left" xs={24} sm={24} md={12} lg={12} xl={12}>
            <Animate.ScaleInTop>
              <img src={bgApp} alt="appointment background" className="image" />
            </Animate.ScaleInTop>
          </Col>
          <Col className="right" xs={24} sm={24} md={12} lg={12} xl={12}>
            <Animate.FadeInDown>
              <h4 className="heading test">Appointment</h4>
              <h3 className="title">How To Get Started By Using Our App</h3>
              <p className="description">
                Many healthcare systems around the world together with
                government agencies and startup companies are building and
                delivering Telehealth solutions
              </p>
            </Animate.FadeInDown>
            <ul className="app-list">
              <Animate.FadeInRight>
                <li className="app-item">
                  <div className="left">
                    <div className="icon-container">
                      <FaRegCalendarAlt className="icon" />
                    </div>
                  </div>
                  <div className="right">
                    <h3 className="title">Pick Your Package</h3>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </li>
              </Animate.FadeInRight>
              <Animate.FadeInRight>
                <li className="app-item">
                  <div className="left">
                    <div className="icon-container">
                      <RiAppsLine className="icon" />
                    </div>
                  </div>
                  <div className="right">
                    <h3 className="title">Tinzer App Setup</h3>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </li>
              </Animate.FadeInRight>
              <Animate.FadeInRight>
                <li className="app-item">
                  <div className="left">
                    <div className="icon-container">
                      <RiNurseFill className="icon" />
                    </div>
                  </div>
                  <div className="right">
                    <h3 className="title">Patient Onboarding</h3>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </li>
              </Animate.FadeInRight>
              <Animate.FadeInRight>
                <li className="app-item">
                  <div className="left">
                    <div className="icon-container">
                      <RiLiveLine className="icon" />
                    </div>
                  </div>
                  <div className="right">
                    <h3 className="title">Going Live</h3>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </li>
              </Animate.FadeInRight>
            </ul>
          </Col>
        </Row>
      </section>

      {/* Solutions */}
      <section className="solution-container container-space">
        <div className="container-fluid">
          <Row className="solution-content">
            <Col className="left" xs={24} sm={24} md={12} lg={12} xl={12}>
              <Animate.FadeInDown>
                <h4 className="heading">About Us</h4>
                <h3 className="title">
                  Telehealth Virtual Health Care Solutions
                </h3>
                <p className="description">
                  Many healthcare systems around the world together with
                  government agencies and startup companies are building and
                  delivering Telehealth solutions.
                </p>
              </Animate.FadeInDown>
              <ul className="solution-list">
                <Animate.FadeInLeft>
                  <li className="solution-item">
                    <div className="content">
                      <BsSquareFill className="icon" />
                      <span className="text">Tinger eConsult Program</span>
                    </div>
                  </li>
                </Animate.FadeInLeft>
                <Animate.FadeInLeft>
                  <li className="solution-item">
                    <div className="content">
                      <BsSquareFill className="icon" />
                      <span className="text">Provide More Potential Video</span>
                    </div>
                  </li>
                </Animate.FadeInLeft>
                <Animate.FadeInLeft>
                  <li className="solution-item">
                    <div className="content">
                      <BsSquareFill className="icon" />
                      <span className="text">Remote Monitoring</span>
                    </div>
                  </li>
                </Animate.FadeInLeft>
                <Animate.FadeInLeft>
                  <li className="solution-item">
                    <div className="content">
                      <BsSquareFill className="icon" />
                      <span className="text">Mental Health Solutions</span>
                    </div>
                  </li>
                </Animate.FadeInLeft>
                <Animate.FadeInLeft>
                  <li className="solution-item">
                    <div className="content">
                      <BsSquareFill className="icon" />
                      <span className="text">
                        Surgical Transition Solutions
                      </span>
                    </div>
                  </li>
                </Animate.FadeInLeft>
              </ul>
            </Col>
            <Col className="right" xs={24} sm={24} md={12} lg={12} xl={12}>
              <Animate.ScaleInTop>
                <img src={solutions} alt="solution img" className="image" />
              </Animate.ScaleInTop>
            </Col>
          </Row>
        </div>
      </section>

      {/* Doctor */}
      <Doctor />

      {/* Appointment */}
      <Appointment />

      {/* News */}
      <section className="news-container container-space">
        <div className="container-fluid">
          <div className="news-content">
            <Animate.FadeInDown>
              <div className="section-title">
                <h4 className="heading">News</h4>
                <h3 className="title">Our Latest News</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum su
                </p>
              </div>
            </Animate.FadeInDown>
            <div className="news-list">
              {articlesLatest
                .slice(articlesLatest.length - 3)
                .map((article, index) => (
                  <Animate.FadeInDown key={index}>
                    <figure className="news-item">
                      <Link to={`/articles/detail/${article.slug}`}>
                        <img
                          className="new-image"
                          alt="new img"
                          src={article.image}
                        />
                        <figcaption className="content">
                          <span className="date">
                            {moment(article.created_date).format('MMM Do YY')}
                          </span>
                          <div className="content-overlay">
                            <h3 className="title">{article.title}</h3>
                            <Button className="button button--text--blue">
                              <span>Read more</span>
                              <span className="icon">&#43;</span>
                            </Button>
                          </div>
                        </figcaption>
                      </Link>
                    </figure>
                  </Animate.FadeInDown>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
