
import Navbar from '@/components/Navbar';
import React from 'react';
// import Navbar from './components/Navbar'; 

const Page = () => {
  return (
    <>
      {/*--------------------------------------------------------- Section 1 ------------------------------------------------*/}
      <section className='relative'>
        <Navbar />
        <div className='min-h-screen container mx-auto px-0'>
          
          
          <img 
            src="./images/about/better.png"
            // src="./images/about/image.png"
            alt="Landing Background" 
            className="absolute"
            style={{
              width: '1920px', 
              height: '788px', 
              top: '95px', 
              left: '0.13px',
              objectFit: 'cover',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            }}
          />

          {/* Text Overlay */}
          <div className="absolute" style={{ top: '291px', left: '133.13px' }}>
            <h1 
              className="font-[Geist] font-normal text-[70px] leading-[110%] tracking-[-0%] text-white capitalize"
              style={{ width: '713px', height: '154px' }}
            >
              Lorem ipsum dolor Sit Amet netus vehiclua
            </h1>
            <p 
              className="font-[Geist] font-normal text-[20px] leading-[100%] tracking-[-2%] text-white"
              style={{ width: '572px', height: '104px', marginTop: '20px' }} // Added margin for spacing
            >
              Lorem ipsum dolor sit amet consectetur. Urna in lorem enim mauris fringilla sollicitudin tristique mattis nisl. Aliquet laoreet leo lectus tortor sed et senectus sed laoreet. Nisi tempor eu id proin. Elementum proin ornare posuere donec. 
            </p>
          </div>
          {/* White Cut Div */}
          <div 
            className="absolute bg-white rounded-[1px] shadow-md" 
            style={{
              width: '1210.16px', 
              height: '151px', 
              top: '800px', 
              left: '865.27px',
            }}
            aria-hidden="true"
          >
            {/* Optional content inside the white cut div */}
            this is the cut 
          </div>
        </div>
      </section>
      {/*--------------------------------------------------------- Section 2 ------------------------------------------------*/}
    </>
  );
}

export default Page;
