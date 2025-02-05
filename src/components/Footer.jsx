import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-lg font-bold mb-4 text-gray-900">SNAZZIFY</h3>
            <p className="text-gray-500">
              Your one-stop shop for trendy fashion! We offer quality clothing 
              at affordable prices. Shop with us for the latest styles and 
              best deals!
            </p>
          </div>

          {/* Quick Links */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-lg font-bold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Shop', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Shop' ? '/collection' : `/${link.toLowerCase()}`} 
                    className="text-gray-500 hover:text-gray-900 transition-all duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-lg font-bold mb-4 text-gray-900">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-gray-400" />
                <span className="text-gray-500">contact@snazzify.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-gray-400" />
                <span className="text-gray-500">(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarker className="text-gray-400" />
                <span className="text-gray-500">VIT Chennai, Kelambakkam - Vandalur Rd</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 text-center bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-bold mb-4 text-gray-900">We Accept</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {['Visa', 'Mastercard', 'PayPal', 'UPI'].map((payment) => (
              <div
                key={payment}
                className="bg-gray-50 p-3 rounded shadow-md hover:shadow-lg transition-all duration-300 text-gray-600"
              >
                {payment}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
