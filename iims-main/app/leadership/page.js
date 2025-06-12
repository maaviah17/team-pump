
import { EmployeeCard } from '@/components/EmployeeCard';
import { People } from '@/components/People';
import React from 'react';

const Page = () => {
  return (
    <>
      {/*--------------------------------------------------------- Section 1 ------------------------------------------------*/}
      <section className='relative hidden'>
        {/* <Navbar /> */}
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
      {/*--------------------------------------------------------- Section 1 ------------------------------------------------*/}
      <section className='relative'>
        <img src="/images/leadership/s1banner.png" alt='banner' className='absolute top-0 left-0 w-full h-full object-cover '/>
            <div className='relative container px-6 z-10 flex flex-col justify-center min-h-[80vh] py-10'>

              <div className="border-l-8 border-red-600">
                  <h1 className="text-[70px] text-white font-normal pl-4 leading-none">Lorem Ipsum Dolor Sit <br/> Amet Netus Vehicula </h1>
                </div>
                <div className='w-[35%]'>
                <p className='text-[18px] text-white mt-5'>
                  Lorem ipsum dolor sit amet consectetur. Urna in lorem enim mauris fringilla sollicitudin tristique mattis nisl. Aliquet laoreet leo lectus tortor sed et senectus sed laoreet. Nisi tempor eu id proin. Elementum proin ornare posuere donec. 
                </p>
                </div>
            </div>
      </section>

      {/*--------------------------------------------------------- Section-2------------------------------------------------*/}

      <section className=''>
        <div className='container px-6 py-12 mx-auto'>
          <div className="flex items-center gap-4">
            <h2 className="text-[60px] font-medium capitalize">Lorem ipsum </h2>
            <div className="border border-black w-[5%]"></div>
          </div>
          <div className='grid grid-cols-2 mt-4 gap-6'>
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
          </div>
        </div>
      </section>

      {/* Our people section */}
      <section className=''>
        <div className='container px-6 py-12 mx-auto'>
          <div className="flex items-center gap-4">
            <h2 className="text-[60px] font-medium capitalize">Our people </h2>
            <div className="border border-black w-[5%]"></div>
          </div>
          <div className='grid grid-cols-4 mt-4 gap-6'>
            <People />
            <People />
            <People />
            <People />
            <People />
            <People />
            <People />
            <People />
          </div>
        </div>
      </section>

      {/* black image bg */}
     {/* <section className="bg-[url('/images/leadership/bg_img.png')] bg-cover bg-center py-20 min-h-[90vh] overflow-hidden flex flex-col justify-center">
        <h2 className="text-[80px] font-medium text-white text-center">OUR PARTNERS</h2>
      </section> */}

      <section style={{ 
          backgroundImage: "url('./images/leadership/background-mg.png')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
            className="py-20 h-[400px] mx-auto flex flex-col justify-center bg-black m-25">

            <h2 className="mt-4 text-[49px] font-medium text-white text-center">Lorem ipsum dolor sit amet</h2>
           <p className="text-[24px] text-white text-center mt-4 max-w-[800px] mx-auto leading-relaxed">
             Lorem ipsum dolor sit amet consectetur. Eget risus elit tempor vehicula lobortis accumsan turpis viverra egestas. Sit mauris eget vehicula nunc tellus. Malesuada euismod nunc morbi odio at volutpat pharetra.
          </p>
          <button className="bg-[#EC2028] mx-auto h-[59px] w-[158px] px-8 py-2 mt-4 border-2 border-black dark:border-white uppercase text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
            Join Us →
          </button>
     
      </section>

    </>
  );
}

export default Page;
