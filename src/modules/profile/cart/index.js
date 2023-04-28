import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCart,
  selectAllItemInCart,
} from "../../../store/slices/cartSlice";
import { Form, InputNumber } from "antd";
import Button from "../../../components/Button";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(selectAllItemInCart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleOnChangeAmount = () => {};

  const handleCreatePayment = () => {};

  return (
    <div className="cart-container">
      <div className="cart-content">
        {Object.keys(cart).length > 0 &&
          cart.map((item, index) => (
            <div key={item.product.title + index} className="cart-item">
              <img
                alt="cover book"
                className="img"
                src={`${process.env.REACT_APP_API_URL}/documents/${item.product.documents[0].document}`}
              />
              <h3 className="name">{item.product.title}</h3>
              <h4 className="price">₫{item.product.price}</h4>
              <div className="quantity-container">
                <Button
                  onClick={handleOnChangeAmount}
                  disabled={item.amount === 0 ?? true}
                  className="button square button--light prev"
                  type="button"
                >
                  <AiOutlineMinus className="icon" />
                </Button>
                <div className="quantity-input-container">
                  <InputNumber
                    min={0}
                    max={item.product.amount}
                    value={item.amount}
                    controls={false}
                    className="input-quantity"
                  />
                </div>
                <Button
                  onClick={handleOnChangeAmount}
                  disabled={false}
                  className="button square button--light next"
                  type="button"
                >
                  <AiOutlinePlus className="icon" />
                </Button>
              </div>
              <h4 className="total">₫{item.product.price * item.amount}</h4>
              <Button className="button button--text--red" type="button">
                Delete
              </Button>
            </div>
          ))}
      </div>

      <Button
        onClick={handleCreatePayment}
        disabled={false}
        className="button button--main--book"
        type="button"
      >
        <span>Create a payment</span>
      </Button>
    </div>
  );
}
