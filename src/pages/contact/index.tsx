import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import {FaMapMarkerAlt} from "react-icons/fa"
import { BsWhatsapp, BsInstagram, BsLinkedin } from 'react-icons/bs';

const ContactPage = () => {
  return (
    <div className="w-full min-h-20 bg-primary pb-20 lg:min-h-screen lg:pb-0 lg:pt-10">
      <div className="w-full flex flex-col items-center px-4 text-white">
        <h1 className="text-2xl font-bold lg:text-4xl">Contact</h1>
        <p className="w-1/2 text-center mt-4">Any question or remarks? Just write us a message!</p>
        <div className="w-full flex flex-col lg:flex-row lg:gap-x-10">
          <div className="w-full bg-menuSecondary min-h-52 rounded-lg mt-10 flex flex-col items-center p-4 pb-8 gap-y-6 text-center lg:text-start lg:items-start">
            <div className='flex flex-col gap-y-4 lg:gap-y-0'>
              <h1 className="text-2xl font-semibold">Contact Information</h1>
              <p>Say something to start a live chat!</p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-4 lg:mt-4">
              <FiPhoneCall className="text-4xl lg:text-3xl" />
              <p>088298813114</p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-4">
              <AiOutlineMail className="text-4xl lg:text-3xl" />
              <p>thobazainul@gmail.com</p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-4">
              <FaMapMarkerAlt className="text-4xl lg:text-3xl" />
              <p className="w-2/3">Jl Kp. Babakan Kel. Telajung Kec. Cikarang Barat, Jawa Barat</p>
            </div>
            <div className="w-full flex items-center justify-center gap-x-6 mt-4 lg:justify-start lg:mt-8">
              <BsLinkedin className="text-4xl hover:shadow-lg hover:scale-105 transition duration-300 cursor-pointer lg:text-3xl" />
              <BsWhatsapp className="text-4xl hover:shadow-lg hover:scale-105 transition duration-300 cursor-pointer lg:text-3xl" />
              <BsInstagram className="text-4xl hover:shadow-lg hover:scale-105 transition duration-300 cursor-pointer lg:text-3xl" />
            </div>
          </div>
          <form className="w-full px-4 mt-16 flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-2 w-full">
              <label>Name</label>
              <input className="bg-transparent border-b outline-none" />
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <label>Email</label>
              <input className="bg-transparent border-b outline-none" />
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <label>Phone Number</label>
              <input className="bg-transparent border-b outline-none" />
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <label>Message</label>
              <input className="bg-transparent border-b outline-none" />
            </div>
            <button className="bg-menuSecondary h-14 rounded-lg hover:bg-menuPrimary transition lg:w-1/3">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
