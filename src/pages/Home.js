import React from 'react'
import "./stylesheet/Home.css"
import { FaArrowRight } from 'react-icons/fa';

const Home = () =>
{
  const handleClick = () =>
  {
    alert( 'Button clicked!' );
  };

  return (
    <>

      <div className='bg'>
        <p className='title'>Blockchain Medical <br></br>Record System</p>
        <p className='subtitle'>Ensure that your documents are safe!</p>
        <button className='button' onClick={ handleClick }>
          Get Started! <span>  </span> <FaArrowRight />
        </button>
      </div>

    </>
  )
}

export default Home