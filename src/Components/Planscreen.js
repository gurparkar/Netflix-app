
import React, { useEffect, useState } from 'react'
import  db  from '../firebase1.js'

import { collection, query, where, getDocs, limit} from "firebase/firestore";

import { useSelector } from 'react-redux';

import { selectUser } from '../features/userSlice';

import '../PlanScreen.css'


function Planscreen() {
  const[ products, setProducts] = useState();
  const[ productId, setProductId] = useState([])

  const user=useSelector(selectUser);

  

  useEffect(() => {

    async function fetchData(){
        const products = {}
        const id =[]

      const querySnapshot = await getDocs(collection(db, "products"), where("active", "==", true), limit(2));
       
      querySnapshot.forEach( async (doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => " , doc.data());

        products[doc.id] = doc.data()
        id.push(doc.id)


        const priceSnap = await getDocs(collection(doc.ref, "prices"));
        priceSnap.forEach( priceDoc => {
          products[doc.id].prices = {
               priceId: priceDoc.id,
               priceData: priceDoc.data()
          }
        })
       

  
      });
      setProducts(products)
      setProductId(id)
    
    }
     
    fetchData()
  
      
   
  
  
  }, [])
  
  
  
 
  console.log(products)

  const loadCheckout = async (priceId) =>{
    const todoRef = collection(db, 'customers')
    const  allTodos = await getDocs(todoRef);

   allTodos.forEach( async (doc) => {
         console.log(doc.data())
  })}

  return (
    <div className = "plansScreen">
      {products && Object.entries(products).map(([productId, productData]) =>{
        return (
          <div className = "planScreen__plan" key ={productId}>
              <div className='planScreen__info'>
                <h5> {productData.name}</h5>
                <h6> {productData.description}</h6>

               
              </div>
              <button onClick = {() => loadCheckout(productData?.prices?.priceId)}> Subscribe </button>
          
          
          </div>
        )
      })}

  
    
    </div>
  )
}

export default Planscreen;