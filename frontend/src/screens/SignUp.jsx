import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Store } from '../Store';
import { getError } from '../getErrors';

const SignUp = () => {
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state
    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.log('Contraseña incorrecta');
            return
        }
        try {
            const { data } = await axios.post('/api/users/signup', {
                name,
                email,
                password
            });
            ctxDispatch({ type: 'USER_SIGNIN', payload: data });
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate(redirect || '/')
            console.log(data);
        } catch (err) {
            console.log(getError(err));
        }
    };

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo])
    return (
        <Container>
            <h1 className='my-3'>Sign Up</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={(e) => setName(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <div className="mb-3">
                    <Button type="submit">Sign Up</Button>
                </div>
                <div className="mb-3">
                    Already have an account?{' '}
                    <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
                </div>
            </Form>
        </Container>
    )
}

export default SignUp