import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom';
import Checkout from '../components/Checkout';
import { Store } from '../Store';


const ShippingAdress = () => {
    const navigate = useNavigate();

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        fullBox,
        userInfo,
        cart: { shippingAddress },
    } = state;

    const [fullName, setFullName] = useState(shippingAddress.fullName || '');
    const [address, setAddress] = useState(shippingAddress.address || '');
    const [city, setCity] = useState(shippingAddress.city || '');
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || '');
    const [country, setCountry] = useState(shippingAddress.country || '');

    useEffect(() => {
        if (!userInfo) {
            navigate('/signin?redirect=/shipping')
        }
    }, [userInfo, navigate])

    const submitHandler = (e) => {
        e.preventDefault();

        ctxDispatch({
            type: 'SAVE_SHIPPING_ADDRESS',
            payload: {
                fullName,
                address,
                city,
                postalCode,
                country,
            },
        });
        localStorage.setItem(
            'shippingAddress',
            JSON.stringify({
                fullName,
                address,
                city,
                postalCode,
                country,
            })
        );
        navigate('/payment')
    };

    console.log(shippingAddress);
    return (
        <div>
            <Checkout step1 step2></Checkout>
            <div className='container small-container'>
                <h1 className='my-3'>Shipping Adress</h1>
                <Form onSubmit={submitHandler}>
                    <Form.Group className='mb-3' controlId='fullname'>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='address'>
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="postalCode">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="country">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <div className="mb-3">
                        <button
                        >
                            Continue
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default ShippingAdress