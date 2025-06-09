"use client"

import React, { useState } from 'react';

// const Navbar = () => {
//   const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

//   return (
//     <nav className="sticky top-0 bg-white shadow-sm z-50">
//       <div className="max-w-[1200px] mx-auto px-6 mb-2">
//         <div className="flex flex-nowrap items-center justify-between h-[90px] w-full">

//           {/* Left: Logos */}
//           <div className="flex items-center space-x-4">
//             <img
//               src="./images/about/logo.png"
//               alt="Logo 1"
//               className="object-contain w-[180px] h-auto mt-1"
//             />
//             <img
//               src="./images/about/logo2.png"
//               alt="Logo 2"
//               className="object-contain w-[130px] h-auto mt-4"
//             />
//           </div>

//           {/* Center: Search */}
//           <div className="ml-10">
//             <button
//               aria-label="Search"
//               className="p-2 rounded-md hover:bg-gray-100 transition-colors"
//               type="button"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 text-gray-600"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Right: Nav items + Contact button */}
//           <ul className="flex items-center space-x-6 text-gray-700 font-medium text-base ml-10">
//             <li className="relative">
//   <button
//     type="button"
//     onMouseEnter={() => setAboutDropdownOpen(true)}
//     onMouseLeave={() => setAboutDropdownOpen(false)}
//     className="flex items-center justify-center gap-1 text-gray-700 font-medium transition-colors rounded-md"
//     style={{
//       width: '106.28125px',
//       height: '26px',
//     }}
//   >
//     About Us
//     <svg
//       className={`w-4 h-4 transition-transform ${
//         aboutDropdownOpen ? 'rotate-180' : 'rotate-0'
//       }`}
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       strokeWidth={2}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//     </svg>
//   </button>
//   {aboutDropdownOpen && (
//     <ul className="absolute mt-2 w-48 bg-white rounded shadow z-20">
//       <li>
//         <a href="#" className="block px-4 py-2 hover:bg-gray-100">Our Story</a>
//       </li>
//       <li>
//         <a href="#" className="block px-4 py-2 hover:bg-gray-100">Team</a>
//       </li>
//       <li>
//         <a href="#" className="block px-4 py-2 hover:bg-gray-100">Careers</a>
//       </li>
//     </ul>
//   )}
// </li>

//             <li><a href="#" className="hover:text-gray-900">Partners</a></li>
//             <li><a href="#" className="hover:text-gray-900">Industry</a></li>
//             <li><a href="#" className="hover:text-gray-900">Products</a></li>
//             <li><a href="#" className="hover:text-gray-900">Services</a></li>
//             <li>
//   <a
//     href="#"
//     className="flex items-center justify-center text-gray-700 font-medium transition-colors hover:text-gray-900"
//     style={{
//       width: '129px',
//       height: '26px',
//       lineHeight: '26px',
//     }}
//   >
//     Rental & Used
//   </a>
// </li>

//             <li><a href="#" className="hover:text-gray-900">Facilities</a></li>
//             <li>
//              <a
//               href="#contact"
//               className="inline-flex items-center justify-center font-semibold text-white transition-colors shadow-md"
//               style={{
//                   width: '191px',
//                   height: '95px',
//                   backgroundColor: '#BE0000',
//                   fontSize: '22px',
//                   lineHeight: 1.2,
//                 }}
//                   onMouseLeave={e => e.currentTarget.style.backgroundColor = '#BE0000'}
//                   onMouseEnter={e => e.currentTarget.style.backgroundColor = '#9a0000'}
//               >
//                 Contact Us
//             </a>

//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

const Navbar = () => {
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50 w-full">

      <div className="flex justify-between items-center h-[90px] w-full max-w-screen-2xl mx-auto">
        

        <div className="flex items-center space-x-6 pl-0">
          <img
            src="./images/about/logo.png"
            alt="Logo 1"
            className="object-contain w-auto max-w-[250px] h-auto"
            style={{ maxHeight: "81px" }}
          />
          <img
            src="./images/about/logo2.png"
            alt="Logo 2"
            className="object-contain w-auto max-w-[140px] h-auto"
            style={{ maxHeight: "55px" }}
          />
        </div>

  
        <div className="flex items-center space-x-8 pr-0">
          {/* Search icon */}
          <button
            aria-label="Search"
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z"
              />
            </svg>
          </button>

          <ul className="flex items-center space-x-6 text-gray-700 font-medium text-base whitespace-nowrap">
            <li className="relative">
              <button
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
                className="flex items-center gap-1 hover:text-gray-900"
                type="button"
              >
                About Us
                <svg
                  className={`w-4 h-4 transition-transform ${
                    aboutDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {aboutDropdownOpen && (
                <ul className="absolute mt-2 w-48 bg-white rounded shadow z-20">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Careers
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Partners
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Industry
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Rental & Used
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Facilities
              </a>
            </li>
          </ul>

          {/* Contact Us button flush right */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-[#BE0000] text-white font-semibold hover:bg-red-700 transition-colors ml-4"
            style={{ minWidth: "191px", height: "95px" }}
          >
            Contact Us 
          </a>
        </div>
      </div>
    </nav>
  );
};


// comment

export default Navbar;
