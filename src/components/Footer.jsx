import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaStar, FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 mt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Unnecessary animated decorative elements */}
        <div className="flex justify-center gap-4 mb-8">
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity
            }}
            className="text-blue-500 text-2xl"
          >
            ★
          </motion.div>
          <motion.div 
            animate={{ 
              rotate: [0, -360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: 0.3
            }}
            className="text-purple-500 text-2xl"
          >
            ✦
          </motion.div>
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: 0.6
            }}
            className="text-pink-500 text-2xl"
          >
            ★
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section with extra animations */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-lg font-bold mb-4 text-blue-600">💫 Metamoda 💫</h3>
            <p className="text-gray-600">
              Your one-stop shop for trendy fashion! We offer quality clothing 
              at affordable prices. Shop with us for the latest styles and 
              best deals! 🛍️✨
            </p>
          </motion.div>

          {/* Quick Links with hover effects */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-lg font-bold mb-4 text-purple-600">🔗 Quick Links 🔗</h3>
            <ul className="space-y-2">
              {['Home', 'Shop', 'About', 'Contact'].map((link, index) => (
                <motion.li 
                  key={link}
                  whileHover={{ scale: 1.1, x: 10 }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={link === 'Shop' ? '/collection' : `/${link.toLowerCase()}`} 
                    className="text-gray-600 hover:text-blue-500 transition-all duration-300 flex items-center gap-2"
                  >
                    <FaStar className="text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info with animated icons */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-lg font-bold mb-4 text-pink-600">📞 Contact Us 📞</h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <FaEnvelope className="text-blue-500 animate-bounce" />
                <span>contact@metamoda.com</span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <FaPhone className="text-green-500 animate-pulse" />
                <span>(123) 456-7890</span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <FaMapMarker className="text-red-500 animate-bounce" />
                <span>VIT Chennai, Kelambakkam - Vandalur Rd</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Payment Methods with hover animations */}
        <motion.div 
          className="mt-8 text-center bg-white p-6 rounded-lg shadow-lg"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="font-bold mb-4 text-blue-600">💳 We Accept 💳</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {['Visa', 'Mastercard', 'PayPal', 'UPI'].map((payment, index) => (
              <motion.div
                key={payment}
                className="bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded shadow-md"
                whileHover={{ scale: 1.1, rotate: 5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {payment}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Footer
