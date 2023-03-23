import React from 'react';
import Cards from './Cards';
import Data from './ApiData';

const Services = () => {
  return (
    <div>
        <h1 className="text-center text-info">Our Services</h1>
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
  )
}

export default Services;