import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import shirt from "../../images/t-shirt.jpg";
import "./styles/singleProduct.scss";

export default function SingleProduct() {
  const Products = useSelector((state) => state.allProducts.products);
  const Product = useSelector((state) => state.product);
  // console.log(Product);
  const [showMore, setShowMore] = useState(false);
  const numberOfItems = showMore ? Products.length : 4;

  return (
    <>
      <div className="container">
        <div className="row py-1 gy-4">
          {Products.slice(0, numberOfItems).map((product) => (
            <div className="col-md-3" key={product.id}>
              {/* how to navigate  to detailspage using reactRouter Dom */}
              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="card " style={{ cursor: "pointer" }}>
                  <div className="d-flex justify-content-center">
                    <img
                      src={product.image}
                      className="card-img-top pt-4 "
                      alt="product"
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title" style={{ fontSize: "15px" }}>
                      {product.title}
                    </h5>

                    <p
                      className="price"
                      style={{ fontSize: "18px", fontWeight: "500" }}
                    >
                      ${product.price}
                    </p>
                    {/* <button onClick={addToCart} className="btn ">
                      Add To Cart
                    </button> */}
                  </div>
                </div>
              </Link>
            </div>
          ))}

          <div className="loadMore d-flex justify-content-center pt-5">
            {showMore ? (
              <button
                onClick={() => setShowMore(!showMore)}
                className="btn btn-outline-primary"
              >
                Load less
              </button>
            ) : (
              <button
                onClick={() => setShowMore(!showMore)}
                className="btn btn-outline-primary"
              >
                Load more
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
