"use client";
import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const OurProductTab = ({ tabData = [] }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <Tabs selectedIndex={selectedIndex} onSelect={setSelectedIndex}>
            <div className='flex items-center gap-12'>
                <div className='w-[30%]'>
                    <div className="flex items-center gap-4 mb-3">
                        <h2 className="text-[40px] font-bold capitalize">Our services</h2>
                        <div className="border border-[#91795C] w-[5%]"></div>
                    </div>
                    <p className='text-[16px] leading-7 text-[#5B5B5B]'>Viverra senectus dui ultricies dolor varius nibh velit sapien, sapien pellentesque ue dignissim.</p>
                </div>
                <TabList className="flex gap-4 w-[70%]">
                    {tabData.map((tab, index) => (
                        <Tab
                            key={index}
                            className="cursor-pointer px-4 py-2"
                            selectedClassName="border-none"
                        >
                            {tab.title}
                        </Tab>
                    ))}
                </TabList>
            </div>

            <div className="mt-8">
                {tabData.map((tab, index) => (
                    <TabPanel key={index}>
                        <div className='flex gap-10'>
                            {/* Left side - Main equipment */}
                            {tab.steps.map((equipment) => (
                                <div key={equipment.id} className="w-[50%] relative">
                                    <img className='absolute top-0 left-0 w-full h-full object-cover' src={equipment.mainImage} alt='' />
                                    <div className="absolute top-0 left-0 w-full h-full"
                                        style={{
                                            background: 'linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 40%)'
                                        }}></div>
                                    <div className='relative z-10 p-8 text-white min-h-[600px] flex flex-col justify-end'>
                                        <h2 className='text-[55px] font-medium mb-2'>{equipment.title}</h2>
                                        <p className='text-[16px] font-medium max-w-[80%]'>{equipment.description}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Right side - Sub equipment grid */}
                            <div className='w-[50%]'>
                                <div className='grid grid-cols-2 gap-10 h-full'>
                                    {tab.steps[0]?.subItems?.map((item) => (
                                        <div key={item.id} className="relative">
                                            <img className='absolute top-0 left-0 w-full h-full object-cover' src={item.image} alt='' />
                                            <div className="absolute top-0 left-0 w-full h-full object-cover"
                                                style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 40%)' }}></div>
                                            <div className='relative z-10 p-6 text-white min-h-[280px] flex flex-col justify-end'>
                                                <h4 className='text-[24px] font-medium'>{item.title}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                ))}
            </div>
        </Tabs>
    );
}

export default OurProductTab;
























































// "use client";
// import { useState } from 'react';
// import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

// const OurProductTab = ({ tabData, tpClass }) => {
//     const [selectedIndex, setSelectedIndex] = useState(0);
//     return (
//         <>
//             <Tab selectedIndex={selectedIndex} onSelect={setSelectedIndex}>
//                 <div className='flex gap-12'>
//                     <div className='w-[30%]'>
//                         <div className="flex items-center gap-4">
//                             <h2 className="text-[40px] font-bold capitalize">Our services</h2>
//                             <div className="border border-[#91795C] w-[5%]"></div>
//                         </div>
//                     </div>
//                     <TabList className="flex gap-4 w-[70%]">
//                         {tabData.map((tab, index) => (
//                             <Tabs key={index} className="flex gap-4">
//                                 {tab.title}
//                             </Tabs>
//                         ))}
//                     </TabList>
//                 </div>

//                 <div className="mt-6">
//                     {tabData.map((tab, index) => (
//                         <TabPanel key={index}>
//                             <div className='flex gap-4'>
//                                 {/* Left side - Main equipment */}
//                                 {steps.map((equipment) => (
//                                     <div key={equipment.id} className="w-[50%] bg-cover bg-center min-h-[600px] relative"
//                                         style={{ backgroundImage: `url(${equipment.mainImage})` }}>
//                                         <div className='absolute top-0 left-0 w-full h-full object-cover'
//                                             style={{
//                                                 background: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 40%)'
//                                             }}>
//                                         </div>
//                                         <div className='relative z-10 p-8 text-white'>
//                                             <h2 className='text-[66px] font-medium'>{equipment.title}</h2>
//                                             <p className='text-[16px] font-medium max-w-[80%]'>{equipment.description}</p>
//                                         </div>
//                                     </div>
//                                 ))}

//                                 {/* Right side - Sub equipment grid */}
//                                 <div className='w-[50%]'>
//                                     <div className='grid grid-cols-2 gap-4'>
//                                         {steps[0]?.subItems.map((item) => (
//                                             <div key={item.id} className="bg-cover bg-center h-[300px] relative"
//                                                 style={{ backgroundImage: `url(${item.image})` }}>
//                                                 <div className='absolute top-0 left-0 w-full h-full object-cover'
//                                                     style={{
//                                                         background: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 40%)'
//                                                     }}>
//                                                 </div>
//                                                 <div className='relative z-10 p-6 text-white'>
//                                                     <h4 className='text-[24px] font-medium'>{item.title}</h4>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </TabPanel>
//                     ))}
//                 </div>

//             </Tab>
//         </>
//     )
// }

// export default OurProductTab