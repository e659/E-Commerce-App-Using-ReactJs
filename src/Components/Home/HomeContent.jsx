import React from 'react';
import Home from './Home';
import ProductList from '../Products/ProductList';
import Filters from '../Filters/filters';
export default function HomeContent() {
  return (
    <>
      <Home/>
      <div className="container-fluid">
        <div className="row py-5">
          <div className="col-md-2">
          <Filters/>
          </div>
          <div className="col-md-10">
          <ProductList/>
          </div>
        </div>
      </div>
     
    </>
  )
}
