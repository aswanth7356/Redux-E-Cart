import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import productSlice, {productSearch} from '../redux/slice/productSlice';

function Header() {

  const [wishCount, setWishCount] = useState(0)
  const [cartCount,setcartCount] = useState(0)

  const wishlist = useSelector((state) => state.wishSlice)
  const {cartlist} = useSelector((state) => state.cartSlice)


  const dispatch = useDispatch()

  useEffect(() => {

    if (JSON.parse(localStorage.getItem('wishlist'))) {
      // console.log((JSON.parse(localStorage.getItem('wishlist')).wishlist.length));
      setWishCount(JSON.parse(localStorage.getItem('wishlist')).length)
    }
    setcartCount(cartlist.length)
  }, [wishlist,cartlist])
  console.log(wishCount);

  console.log(wishCount);
  console.log(cartCount);
  console.log(cartlist);


  return (
    <>
      <Navbar expand="lg" className="bg-light">
        <Container>
          <Navbar.Brand >
            <Link to={'/'} style={{textDecoration:'none'}}>
              <i className="fa-solid fa-cart-shopping fa-xl me-2" style={{ color: "#ffd500", }} />{' '}
              Redux-Ecart
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              <div className='me-3'>
                <input type="text" onChange={(e)=>{dispatch(productSearch(e.target.value.toLowerCase()))}} className='form-control' placeholder='search' />
              </div>

              <Nav.Link className='border border-dark rounded'>
                <Link className='text-decoration-none text-dark' to={'/wish'}>
                  <i className="fa-solid fa-heart" style={{ color: "#ff0505", }} />
                  Wishlist
                  <span className='badge bg-warning ms-2' >{wishCount}</span>
                </Link>
              </Nav.Link>

              <Nav.Link  className='border border-dark rounded ms-2'>
                <Link className='text-decoration-none text-dark' to={'/Cart'}>
                  <i className="fa-solid fa-cart-shopping" style={{ color: "#00bfff", }} />
                  Cart
                  <span className='badge bg-warning ms-2' >{cartCount}</span>
                </Link>
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
