import React from 'react';
import Cards from './Cards';
import Data from './ApiData';

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row my-4 d-flex align-items-center">
          <div className="col-xs-12 col-md-6">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum deserunt quod, quibusdam laudantium sunt iure! Placeat facere commodi harum excepturi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quo omnis dicta vero ut amet expedita corrupti nisi commodi nulla ipsa iusto, corporis suscipit illum.
            </p>
          </div>
          <div className="col-xs-12 col-md-6">
            <img src="./Images/hotel10.jpg" alt="" />
          </div>
        </div>
        <h1 className="text-center text-info">Meet Our Team</h1>
        <div className="container">
          <div className="row">
            {Data.map((value) => {
              return (
                <>
                  <Cards title={value.title} image={value.image} />
                </>
              )
            })}



          </div>
        </div>
      </div>

    </>
  )
}

export default About;