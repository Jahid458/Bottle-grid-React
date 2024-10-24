//cart item ase ki na check kortese
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
  //add to local storage , get storage cart
  const cart = getStoredCart();
  cart.push(id);
  //const save localStorage 
  savedCartToLS(cart);
}

const removeFromLS = id =>{
  const cart = getStoredCart();
  //remove every id 
  const remaining = cart.filter(idx => idx !== id);
  savedCartToLS(remaining)


}

export {addToLS, getStoredCart, removeFromLS}