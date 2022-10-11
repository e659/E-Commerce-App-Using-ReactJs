import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import "./style/cart.scss";
import {removeFromCartAction,increaseAction} from "../../Redux/actions/CartActions"
export default function Cart() {
  const dispatch = useDispatch();
  const Product = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart.cart);
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  console.log(cart);
  // const cartt = useSelector((state) => state.cart);
  // console.log(cartt);
  // removeFromCart
  const removeFromCart = () => {
    dispatch(removeFromCartAction(Product.id));
  };
  // increase
  const increase = () => {
    dispatch(increaseAction(Product.id));
  };
  return (
    <>
      <div className="container pt-5">
        <div className="pt-5 d-flex">
          <p
            className="px-2 fs-4 "
            style={{ color: "#2f3031", fontWeight: "400" }}
          >
            Total:
            <span
              className="px-2 fs-4"
              style={{ color: "#2f3031", fontWeight: "400" }}
            >
              {cartTotal}$
            </span>
          </p>
          <button
            style={{ color: "white", backgroundColor: "darkmagenta" }}
            className="btn clearbtn mb-2"
          >
            Clear(1)
          </button>
        </div>

        {cart.map((product) => (
          <div className="row cartCard  p-3  mt-3" key={product.id}>
            <div className="col-md-12 d-flex justify-content-center ">
              <div className="col-md-7">
                <div className="d-flex cartImg">
                  <img src={product.image} alt="" className="rounded w-25" />

                  <p className=" ps-3 fs-4">
                    {product.title}
                    <span> x ({product.quantity})</span>
                  </p>
                </div>
              </div>
              <div className="col-md-5 pt-4">
                <div className="row pt-5">
                  <div className="col-md-4">
                    <div className="Quantity">
                      <button onClick={increase }
                       className="btn QuantityBtn">+</button>
                      <span
                        className="px-2 fs-4"
                        style={{ color: "#2f3031", fontWeight: "400" }}
                      >
                        {product.quantity}
                      </span>
                      <button className="btn QuantityBtn">-</button>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <p className="fs-3">  {product.price}$</p>
                  </div>
                  <div className="col-md-4">
                    <button 
                    onClick={removeFromCart }
                    className="btn">
                      <AiOutlineClose size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="col-md-12 d-flex justify-content-center">
            <div className="col-md-7">
              <div className="d-flex cartImg">
                <img src={tshirt} alt="" className="rounded w-25" />

                <p className=" ps-3 fs-4">55555</p>
              </div>
            </div>
            <div className="col-md-5 pt-4">
              <div className="row pt-5">
                <div className="col-md-4">
                  <div className="Quantity">
                    <button className="btn QuantityBtn">+</button>
                    <span
                      className="px-2 fs-4"
                      style={{ color: "#2f3031", fontWeight: "400" }}
                    >
                      2
                    </span>
                    <button className="btn QuantityBtn">-</button>
                  </div>
                </div>
                <div className="col-md-4">
                  <p className="fs-3">1789$</p>
                </div>
                <div className="col-md-4">
                  <button className="btn">
                    <AiOutlineClose size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div> */}
      </div>
    </>
  );
}
