import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from '../Home/Home';
import ProductDetails from './ProductDetails';
import SingleProduct from './singleProduct';
import {setProducts} from '../../Redux/actions/productAction';
export default function ProductList() {
const Products=useSelector((state)=>state);
const dispatch=useDispatch();
const fetchAllProducts=async()=>{
 const response=await axios.get('https://fakestoreapi.com/products')
 .catch((err)=>{
  console.log("err",err);
 })
 dispatch(setProducts(response.data));

}
useEffect(()=>{
fetchAllProducts();
},[]);
// console.log(Products)
  return (
   
    <>
     <SingleProduct/>
    </>
  )
}
