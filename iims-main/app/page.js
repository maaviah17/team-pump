import TabModule from "@/components/OurProductTab";
import OurProductTab from "@/components/OurProductTab";
import BannerSlider from "@/components/Slider/BannerSlider";
import MainSlider from "@/components/Slider/MainSlider";
import Link from "next/link";

const our_partner = [
  {
    img: "/images/home/s3_slider_img.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    link: "#"
  },
  {
    img: "/images/home/s3_slider_img.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    link: "#"
  },
  {
    img: "/images/home/s3_slider_img.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    link: "#"
  },
  {
    img: "/images/home/s3_slider_img.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    link: "#"
  },
  {
    img: "/images/home/s3_slider_img.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    link: "#"
  },
];

const stats = [
  { count: 0, label: 'Global Partners' },
  { count: 0, label: 'locations across india' },
  { count: 50, label: 'revenue' },
  { count: 0, label: 'revenue' },

];

const cardData = [
  {
    image: "/images/home/s4_layout_01.png",
    title: "MINING",
    link: "#",
    bgColor: "#BD1414",
  },
  {
    image: "/images/home/s4_layout_02.png",
    title: "INFRASTRUCTURE",
    link: "#",
    bgColor: "#4B6670",
  },
  {
    image: "/images/home/s4_layout_03.png",
    title: "CONSTRUCTION",
    link: "#",
    bgColor: "#252525",
  },
];

const our_services = [
  {
    icon: "/images/home/s7_icon_img_01.png",
    title: "AFTER SALES SERVICE",
    description:
      "There are many variations of passages of Lorem is as Ipsum available but the majority have suffered alteration",
  },
  {
    icon: "/images/home/s7_icon_img_02.png",
    title: "AFTER SALES SERVICE",
    description:
      "There are many variations of passages of Lorem is as Ipsum available but the majority have suffered alteration",
  },
  {
    icon: "/images/home/s7_icon_img_03.png",
    title: "AFTER SALES SERVICE",
    description:
      "There are many variations of passages of Lorem is as Ipsum available but the majority have suffered alteration",
  },
  {
    icon: "/images/home/s7_icon_img_04.png",
    title: "AFTER SALES SERVICE",
    description:
      "There are many variations of passages of Lorem is as Ipsum available but the majority have suffered alteration",
  },
];

const fleetCards = [
  {
    image: "/images/home/s8_layout.png",
    title: `Are you a <br/>Infra Contractor?`,
    link: "#",
    bgColor: "#506871",
  },
  {
    image: "/images/home/s8_layout.png",
    title: `Are you into <br/> mining operations?`,
    link: "#",
    bgColor: "#CA0000",
  },
  {
    image: "/images/home/s8_layout.png",
    title: `Do you manage <br/> large fleets?`,
    link: "#",
    bgColor: "#252525",
  },
];

const SpotlightData = [
  {
    imageSrc: "/images/home/s9_img_01.jpg",
    date: "Mar 30, 2021",
    title: "There are many variations of passages of Lorem is as Ipsum",
    description: "Consequat, volutpat morbi tempor elit tellus, ante in mattis. Facilisi morbi ipsum dui aliquet...",
  },
  {
    imageSrc: "/images/home/s9_img_02.jpg",
    date: "Apr 15, 2021",
    title: "Another variation of Lorem Ipsum passages",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt...",
  },
  {
    imageSrc: "/images/home/s9_img_03.jpg",
    date: "May 10, 2021",
    title: "Explore the depths of Lorem Ipsum",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...",
  },
];

