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
    <footer className="py-10 max-w-7xl mx-auto px-6 text-gray-800 text-sm border-t">
      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Logo + Socials */}
        <div>
          <h2 className="text-lg md:text-3xl font-bold mb-4">Glossary</h2>
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
            <li>Fresh Fruits & Vegetables</li>
            <li>Organic Products</li>
            <li>Dairy & Bakery</li>
            <li>Home Delivery</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-4">Useful Links</h3>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
            <li>Home</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Offers</li>
            <li>FAQ</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <HiOutlineLocationMarker className="w-6 h-6 text-black shrink-0" />
              <span className="break-words">
                123 Market Street, Dhaka, Bangladesh
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <MdOutlineEmail className="w-6 h-6 text-black shrink-0" />
              <span className="break-words">support@freshgrocer.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <LuPhoneCall className="w-6 h-6 text-black shrink-0" />
              <span>+880 1234 567890</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 flex flex-col md:flex-row border-t justify-between items-center text-gray-500 pt-6 max-w-7xl mx-auto">
        <p className="mb-4 md:mb-0">© FreshGrocer. All Rights Reserved</p>
        <p>Website by IH Adventure And Creative</p>
      </div>
    </footer>
  );
}

export default Footer;
