import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from "prop-types";

export default class SpicesProduct extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                
                <div className="card">
                    <div className="img-container p-5" onClick={() => 
                        console.log('You clicked me on the image container')}>
                        
                        <Link to="/details">
                            <img src={img} alt="Product" className="card-img-top"/>
                        </Link>
                        
                        <button className="cart-btn" disabled={inCart ? true : false} 
                            onClick={() =>{console.log('Added to the cart');}}>
                                { inCart?(<p className="text-capitalize mb-0" disabled>
                                    in Cart</p>): ( 
                                        <i className=" fas fa-cart-plus" alt="Shopping Cart"/>)}
                        </button>
                    </div>
                    {/* card footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue text-italic mob-0">
                            <span className="mr-0">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

SpicesProduct.propTypes = {
    product: PropTypes.shape ({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};

const ProductWrapper = styled.div`
.card {
    border-color: transparent;
    transition: all 1s linear;
}
.card-footer {
    /* background: transparent; */
    /* border-color: transparent; */
    transition: all 1s linear;
    cursor: pointer;
}
&:hover {
    .card {
        border: 0.2rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer {
        background: rgba(247 247 247);
    }
}
.img-cpntainer {
    position: relative;
    overflow:hidden;
}
.card-img-top {
    transition: all 1s linear;

}
.img-container:hover .car-img-top {
    transform: scale(1.2)
}
.cart-btn {
    position: absolute;
    bottom: 60px;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--deepOrange);
    border: none;
    /* color: var(--mainWhite); */
    font-size: 1.2rem;
    border-radius:0.5rem 0 0 0;
    /* transform: translate(100%, 100%); */
    /* transition: all 0.1s linear; */
    cursor:pointer;

}
.img-container:hover .cart-btn {
    /* transform: translate(0, 0); */
    background: var(--lightDeepOrange);
}
`