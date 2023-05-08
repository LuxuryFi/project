import React, { useEffect, useState } from "react";
import { Checkbox, Col, Form, Input, Row } from "antd";
import { Link, useParams } from "react-router-dom";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { MdPlace } from "react-icons/md";

import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import Navigation from "../../../../components/Navigation";
import visaLogo from "../../../../assets/img/visa.png";
import momoLogo from "../../../../assets/img/momo.png";
import Button from "../../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPayment,
  selectPaymentIsLoading,
  selectPaymentNeedUpdate,
} from "../../../../store/slices/paymentsSlice";
import { selectCurrentUser } from "../../../../store/slices/usersSlice";

const formItemLayout = {
  labelCol: {
    xl: {
      span: 24,
    },
    lg: {
      span: 24,
    },
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
  },
  wrapperCol: {
    xl: {
      span: 24,
    },
    lg: {
      span: 24,
    },
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
  },
};

export default function Checkout() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { payment_id } = useParams();
  const [mode, setMode] = useState();
  const paymentLoading = useSelector(selectPaymentIsLoading);
  const payment = useSelector(selectPaymentNeedUpdate);
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(fetchPayment(payment_id));
  }, [dispatch, payment_id]);

  useEffect(() => {
    if (currentUser && Object.keys(currentUser).length > 0) {
      form.setFieldsValue({
        first_name: currentUser.first_name,
        last_name: currentUser.last_name,
        email: currentUser.email,
        phone: currentUser.phone,
      });
    }
  });

  const handleSubmit = (value) => {};

  return (
    <>
      <Header />
      <Navigation />
      <div className="checkout-container mg-header">
        <div className="container-fluid">
          <div className="checkout-content">
            <Form
              {...formItemLayout}
              className="checkout-form"
              form={form}
              onFinish={handleSubmit}
              name="checkoutForm"
              scrollToFirstError
            >
              <Row>
                <Col className="left" sm={24} md={16} lg={16} xl={16} xxl={16}>
                  <div className="form-content">
                    <h3 className="title">Personal Information</h3>
                    {/* Patient Information */}
                    <Row>
                      <Col
                        className="left"
                        sm={24}
                        md={12}
                        lg={12}
                        xl={12}
                        xxl={12}
                      >
                        {/* First Name */}
                        <Form.Item
                          className="form-input-group"
                          rules={[
                            {
                              required: true,
                              message: "Please enter your first name!",
                            },
                          ]}
                          label="First Name"
                          name="first_name"
                        >
                          <Input className="input" placeholder="First Name" />
                        </Form.Item>

                        {/* Email */}
                        <Form.Item
                          className="form-input-group"
                          rules={[
                            {
                              required: true,
                              message: "Please enter your email!",
                            },
                            {
                              type: "email",
                              message: "The input is not valid E-mail!",
                            },
                          ]}
                          label="Email"
                          name="email"
                        >
                          <Input
                            className="input"
                            placeholder="abc@gmail.com"
                          />
                        </Form.Item>
                      </Col>
                      <Col
                        className="right"
                        sm={24}
                        md={12}
                        lg={12}
                        xl={12}
                        xxl={12}
                      >
                        {/* Last Name */}
                        <Form.Item
                          className="form-input-group"
                          rules={[
                            {
                              required: true,
                              message: "Please enter your last name!",
                            },
                          ]}
                          label="Last Name"
                          name="last_name"
                        >
                          <Input className="input" placeholder="Last Name" />
                        </Form.Item>

                        {/* Phone */}
                        <Form.Item
                          className="form-input-group"
                          rules={[
                            {
                              required: true,
                              message: "Please enter your phone!",
                            },
                          ]}
                          label="Phone"
                          name="phone"
                        >
                          <Input className="input" placeholder="19908198" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <div className="separate"></div>

                    {/* Payment Method */}
                    <h3 className="title">Payment Method</h3>
                    <div className="payment-method-container">
                      <div className="payment-list">
                        <div
                          className={`payment-item ${
                            mode === "visa" ? "active" : ""
                          }`}
                          onClick={() => setMode("visa")}
                        >
                          <img
                            alt="visa logo"
                            className="payment-image visa"
                            src={visaLogo}
                          />
                        </div>
                        <div
                          className={`payment-item ${
                            mode === "momo" ? "active" : ""
                          }`}
                          onClick={() => setMode("momo")}
                        >
                          <img
                            alt="visa logo"
                            className="payment-image momo"
                            src={momoLogo}
                          />
                        </div>
                      </div>
                      {mode && (
                        <div className="payment-content">
                          <Row>
                            <Col
                              className="left"
                              sm={24}
                              md={12}
                              lg={12}
                              xl={12}
                              xxl={12}
                            >
                              {/* Name on Card */}
                              <Form.Item
                                className="form-input-group"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please enter your name on card!",
                                  },
                                ]}
                                label="Name on Card"
                                name="name_on_card"
                              >
                                <Input
                                  className="input"
                                  placeholder="VU HAI NAM"
                                  onInput={(e) =>
                                    (e.target.value =
                                      e.target.value.toUpperCase())
                                  }
                                />
                              </Form.Item>
                            </Col>
                            <Col
                              className="right"
                              sm={24}
                              md={12}
                              lg={12}
                              xl={12}
                              xxl={12}
                            >
                              {/* Card Number */}
                              <Form.Item
                                className="form-input-group"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please enter your card number!",
                                  },
                                ]}
                                label="Card Number"
                                name="card_number"
                              >
                                <Input
                                  className="input"
                                  placeholder="1234 5678 9876 5432"
                                />
                              </Form.Item>
                            </Col>
                          </Row>

                          <Row>
                            <Col
                              className="left"
                              sm={24}
                              md={8}
                              lg={8}
                              xl={8}
                              xxl={8}
                            >
                              {/* Expiry Month */}
                              <Form.Item
                                className="form-input-group"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please enter expiry month!",
                                  },
                                ]}
                                label="Expiry Month"
                                name="expiry_month"
                              >
                                <Input className="input" placeholder="MM" />
                              </Form.Item>
                            </Col>
                            <Col
                              className="middle"
                              sm={24}
                              md={8}
                              lg={8}
                              xl={8}
                              xxl={8}
                            >
                              {/* Expiry Year */}
                              <Form.Item
                                className="form-input-group"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please enter expiry year!",
                                  },
                                ]}
                                label="Expiry Year"
                                name="expriry_year"
                              >
                                <Input className="input" placeholder="YY" />
                              </Form.Item>
                            </Col>
                            <Col
                              className="right"
                              sm={24}
                              md={8}
                              lg={8}
                              xl={8}
                              xxl={8}
                            >
                              {/* CCV */}
                              <Form.Item
                                className="form-input-group"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please enter ccv!",
                                  },
                                ]}
                                label="CVV"
                                name="cvv"
                              >
                                <Input className="input" />
                              </Form.Item>
                            </Col>
                          </Row>

                          {/* Agreement */}
                          <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            rules={[
                              {
                                validator: (_, value) =>
                                  value
                                    ? Promise.resolve()
                                    : Promise.reject(
                                        new Error("Should accept agreement")
                                      ),
                              },
                            ]}
                            className="agreement-input left"
                          >
                            <Checkbox className="agreement-text">
                              I have read the{" "}
                              <Link to="">Terms & Conditions</Link>
                            </Checkbox>
                          </Form.Item>

                          {/* Button */}
                          <Form.Item className="left">
                            <Button
                              type="submit"
                              className="button button--blue--dark square"
                            >
                              <span>Confirm and Pay</span>
                            </Button>
                          </Form.Item>
                        </div>
                      )}
                    </div>
                  </div>
                </Col>
                <Col className="right" sm={24} md={8} lg={8} xl={8} xxl={8}>
                  <div className="summary-content">
                    <h3 className="title">Booking Summary</h3>
                    <div className="header">
                      <img
                        className="doctor-avatar"
                        alt="doctor avatar"
                        src="https://doccure-react.dreamguystech.com/template/56a326a6aa580d332697e0f26bebf219.jpg"
                      />
                      <div className="doctor-info">
                        <h4 className="name">Dr. Darren Elder</h4>
                        <div className="star-list">
                          <BsStarFill className="icon" />
                          <BsStarFill className="icon" />
                          <BsStarFill className="icon" />
                          <BsStarFill className="icon" />
                          <BsStarHalf className="icon" />
                        </div>
                        <p className="place">
                          <MdPlace className="icon" />
                          <span>New York, USA</span>
                        </p>
                      </div>
                      <div className="separate"></div>
                    </div>
                    <div className="appointment-fee-list">
                      <div className="appointment-fee-item">
                        <span>Date</span>
                        <span>16 Nov 2019</span>
                      </div>
                      <div className="appointment-fee-item">
                        <span>Time</span>
                        <span>10:00 AM</span>
                      </div>
                      <div className="appointment-fee-item">
                        <span>Consulting Fee</span>
                        <span>$100</span>
                      </div>
                      <div className="appointment-fee-item">
                        <span>Booking Fee</span>
                        <span>$10</span>
                      </div>
                      <div className="appointment-fee-item">
                        <span>Video Call</span>
                        <span>$50</span>
                      </div>
                    </div>
                    <div className="separate"></div>
                    <div className="total">
                      <span>Total</span>
                      <span>$160</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
