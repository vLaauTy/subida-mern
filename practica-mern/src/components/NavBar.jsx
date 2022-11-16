import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Store } from '../Store';
import Badge from 'react-bootstrap/Badge';
import Button from './Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
  }
  let [open, setopen] = useState(false)
  console.log(userInfo);
  return (
    <div className="shadow-md w-full sticky top-0 left-0 ">
      <div className="md:flex items-center justify-between  bg-white py-4 md:px-10 px-7" >
        <div className='font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-gray-800'>
          Designer
        </div>
        <div onClick={() => setopen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 trasition-all duration-500 ease-in ${open ? 'top-16' : 'top-[-490px]'}`}>
          {userInfo ? (<NavDropdown title={userInfo.name} id="basic-nav-dropdown">
            <LinkContainer to='/profile'>
              <NavDropdown.Item>User Profile</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/user history'>
              <NavDropdown.Item>Order History</NavDropdown.Item>
            </LinkContainer>
            <Link className='dropdown-item' to='#signout' onClick={signoutHandler}>Sign Out</Link>
          </NavDropdown>) : (
            <Link className='nav-link' to="/signin">
              Sign In
            </Link>
          )}
          <li className='md:ml-8 text-xl no-underline md:my-0 my-7'>
            <Link className='no-underline hover:text-gray-400 text-gray-800 duration-500' to='/'>Home</Link>
          </li>
          <li className='md:ml-8 text-xl no-underline md:my-0 my-7'>
            <Link className='no-underline hover:text-gray-400 text-gray-800 duration-500' to='/'>Home</Link>
          </li>
          <li className='md:ml-8 text-xl no-underline md:my-0 my-7'>
            <Link className='no-underline hover:text-gray-400 text-gray-800 duration-500' to='/'>Home</Link>
          </li>
          <Button>Comienza!</Button>
          <Link className='no-underline text-2xl' to='/cart'>
            <ion-icon name="cart-outline"></ion-icon>

            {cart.cartItems.length > 0 && (
              <Badge pill bg='danger'>
                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
              </Badge>
            )}
          </Link>
        </ul>

      </div>


    </div>
  )
}

export default NavBar