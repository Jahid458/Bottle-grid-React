import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {

   const [bottles,setBottles] = useState([])
   const [cart,setCart] = useState([]);

   useEffect(() =>{
    fetch('bottles.json')
    .then(res => res.json())
    .then(data => setBottles(data))
   },[])

   //load cart from localstorage
   useEffect(()=>{
    console.log('called the useeffect',bottles.length)
     if(bottles.length){
      const stroredCart =  getStoredCart();
      console.log(stroredCart, bottles)
        const savedCart = [];
      for(const id of stroredCart){
        console.log(id)
        const bottle = bottles.find(bottle => bottle.id === id);
        if(bottle){
            savedCart.push(bottle)
        }
      }
      console.log('saved cart',savedCart)
      setCart(savedCart)
     }
   },[bottles])

   const handleAddCart = bottle => {
        const newCart = [...cart, bottle]
        setCart(newCart)
        addToLS(bottle.id)
    // console.log('bottle going to be added')
   }

   
  return (
    <div>
      <h2>Bottles Availaible:{bottles.length}</h2>
      <Cart cart={cart}></Cart>

      <div className="bottle-container">
      {
        bottles.map(bottle => <Bottle key={bottle.id}  
          bottle={bottle}
          handleAddCart={handleAddCart}
          
          ></Bottle>)
      }
      </div>
    </div>
  );
};

export default Bottles;