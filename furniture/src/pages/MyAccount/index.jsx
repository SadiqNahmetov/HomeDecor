import React,{useState} from "react";
import Form from "../../components/Form";
import changeTitle from "../../utils/Change";
import WishList from "../../components/WishList";

function MyAccount() {

  useState(()=>{
    changeTitle("My Account")
  })
  return(
   <>
   
   <Form />
   
   </>
  )

}

export default MyAccount;
