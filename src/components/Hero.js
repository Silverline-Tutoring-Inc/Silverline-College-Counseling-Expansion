import React from 'react';

function Hero() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div 
        className='image-area'
        style={{ backgroundImage: "url(hero.png)"
                /*Replace with image of choice*/, 
                height: 800 }}>
        <div 
          className='mask' 
          style={{ backgroundColor: 'rgba(256, 256, 256)' }}>
          <div 
            className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3' 
                style={{
        position: 'absolute', left: '50%', top: '0%',
        transform: 'translate(-50%, -50%)'}}
                >Silverline Tutoring</h1>
              <a className='button' href='#!' role='button'style={{
        position: 'absolute', left: '50%', top: '25%',
        transform: 'translate(-50%, -50%)'}}>
                Any call to action needed (button)
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*More will be added based on what is needed*/} 
    </header>
    
  );
}
