import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Col, Form, InputNumber, Row } from "antd";
import Navigation from "../../../components/Navigation";
import Button from "../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectBookNeedUpdate } from "../../../store/slices/booksSlice";
import { fetchOneBook } from "../../../store/slices/booksSlice";

const mockAPI = {
  product_id: 13,
  category_name: "31233",
  title: "The Dancing Zodiac",
  description:
    "Chocolate cake lollipop tart cake marzipan toffee jelly-o powder. Marshmallow chocolate tiramisu. Tootsie roll liquorice chupa chups muffin jelly beans jelly-o cotton candy. Cupcake marshmallow muffin jelly cupcake tiramisu pie. Jujubes lemon drops gummies fruitcake. Liquorice fruitcake bear claw. Dessert soufflé brownie cupcake carrot cake cheesecake icing. Chocolate cake sesame snaps dragée caramels brownie caramels chocolate brownie. Cheesecake ice cream oat cake.",
  status: null,
  brand_name: "31",
  supplier_name: "Tien Tho BookStore",
  created_date: "2023-03-28T16:03:17.000Z",
  updated_date: null,
  document: [
    {
      document_id: 1,
      user_id: null,
      document: "1680019549-indexx.png",
      product_id: 13,
      file_type: "png",
      created_date: "2023-03-28T16:03:17.000Z",
      updated_date: null,
    },
    {
      document_id: 2,
      user_id: null,
      document: "1680019549-indexx.png",
      product_id: 13,
      file_type: "png",
      created_date: "2023-03-28T16:03:17.000Z",
      updated_date: null,
    },
    {
      document_id: 2,
      user_id: null,
      document: "1680019549-indexx.png",
      product_id: 13,
      file_type: "png",
      created_date: "2023-03-28T16:03:17.000Z",
      updated_date: null,
    },
    {
      document_id: 2,
      user_id: null,
      document: "1680019549-indexx.png",
      product_id: 13,
      file_type: "png",
      created_date: "2023-03-28T16:03:17.000Z",
      updated_date: null,
    },
  ],
};

