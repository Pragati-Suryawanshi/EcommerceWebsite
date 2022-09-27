import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { addCart, delCart } from '../redux/action';
import Navbarr from './Navbar';
import './styles/Products.css';
import Footer from './Footer';


function Product(props) {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cartBtn, setCartBtn] = useState("Add to Cart")

    const dispatch = useDispatch()
    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addCart(product))
            setCartBtn("Remove From Cart")
        }
        else {
            dispatch(delCart(product))
            setCartBtn("Add to Cart")
        }
    }

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProducts()
    }, []);

    const Loading = () => {
        return (

            <>

                <div className="col-md-6">
                    <Skeleton height={400} ></Skeleton>
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} ></Skeleton>
                    <Skeleton height={75}></Skeleton>
                    <Skeleton height={25} width={150} ></Skeleton>
                    <Skeleton height={50}></Skeleton>
                    <Skeleton height={150}></Skeleton>
                    <Skeleton height={50} width={100}></Skeleton>
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} ></Skeleton>

                </div>
            </>
        )

    }

    const ShowProduct = () => {
        return (
            <div className='row'>
                <div className="col-md-6" key={product.id}>
                    <img src={product.image} alt={product.title} height="350px" width="350px"></img>
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-black-50'>
                        {product.category}
                    </h4>
                    <h1 className='display-10'>{product.title}</h1>
                    <p className='lead'>
                        Rating  {product.rating && product.rating.rate}
                        <i className='fa fa-star'></i>
                    </p>
                    <h3 className='display-10 fw-bold my-3'>${product.price}</h3>
                    <p className='lead display-20'>{product.description}</p>
                    <button className='btn btn-outline-dark px-3' onClick={() => handleCart(product)}>{cartBtn}</button>
                    <NavLink to="/cart" className='btn btn-dark ms-2 px-3'>Go to Cart</NavLink>

                </div>
            </div>
        )

    }
    return (
        <div>
            <Navbarr></Navbarr>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading></Loading> : <ShowProduct></ShowProduct>}
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}



export default Product
