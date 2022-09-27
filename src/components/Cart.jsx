import React from 'react'
import { addCart, delCart } from '../redux/action';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Navbarr from './Navbar';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
function Cart() {
  const state = useSelector((state) => state.handleCart);

  const dispatch = useDispatch()
  const handleClose = (item) => {
    dispatch(delCart(item))
  }

  const Addcart = (item) => {
    dispatch(addCart(item));
  }

  const DelCart = (item) => {
    dispatch(delCart(item))
  }
  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button className="btn-close float-end" onClick={() => handleClose(cartItem)} aria-label="Close"></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              < img src={cartItem.image} alt={cartItem.title} height="200px"
                width="180px" />
            </div>
            <div className="col-md-4">
              <h4>{cartItem.title}</h4>
              <p className="text-dark">
                {cartItem.qty} X ${cartItem.price} = ${(cartItem.qty * cartItem.price).toFixed(2)}
              </p>
              <button className="btn btn-outline-danger me-4"
                onClick={() => DelCart(cartItem)}>
                <i className="fa fa-minus"></i>
              </button>
              <button className="btn btn-outline-success"
                onClick={() => Addcart(cartItem)}>
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row text-center">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  }

  const button = () => {
    return(
    <div className = "container" >
        <div className="row ">
          <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 offset-5">Proceed To checkout</NavLink>
        </div>
    </div >
    );
}


  return (

  <>
    <Navbarr></Navbarr>
    {state.length === 0 && emptyCart()}
    {state.length !== 0 && state.map(cartItems)}
    {state.length !== 0 && button()}
    <Footer></Footer>
  </>

)
}

export default Cart;