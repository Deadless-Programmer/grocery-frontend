import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="py-10 max-w-7xl mx-auto px-6 text-gray-800 text-sm ">
      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Logo + Socials */}
        <div>
          <h2 className="text-lg md:text-3xl font-bold mb-4">Business Logo</h2>
          <div className="flex space-x-4 text-xl">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>Plumbing</li>
            <li>Drainage</li>
            <li>Bathrooms</li>
            <li>Commercial</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-4">Useful Links</h3>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
            <li>Contact Us</li>
            <li>Updates</li>
            <li>About Us</li>
            <li>Rates</li>
            <li>Customer Services</li>
            <li>Updates</li>
            <li>Locations</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <HiOutlineLocationMarker className="w-6 h-6 text-black shrink-0" />
              <span className="break-words">1 Sail Street, London, SE11 6NQ</span>
            </li>
            <li className="flex items-center space-x-3">
              <MdOutlineEmail className="w-6 h-6 text-black shrink-0" />
              <span className="break-words">enquiries@PlumbingPros.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <LuPhoneCall className="w-6 h-6 text-black shrink-0" />
              <span>020 4527 6474</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 pt-6  max-w-7xl mx-auto">
        <p className="mb-4 md:mb-0">© Plumbing Pros. All Rights Reserved</p>
        <p>Website by IH Adventure And Creative</p>
      </div>
    </footer>
  );
}

export default Footer;