const tabData = [
  {
    title: "MINING ATTACHMENTS & ACCESSORIES",
    steps: [
      {
        id: 1,
        mainImage: '/images/home/s6_tab_img_01.png',
        title: 'Equipment Name 1',
        description: 'Viverra senectus dui ultricies dolor varius nibh velit sapien, sapien pellentesque ue dignissim.',
        subItems: [
          {
            id: 101,
            image: '/images/home/s6_tab_img_01.png',
            title: 'Sub Equipment 1'
          },
          {
            id: 102,
            image: '/images/home/s6_tab_img_03.png',
            title: 'Sub Equipment 2'
          },
          {
            id: 103,
            image: '/images/home/s6_tab_img_04.png',
            title: 'Sub Equipment 3'
          },
          {
            id: 104,
            image: '/images/home/s6_tab_img_05.png',
            title: 'Sub Equipment 4'
          }
        ]
      },
    ]
  },
  {
    title: "GAS GENSETS",
    steps: [
      {
        id: 1,
        mainImage: '/images/home/s6_tab_img_01.png',
        title: 'Equipment Name 1',
        description: 'Viverra senectus dui ultricies dolor varius nibh velit sapien, sapien pellentesque ue dignissim.',
        subItems: [
          {
            id: 101,
            image: '/images/home/s6_tab_img_02.png',
            title: 'Sub Equipment 1'
          },
          {
            id: 102,
            image: '/images/home/s6_tab_img_03.png',
            title: 'Sub Equipment 2'
          },
          {
            id: 103,
            image: '/images/home/s6_tab_img_04.png',
            title: 'Sub Equipment 3'
          },
          {
            id: 104,
            image: '/images/home/s6_tab_img_05.png',
            title: 'Sub Equipment 4'
          }
        ]
      },
    ]
  },
  {
    title: "OFF HIGHWAY TYRES",
    steps: [
      {
        id: 1,
        module: "Optional",
        title: "Mentorship & coaching for prototyping change",
        description: "Work with experienced mentors and coaches to refine your vision and take actionable steps toward your next big move."
      },
    ]
  },
  {
    title: "PILING RIGS",
    steps: [
      {
        id: 1,
        mainImage: '/images/home/s6_tab_img_01.png',
        title: 'Equipment Name 1',
        description: 'Viverra senectus dui ultricies dolor varius nibh velit sapien, sapien pellentesque ue dignissim.',
        subItems: [
          {
            id: 101,
            image: '/images/home/s6_tab_img_02.png',
            title: 'Sub Equipment 1'
          },
          {
            id: 102,
            image: '/images/home/s6_tab_img_03.png',
            title: 'Sub Equipment 2'
          },
          {
            id: 103,
            image: '/images/home/s6_tab_img_04.png',
            title: 'Sub Equipment 3'
          },
          {
            id: 104,
            image: '/images/home/s6_tab_img_05.png',
            title: 'Sub Equipment 4'
          }
        ]
      },
    ]
  },
  {
    title: "MINING & INFRASTRUCTURE",
    steps: [
      {
        id: 1,
        mainImage: '/images/home/s6_tab_img_01.png',
        title: 'Equipment Name 1',
        description: 'Viverra senectus dui ultricies dolor varius nibh velit sapien, sapien pellentesque ue dignissim.',
        subItems: [
          {
            id: 101,
            image: '/images/home/s6_tab_img_02.png',
            title: 'Sub Equipment 1'
          },
          {
            id: 102,
            image: '/images/home/s6_tab_img_03.png',
            title: 'Sub Equipment 2'
          },
          {
            id: 103,
            image: '/images/home/s6_tab_img_04.png',
            title: 'Sub Equipment 3'
          },
          {
            id: 104,
            image: '/images/home/s6_tab_img_05.png',
            title: 'Sub Equipment 4'
          }
        ]
      },
    ]
  },
  {
    title: "LUBRICANT",
    steps: [
      {
        id: 1,
        mainImage: '/images/home/s6_tab_img_01.png',
        title: 'Equipment Name 1',
        description: 'Viverra senectus dui ultricies dolor varius nibh velit sapien, sapien pellentesque ue dignissim.',
        subItems: [
          {
            id: 101,
            image: '/images/home/s6_tab_img_02.png',
            title: 'Sub Equipment 1'
          },
          {
            id: 102,
            image: '/images/home/s6_tab_img_03.png',
            title: 'Sub Equipment 2'
          },
          {
            id: 103,
            image: '/images/home/s6_tab_img_04.png',
            title: 'Sub Equipment 3'
          },
          {
            id: 104,
            image: '/images/home/s6_tab_img_05.png',
            title: 'Sub Equipment 4'
          }
        ]
      },
    ]
  },
];


