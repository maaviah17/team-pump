
import MainSlider from './MainSlider'

const slider_data = [
  { img: "/images/home/banner_1.png" },
  { img: "/images/home/banner_2.png" },
  { img: "/images/home/banner_3.png" },
];

const BannerSlider = () => {
  return (
    <>
      <div className='relative'>
        =
        <MainSlider className="relative z-10" settings={{
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
          dots: false,
          fade: true,
          speed: 800,
          cssEase: 'linear',
          infinite: true,
          responsive: [
            {
              breakpoint: 1080,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false,
              },
            }
          ]
        }}>
          <>
            {slider_data.map((item, index) => (
              <div className='z-10' key={index}>
                <img src={item.img} alt={item.img} className="absolute top-0 left-0 w-full h-full object-cover" />
                <div className='container px-6 relative min-h-[80vh] flex flex-col justify-end py-10'>
                  <div className="border-l-8 border-red-600">
                    <h1 className="text-[70px] text-white font-semibold pl-4">Lorem Ipsum Dolor Sit Amet Netus Vehicula </h1>
                  </div>
                </div>
              </div>
            ))}
          </>

        </MainSlider>
      </div>
    </>
  )
}

export default BannerSlider