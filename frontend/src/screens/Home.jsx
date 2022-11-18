import React, { useEffect, useState } from "react";
import axios from "axios";
import { useReducer } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import logger from "use-reducer-logger";
import Pizza from "../components/Pizza";

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return { ...state, loading: true };
        case "FETCH_SUCCESS":
            return { ...state, products: action.payload, loading: false };
        case "FETCH_FAIL":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

const Home = () => {
    const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
        products: [],
        loading: true,
        error: "",
    });


    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: "FETCH_REQUEST" });
            try {
                const result = await axios.get("/api/products");
                dispatch({ type: "FETCH_SUCCESS", payload: result.data });
            } catch (err) {
                dispatch({ type: "FETCH_FAIL", payload: err.message });
            }


        };
        fetchData();
    }, []);


    console.log(products);
    return (
        <div className="py-7 m-1">
            <div className="row">
                <Row>
                    {products.map((product) => (
                        <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                            <Link to={`/product/${product.slug}`}>
                                <h1>{product.name}</h1>
                            </Link>
                            <Pizza product={product} key={product.slug} />
                        </Col>
                    ))}
                </Row>
                <h2>Productos del dia</h2>
                <Row>
                    {products.map((product) => (
                        product.day && <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                            <Link to={`/product/${product.slug}`}>
                                <h1>{product.name}</h1>
                            </Link>
                            <Pizza product={product} key={product.slug} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Home;