export default function BookDetail() {
  const dispatch = useDispatch();
  const { book_id } = useParams();
  const [formAddToCart] = Form.useForm();
  const bookNeedUpdate = useSelector(selectBookNeedUpdate);
  const [quantity, setQuantity] = useState(0);

  // Fill value to input quantity
  useEffect(() => {
    formAddToCart.setFieldsValue({
      quantity: quantity,
    });
  }, [formAddToCart, quantity]);

  // Get exact book
  useEffect(() => {
    if (book_id) {
      dispatch(fetchOneBook());
    }
  }, [book_id, dispatch]);

  const handleFinishOrder = (values) => {};

  const handleClickMinus = () => {
    if (quantity === 0) return false;
    setQuantity((prev) => prev - 1);
  };

  const handleClickPlus = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = (values) => {
    console.log(values);
  };

  return (
    <div className="app-container ">
      <Header />
      <Navigation />

      <div className="book-detail-container container-space">
        <div className="container-fluid">
          <Row className="book-detail-content">
            <Col xl={8}>
              <div className="image-container">
                <img
                  className="image-current"
                  src={`http://localhost:3001/documents/${mockAPI.document[1].document}`}
                  alt="current product"
                />
                <div className="image-list">
                  {mockAPI.document.map((src, index) => (
                    <img
                      key={src.document + index}
                      className="image-item"
                      alt="remaing img current"
                      src={`http://localhost:3001/documents/${src.document}`}
                    />
                  ))}
                </div>
              </div>
            </Col>
            <Col xl={16}>
              <div className="book-info-container">
                <h2 className="book-title">{mockAPI.title}</h2>
                <div className="rate-container">
                  <div className="stars-list">
                    <span className="num">4.5</span>
                    <div className="stars">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarHalf />
                    </div>
                  </div>
                  <div className="rates">
                    <span className="num">482</span>
                    <span className="text">Ratings</span>
                  </div>
                  <div className="solds">
                    <span className="num">1,5k</span>
                    <span className="text">Sold</span>
                  </div>
                </div>
                <div className="price-container">
                  <span className="prev">₫500.000</span>
                  <span className="current">₫299.000</span>
                  <span className="sale">40% OFF</span>
                </div>
                <div className="voucher-container">
                  <h3 className="title">Shop Vouchers</h3>
                  <span className="sale">₫30k OFF</span>
                  <span className="sale">₫40k OFF</span>
                </div>
                <div className="supplier-container">
                  <h3 className="title">Supplier</h3>
                  <span className="value">{mockAPI.supplier_name}</span>
                </div>
                <div className="quantity-container">
                  <h3 className="title">Quantity</h3>
                  <div className="quantity-content">
                    <Form
                      form={formAddToCart}
                      scrollToFirstError
                      onFinish={handleFinishOrder}
                    >
                      <div className="form-container">
                        <Button
                          onClick={handleClickMinus}
                          disabled={quantity === 0}
                          className="button square button--light prev"
                          type="button"
                        >
                          <AiOutlineMinus className="icon" />
                        </Button>
                        <Form.Item
                          name="quantity"
                          className="quantity-input-container"
                        >
                          <InputNumber
                            controls={false}
                            className="input-quantity"
                          />
                        </Form.Item>
                        <Button
                          onClick={handleClickPlus}
                          disabled={false}
                          className="button square button--light next"
                          type="button"
                        >
                          <AiOutlinePlus className="icon" />
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
                <div className="actions-container">
                  <Button
                    onClick={handleAddToCart}
                    disabled={false}
                    className="button square button--light addToCart-btn"
                    type="button"
                  >
                    <AiOutlineShoppingCart className="icon" />
                    <span>Add to cart</span>
                  </Button>

                  <Button
                    onClick={handleAddToCart}
                    disabled={false}
                    className="button square button--light buyNow-btn"
                    type="button"
                  >
                    <span>Buy now</span>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>

          <Row
            className="book-info-content"
            gutter={{
              xl: 10,
            }}
          >
            <Col xl={18}>
              <div className="book-info-item">
                <h2 className="title">Book Description</h2>
                <p className="description">{mockAPI.description}</p>
              </div>

              <div className="book-info-item">
                <h2 className="title">Book Ratings</h2>
                <div className="comment-list">
                  <div className="comment-item">
                    <img
                      alt="avatar"
                      src="https://i.pinimg.com/474x/79/07/ac/7907ac00c309d7ce9e428a7f52eea769.jpg"
                      className="avatar"
                    ></img>
                    <div className="comment-content">
                      <h3 className="username">greenwich university</h3>
                      <div className="stars-list">
                        <div className="stars">
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarHalf />
                        </div>
                      </div>
                      <p className="date">2023-02-20 19:30</p>
                      <p className="description">
                        Integer pulvinar, purus non consectetur varius, enim
                        ligula molestie velit, vitae lobortis libero dui sit
                        amet nibh. Sed consectetur at magna id tempor. Sed
                        ornare lectus id lectus porta, eget elementum est
                        commodo. Fusce at ultrices neque, vitae vestibulum diam.
                        Vivamus a elit ut risus rhoncus posuere. Morbi ut risus
                        id lorem scelerisque tincidunt eu sit amet enim.
                        Maecenas justo elit, consectetur a fringilla a, mollis
                        in libero. Cras facilisis tortor a libero finibus
                        interdum. Curabitur porttitor quam vitae commodo
                        rhoncus. Nunc blandit sollicitudin suscipit. Vestibulum
                        ante ipsum primis in faucibus orci luctus et ultrices
                        posuere cubilia curae; Etiam dictum ac nulla vitae
                        efficitur. Nam quis ex lacus. Aenean sagittis nisi
                        purus, ut placerat turpis viverra non. Nunc porttitor
                        varius mauris, sit amet tempor turpis accumsan ac. Ut at
                        blandit augue.
                      </p>
                    </div>
                  </div>
                  <div className="comment-item">
                    <img
                      alt="avatar"
                      src="https://i.pinimg.com/474x/79/07/ac/7907ac00c309d7ce9e428a7f52eea769.jpg"
                      className="avatar"
                    ></img>
                    <div className="comment-content">
                      <h3 className="username">greenwich university</h3>
                      <div className="stars-list">
                        <div className="stars">
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarHalf />
                        </div>
                      </div>
                      <p className="date">2023-02-20 19:30</p>
                      <p className="description">
                        Integer pulvinar, purus non consectetur varius, enim
                        ligula molestie velit, vitae lobortis libero dui sit
                        amet nibh. Sed consectetur at magna id tempor. Sed
                        ornare lectus id lectus porta, eget elementum est
                        commodo. Fusce at ultrices neque, vitae vestibulum diam.
                        Vivamus a elit ut risus rhoncus posuere. Morbi ut risus
                        id lorem scelerisque tincidunt eu sit amet enim.
                        Maecenas justo elit, consectetur a fringilla a, mollis
                        in libero. Cras facilisis tortor a libero finibus
                        interdum. Curabitur porttitor quam vitae commodo
                        rhoncus. Nunc blandit sollicitudin suscipit. Vestibulum
                        ante ipsum primis in faucibus orci luctus et ultrices
                        posuere cubilia curae; Etiam dictum ac nulla vitae
                        efficitur. Nam quis ex lacus. Aenean sagittis nisi
                        purus, ut placerat turpis viverra non. Nunc porttitor
                        varius mauris, sit amet tempor turpis accumsan ac. Ut at
                        blandit augue.
                      </p>
                    </div>
                  </div>
                  <div className="comment-item">
                    <img
                      alt="avatar"
                      src="https://i.pinimg.com/474x/79/07/ac/7907ac00c309d7ce9e428a7f52eea769.jpg"
                      className="avatar"
                    ></img>
                    <div className="comment-content">
                      <h3 className="username">greenwich university</h3>
                      <div className="stars-list">
                        <div className="stars">
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarHalf />
                        </div>
                      </div>
                      <p className="date">2023-02-20 19:30</p>
                      <p className="description">
                        Integer pulvinar, purus non consectetur varius, enim
                        ligula molestie velit, vitae lobortis libero dui sit
                        amet nibh. Sed consectetur at magna id tempor. Sed
                        ornare lectus id lectus porta, eget elementum est
                        commodo. Fusce at ultrices neque, vitae vestibulum diam.
                        Vivamus a elit ut risus rhoncus posuere. Morbi ut risus
                        id lorem scelerisque tincidunt eu sit amet enim.
                        Maecenas justo elit, consectetur a fringilla a, mollis
                        in libero. Cras facilisis tortor a libero finibus
                        interdum. Curabitur porttitor quam vitae commodo
                        rhoncus. Nunc blandit sollicitudin suscipit. Vestibulum
                        ante ipsum primis in faucibus orci luctus et ultrices
                        posuere cubilia curae; Etiam dictum ac nulla vitae
                        efficitur. Nam quis ex lacus. Aenean sagittis nisi
                        purus, ut placerat turpis viverra non. Nunc porttitor
                        varius mauris, sit amet tempor turpis accumsan ac. Ut at
                        blandit augue.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={6}>
              <div className="book-info-item voucher-container">
                <h2 className="title">Shop Vouchers</h2>
                <div className="voucher-item">
                  <div className="left">
                    <p className="sale">₫30k off</p>
                    <p className="min-spend">Min. Spend ₫500k</p>
                    <span className="expired-date">Valid Till: 30.07.2023</span>
                  </div>
                  <div className="right">
                    <Button
                      onClick={() => {}}
                      disabled={false}
                      className="button square button--light buyNow-btn"
                      type="button"
                    >
                      <span>Claim</span>
                    </Button>
                  </div>
                </div>
                <div className="voucher-item">
                  <div className="left">
                    <p className="sale">₫30k off</p>
                    <p className="min-spend">Min. Spend ₫500k</p>
                    <span className="expired-date">Valid Till: 30.07.2023</span>
                  </div>
                  <div className="right">
                    <Button
                      onClick={() => {}}
                      disabled={false}
                      className="button square button--light buyNow-btn"
                      type="button"
                    >
                      <span>Claim</span>
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
}
