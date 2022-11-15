import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Pizza = ({ pizza }) => {
    const [cantidad, setcantidad] = useState(1)
    const [variant, setvariant] = useState('small')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="m-5">
            <div onClick={handleShow}>

                <img
                    src={pizza.image}
                    className="img-fluid"
                    alt=""
                    style={{ height: "200px" }}
                />
            </div>

            <div className="flex-container">
                <div className="m-1 w-100">
                    {pizza.receta && 'requiere receta'}
                    <button className="btn">ADD TO CART</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
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
