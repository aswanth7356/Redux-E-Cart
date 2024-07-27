import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { fetchProduct, nextPage, prevPage } from '../redux/slice/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import { addToWishList } from '../redux/slice/wishSlice';
import { addToCart } from '../redux/slice/cartSlice';



function Home() {

  const dispatch = useDispatch()
  const { loading, product, error, currentPage, productPerPage } = useSelector((state) => state.productSlice)
  console.log(loading, product);

  useEffect(() => {
    dispatch(fetchProduct())
  }, [])



  const totalPages = Math.ceil(product.length / productPerPage)
  const lastProductIndex = currentPage * productPerPage
  const firstProductIndex = lastProductIndex - productPerPage
  const validcard = product.slice(firstProductIndex, lastProductIndex)


  const navigateNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(nextPage())
    }
  }

  const navigatePrevPage = () => {
    if (currentPage > 1) {
      dispatch(prevPage())
    }
  }



  return (
    <>
      <Carousel >
        <Carousel.Item>
          <img src="https://cdn.vectorstock.com/i/500p/09/80/online-shopping-banner-vector-17230980.jpg" alt="" height={'400px'} width={'100%'} />
        </Carousel.Item>

        <Carousel.Item>
          <img src="https://cdn.vectorstock.com/i/500p/91/98/shopping-online-with-discount-conceptual-banner-vector-47519198.jpg" alt="" height={'400px'} width={'100%'} />
        </Carousel.Item>

        <Carousel.Item>
          <img src="https://t4.ftcdn.net/jpg/03/20/46/13/360_F_320461388_5Snqf6f2tRIqiWlaIzNWrCUm1Ocaqhfm.jpg" alt="" height={'400px'} width={'100%'} />
        </Carousel.Item>
      </Carousel>

      {/* startbootstrap.com --> template --> ecommerce*/}

      <section className="py-5">

        {
          loading ?
            <h1 className='text-center' ><Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>Loading...</h1>
            :

            <div className="container p-4 px-lg-5 mt-5 border shadow">
              <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                {
                  product.length > 0 ?


                    validcard.map(item => (
                      <div className="col mb-5">
                        <div className="card h-100">
                          <Link to={`/view/${item.id}`}>
                            <img className="card-img-top" src={item.thumbnail} alt="..." height={'200px'} />
                          </Link>
                          <div className="card-body p-4">
                            <div className="text-center">
                              <h5 className="fw-bolder">{item.title.slice(0, 10)}...</h5>
                              $40.00 - $80.00
                            </div>
                          </div>
                          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">
                              <div className='d-flex justify-content-between'>
                                <button className='btn' onClick={() => dispatch(addToWishList(item))}><i className="fa-solid fa-heart-circle-plus" style={{ color: "#ff0000", }} /></button>
                                <button className='btn' onClick={() => dispatch(addToCart(item))}><i className="fa-solid fa-cart-shopping" style={{ color: "#0805bd", }} /></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                    :
                    <h2>{error}</h2>
                }

              </div>
            </div>
        }

        <div className='mt-5'>
          <div className='text-center'>
            <button onClick={navigatePrevPage} className='btn'><i className="fa-solid fa-angles-left" /></button>
            {currentPage} of {totalPages}
            <button onClick={navigateNextPage} className='btn'><i className="fa-solid fa-angles-right" /></button>
          </div> 
        </div>
      </section>
    </>
  )
}

export default Home
