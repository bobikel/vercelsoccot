"use client";

import Link from "next/link";
import { FaBeer, FaChevronRight, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt, FaRegEnvelope, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer style-2 text-white text-[15px]" id="contact"  >
      <div className=" py-[60px] ">
        <div className=" px-6 lg:px-16 md:px-10 ">
          <div className="grid md:grid-cols-4 grid-cols-1 gap-y-10">

            <div className="widget widget_about">
            </div>

            <div className="widget widget_services">
              <h5 className="footer-title">Pr Bahebeck</h5>
              <div className="widget widget_getintuch">
                <ul className="grid gap-y-4"  >
                  <li className="flex items-center"> <div className='icon flex-center'> <FaPhoneAlt /></div><span>+237 699 00 02 98</span></li>
                  <li className="flex items-center "><div className='icon flex-center'> <FaEnvelope /></div><span>jbayebeck@yahoo.fr
                    </span></li>
              </ul>
              </div>
            </div>
            <div className="widget widget_services">
              <h5 className="footer-title">Dr Muluem Kennedy</h5>
              <div className="widget widget_getintuch">
                <ul className="grid gap-y-4"  >
                  <li className="flex items-center"> <div className='icon flex-center'> <FaPhoneAlt /></div><span>+237 695 52 22 25</span></li>
                  <li className="flex items-center "><div className='icon flex-center'> <FaEnvelope /></div><span>kennedymuluem@yahoo.fr
                    </span></li>
              </ul>
              </div>
            </div>
            <div className="widget widget_services">
              <h5 className="footer-title">Dr Fonkoue Loic</h5>
              <div className="widget widget_getintuch">
                <ul className="grid gap-y-4"  >
                  <li className="flex items-center"> <div className='icon flex-center'> <FaPhoneAlt /></div><span>+237 699 66 67 57</span></li>
                  <li className="flex items-center "><div className='icon flex-center'> <FaEnvelope /></div><span>fonkoueloic@yahoo.fr
                    </span></li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className=" px-6 lg:px-16 md:px-10 ">
          <div className="flex justify-center items-center">
            <div className="text-white"><span className=" text-sm ">Copyright © 2023 <Link
              className='font-bold' href="https://soccot.com/" target="_blank">SOCCOT</Link>. All rights
              reserved.</span></div>

            <div className="dlab-social-icon">
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
