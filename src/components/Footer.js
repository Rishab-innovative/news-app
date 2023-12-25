import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div className="grid grid-flow-row gap-4 bg-slate-900 text-white py-5">
        <div className="grid justify-center text-2xl mt-2 mb-3">
          Follow us on
        </div>

        <div className="grid grid-flow-col mb-5 gap-[4rem] justify-center text-xl">
          <div className="grid grid-flow-col gap-[4rem]">
            <a href="" className="hover:text-rose-300 text-2xl">
              <BsInstagram />
            </a>
            <a href="" className="hover:text-rose-300 text-2xl">
              <AiOutlineYoutube />
            </a>

            <a href="" className="hover:text-rose-300 text-2xl">
              <BsFacebook />
            </a>
          </div>
        </div>
        <span className="text-xs flex justify-center">
          Copyright © NewsApi Ltd. All Rights Reserved
        </span>
      </div>
    </>
  );
};

export default Footer;
