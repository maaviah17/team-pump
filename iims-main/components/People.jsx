import { FaLinkedin, FaTwitter } from "react-icons/fa";

export const People = ()=>{
    return (
       <>  
 <div
  className="flex gap-4 bg-[#F3F3F3]"
  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 75%, 79% 100%, 0 100%, 0% 50%)' }}
>
  <div className="relative w-[385px] h-[405px] flex flex-col">

    <img
      src="/images/leadership/s2_card_img_01.png"
      alt=""
      className="h-[260px] w-full object-contain"
    />

    <div className="p-3 bg-[#828181] text-white relative flex-grow">
      <h4 className="text-[15px] font-semibold mb-1">Lorem ipsum dolor</h4>
      <p className="text-[14px] mb-1">Lorem ipsum dolor sit amet enim</p>
      <p className="text-[14px] mb-6">Lorem ipsum dolor sit amet consecteturndit gravida.</p>

      <div className="absolute flex bottom-3 left-3">
        <FaLinkedin className="h-[24px] w-[24px] mr-4" />
        <FaTwitter className="h-[24px] w-[24px]"/>
      </div>
    </div>
  </div>
</div>

</>
    )
}