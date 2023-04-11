import React, { useEffect } from "react";
import { Col, Row } from "antd";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import ScrollToTop from "react-scroll-to-top";

import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {
  fetchBestSeller,
  fetchNewest,
  fetchTrending,
  selectBestSellerBooks,
  selectNewestBooks,
  selectTrendingBooks,
} from "../../store/slices/booksSlice";

const mockAPI = [
  {
    name: "A doctor in the house",
    cover:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/book11-copyright.jpg",
    author: "Candy Carson",
    price_from: "6.50",
    price_to: "16.99",
  },
  {
    name: "Wildflower",
    cover:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/book13-copyright.jpg",
    author: "Drew Berrymore",
    price_from: "10.99",
    price_to: "20.00",
  },
  {
    name: "New Galaxy",
    cover:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/book8-copyright.jpg",
    author: "Richard Mann",
    price_from: "7.90",
    price_to: "16.90",
  },
  {
    name: "The Long Road to the Depp Silence",
    cover:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/book5-copyright.jpg",
    author: "Richard Mann",
    price_from: "12.00",
    price_to: "22.00",
  },
  {
    name: "Life in the Garden",
    cover:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/book4-copyright.jpg",
    author: "Candy Carson",
    price_from: "11.99",
    price_to: "25.00",
  },
  {
    name: "It's a Really Strange Story",
    cover:
      "https://booklovers.ancorathemes.com/wp-content/uploads/2020/05/book12-copyright.jpg",
    author: "Burt Geller",
    price_from: "8.00",
    price_to: "18.00",
  },
];

const settings = {
  dots: true,
  arrows: false,
  adaptiveHeight: true,
  swipe: true,
  autoplay: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  customPaging: (i) => <div className="button-slide" />,
  // nextArrow: <FaAngleRight />,
  // prevArrow: <FaAngleLeft />,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function HomePage() {
  const dispatch = useDispatch();
  const trendingBooks = useSelector(selectTrendingBooks);
  const bestSellerBooks = useSelector(selectBestSellerBooks);
  const newestBooks = useSelector(selectNewestBooks);

  // Fetch Trending
  useEffect(() => {
    dispatch(fetchTrending());
  }, [dispatch]);

  // Fetch Best Seller
  useEffect(() => {
    dispatch(fetchBestSeller());
  }, [dispatch]);

  // // Fetch Newest
  useEffect(() => {
    dispatch(fetchNewest());
  }, [dispatch]);

  return (
    <div className="app-container">
      <Header />
      {/* Banner */}
      <section className="banner-container">
        <ScrollToTop smooth color="#6f00ff" />
        <Navigation />
        <Row className="container-fluid banner-content">
          <Col className="left" xs={0} sm={0} md={6} lg={6} xl={6}>
            <div className="content">
              <Typewriter
                options={{
                  strings: [
                    "TeleHealth Services Rapid Response To Coronavirus Pandemic ",
                    "The world’s most advanced equipment",
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
            </div>
          </Col>
          <Col className="right" xs={0} sm={0} md={12} lg={12} xl={12}>
            <div></div>
          </Col>
        </Row>
      </section>

      {/* Discover */}
      <section className="discover-container container-space">
        <div className="container-fluid">
          <h3 className="title">Discover Your Next Book</h3>
          <div className="discover-content">
            <h4 className="heading">New Releases</h4>
            <Row className="discover-list" gutter={{ xl: 30, lg: 30 }}>
              {mockAPI.map((item, index) => (
                <Col xl={4} className="item" key={item.name + index}>
                  <img alt="img" src={item.cover} className="cover" />
                  <div className="bottom">
                    <div className="info">
                      <h3 className="name">{item.name}</h3>
                      <p className="author">{item.author}</p>
                    </div>
                    <p className="prices">
                      ${item.price_from} - ${item.price_to}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </section>

      {/* Trending */}
      <section className="trending-container container-space">
        <div className="container-fluid">
          <h3 className="title">Choose Trending Book</h3>
          <div className="trending-content">
            <h4 className="heading">Trending</h4>
            <div className="trending-list">
              <Slider {...settings}>
                {trendingBooks &&
                  trendingBooks.map((item, index) => (
                    <div className="item" key={item.name + index}>
                      <img
                        alt="img"
                        src={
                          item.document[0]
                            ? `http://localhost:3001/documents/${item.document[0].document}`
                            : mockAPI[3].cover
                        }
                        className="cover"
                      />
                      <div className="bottom">
                        <div className="info">
                          <h3 className="name">
                            {item.title ? item.title : mockAPI[3].name}
                          </h3>
                          <p className="author">{mockAPI[3].author}</p>
                        </div>
                        <p className="prices">
                          ${mockAPI[3].price_from} - ${mockAPI[3].price_to}
                        </p>
                      </div>
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* Best Seller */}
      <section className="best-seller-container container-space">
        <div className="container-fluid">
          <h3 className="title">Choose Best Seller Book</h3>
          <div className="best-seller-content">
            <h4 className="heading">Best Seller</h4>
            <div className="best-seller-list">
              <Slider {...settings}>
                {bestSellerBooks &&
                  bestSellerBooks.map((item, index) => (
                    <div className="item" key={item.name + index}>
                      <img
                        alt="img"
                        src={
                          item.document[0]
                            ? `http://localhost:3001/documents/${item.document[0].document}`
                            : mockAPI[3].cover
                        }
                        className="cover"
                      />
                      <div className="bottom">
                        <div className="info">
                          <h3 className="name">
                            {item.title ? item.title : mockAPI[3].name}
                          </h3>
                          <p className="author">{mockAPI[3].author}</p>
                        </div>
                        <p className="prices">
                          ${mockAPI[3].price_from} - ${mockAPI[3].price_to}
                        </p>
                      </div>
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* Newest */}
      <section className="newest-container container-space">
        <div className="container-fluid">
          <h3 className="title">Choose The Newest Book</h3>
          <div className="newest-content">
            <h4 className="heading">Newest</h4>
            <div className="newest-list">
              <Slider {...settings}>
                {newestBooks &&
                  newestBooks.map((item, index) => (
                    <div className="item" key={item.name + index}>
                      <img
                        alt="img"
                        src={
                          item.document[0]
                            ? `http://localhost:3001/documents/${item.document[0].document}`
                            : mockAPI[3].cover
                        }
                        className="cover"
                      />
                      <div className="bottom">
                        <div className="info">
                          <h3 className="name">
                            {item.title ? item.title : mockAPI[3].name}
                          </h3>
                          <p className="author">{mockAPI[3].author}</p>
                        </div>
                        <p className="prices">
                          ${mockAPI[3].price_from} - ${mockAPI[3].price_to}
                        </p>
                      </div>
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
