import { ActionTypes } from "../constans/actionTypes";
import axios from 'axios';
import { useState } from 'react';
import React from 'react'




const intialState={
   products:[]
   
}

export const productReducer=(state=intialState,action)=>{
const {type,payload}=action;
switch (type) {
   case ActionTypes.SET_PRODUCTS:
       return {
        ...state,
       products:payload
    }
       break;

   default:return state
       break;

}

}
export const selsecProductReducer=(state={},action)=>{
   const {type,payload}=action;
   switch (type) {
      case ActionTypes.SELECTED_PRODUCT:
          return {
           ...state,
          ...payload
       }
      default:return state
          break;
   
   }
   
   }