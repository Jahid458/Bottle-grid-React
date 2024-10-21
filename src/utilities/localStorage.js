const getStoredCart = () =>{
  const storedCartString = localStorage.getItem('cart')
  if(storedCartString){
    return JSON.parse(storedCartString);
  }
  return  [] ; 

}
const savedCartToLS = cart =>{
  const cartstringified = JSON.stringify(cart);
  localStorage.setItem('cart',cartstringified)
}



const addToLS = id =>{
  const cart = getStoredCart();
  cart.push(id);
  //const save localStorage 
  savedCartToLS(cart);
}


export {addToLS, getStoredCart}