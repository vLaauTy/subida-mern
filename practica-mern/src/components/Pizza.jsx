import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';

const Pizza = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { product } = props;

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;
    const addToCartHandler = async (item) => {
        const existItem = cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data } = await axios.get(`/api/products/${product._id}`);
        if (data.stock < quantity) {
            window.alert('Producto sin stock');
            return;
        }
        // se usa ese nombre para no confundir con "dispatch"
        ctxDispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity } })

    };
    return (
        <div className="m-5">
            <div onClick={handleShow}>

                <img
                    src={product.image}
                    className="img-fluid"
                    alt=""
                    style={{ height: "200px" }}
                />
            </div>

            <div className="flex-container">
                <div className="m-1 w-100">
                    {product.receta && 'requiere receta'}
                    <button className="btn" onClick={() => addToCartHandler(product)}>ADD TO CART</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{product.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>CLOSE</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Pizza;