const page = () => {
  return (
    <>
      {/* --------------------------------------------- Section-1 ------------------------------- */}
      <section className='relative'>
        <BannerSlider />
      </section>
      {/* --------------------------------------------- Section-2 ------------------------------- */}
      <section className="relative pb-10">

        <div className="flex gap-6">
          <div className="w-full md:w-[50%]">
            <img src="/images/home/s2_img_01.png" alt="About Us" className="w-full min-h-[600px] object-cover"
            />
          </div>

          <div className="w-full md:w-[50%] relative flex items-end">
            <div
              className="z-10 bg-white absolute h-[80%] left-[-250px] flex flex-col justify-center py-10"
              style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
            >
              <div className="pl-50 relative w-[78%]">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-2">
                  About Us
                  <div className="border border-[#91795C] w-[5%]" />
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 relative">
                  <img src="/images/home/s2_quotes.png" alt="About Us" className="w-20 -ml-10 mb-3"
                  />
                  IIMS, established in April 2023 as part of the illustrious CK Birla Group – a USD 3 billion conglomerate – has its headquarters in Hyderabad. Poised to become a leading player in the infrastructure, construction, and mining sectors, IIMS offers industry-leading premium products and comprehensive aftermarket support.
                </p>

                <Link
                  href=""
                  className="px-8 py-4 bg-red-600 text-white font-semibold"
                  style={{clipPath:"polygon(12% 0, 100% 0, 100% 75%, 90% 100%, 0 100%, 0 22%)",}}>
                  LEARN MORE
                  <i className="fa-solid fa-arrow-right ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="relative py-16">
        <div className="container px-6">
          <div className="flex gap-6">
            <div className="w-full md:w-[50%]">
              <div className="absolute top-0 left-0 object-cover w-[50vw] max-w-[50vw]">
                <img src="/images/home/s2_img_01.png" alt="About Us" className="" />
              </div>
            </div>

            <div className="w-full md:w-[50%] relative flex items-end">
              <div
                className="z-10 bg-white"
                style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
              >
                <div className="pl-50 h-[80%] relative">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-2">
                    About Us
                    <span className="w-10 h-1 bg-[#ad6f2c] inline-block" />
                  </h2>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 relative">
                    <span className="text-6xl">“</span>
                    IIMS, established in April 2023 as part of the illustrious CK Birla Group – a USD 3 billion conglomerate – has its headquarters in Hyderabad. Poised to become a leading player in the infrastructure, construction, and mining sectors, IIMS offers industry-leading premium products and comprehensive aftermarket support.
                  </p>

                  <button className="relative px-8 py-3 bg-red-600 text-white font-semibold rounded-none hover:bg-red-700 transition angle">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* --------------------------------------------- Section-3 ------------------------------- */}
      <section className="bg-[url('/images/home/s3_bg_img.png')] bg-cover bg-center py-20 min-h-[90vh] overflow-hidden flex flex-col justify-center">
        <h2 className="text-[80px] font-medium text-white text-center">OUR PARTNERS</h2>
        <MainSlider
          className="mt-10 [&_.slick-list]:-mx-6 [&_.slick-slide]:px-6"
          settings={{
            arrows: false,
            dots: false,
            infinite: true,
            speed: 3000,
            autoplaySpeed: 0,
            cssEase: 'linear',
            autoplay: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            pauseOnHover: false,
            pauseOnFocus: false,
            responsive: [
              {
                breakpoint: 1080,
                settings: {
                  slidesToShow: 4,
                },
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 4,
                },
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 2,
                  dots: true,
                  arrows: false,
                },
              }
            ]
          }}>

          {our_partner.map((item, index) => (
            <div
              key={index}
              className="bg-black/55 py-12 px-10 relative overflow-hidden min-h-[400px]"
              style={{
                clipPath: "polygon(20% 0, 100% 0%, 100% 0, 100% 80%, 80% 100%, 10% 100%, 0 100%, 0% 20%)",
              }}
            >
              <img src={item.img} alt={`slide-${index}`} className="mx-auto w-[150px]" />
              <p className="text-[18px] text-white font-extralight mt-6">
                {item.text}
              </p>
              <Link
                href={item.link}
                className="flex justify-center items-center text-[16px] text-white mt-8"
              >
                LEARN MORE <i className="fa-solid fa-arrow-right ml-2" />
              </Link>
            </div>
          ))}
        </MainSlider>
      </section>
      {/* --------------------------------------------- Section-4 ------------------------------- */}
      <section className="py-10">
        <div className="container px-6">
          <div className="flex items-center gap-4">
            <h2 className="text-[60px] font-medium capitalize">Industries That We Excel In</h2>
            <div className="border border-black w-[5%]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {cardData.map((item, index) => (
              <div
                key={index}
                className="min-h-[550px] flex flex-col justify-between pb-10"
                style={{ backgroundColor: item.bgColor }}
              >
                <img src={item.image} alt={item.title} />
                <div className="text-center">
                  <h4 className="text-[40px] font-medium text-white">{item.title}</h4>
                  <a
                    href={item.link}
                    className="flex justify-center items-center text-[16px] text-white mt-3"
                  >
                    LEARN MORE <i className="fa-solid fa-arrow-right ml-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --------------------------------------------- Section-5 ------------------------------- */}
      <section className="py-10 relative border-l-10 border-[#EC2028] overflow-hidden">
        <img src="/images/home_floting_img.png" className="absolute top-0 lef-0 h-[70%]" alt="" />
        <div className="container px-6">
          <div className="flex justify-between items-start">
            <h2 className="text-[50px] font-bold">Impactful Statistics </h2>
            <p className="text-right text-[24px] font-semibold ">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et<br /> dolore magna aliqua. Ut enim ad minim veniam</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mt-12">
            {stats.map((item, index) => (
              <div className="font-2 border-l border-[#FFC5C5] first:border-none" key={index}>
                <h2 className="text-[100px] font-normal">{item.count}</h2>
                <h4 className="text-[16px] mt-4">{item.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --------------------------------------------- Section-6 ------------------------------- */}
      <section className="py-10">
        <div className="container">
          <OurProductTab tabData={tabData} />
        </div>
      </section>
      {/* --------------------------------------------- Section-7 ------------------------------- */}
      <section className="py-10 border-l-10 border-[#EC2028]">
        <div className="container px-6">
          <div className="flex gap-20">
            <div className="w-[40%]">
              <img src="/images/banner_floting_img_02.png" alt="" className="h-18" />
              <div className="flex items-center gap-4">
                <h2 className="text-[40px] font-bold capitalize">Our services</h2>
                <div className="border border-[#91795C] w-[5%]"></div>
              </div>
              <p className="text-[16px] mt-6 leading-10">Id at urna non viverra eu volutpat porttitor elementum. Viverra senectus dui ultricies dolor. Varius nibh velit pellentesque sapien, sapien neque dignissim.</p>
            </div>
            <div className="w-[60%]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {our_services.map((item, index) => (
                  <div
                    key={index}
                    className="border border-[#FF0000] p-8 bg-white"
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 100% 20%, 100% 79%, 80% 100%, 20% 100%, 0 100%, 0% 20%)",
                    }}
                  >
                    <img src={item.icon} alt={item.title} className="w-12" />
                    <h4 className="text-[20px] font-medium mt-6">{item.title}</h4>
                    <p className="text-[16px] mt-4">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------------------- Section-8 ------------------------------- */}
      <section className="py-10">
        <div className="container px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fleetCards.map((item, index) => (
              <div
                key={index}
                className="min-h-[450px]"
                style={{ backgroundColor: item.bgColor }}
              >
                <img src={item.image} alt={item.title} className="w-full" />
                <div className="text-center">
                  <h4
                    className="text-[40px] font-medium text-white"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <a
                    href={item.link}
                    className="flex justify-center items-center text-[16px] text-white mt-3"
                  >
                    LEARN MORE <i className="fa-solid fa-arrow-right ml-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --------------------------------------------- Section-9 ------------------------------- */}
      <section className="py-10 border-r-10 border-[#EC2028]">
        <div className="container px-6">
          <h2 className="text-[50px] font-bold">IIMS Spotlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {SpotlightData.map((card, index) => (
              <div key={index} className="">
                <img
                  className="w-full min-h-[400px] object-cover"
                  src={card.imageSrc}
                  alt={card.title}
                />
                <div
                  className="bg-[#F9F9F9] p-6 -mt-16 pb-16 w-[90%] mx-auto shadow-2xs home-s9-clip"

                >
                  <h5 className="text-[14px] text-[#BABABA] mb-3">{card.date}</h5>
                  <h4 className="text-[20px] font-medium mb-3">{card.title}</h4>
                  <p className="text-[14px] leading-8 text-[#818181]">{card.description}</p>
                  <button className="text-[14px] underline text-[#91795C] mt-4">Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >
    </>
  )
}

export default page